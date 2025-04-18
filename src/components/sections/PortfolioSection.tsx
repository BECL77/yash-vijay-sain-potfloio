
import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeading } from "@/components/ui/section-heading";

interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  client: string;
  description: string;
}

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Urban Lifestyle Commercial",
      category: "commercial",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      client: "Nike",
      description: "A dynamic commercial showcasing urban lifestyle and fashion with fast-paced editing and vibrant color grading."
    },
    {
      id: 2,
      title: "Mountain Documentary",
      category: "documentary",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      client: "National Geographic",
      description: "An immersive documentary about mountain climbers with cinematic shots and emotive editing that tells their compelling story."
    },
    {
      id: 3,
      title: "Wedding Film",
      category: "wedding",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      client: "Private Client",
      description: "A heartfelt wedding film with emotional storytelling and beautiful color treatment capturing the couple's special day."
    },
    {
      id: 4,
      title: "Music Video - 'Electric Dreams'",
      category: "music",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      client: "Universal Music",
      description: "A visually striking music video with synchronized cuts, creative transitions, and experimental visual effects."
    },
    {
      id: 5,
      title: "Corporate Brand Story",
      category: "commercial",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      client: "Google",
      description: "A compelling brand story with clean editing, polished interviews, and professional motion graphics."
    },
    {
      id: 6,
      title: "Travel Vlog Series",
      category: "documentary",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      client: "Travel Channel",
      description: "A series of vibrant travel vlogs with energetic editing pace, creative transitions, and engaging storytelling."
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Featured"
          highlight="Projects"
          description="A selection of my professional video editing work across various genres and clients. Each project showcases different techniques and storytelling approaches."
        />
        
        {/* Portfolio Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/50">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="documentary">Documentary</TabsTrigger>
              <TabsTrigger value="music">Music Videos</TabsTrigger>
              <TabsTrigger value="wedding">Wedding</TabsTrigger>
            </TabsList>
          </div>
          
          {/* All Projects */}
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </TabsContent>
          
          {/* Filtered Categories */}
          {['commercial', 'documentary', 'music', 'wedding'].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.category === category)
                  .map((project) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project}
                      onClick={() => setSelectedProject(project)}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Project Details Dialog */}
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-4xl w-[90vw]">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={selectedProject.videoUrl}
                  title={selectedProject.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold">{selectedProject.title}</h3>
                <p className="text-sm text-muted-foreground">Client: {selectedProject.client}</p>
                <p className="mt-2">{selectedProject.description}</p>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
  <Dialog>
    <DialogTrigger asChild>
      <div 
        className="group relative cursor-pointer rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl"
        onClick={onClick}
      >
        {/* Thumbnail */}
        <div className="aspect-video w-full">
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Overlay */}
        <div className="video-card-overlay">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-4">
            <div className="video-play-button">
              <Play className="h-6 w-6" />
            </div>
            <div className="text-center">
              <h3 className="text-white font-bold text-lg">{project.title}</h3>
              <p className="text-white/80 text-sm capitalize">
                {project.category} • {project.client}
              </p>
            </div>
          </div>
        </div>
      </div>
    </DialogTrigger>
  </Dialog>
);

export default PortfolioSection;
