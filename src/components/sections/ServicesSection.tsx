
import { Code, Database, Server, Laptop, Terminal, Pencil } from 'lucide-react';
import { SectionHeading } from "@/components/ui/section-heading";

const ServicesSection = () => {
  const services = [
    {
      title: "Full Stack Development",
      icon: Code,
      description: "End-to-end web application development using modern technologies like React, Node.js, and MongoDB.",
      price: "From $50/hour"
    },
    {
      title: "Database Design",
      icon: Database,
      description: "Efficient database architecture and implementation using MySQL, MongoDB, and other database systems.",
      price: "From $45/hour"
    },
    {
      title: "Backend Development",
      icon: Server,
      description: "Robust server-side solutions with Node.js, Python, and related technologies for scalable applications.",
      price: "From $55/hour"
    },
    {
      title: "Frontend Development",
      icon: Laptop,
      description: "Creating responsive and interactive user interfaces using React, JavaScript, HTML, and modern CSS.",
      price: "From $45/hour"
    },
    {
      title: "API Development",
      icon: Terminal,
      description: "Design and implementation of RESTful APIs and microservices architecture.",
      price: "From $50/hour"
    },
    {
      title: "UI/UX Design",
      icon: Pencil,
      description: "Creating user-friendly interfaces using Adobe Photoshop, Canva, and other design tools.",
      price: "From $40/hour"
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Services"
          highlight="Offered"
          description="Professional software development services tailored to your specific needs. From full-stack development to UI/UX design, I bring your digital vision to life."
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
              <h3 className="text-2xl font-bold mb-2">Need a custom solution?</h3>
              <p className="text-white/80">
                Contact me to discuss your project requirements and get a personalized quote.
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
