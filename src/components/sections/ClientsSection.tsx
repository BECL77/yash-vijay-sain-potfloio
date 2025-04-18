
import { SectionHeading } from "@/components/ui/section-heading";

const ClientsSection = () => {
  // Mock client logos - in a real project, these would be actual client logo images
  const clients = [
    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' },
    { name: 'Sony Pictures', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Sony_Pictures_Television_logo.svg' },
    { name: 'Warner Bros', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Warner_Bros_logo.svg' },
    { name: 'BBC', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/52/BBC.svg' },
    { name: 'YouTube', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' },
    { name: 'National Geographic', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Natgeologo.svg' },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Trusted by"
          highlight="Amazing Clients"
          className="mb-10"
        />
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="w-28 md:w-36 h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
