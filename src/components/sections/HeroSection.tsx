
import { Play } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-editor-dark">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
        >
          <source 
            src="https://static.videezy.com/system/resources/previews/000/047/745/original/alb4k0009.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 relative text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 animate-fade-in">
            Crafting Stories Through Editing
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Video Editor • Colorist • Motion Designer
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Dialog>
              <DialogTrigger asChild>
                <button 
                  className="flex items-center bg-editor-red hover:bg-editor-red/90 text-white font-bold py-3 px-6 rounded-md transition-all group"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <Play className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Watch Showreel
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-[90vw] h-[80vh] p-0 bg-transparent border-none shadow-none">
                <div className="relative w-full h-full pt-[56.25%]">
                  {isVideoPlaying && (
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="Showreel"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </DialogContent>
            </Dialog>

            <a 
              href="/#portfolio" 
              className="flex items-center bg-transparent text-white border border-white/30 hover:border-white font-bold py-3 px-6 rounded-md transition-all hover:bg-white/10"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* Scrolldown Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
