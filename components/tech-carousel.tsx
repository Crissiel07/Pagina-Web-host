"use client";

import { useEffect, useRef } from "react";

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

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 30;

    const autoScroll = () => {
      scrollAmount += scrollStep;
      
      // Si llegamos al final, reiniciamos
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(autoScroll, scrollInterval);

    // Pausar en hover
    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      clearInterval(interval);
      setInterval(autoScroll, scrollInterval);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(interval);
      scrollContainer?.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-20 relative z-10 overflow-hidden bg-gradient-to-b from-zinc-900/50 to-transparent">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-600">
              Tecnologías que Dominamos
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Utilizamos las tecnologías más modernas y confiables para crear soluciones robustas y escalables
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-hidden whitespace-nowrap"
          style={{ 
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

                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicador de scroll */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
            <span>Deslizamiento automático</span>
          </div>
        </div>
      </div>
    </section>
  );
}
