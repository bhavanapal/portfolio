import { motion } from "framer-motion";
import { Sun, Moon} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const {
    theme,
    toggleTheme,
    isTransitioning,
  } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      disabled={isTransitioning}
      className={`fixed top-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-xl border transition-all duration-500 ${
        theme === "light"
          ? "bg-neutral-100/80 border-neutral-300/50 text-neutral-800 hover:bg-neutral-200/80"
          : "bg-neutral-800/80 border-neutral-700/50 text-neutral-100 hover:bg-neutral-700/80"
      }`}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      aria-label="Toggle theme"
    >
      {/* Icon */}
      <motion.div
        initial={false}
        animate={{
          rotate:
            theme === "light"
              ? 0
              : 180,

          scale:
            isTransitioning
              ? 0.8
              : 1,
        }}
        transition={{
          duration: 0.5,
          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
      >
        {theme === "light" ? (
          <Sun
            size={22}
            strokeWidth={2}
          />
        ) : (
          <Moon
            size={22}
            strokeWidth={2}
          />
        )}
      </motion.div>

      {/* Ripple Effect */}
      {isTransitioning && (
        <motion.div
          className={`absolute inset-0 rounded-full ${
            theme === "light"
              ? "bg-neutral-800"
              : "bg-neutral-100"
          }`}
          initial={{
            scale: 1,
            opacity: 0.3,
          }}
          animate={{
            scale: 2.5,
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        />
      )}
    </motion.button>
  );
}