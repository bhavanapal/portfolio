import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";
import { useTheme } from "../context/ThemeContext.js";

export default function About() {
  const { ref, isInView } = useInView();
  const { theme } = useTheme();

  const colors =
    theme === "light"
      ? {
          text: "text-neutral-900",
          textMuted: "text-neutral-600",
          accent: "text-amber-700",
          accentLine: "bg-amber-600",
          statAccent: "text-amber-700",
          cardBg: "bg-neutral-100/60",
          cardBorder: "border-neutral-200/60",
        }
      : {
          text: "text-neutral-50",
          textMuted: "text-neutral-400",
          accent: "text-amber-400",
          accentLine: "bg-amber-500",
          statAccent: "text-amber-400",
          cardBg: "bg-neutral-800/40",
          cardBorder: "border-neutral-700/40",
        };

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="grid lg:grid-cols-12 gap-16 items-start"
        >
          {/* Left Side */}
          <div className="lg:col-span-5">
            <motion.div
              className="space-y-8 lg:sticky lg:top-32"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="space-y-4">
                <motion.div
                  className={`w-16 h-0.5 ${colors.accentLine}`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 64 } : {}}
                  transition={{
                    delay: 0.3,
                    duration: 0.8,
                  }}
                />

                <h2
                  className={`text-4xl md:text-5xl ${colors.text} leading-tight`}
                >
                  Engineering secure, scalable web systems
                </h2>
              </div>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p
                className={`text-xl ${colors.textMuted} leading-relaxed`}
              >
                I believe great engineering is where clean architecture meets practical problem-solving. 
                Every system I build is designed to be scalable, secure, and performance-driven from the ground up.
              </p>

              <p
                className={`text-xl ${colors.textMuted} leading-relaxed`}
              >
                With strong expertise in modern JavaScript and backend development, 
                I bridge the gap between user experience and robust server-side architecture—ensuring applications are efficient, 
                reliable, and production-ready.
              </p>

              <p
                className={`text-xl ${colors.textMuted} leading-relaxed`}
              >
                My approach is rooted in systems thinking, continuous learning, 
                and a passion for building scalable products that deliver real-world impact.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-12 border-t border-current/10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
            >
              <div>
                <div 
                  className={`text-3xl md:text-4xl ${colors.statAccent} mb-2`}
                >
                  Full 
                </div>

                <div
                  className={`${colors.textMuted} text-sm`}
                >
                  Stack Ready
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}