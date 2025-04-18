
import { Film, Paintbrush, Music, Share, Sparkles, Volume2 } from 'lucide-react';
import { SectionHeading } from "@/components/ui/section-heading";

const ServicesSection = () => {
  const services = [
    {
      title: "Video Editing",
      icon: Film,
      description: "Professional editing for commercials, documentaries, interviews, and narrative content with smooth transitions and perfect pacing.",
      price: "$50-100/hour"
    },
    {
      title: "Color Grading",
      icon: Paintbrush,
      description: "Advanced color correction and grading to enhance mood, create visual consistency, and achieve the perfect cinematic look.",
      price: "$75-120/hour"
    },
    {
      title: "Motion Graphics",
      icon: Sparkles,
      description: "Eye-catching motion graphics, titles, and visual effects to elevate your video content with dynamic elements.",
      price: "$85-130/hour"
    },
    {
      title: "Sound Design",
      icon: Volume2,
      description: "Expert audio mixing, sound effects, and audio restoration to ensure your video sounds as good as it looks.",
      price: "$60-90/hour"
    },
    {
      title: "Social Media Content",
      icon: Share,
      description: "Specialized editing for social media platforms with optimized formats, attention-grabbing hooks, and platform-specific requirements.",
      price: "$45-85/hour"
    },
    {
      title: "Music Video Editing",
      icon: Music,
      description: "Rhythm-driven editing for music videos with creative transitions and visual storytelling that complements the music.",
      price: "$70-110/hour"
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Services"
          highlight="Offered"
          description="Professional video editing services tailored to your specific needs. From basic cuts to complex visual storytelling, I bring your vision to life."
        />
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 bg-editor-dark text-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need a custom package?</h3>
              <p className="text-white/80">
                Contact me to discuss your specific project requirements and get a personalized quote.
              </p>
            </div>
            <a 
              href="/#contact" 
              className="px-6 py-3 bg-editor-red hover:bg-editor-red/90 rounded-md text-white font-medium transition-colors whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: {
    title: string;
    icon: React.ElementType;
    description: string;
    price: string;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { title, icon: Icon, description, price } = service;
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="rounded-full bg-editor-red/10 p-3 w-fit">
        <Icon className="h-6 w-6 text-editor-red" />
      </div>
      
      <h3 className="text-xl font-bold mt-4 mb-2">{title}</h3>
      
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      
      <div className="mt-auto">
        <div className="text-editor-red font-medium">{price}</div>
      </div>
    </div>
  );
};

export default ServicesSection;
