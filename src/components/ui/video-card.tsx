
import { useState } from 'react';
import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  client?: string;
}

export function VideoCard({ title, thumbnail, videoUrl, category, client }: VideoCardProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <Dialog onOpenChange={(open) => setIsVideoPlaying(open)}>
      <DialogTrigger asChild>
        <div className="group cursor-pointer relative rounded-lg overflow-hidden">
          {/* Thumbnail */}
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src={thumbnail} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div className="video-play-button mb-4">
                <Play className="h-6 w-6" />
              </div>
              <div className="text-center">
                <h3 className="text-white font-bold text-lg">{title}</h3>
                <p className="text-white/80 text-sm mt-1">
                  {category} {client && `• ${client}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl w-[90vw] h-[80vh] p-0 bg-transparent border-none shadow-none">
        <div className="relative w-full h-full pt-[56.25%]">
          {isVideoPlaying && (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
