
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Play, Film, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoSlider = ({ projects }) => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef([]);
  
  // Function to handle video click
  const handleVideoClick = (index) => {
    if (activeVideo === index) {
      // Toggle play/pause of current video
      const videoElement = videoRefs.current[index];
      if (videoElement) {
        if (isPlaying) {
          videoElement.pause();
        } else {
          videoElement.play();
        }
        setIsPlaying(!isPlaying);
      }
    } else {
      // Stop previous video
      if (activeVideo !== null && videoRefs.current[activeVideo]) {
        videoRefs.current[activeVideo].pause();
      }
      
      // Set new active video
      setActiveVideo(index);
      setIsPlaying(true);
      
      // Play new video after a short delay
      setTimeout(() => {
        if (videoRefs.current[index]) {
          videoRefs.current[index].play();
        }
      }, 300);
    }
  };

  // Clean up videos on unmount
  useEffect(() => {
    return () => {
      videoRefs.current.forEach(video => {
        if (video) video.pause();
      });
    };
  }, []);

  return (
    <div className="relative">
      {/* Video Showcase */}
      <div className="mb-16">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={project.id} className="sm:basis-1/1 md:basis-3/4 lg:basis-2/3">
                <div className="relative group overflow-hidden rounded-xl">
                  {/* Video overlay with play button */}
                  <div 
                    className="relative aspect-video cursor-pointer overflow-hidden rounded-xl"
                    onClick={() => handleVideoClick(index)}
                  >
                    {/* Thumbnail image */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full object-cover transition-all duration-700 ${activeVideo === index ? 'opacity-0' : 'opacity-100'}`}
                    />
                    
                    {/* Video element */}
                    <div className={`absolute inset-0 transition-opacity duration-700 ${activeVideo === index ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="w-full h-full">
                        <iframe 
                          ref={el => videoRefs.current[index] = el}
                          src={project.videoUrl}
                          className="w-full h-full"
                          frameBorder="0" 
                          allow="autoplay; fullscreen; picture-in-picture" 
                          allowFullScreen
                          title={project.title}
                        />
                      </div>
                    </div>
                    
                    {/* Play button overlay */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeVideo === index ? 'opacity-0' : 'opacity-100 bg-black/40'}`}>
                      <div className="bg-white/10 backdrop-blur-md p-5 rounded-full border border-white/20">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Project details */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-3xl font-display font-bold mb-1 text-white">{project.title}</h3>
                    <div className="flex items-center text-sm font-sans text-white/70 space-x-4">
                      <span className="flex items-center"><Film className="mr-1 h-4 w-4" /> {project.category}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex items-center justify-end mt-6">
            <CarouselPrevious className="relative inset-0 translate-y-0 mr-2" />
            <CarouselNext className="relative inset-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
      
      {/* Call to Action */}
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <a 
          href="mailto:vivek.perspectivee@gmail.com" 
          className="group flex items-center space-x-2 bg-white/10 hover:bg-white/20 font-display text-lg px-8 py-4 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 text-white"
        >
          <span>Hire me for your next project</span>
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </motion.div>
    </div>
  );
};

export default VideoSlider;
