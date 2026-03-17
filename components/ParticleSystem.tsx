"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
}

export default function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Partikel-Farben - Nur Türkis-Töne
    const colors = [
      "rgba(0, 206, 209, 0.4)", // Türkis
      "rgba(0, 168, 171, 0.4)", // Dunkler Türkis
      "rgba(32, 224, 227, 0.3)", // Heller Türkis
    ];

    // Partikel erstellen
    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      maxLife: Math.random() * 300 + 150,
    });

    // Initiale Partikel - Mehr Partikel!
    for (let i = 0; i < 100; i++) {
      particlesRef.current.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Partikel bewegen
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Partikel am Rand zurücksetzen
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Partikel neu erstellen wenn Lebenszeit abgelaufen
        if (particle.life > particle.maxLife) {
          particlesRef.current[index] = createParticle();
        }

        // Partikel zeichnen
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Intensiverer Glow-Effekt
        ctx.shadowBlur = 25;
        ctx.shadowColor = particle.color;
        ctx.fill();
        
        // Zusätzlicher Glow-Layer
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace("0.8", "0.2");
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Verbindungslinien zwischen nahen Partikeln
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const opacity = 0.4 * (1 - distance / 200);
            ctx.beginPath();
            // Dynamische Farbe basierend auf Partikel-Farben
            const gradient = ctx.createLinearGradient(
              particle.x,
              particle.y,
              otherParticle.x,
              otherParticle.y
            );
            gradient.addColorStop(0, particle.color.replace("0.8", opacity.toString()));
            gradient.addColorStop(1, otherParticle.color.replace("0.8", opacity.toString()));
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            
            // Glow-Effekt auf Linien
            ctx.shadowBlur = 10;
            ctx.shadowColor = particle.color;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}

