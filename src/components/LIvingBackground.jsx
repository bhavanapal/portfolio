import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function LivingBackground() {
  const { theme } = useTheme();

  // React JS ref
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d',{
      willReadFrequently: true,
    });

    if (!ctx) return;

    let animationFrameId;

    // Set canvas full screen
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    window.addEventListener('resize', setCanvasSize);

    let time = 0;

    const animate = () => {
      time += 0.002;

      // Theme colors
      const colors =
        theme === 'light'
          ? {
              // bg: '#FAF8F5',
              bg:"#EAE2D6",
              gradient1: 'rgba(139, 116, 95, 0.04)',
              gradient2: 'rgba(156, 147, 127, 0.03)',
              gradient3: 'rgba(180, 160, 140, 0.025)',
            }
          : {
              bg: '#1A1D29',
              gradient1: 'rgba(139, 116, 95, 0.08)',
              gradient2: 'rgba(156, 147, 127, 0.06)',
              gradient3: 'rgba(180, 160, 140, 0.04)',
            };

      // Background fill
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Gradient orb 1
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.2 + Math.sin(time * 0.8) * 150,
        canvas.height * 0.3 + Math.cos(time * 0.6) * 150,
        0,
        canvas.width * 0.2,
        canvas.height * 0.3,
        canvas.width * 0.5
      );

      gradient1.addColorStop(0, colors.gradient1);
      gradient1.addColorStop(1, 'transparent');

      // Gradient orb 2
      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.8 + Math.cos(time * 1.1) * 180,
        canvas.height * 0.6 + Math.sin(time * 0.7) * 180,
        0,
        canvas.width * 0.8,
        canvas.height * 0.6,
        canvas.width * 0.4
      );

      gradient2.addColorStop(0, colors.gradient2);
      gradient2.addColorStop(1, 'transparent');

      // Gradient orb 3
      const gradient3 = ctx.createRadialGradient(
        canvas.width * 0.5 + Math.sin(time * 0.9) * 120,
        canvas.height * 0.8 + Math.cos(time * 1.2) * 120,
        0,
        canvas.width * 0.5,
        canvas.height * 0.8,
        canvas.width * 0.35
      );

      gradient3.addColorStop(0, colors.gradient3);
      gradient3.addColorStop(1, 'transparent');

      // Draw gradients
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Noise texture
      const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );

      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        if (Math.random() > 0.98) {
          const noise =
            theme === 'light'
              ? Math.random() * 3
              : Math.random() * 5;

          data[i] += noise;
          data[i + 1] += noise;
          data[i + 2] += noise;
        }
      }

      ctx.putImageData(imageData, 0, 0);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 transition-opacity duration-700"
      style={{
        // filter: 'blur(80px)',
        filter: 'none',
      }}
    />
  );
}
