import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext.js";

export default function HeroSection() {
  const { theme } = useTheme();

  const { scrollY } = useScroll();

  const opacity = useTransform(
    scrollY,
    [0, 400],
    [1, 0]
  );

  const scale = useTransform(
    scrollY,
    [0, 400],
    [1, 0.98]
  );

  const [mousePosition, setMousePosition] =
    useState({
      x: 0,
      y: 0,
    });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  const parallaxX =
    (mousePosition.x - window.innerWidth / 2) *
    0.015;

  const parallaxY =
    (mousePosition.y - window.innerHeight / 2) *
    0.015;

  const colors =
    theme === "light"
      ? {
          text: "text-neutral-900",
          textMuted: "text-neutral-600",
          accent: "text-amber-700",
          accentBg: "bg-amber-100",
          accentBorder: "border-amber-200",

          buttonPrimary:
            "bg-neutral-900 text-neutral-50 hover:bg-neutral-800",

          buttonSecondary:
            "border-neutral-300 text-neutral-900 hover:bg-neutral-100",

          decorGradient:
            "from-amber-200/20 to-neutral-200/10",
        }
      : {
          text: "text-neutral-50",
          textMuted: "text-neutral-400",
          accent: "text-amber-400",
          accentBg: "bg-amber-900/20",
          accentBorder: "border-amber-800/30",

          buttonPrimary:
            "bg-neutral-50 text-neutral-900 hover:bg-neutral-200",

          buttonSecondary:
            "border-neutral-700 text-neutral-50 hover:bg-neutral-800",

          decorGradient:
            "from-amber-900/20 to-neutral-800/10",
        };

  return (
    <motion.section
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20"
    >
      {/* Decorative Blur */}
      <motion.div
        className={`absolute top-1/4 right-1/6 w-80 h-80 rounded-full bg-gradient-to-br ${colors.decorGradient} blur-3xl opacity-50`}
        animate={{
          x: parallaxX * 2,
          y: parallaxY * 2,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 100,
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="space-y-12"
        >
          {/* Label */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            className="inline-block"
          >
            <span
               className={`inline-block max-w-full px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm text-center whitespace-normal break-words ${colors.accentBg} border
               ${colors.accentBorder}  rounded-full ${colors.accent} tracking-wide  backdrop-blur-sm`}
             
            >
              Full Stack Developer (MERN) & Backend Engineer
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-6">
            <motion.h1
              className={`text-6xl md:text-7xl lg:text-1xl ${colors.text} leading-[1.1] tracking-tight max-w-4xl`}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
             Bhawana Pal
            </motion.h1>

            <motion.div
              className="space-y-4 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 1,
              }}
            >
              <p
                className={`text-2xl md:text-3xl ${colors.textMuted} leading-relaxed`}
              >
              Building scalable web apps and robust backend systems focused on performance, {" "}  
                <span className={colors.accent}>
                security
                </span>{" "}
                and {" "}
                <span className={colors.accent}>
                clean APIs
                </span>
              </p>
            </motion.div>
          </div>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 pt-8"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.1,
              duration: 0.8,
            }}
          >
            <a
              href="#projects"
              className={`px-8 py-4 ${colors.buttonPrimary} rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            >
              View Work
            </a>

            <a
              href="#contact"
              className={`px-8 py-4 border ${colors.buttonSecondary} rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105`}
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span
            className={`${colors.textMuted} text-xs tracking-widest uppercase`}
          >
            Scroll
          </span>

          <ArrowDown
            className={colors.textMuted}
            size={18}
            strokeWidth={2}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
