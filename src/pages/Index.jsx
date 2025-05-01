
import React, { useState, useEffect, useRef, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SmoothScrollContext } from '../components/SmoothScrollProvider';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServicesSection from '../components/ServicesSection';
import { Mail, ArrowRight } from "lucide-react";

const Index = () => {
  const [currentProject, setCurrentProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const aboutSectionRef = useRef(null);
  const aboutTextRef = useRef(null);
  const aboutImageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
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
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
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
        <div className="text-lg font-display font-medium tracking-wide">Portfolio</div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-10">
            <li><Button variant="link" onClick={() => scrollTo('#work')} className="text-white hover:text-white/80 font-sans font-medium">WORK</Button></li>
            <li><Button variant="link" onClick={() => scrollTo('#about')} className="text-white hover:text-white/80 font-sans font-medium">ABOUT</Button></li>
            <li><Button variant="link" onClick={() => scrollTo('#services')} className="text-white hover:text-white/80 font-sans font-medium">SERVICES</Button></li>
            <li><Button variant="link" onClick={() => scrollTo('#testimonials')} className="text-white hover:text-white/80 font-sans font-medium">TESTIMONIALS</Button></li>
            <li><Button variant="link" onClick={() => scrollTo('#contact')} className="text-white hover:text-white/80 font-sans font-medium">CONNECT</Button></li>
          </ul>
        </nav>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 pt-0 pb-20">
        {/* Hero Section - Updated Style */}
        <section className="h-screen relative overflow-hidden flex items-center">
          {/* Black to orange gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#FF4500] opacity-90 z-0"></div>
          
          <div className="container mx-auto px-8 z-10 relative">
            {/* Name and Tagline */}
            <div className="max-w-4xl">
              <motion.h1 
                className="text-7xl md:text-8xl font-display font-bold leading-none tracking-tight mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                CHARLIE<br/>OSBORNE
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <p className="text-2xl md:text-3xl font-sans font-light leading-tight mb-8 max-w-2xl">
                  Delivering <span className="font-medium">premium editing services</span> for clients who demand exceptional quality and visual perfection.
                </p>
              </motion.div>
              
              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <a 
                  href="mailto:vivek.perspectivee@gmail.com" 
                  className="group inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  <span className="font-medium">Contact Me</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
              
              {/* Bottom details */}
              <div className="flex space-x-16 mt-12 text-sm md:text-base opacity-70 font-sans">
                <span>©2023</span>
                <span>FREELANCE EDITOR</span>
                <span>PREMIUM QUALITY</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Glass effect transition element */}
        <div className="relative h-40 md:h-60 mb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF4500]/50 via-transparent to-transparent z-10" />
          <div className="absolute inset-0 backdrop-blur-[10px] bg-black/30 rounded-t-[40px] transform translate-y-1/3 z-0" />
        </div>
        
        {/* Project List */}
        <section id="work" className="mb-32 px-8">
          <h2 className="text-2xl mb-10 opacity-50 font-display tracking-wide">Selected Work</h2>
          
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
                  <h3 className="text-3xl md:text-4xl font-display font-medium">{project.title}</h3>
                </div>
                <div className="flex space-x-12 mt-4 md:mt-0">
                  <span className="text-zinc-400 font-sans">{project.category}</span>
                  <span className="text-zinc-400 font-sans">{project.year}</span>
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
        
        {/* ServicesSection Component */}
        <ServicesSection />
        
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
              className="text-7xl md:text-9xl font-display font-bold text-center opacity-90"
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
                  <p className="text-2xl leading-relaxed font-sans">
                    I am a freelance editor with over 8 years of experience creating compelling visual content for luxury brands and premium clients worldwide.
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
                    <p className="text-xl leading-relaxed font-sans">
                      My work focuses on high-end editing with meticulous attention to detail, creating premium visual experiences that elevate brands.
                    </p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm bg-black/20 border-zinc-800">
                  <CardContent className="p-6">
                    <p className="text-xl leading-relaxed font-sans">
                      Each project receives personalized care and creative direction to ensure exceptional results that exceed client expectations.
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
                    <p className="text-xl leading-relaxed font-sans">
                      Specializing in luxury commercials, high-end brand films, and premium product showcases, I deliver sophisticated edits that resonate with discerning audiences.
                    </p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm bg-black/20 border-zinc-800">
                  <CardContent className="p-6">
                    <p className="text-xl leading-relaxed font-sans">
                      My workflow combines technical mastery with artistic vision to craft polished, elegant edits that tell compelling brand stories.
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
              <h2 className="text-2xl mb-10 opacity-70 font-display tracking-wide">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg opacity-50 mb-3 font-sans">Email</h3>
                  <a href="mailto:vivek.perspectivee@gmail.com" className="text-xl hover:underline font-display">vivek.perspectivee@gmail.com</a>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg opacity-50 mb-3 font-sans">Social</h3>
                  <div className="flex flex-col space-y-3">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:underline font-display">Instagram</a>
                    <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:underline font-display">Vimeo</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:underline font-display">LinkedIn</a>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      
      {/* Footer with glass effect */}
      <footer className="p-8 text-sm opacity-50 border-t border-zinc-800 backdrop-blur-sm bg-black/20 font-sans">
        <p>© 2023 Premium Editing Services. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
