"use client";

import { useEffect, useRef, useState } from "react";

const technologies = [
  { name: "JavaScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10" loading="lazy" draggable="false" />, color: "from-yellow-400 to-yellow-600" },
  { name: "TypeScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-10 h-10" loading="lazy" draggable="false" />, color: "from-blue-400 to-blue-600" },
  { name: "React", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10" loading="lazy" draggable="false" />, color: "from-cyan-400 to-cyan-600" },
  { name: "Next.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-10 h-10" loading="lazy" draggable="false" />, color: "from-gray-700 to-gray-900" },
  { name: "Node.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10" loading="lazy" draggable="false" />, color: "from-green-400 to-green-600" },
  { name: "PHP", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-10 h-10" loading="lazy" draggable="false" />, color: "from-purple-400 to-purple-600" },
  { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-10 h-10" loading="lazy" draggable="false" />, color: "from-blue-500 to-yellow-500" },
  { name: "MySQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-10 h-10" loading="lazy" draggable="false" />, color: "from-orange-400 to-orange-600" },
  { name: "MongoDB", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-10 h-10" loading="lazy" draggable="false" />, color: "from-green-500 to-green-700" },
  { name: "CSS", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-10 h-10" loading="lazy" draggable="false" />, color: "from-blue-400 to-purple-500" },
  { name: "HTML", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-10 h-10" loading="lazy" draggable="false" />, color: "from-orange-500 to-red-500" },
  { name: "Express", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="w-10 h-10" loading="lazy" draggable="false" />, color: "from-gray-600 to-gray-800" },
];

export function TechCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const animationRef = useRef<number>();
  const touchStartX = useRef<number>(0);
  const touchStartScrollLeft = useRef<number>(0);
  const timeoutRef = useRef<number>();
  const touchMoveThreshold = 5; // Pixels threshold to consider a drag vs tap

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!isPaused && !isUserInteracting) {
        scrollContainer.scrollLeft += 1;
        
        // Reset when we've scrolled through half the content (since we duplicated it)
        const maxScroll = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        }
      }
       
      animationRef.current = window.requestAnimationFrame(scroll);
    };

    animationRef.current = window.requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [isPaused, isUserInteracting]);

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartX.current = touch.clientX;
    touchStartScrollLeft.current = scrollRef.current?.scrollLeft || 0;
    setIsUserInteracting(true);
    setIsDragging(false); // Reset drag state on touch start
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    
    const touch = e.touches[0];
    const deltaX = touchStartX.current - touch.clientX;
    
    // Only set dragging if moved more than threshold
    if (Math.abs(deltaX) > touchMoveThreshold && !isDragging) {
      setIsDragging(true);
    }
    
    scrollRef.current.scrollLeft = touchStartScrollLeft.current + deltaX;
  };

  const handleTouchEnd = () => {
    // Resume auto-scroll after a brief delay
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    
    // Reset dragging state
    setIsDragging(false);
    
    timeoutRef.current = window.setTimeout(() => {
      setIsUserInteracting(false);
    }, 2000);
  };

  return (
    <section className="py-20 relative z-10 overflow-hidden bg-gradient-to-b from-zinc-900/50 to-transparent">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200">
              Tecnologías que Dominamos
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Utilizamos las mejores herramientas y frameworks para crear soluciones robustas y escalables
          </p>
        </div>

        <div
          ref={scrollRef}
          className={`flex gap-6 overflow-x-auto scrollbar-hide pb-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            scrollBehavior: 'auto',
            WebkitOverflowScrolling: 'touch',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          {/* Duplicamos las tecnologías para crear el efecto infinito */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 group"
            >
              <div className="relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 min-w-[200px]">
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${tech.color}`}>
                </div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300">
                    {tech.name}
                  </h3>
                </div>

                {/* Subtle particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="absolute top-2 right-2 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-3 left-3 w-1 h-1 bg-amber-400 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-1/2 right-4 w-0.5 h-0.5 bg-orange-300 rounded-full animate-pulse delay-700"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Indicador visual de scroll en móviles */}
        <div className="mt-6 flex justify-center items-center">
          <div className="flex gap-1 items-center text-zinc-500 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>Desliza para ver más</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
