
import { Code, Database, Terminal, Laptop, Server, Award } from 'lucide-react';
import { SectionHeading } from "@/components/ui/section-heading";

const AboutSection = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code, value: 95 },
    { name: 'Backend Development', icon: Server, value: 90 },
    { name: 'Database Management', icon: Database, value: 85 },
    { name: 'UI/UX Design', icon: Laptop, value: 80 },
    { name: 'DevOps', icon: Terminal, value: 75 },
    { name: 'Problem Solving', icon: Award, value: 90 },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/dbae5801-5caf-4a36-9fdb-cbc10681a56b.png" 
                alt="Yash Vijay Sain - Software Engineer" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-editor-red text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold text-lg">5+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <SectionHeading
                title="About"
                highlight="Yash Vijay Sain"
                centered={false}
                className="mb-6"
              />
              
              <p className="text-lg text-gray-700">
                I'm a passionate software engineer with expertise in full-stack development. My journey in software development has allowed me to work with various technologies and create impactful solutions.
              </p>
              
              <p className="text-gray-700">
                Specializing in web development, I excel in both frontend and backend technologies. My goal is to create efficient, scalable, and user-friendly applications that solve real-world problems.
              </p>
              
              <p className="text-gray-700">
                I work with a diverse tech stack including React, Node.js, Python, C++, and various databases. I'm also proficient in design tools like Adobe Photoshop and Canva for creating engaging user interfaces.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center mb-2">
                        <skill.icon className="h-5 w-5 text-editor-red mr-2" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-editor-red rounded-full transition-all duration-1000"
                          style={{ width: `${skill.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
