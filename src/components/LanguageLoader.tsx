
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  { text: "Hello", language: "English" },
  { text: "Bonjour", language: "French" },
  { text: "Hola", language: "Spanish" },
  { text: "Ciao", language: "Italian" },
  { text: "Konnichiwa", language: "Japanese" },
  { text: "Ni Hao", language: "Chinese" },
  { text: "Annyeong", language: "Korean" },
  { text: "Namaste", language: "Hindi" },
  { text: "Guten Tag", language: "German" },
  { text: "Olá", language: "Portuguese" },
];

interface LanguageLoaderProps {
  onFinished: () => void;
}

const LanguageLoader: React.FC<LanguageLoaderProps> = ({ onFinished }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < greetings.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(onFinished, 500);
        }, 1000);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [currentIndex, onFinished]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[100]"
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h1 className="text-6xl text-white font-light mb-2">{greetings[currentIndex].text}</h1>
            <p className="text-xl text-white/60">{greetings[currentIndex].language}</p>
          </motion.div>
          
          <div className="absolute bottom-16 left-0 w-full">
            <div className="relative w-full max-w-xs mx-auto h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-white rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentIndex + 1) / greetings.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LanguageLoader;
