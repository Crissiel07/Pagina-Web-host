"use client";

import { useEffect, useState } from "react";
import { TextParticles } from "./text-particles";

export function ResponsiveHero() {
  const [isMobile, setIsMobile] = useState(true);
  
  useEffect(() => {
    // Detectar si estamos en móvil o desktop
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Comprobar al inicio
    checkDevice();
    
    // Comprobar al cambiar el tamaño de la ventana
    window.addEventListener('resize', checkDevice);
    
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);
  
  return (
    <>
      {/* Partículas solo visibles en desktop */}
      {!isMobile && (
        <TextParticles text="ProtoVex" color="#f97316" secondColor="#ffffff" />
      )}
    </>
  );
}

export function MobileLogo() {
  return (
    <div className="w-full flex justify-center mt-8 mb-4">
      <img 
        src="/img/Logodark.png" 
        alt="ProtoVex Logo" 
        className="w-3/4 max-w-[200px] h-auto object-contain"
      />
    </div>
  );
}
