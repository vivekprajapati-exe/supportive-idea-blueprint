
import { useState, useEffect, useRef, useContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LocomotiveScrollProvider, LocomotiveScrollContext } from '../components/LocomotiveScrollProvider';

const Index = () => {
  const [currentProject, setCurrentProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // For the fixed elements in about section
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

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.075,
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div ref={containerRef} data-scroll-container className="min-h-screen bg-black text-white font-light flex flex-col">
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
              <li><a href="#work" className="hover:opacity-50 transition-opacity duration-300 tracking-wider">WORK</a></li>
              <li><a href="#about" className="hover:opacity-50 transition-opacity duration-300 tracking-wider">ABOUT</a></li>
              <li><a href="#contact" className="hover:opacity-50 transition-opacity duration-300 tracking-wider">SERVICES</a></li>
              <li><a href="#contact" className="hover:opacity-50 transition-opacity duration-300 tracking-wider">TESTIMONIALS</a></li>
              <li><a href="#contact" className="hover:opacity-50 transition-opacity duration-300 tracking-wider">CONNECT</a></li>
            </ul>
          </nav>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 pt-0 pb-20" data-scroll-section>
          {/* Hero Section - New Style */}
          <section className="h-screen relative overflow-hidden" data-scroll data-scroll-speed="0.5">
            {/* Black to orange gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#FF4500] opacity-90 z-0"></div>
            
            {/* Big Name/Logo */}
            <div className="absolute top-1/4 left-0 w-full z-10">
              <h1 className="text-[15vw] font-bold leading-none tracking-tighter text-center">
                CHARLIE<br/>OSBORNE
              </h1>
            </div>
            
            {/* Bottom tagline */}
            <div className="absolute bottom-36 left-0 w-full px-8 md:px-16 z-10" data-scroll data-scroll-speed="1">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-light leading-tight">
                  Crafting Digital <span className="italic">Designs</span> that<br/>
                  Elevate SaaS & AI Innovators
                </h2>
                <div className="flex space-x-16 mt-4 text-sm md:text-base opacity-80">
                  <span>©2023</span>
                  <span>BASED IN UK</span>
                  <span>DESIGNER</span>
                </div>
              </div>
            </div>
          </section>
          
          {/* Glass effect transition element */}
          <div className="relative h-40 md:h-60 mb-16" data-scroll data-scroll-speed="0.5">
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF4500]/50 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 backdrop-blur-[10px] bg-black/30 rounded-t-[40px] transform translate-y-1/3 z-0" />
          </div>
          
          {/* Project List */}
          <section id="work" className="mb-32 px-8" data-scroll>
            <h2 className="text-2xl mb-10 opacity-50" data-scroll data-scroll-speed="0.5">Selected Work</h2>
            
            <div className="border-t border-zinc-800">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="py-8 border-b border-zinc-800 flex flex-col md:flex-row md:items-center justify-between cursor-pointer"
                  onMouseEnter={() => setCurrentProject(index)}
                  onMouseLeave={() => setCurrentProject(null)}
                  whileHover={{ x: 20 }}
                  transition={{ type: "tween", duration: 0.2 }}
                  data-scroll
                  data-scroll-speed="0.2"
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
          <div className="relative h-40 md:h-60 mb-16" data-scroll data-scroll-speed="0.5">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent z-10" />
            <div className="absolute inset-0 backdrop-blur-[10px] bg-black/30 rounded-t-[40px] transform translate-y-1/3 z-0" />
          </div>
          
          {/* About Section with Animations */}
          <section 
            id="about" 
            ref={aboutSectionRef} 
            className="relative z-20 mb-32 min-h-[150vh]" 
            data-scroll-section
          >
            {/* Big centered about text that gets fixed */}
            <div className="h-screen flex items-center justify-center sticky top-0" data-scroll data-scroll-sticky data-scroll-target="#about">
              <h2 
                ref={aboutTextRef}
                className="text-7xl md:text-9xl font-light text-center opacity-90" 
                data-scroll
                data-scroll-speed="1"
              >
                ABOUT ME
              </h2>
            </div>

            {/* Content that scrolls with image and text transitions */}
            <div className="py-32 max-w-4xl mx-auto px-8">
              {/* First text block before image appears */}
              <div className="mb-32" data-scroll data-scroll-speed="0.5">
                <p className="text-2xl leading-relaxed backdrop-blur-sm p-4 rounded-lg bg-black/20" data-scroll data-scroll-speed="1">
                  I am a video editor and motion designer with over 8 years of experience creating compelling visual content for brands and agencies worldwide.
                </p>
              </div>
              
              {/* Image and text side by side */}
              <div 
                className="flex flex-col md:flex-row items-center gap-12 mb-32" 
                ref={aboutImageRef}
                data-scroll 
                data-scroll-speed="0.75"
              >
                <motion.div 
                  className="w-full md:w-1/2 h-[400px] rounded-lg overflow-hidden sticky top-32" 
                  data-scroll 
                  data-scroll-sticky 
                  data-scroll-target="#about"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=3538&auto=format&fit=crop" 
                    alt="Editor at work" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="w-full md:w-1/2" data-scroll data-scroll-speed="1">
                  <p className="text-xl leading-relaxed backdrop-blur-sm p-4 rounded-lg bg-black/20 mb-8">
                    My work focuses on storytelling through creative cutting, dynamic motion design, and visual effects.
                  </p>
                  <p className="text-xl leading-relaxed backdrop-blur-sm p-4 rounded-lg bg-black/20">
                    Each project is an opportunity to create something unique that captures the essence of the brand.
                  </p>
                </div>
              </div>
              
              {/* Text after image shifts */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-12" data-scroll data-scroll-speed="1">
                <motion.div 
                  className="w-full md:w-1/2 h-[400px] rounded-lg overflow-hidden sticky top-32" 
                  data-scroll 
                  data-scroll-sticky 
                  data-scroll-target="#about"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=3546&auto=format&fit=crop" 
                    alt="Creative process" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="w-full md:w-1/2" data-scroll data-scroll-speed="1.25">
                  <p className="text-xl leading-relaxed backdrop-blur-sm p-4 rounded-lg bg-black/20 mb-8">
                    Specializing in commercials, brand films, and music videos, I bring a unique perspective to each project while maintaining the client's vision and brand identity.
                  </p>
                  <p className="text-xl leading-relaxed backdrop-blur-sm p-4 rounded-lg bg-black/20">
                    My workflow combines technical expertise with artistic vision to deliver exceptional results that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Glass effect transition element before contact */}
          <div className="relative h-40 md:h-60 mb-16" data-scroll data-scroll-speed="0.5">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent z-10" />
            <div className="absolute inset-0 backdrop-blur-[10px] bg-black/30 rounded-t-[40px] transform translate-y-1/3 z-0" />
          </div>
          
          {/* Contact Section */}
          <section id="contact" className="relative z-20 backdrop-blur-sm bg-black/40 p-8 rounded-lg mx-8" data-scroll data-scroll-speed="0.75">
            <h2 className="text-2xl mb-10 opacity-50" data-scroll data-scroll-speed="1">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              <div data-scroll data-scroll-speed="0.5">
                <h3 className="text-lg opacity-50 mb-3">Email</h3>
                <a href="mailto:hello@portfolio.com" className="text-xl hover:underline">hello@portfolio.com</a>
              </div>
              <div data-scroll data-scroll-speed="0.75">
                <h3 className="text-lg opacity-50 mb-3">Social</h3>
                <div className="flex flex-col space-y-3">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:underline">Instagram</a>
                  <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:underline">Vimeo</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:underline">LinkedIn</a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        {/* Footer with glass effect */}
        <footer className="relative p-8 text-sm opacity-50 border-t border-zinc-800 backdrop-blur-sm bg-black/20" data-scroll-section>
          <p>© 2023 Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Index;
