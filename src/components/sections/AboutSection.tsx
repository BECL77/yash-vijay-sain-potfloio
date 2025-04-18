
import { Camera, Film, Play, Award, Edit, Monitor } from 'lucide-react';
import { SectionHeading } from "@/components/ui/section-heading";

const AboutSection = () => {
  const skills = [
    { name: 'Video Editing', icon: Edit, value: 95 },
    { name: 'Color Grading', icon: Monitor, value: 90 },
    { name: 'Motion Graphics', icon: Play, value: 85 },
    { name: 'Sound Design', icon: Film, value: 80 },
    { name: 'Cinematography', icon: Camera, value: 75 },
    { name: 'Creative Direction', icon: Award, value: 85 },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Ajay Saini Video Editor" 
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
                highlight="Ajay Saini"
                centered={false}
                className="mb-6"
              />
              
              <p className="text-lg text-gray-700">
                I'm a passionate video editor with over 5 years of professional experience crafting compelling visual stories. My journey in post-production has allowed me to work with brands, filmmakers, and content creators to bring their vision to life.
              </p>
              
              <p className="text-gray-700">
                Specializing in commercial, narrative, and documentary editing, I pride myself on attention to detail and an intuitive understanding of pacing and emotion. My goal is always to enhance the story through thoughtful editing choices that resonate with viewers.
              </p>
              
              <p className="text-gray-700">
                I work primarily with Adobe Premiere Pro, After Effects, and DaVinci Resolve, constantly honing my skills to stay at the forefront of industry trends and techniques.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-6">My Skills</h3>
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
