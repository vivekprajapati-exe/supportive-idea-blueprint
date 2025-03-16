
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
  
  const services = [
    {
      id: "01",
      title: "STRATEGY",
      description: "Clear, actionable plans to align business vision with long-term goals and measurable success."
    },
    {
      id: "02",
      title: "BRAND IDENTITY",
      description: "Memorable designs that capture the essence of your brand and connect with your audience."
    },
    {
      id: "03",
      title: "WEB DESIGN",
      description: "Visually stunning, intuitive interfaces that create exceptional user experiences."
    },
    {
      id: "04",
      title: "WEB DEVELOPMENT",
      description: "Robust, scalable websites built with cutting-edge technologies for optimal performance."
    },
    {
      id: "05",
      title: "WEB APPS",
      description: "Custom web applications designed to streamline processes and enhance productivity."
    }
  ];
  
  return (
    <section id="services" className="min-h-screen bg-black text-white py-20 relative z-20">
      {/* Giant "services" text */}
      <div className="overflow-hidden">
        <motion.h2 
          className="text-[25vw] font-bold leading-none tracking-tighter text-white"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          services
        </motion.h2>
      </div>
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 border-t border-zinc-800 mt-4">
        {/* Column Headers */}
        <div className="hidden md:grid md:grid-cols-5 w-full">
          {services.map(service => (
            <div key={`header-${service.id}`} className="py-3 px-4 text-xs font-medium">
              {service.title}
            </div>
          ))}
        </div>
        
        {/* Service Items with descriptions */}
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="border-b border-zinc-800 py-10 px-4 md:py-20 relative group"
            onMouseEnter={() => setHoveredService(index)}
            onMouseLeave={() => setHoveredService(null)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="md:hidden text-sm font-medium mb-2">{service.title}</div>
            <div className="flex items-start">
              <span className="text-zinc-500 text-sm mr-4">{service.id}</span>
              <div>
                <h3 className="text-2xl font-light mb-3 opacity-70">{service.title}</h3>
                <p className={`text-sm opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ${hoveredService === index ? 'opacity-100' : ''}`}>
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
