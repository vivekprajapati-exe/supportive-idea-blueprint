
import { useState, useEffect, useRef, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SmoothScrollProvider, SmoothScrollContext } from '../components/SmoothScrollProvider';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentProject, setCurrentProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLHeadingElement>(null);
  const aboutImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Projects data
  const projects = [
    {
      id: 1,
      title: "SONY",
      category: "Commercial",
      year: "2023",
      image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "NIKE",
      category: "Brand",
      year: "2023",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "ADIDAS",
      category: "Commercial",
      year: "2022",
      image: "https://images.unsplash.com/photo-1593121925328-369cc8459c08?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 4,
      title: "APPLE",
      category: "Product",
      year: "2022",
      image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 5,
      title: "PUMA",
      category: "Commercial",
      year: "2021",
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  const { scrollTo } = useContext(SmoothScrollContext);

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-black text-white font-light flex flex-col">
        {/* Custom cursor follower */}
        {currentProject !== null && (
          <motion.div 
            className="fixed w-[400px] h-[250px] rounded-lg overflow-hidden pointer-events-none z-50"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              x: mousePosition.x - 200, 
              y: mousePosition.y - 125
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          >
            <img 
              src={projects[currentProject].image} 
              alt={projects[currentProject].title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
        
        {/* Header */}
        <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-30">
          <div className="text-lg">Portfolio</div>
          <nav className="hidden md:flex">
            <ul className="flex space-x-10">
              <li><Button variant="link" onClick={() => scrollTo('#work')} className="text-white hover:text-white/80">WORK</Button></li>
              <li><Button variant="link" onClick={() => scrollTo('#about')} className="text-white hover:text-white/80">ABOUT</Button></li>
              <li><Button variant="link" onClick={() => scrollTo('#services')} className="text-white hover:text-white/80">SERVICES</Button></li>
              <li><Button variant="link" onClick={() => scrollTo('#testimonials')} className="text-white hover:text-white/80">TESTIMONIALS</Button></li>
              <li><Button variant="link" onClick={() => scrollTo('#contact')} className="text-white hover:text-white/80">CONNECT</Button></li>
            </ul>
          </nav>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 pt-0 pb-20">
          {/* Hero Section - New Style */}
          <section className="h-screen relative overflow-hidden">
            {/* Black to orange gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#FF4500] opacity-90 z-0"></div>
            
            {/* Big Name/Logo */}
            <div className="absolute top-1/4 left-0 w-full z-10">
              <motion.h1 
                className="text-[15vw] font-bold leading-none tracking-tighter text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                CHARLIE<br/>OSBORNE
              </motion.h1>
            </div>
            
            {/* Bottom tagline */}
            <div className="absolute bottom-36 left-0 w-full px-8 md:px-16 z-10">
              <motion.div 
                className="max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <h2 className="text-3xl md:text-5xl font-light leading-tight">
                  Crafting Digital <span className="italic">Designs</span> that<br/>
                  Elevate SaaS & AI Innovators
                </h2>
                <div className="flex space-x-16 mt-4 text-sm md:text-base opacity-80">
                  <span>©2023</span>
                  <span>BASED IN UK</span>
                  <span>DESIGNER</span>
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* Glass effect transition element */}
          <div className="relative h-40 md:h-60 mb-16">
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF4500]/50 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 backdrop-blur-[10px] bg-black/30 rounded-t-[40px] transform translate-y-1/3 z-0" />
          </div>
          
          {/* Project List */}
          <section id="work" className="mb-32 px-8">
            <h2 className="text-2xl mb-10 opacity-50">Selected Work</h2>
            
            <div className="border-t border-zinc-800">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="py-8 border-b border-zinc-800 flex flex-col md:flex-row md:items-center justify-between cursor-pointer"
                  onMouseEnter={() => setCurrentProject(index)}
                  onMouseLeave={() => setCurrentProject(null)}
                  whileHover={{ x: 20 }}
                  transition={{ type: "tween", duration: 0.2 }}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-zinc-500 text-sm w-6">{project.id.toString().padStart(2, '0')}</span>
                    <h3 className="text-3xl md:text-4xl font-light">{project.title}</h3>
                  </div>
                  <div className="flex space-x-12 mt-4 md:mt-0">
                    <span className="text-zinc-400">{project.category}</span>
                    <span className="text-zinc-400">{project.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* Glass effect transition element between sections */}
          <div className="relative h-40 md:h-60 mb-16">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent z-10" />
            <div className="absolute inset-0 backdrop-blur-[10px] bg-black/30 rounded-t-[40px] transform translate-y-1/3 z-0" />
          </div>
          
          {/* About Section with Animations */}
          <section 
            id="about" 
            ref={aboutSectionRef} 
            className="relative z-20 mb-32 min-h-[150vh]"
          >
            {/* Big centered about text that gets fixed */}
            <div className="h-screen flex items-center justify-center sticky top-0">
              <motion.h2 
                ref={aboutTextRef}
                className="text-7xl md:text-9xl font-light text-center opacity-90"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                ABOUT ME
              </motion.h2>
            </div>

            {/* Content that scrolls with image and text transitions */}
            <div className="py-32 max-w-4xl mx-auto px-8">
              {/* First text block before image appears */}
              <motion.div 
                className="mb-32"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="backdrop-blur-sm bg-black/20 border-zinc-800">
                  <CardContent className="p-6">
                    <p className="text-2xl leading-relaxed">
                      I am a video editor and motion designer with over 8 years of experience creating compelling visual content for brands and agencies worldwide.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Image and text side by side */}
              <div 
                className="flex flex-col md:flex-row items-center gap-12 mb-32" 
                ref={aboutImageRef}
              >
                <motion.div 
                  className="w-full md:w-1/2 h-[400px] rounded-lg overflow-hidden sticky top-32"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }} 
                >
                  <img 
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=3538&auto=format&fit=crop" 
                    alt="Editor at work" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="w-full md:w-1/2"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Card className="backdrop-blur-sm bg-black/20 border-zinc-800 mb-8">
                    <CardContent className="p-6">
                      <p className="text-xl leading-relaxed">
                        My work focuses on storytelling through creative cutting, dynamic motion design, and visual effects.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="backdrop-blur-sm bg-black/20 border-zinc-800">
                    <CardContent className="p-6">
                      <p className="text-xl leading-relaxed">
                        Each project is an opportunity to create something unique that captures the essence of the brand.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
              
              {/* Text after image shifts */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <motion.div 
                  className="w-full md:w-1/2 h-[400px] rounded-lg overflow-hidden sticky top-32"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=3546&auto=format&fit=crop" 
                    alt="Creative process" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="w-full md:w-1/2"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Card className="backdrop-blur-sm bg-black/20 border-zinc-800 mb-8">
                    <CardContent className="p-6">
                      <p className="text-xl leading-relaxed">
                        Specializing in commercials, brand films, and music videos, I bring a unique perspective to each project while maintaining the client's vision and brand identity.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="backdrop-blur-sm bg-black/20 border-zinc-800">
                    <CardContent className="p-6">
                      <p className="text-xl leading-relaxed">
                        My workflow combines technical expertise with artistic vision to deliver exceptional results that exceed expectations.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Glass effect transition element before contact */}
          <div className="relative h-40 md:h-60 mb-16">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent z-10" />
            <div className="absolute inset-0 backdrop-blur-[10px] bg-black/30 rounded-t-[40px] transform translate-y-1/3 z-0" />
          </div>
          
          {/* Contact Section */}
          <section id="contact" className="relative z-20 px-8">
            <Card className="backdrop-blur-sm bg-black/40 border-zinc-800">
              <CardContent className="p-8">
                <h2 className="text-2xl mb-10 opacity-50">Contact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg opacity-50 mb-3">Email</h3>
                    <a href="mailto:hello@portfolio.com" className="text-xl hover:underline">hello@portfolio.com</a>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg opacity-50 mb-3">Social</h3>
                    <div className="flex flex-col space-y-3">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:underline">Instagram</a>
                      <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:underline">Vimeo</a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:underline">LinkedIn</a>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
        
        {/* Footer with glass effect */}
        <footer className="p-8 text-sm opacity-50 border-t border-zinc-800 backdrop-blur-sm bg-black/20">
          <p>© 2023 Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </SmoothScrollProvider>
  );
};

export default Index;
