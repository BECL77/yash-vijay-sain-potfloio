
import { LazyVideo } from '@/components/ui/lazy-video';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-editor-dark">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <LazyVideo 
          src="https://v21-kling.klingai.com/bs2/upload-ylab-stunt-sgp/kling/u4jiEETXe0VXu5cQcAt0IA/Standard_Mode_in_this_image_that_the_monitor_a.mp4"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 relative text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 animate-fade-in">
            Yash Vijay Sain
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Software Engineer • Full Stack Developer
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-white/80 max-w-xl mx-auto">
              Skills: Adobe Photoshop, Node.js, Python, C++, Canva, MongoDB, React, MySQL, JavaScript, HTML
            </div>
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
