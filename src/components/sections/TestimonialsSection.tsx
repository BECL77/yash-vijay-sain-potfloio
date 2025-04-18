
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { SectionHeading } from "@/components/ui/section-heading";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
  stars: number;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "Brand Fusion",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "Ajay's editing skills transformed our product launch video completely. His attention to detail and creative transitions took the project to another level. The final cut exceeded our expectations and resonated perfectly with our target audience.",
      stars: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Film Director",
      company: "Vision Films",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "Working with Ajay was a revelation. His technical expertise in color grading gave our short film the exact mood we were striving for. His collaborative approach and speed made the post-production process a breeze.",
      stars: 5
    },
    {
      id: 3,
      name: "Priya Patel",
      position: "Content Creator",
      company: "Digital Nomads",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      content: "Ajay helped revamp my YouTube channel with professional editing that increased my engagement by 300%. His understanding of pacing and storytelling has been instrumental in growing my subscriber base.",
      stars: 5
    },
    {
      id: 4,
      name: "David Williams",
      position: "CEO",
      company: "Startup Innovations",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      content: "The corporate video Ajay edited for us received praise from all stakeholders. His ability to turn hours of interviews into a compelling 3-minute story was impressive. Highly recommend his services!",
      stars: 4
    },
  ];
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="section-padding bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Client"
          highlight="Testimonials"
          description="Hear what my clients have to say about their experience working with me and the results we've achieved together."
        />
        
        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto px-8">
          {/* Current Testimonial */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
              {/* Image */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={`${i < testimonials[currentIndex].stars ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <blockquote className="italic mb-4 text-gray-700">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Controls */}
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-editor-red' : 'bg-gray-300'}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
