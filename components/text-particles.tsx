"use client";

import React, { useEffect, useRef } from "react";

interface TextParticlesProps {
  text?: string;
  color: string;
  secondColor?: string;
}

export const TextParticles: React.FC<TextParticlesProps> = ({ 
  text = "ProtoVex", 
  color = "#f97316", // Tailwind orange-500
  secondColor = "#ffffff" // Color blanco para "Vex"
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === 'undefined') return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Configurar el tamaño del canvas
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Crear partículas
    interface Particle {
      x: number;
      y: number;
      originX: number;
      originY: number;
      size: number;
      color: string;
      vx: number;
      vy: number;
      ease: number;
      isVex?: boolean; // Indica si la partícula pertenece a "Vex"
    }
    
    const particles: Particle[] = [];
    const density = 3; // Densidad de partículas reducida para mejor rendimiento
    const particleSize = 1.8; // Tamaño de las partículas ligeramente mayor para compensar
    const freeParticlesCount = 50; // Reducir partículas libres para mejorar rendimiento
    
    // Verificar dimensiones antes de obtener los datos de imagen
    if (canvas.width === 0 || canvas.height === 0) {
      return; // No podemos obtener datos de un canvas con dimensiones cero
    }
    
    // Dibujar el texto en el canvas para obtener los píxeles
    ctx.fillStyle = 'white';
    ctx.font = '900 120px "Montserrat", "Arial Black", "Helvetica Neue", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Dibujar el texto con un trazo más grueso para asegurar que no se entrecorte
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.strokeText(text, canvas.width / 2, canvas.height / 2);
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    
    // Obtener los datos de píxeles
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Determinar la posición aproximada donde termina "Proto" y comienza "Vex"
    // Para "ProtoVex", asumimos que "Vex" comienza aproximadamente en el 60% del ancho
    const vexStartX = canvas.width * 0.6;
    
    // Crear partículas basadas en los píxeles del texto
    for (let y = 0; y < canvas.height; y += density) {
      for (let x = 0; x < canvas.width; x += density) {
        const index = (y * canvas.width + x) * 4;
        const alpha = imageData.data[index + 3];
        
        if (alpha > 128) { // Solo considerar píxeles con suficiente opacidad
          // Determinar si este píxel pertenece a "Proto" o a "Vex"
          const isVex = x > vexStartX;
          
          const particle: Particle = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            originX: x,
            originY: y,
            size: particleSize,
            color: isVex ? secondColor : color, // Asignar color según la posición
            vx: 0,
            vy: 0,
            ease: 0.05 + Math.random() * 0.025,
            isVex: isVex // Guardar esta información para usarla después
          };
          
          particles.push(particle);
        }
      }
    }
    
    // Añadir partículas libres que vuelan alrededor
    for (let i = 0; i < freeParticlesCount; i++) {
      const particle: Particle = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        originX: Math.random() * canvas.width, // Posición original aleatoria
        originY: Math.random() * canvas.height,
        size: 1 + Math.random() * 2, // Tamaño más pequeño para las partículas libres
        color: color,
        vx: (Math.random() - 0.5) * 2, // Velocidad aleatoria
        vy: (Math.random() - 0.5) * 2,
        ease: 0.01 // Movimiento más lento hacia su origen
      };
      
      particles.push(particle);
    }
    
    // Variables para optimización de rendimiento
    let lastTime = 0;
    const fpsLimit = 30; // Limitar a 30 FPS para mejorar rendimiento
    const fpsInterval = 1000 / fpsLimit;
    
    // Función de animación optimizada
    const animate = (currentTime = 0) => {
      // Limitar FPS para mejorar rendimiento
      const elapsed = currentTime - lastTime;
      
      if (elapsed > fpsInterval) {
        lastTime = currentTime - (elapsed % fpsInterval);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Procesar partículas en lotes para mejorar rendimiento
        const batchSize = 50; // Procesar en lotes de 50 partículas
        const totalBatches = Math.ceil(particles.length / batchSize);
        
        for (let batch = 0; batch < totalBatches; batch++) {
          const start = batch * batchSize;
          const end = Math.min(start + batchSize, particles.length);
          
          for (let i = start; i < end; i++) {
            const p = particles[i];
            const isFreeParticle = i >= particles.length - freeParticlesCount;
            
            if (isFreeParticle) {
              // Para partículas libres, movimiento simplificado
              p.x += p.vx;
              p.y += p.vy;
              
              // Actualizar dirección con menos frecuencia
              if (i % 3 === 0) {
                p.vx += (Math.random() - 0.5) * 0.1;
                p.vy += (Math.random() - 0.5) * 0.1;
              }
              
              // Rebote en los bordes
              if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
              if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
              
              // Color con menos cálculos
              ctx.fillStyle = color;
            } else {
              // Para partículas del texto, comportamiento optimizado
              const dx = p.originX - p.x;
              const dy = p.originY - p.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance > 5) {
                // Si está lejos, moverse directamente hacia la posición original
                p.vx = dx * p.ease * 0.9;
                p.vy = dy * p.ease * 0.9;
              } else {
                // Si está cerca, movimiento muy mínimo
                // Movimiento muy sutil para las partículas que forman la palabra
                const microMovement = 0.05; // Movimiento mínimo
                p.vx = (Math.random() - 0.5) * microMovement;
                p.vy = (Math.random() - 0.5) * microMovement;
              }
              
              p.x += p.vx;
              p.y += p.vy;
              
              ctx.fillStyle = p.color;
            }
            
            // Dibujar partícula con mayor opacidad y color más oscuro
            if (isFreeParticle) {
              // Partículas libres con opacidad media
              ctx.globalAlpha = 0.4;
              ctx.fillStyle = color; // Color original
            } else {
              // Partículas del texto más oscuras y menos transparentes
              ctx.globalAlpha = 0.9; // Casi opacas
              // Usar color diferente para "Proto" y "Vex"
              if (p.isVex) {
                ctx.fillStyle = secondColor; // Color blanco para "Vex"
              } else {
                ctx.fillStyle = '#d35400'; // Naranja más oscuro para "Proto"
              }
            }
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        
        ctx.globalAlpha = 1.0;
      }
      
      requestAnimationFrame(animate);
    };
    
    // Iniciar animación
    animate();
    
    // Efecto de dispersión al pasar el mouse (optimizado)
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      // Limitar la frecuencia de procesamiento para mejorar rendimiento
      // Solo procesar 1/3 de las partículas en cada movimiento del mouse
      const startIdx = Math.floor(Math.random() * 3) * Math.floor(particles.length / 3);
      const endIdx = startIdx + Math.floor(particles.length / 3);
      
      for (let i = startIdx; i < endIdx; i++) {
        const p = particles[i];
        if (!p) continue;
        
        // Calcular distancia al mouse
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 120;
        
        // Todas las partículas reaccionan al mouse, pero con diferente intensidad
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const isFreeParticle = i >= particles.length - freeParticlesCount;
          const factor = isFreeParticle ? 0.08 : 0.05; // Las partículas libres reaccionan más
          
          p.x -= dx * force * factor;
          p.y -= dy * force * factor;
        }
      }
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    
    // Limpiar al desmontar
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [text, color]);
  
  return (
    <div className="absolute top-0 right-0 w-full h-full z-10 pointer-events-none flex items-center justify-end pr-12">
      <div className="w-[600px] h-[250px] relative">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
