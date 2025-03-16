
import React from 'react';

const FixedBlurEffect = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-24 z-50 pointer-events-none">
      <div 
        className="w-full h-full bg-gradient-to-t from-black/70 to-transparent backdrop-blur-lg"
        style={{ 
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
        }}
      />
    </div>
  );
};

export default FixedBlurEffect;
