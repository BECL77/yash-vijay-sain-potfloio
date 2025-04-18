
import { useState, useEffect, useRef } from 'react';

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export function LazyVideo({ src, poster, className = '' }: LazyVideoProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(e => console.error("Video play failed:", e));
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <video 
      ref={videoRef}
      className={className}
      poster={poster}
      playsInline
      muted
      loop
      preload="none"
    >
      {isIntersecting && <source src={src} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
}
