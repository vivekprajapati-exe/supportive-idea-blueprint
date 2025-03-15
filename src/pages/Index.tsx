
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Play, Video, Image, ArrowRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400"
            variants={fadeIn}
          >
            Creative Editing Portfolio
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Transforming ordinary footage into extraordinary visual stories
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8"
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-8 w-8 rotate-90 text-white/60" />
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my best editing projects across various styles and mediums
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto mb-12 bg-slate-800/50 backdrop-blur-sm">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="video">Video</TabsTrigger>
              <TabsTrigger value="photo">Photo</TabsTrigger>
              <TabsTrigger value="motion">Motion</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-8">
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                      <motion.div 
                        whileHover={{ y: -5 }}
                        className="p-2"
                      >
                        <Card className="overflow-hidden border-0 bg-slate-800/30 backdrop-blur-sm rounded-xl hover:shadow-lg hover:shadow-purple-500/10 transition duration-300">
                          <div className="relative aspect-video overflow-hidden rounded-t-lg">
                            <img 
                              src={`https://source.unsplash.com/random/600x400?film,edit&sig=${item}`} 
                              alt={`Project ${item}`} 
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
                              <Button size="sm" variant="secondary" className="gap-1 rounded-full">
                                <Play className="h-4 w-4" /> 
                                Watch
                              </Button>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-medium text-lg">Cinematic Edit {item}</h3>
                            <p className="text-sm text-gray-400">Client project • 2023</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4 gap-2">
                  <CarouselPrevious className="relative static left-0 right-0 translate-y-0 bg-slate-800/50 backdrop-blur-sm hover:bg-purple-600 border-0" />
                  <CarouselNext className="relative static left-0 right-0 translate-y-0 bg-slate-800/50 backdrop-blur-sm hover:bg-purple-600 border-0" />
                </div>
              </Carousel>
            </TabsContent>
            
            <TabsContent value="video" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[1, 2, 3].map((item) => (
                  <motion.div 
                    key={item}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: item * 0.1 }}
                  >
                    <Card className="overflow-hidden border-0 bg-slate-800/30 backdrop-blur-sm rounded-xl hover:shadow-lg hover:shadow-purple-500/10 transition">
                      <div className="relative aspect-video overflow-hidden rounded-t-lg">
                        <img 
                          src={`https://source.unsplash.com/random/600x400?video,editing&sig=${item}`} 
                          alt={`Video Project ${item}`} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
                          <Button size="sm" variant="secondary" className="gap-1 rounded-full">
                            <Video className="h-4 w-4" /> 
                            View Project
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-lg">Video Edit {item}</h3>
                        <p className="text-sm text-gray-400">Client • Video Editing</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="photo">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[1, 2, 3].map((item) => (
                  <motion.div 
                    key={item}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: item * 0.1 }}
                  >
                    <Card className="overflow-hidden border-0 bg-slate-800/30 backdrop-blur-sm rounded-xl hover:shadow-lg hover:shadow-purple-500/10 transition">
                      <div className="relative aspect-square overflow-hidden rounded-t-lg">
                        <img 
                          src={`https://source.unsplash.com/random/600x600?photography,edit&sig=${item+10}`} 
                          alt={`Photo Project ${item}`} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
                          <Button size="sm" variant="secondary" className="gap-1 rounded-full">
                            <Image className="h-4 w-4" /> 
                            View Full
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-lg">Photo Edit {item}</h3>
                        <p className="text-sm text-gray-400">Client • Photo Retouching</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="motion">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {[1, 2].map((item) => (
                  <motion.div 
                    key={item}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: item * 0.1 }}
                  >
                    <Card className="overflow-hidden border-0 bg-slate-800/30 backdrop-blur-sm rounded-xl hover:shadow-lg hover:shadow-purple-500/10 transition">
                      <div className="relative aspect-video overflow-hidden rounded-t-lg">
                        <img 
                          src={`https://source.unsplash.com/random/600x400?motion,graphics&sig=${item+20}`} 
                          alt={`Motion Project ${item}`} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
                          <Button size="sm" variant="secondary" className="gap-1 rounded-full">
                            <Play className="h-4 w-4" /> 
                            Play Animation
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-lg">Motion Graphics {item}</h3>
                        <p className="text-sm text-gray-400">Client • Animation</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-center mt-16">
            <Button variant="outline" className="rounded-full border-purple-500/30 text-purple-300 hover:bg-purple-900/20">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 relative">
        <div className="absolute inset-0 bg-purple-900/20 backdrop-blur-sm rounded-3xl max-w-4xl mx-auto"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto relative z-10 bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <motion.div variants={fadeIn} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Create Something Amazing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and bring your vision to life.
            </p>
          </motion.div>
          
          <motion.div variants={fadeIn} className="flex justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8">
              Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 text-center text-gray-400">
        <p>© 2023 Creative Editor Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
