
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Index = () => {
  const [currentProject, setCurrentProject] = useState<number | null>(null);
  
  // Handle mouse movements for the cursor follower effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#work" className="hover:opacity-50 transition-opacity duration-300">Work</a></li>
            <li><a href="#about" className="hover:opacity-50 transition-opacity duration-300">About</a></li>
            <li><a href="#contact" className="hover:opacity-50 transition-opacity duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 pt-32 px-8 pb-20">
        {/* Hero Section */}
        <section className="mb-32">
          <h1 className="text-5xl md:text-7xl font-light max-w-4xl leading-tight">
            Editor & Motion Designer based in New York
          </h1>
        </section>
        
        {/* Project List */}
        <section id="work" className="mb-32">
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
        
        {/* About Section */}
        <section id="about" className="relative z-20 mb-32 max-w-3xl backdrop-blur-sm bg-black/40 p-8 rounded-lg">
          <h2 className="text-2xl mb-10 opacity-50">About</h2>
          <p className="text-lg leading-relaxed mb-8">
            I am a video editor and motion designer with over 8 years of experience creating compelling visual content for brands and agencies worldwide. My work focuses on storytelling through creative cutting, dynamic motion design, and visual effects.
          </p>
          <p className="text-lg leading-relaxed">
            Specializing in commercials, brand films, and music videos, I bring a unique perspective to each project while maintaining the client's vision and brand identity.
          </p>
        </section>
        
        {/* Glass effect transition element before contact */}
        <div className="relative h-40 md:h-60 mb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent z-10" />
          <div className="absolute inset-0 backdrop-blur-[10px] bg-black/30 rounded-t-[40px] transform translate-y-1/3 z-0" />
        </div>
        
        {/* Contact Section */}
        <section id="contact" className="relative z-20 backdrop-blur-sm bg-black/40 p-8 rounded-lg">
          <h2 className="text-2xl mb-10 opacity-50">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
            <div>
              <h3 className="text-lg opacity-50 mb-3">Email</h3>
              <a href="mailto:hello@portfolio.com" className="text-xl hover:underline">hello@portfolio.com</a>
            </div>
            <div>
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
      <footer className="relative p-8 text-sm opacity-50 border-t border-zinc-800 backdrop-blur-sm bg-black/20">
        <p>© 2023 Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
