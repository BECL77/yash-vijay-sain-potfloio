
import { useState, useEffect, useRef } from 'react';
import { Award, Clock, Film, Users } from 'lucide-react';

interface Stat {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
}

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    { icon: Film, value: 125, label: "Projects Completed" },
    { icon: Clock, value: 5, label: "Years Experience", suffix: "+" },
    { icon: Users, value: 72, label: "Happy Clients" },
    { icon: Award, value: 8, label: "Industry Awards" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-editor-red text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <StatCounter 
              key={index} 
              stat={stat} 
              animate={inView}
              delay={index * 200} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCounterProps {
  stat: Stat;
  animate: boolean;
  delay: number;
}

const StatCounter = ({ stat, animate, delay }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const { icon: Icon, value, label, suffix } = stat;
  const duration = 2000; // animation duration in ms
  
  useEffect(() => {
    if (!animate) return;
    
    let startTime: number;
    let animationFrameId: number;
    
    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(startAnimation);
      }
    };
    
    const timeout = setTimeout(() => {
      animationFrameId = requestAnimationFrame(startAnimation);
    }, delay);
    
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [animate, value, delay, duration]);

  return (
    <div className="flex flex-col items-center">
      <Icon className="h-10 w-10 mb-4" />
      <div className="text-4xl md:text-5xl font-bold mb-2">
        {animate ? count : 0}{suffix || ''}
      </div>
      <p className="text-white/80">{label}</p>
    </div>
  );
};

export default StatsSection;
