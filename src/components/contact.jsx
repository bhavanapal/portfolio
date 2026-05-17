import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { useTheme } from "../context/ThemeContext";

export default function ContactSection() {
  const { ref, isInView } = useInView();
  const { theme } = useTheme();

  const colors =
    theme === "light"
      ? {
          text: "text-neutral-900",
          textMuted: "text-neutral-600",
          accent: "text-amber-700",
          accentLine: "bg-amber-600",
          cardBg: "bg-neutral-50/80",
          cardBorder: "border-neutral-200/60",
          iconBg: "bg-amber-100",
          iconColor: "text-amber-700",
          footerBorder: "border-neutral-200/60",
        }
      : {
          text: "text-neutral-50",
          textMuted: "text-neutral-400",
          accent: "text-amber-400",
          accentLine: "bg-amber-500",
          cardBg: "bg-neutral-800/40",
          cardBorder: "border-neutral-700/40",
          iconBg: "bg-amber-900/20",
          iconColor: "text-amber-400",
          footerBorder: "border-neutral-700/40",
        };

  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref}>
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              className={`text-5xl md:text-6xl lg:text-7xl ${colors.text} mb-8 leading-tight`}
            >
              Let's collaborate
            </h2>

            <p
              className={`text-xl ${colors.textMuted} max-w-2xl mx-auto`}
            >
           I’m a Full Stack MERN Developer with a strong backend focus. Open to opportunities, freelance work, and collaborations to build scalable and impactful web applications.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Email */}
            <a
              href="mailto:nikhil@example.com"
              className={`group ${colors.cardBg} backdrop-blur-xl border ${colors.cardBorder} rounded-2xl p-8 hover:scale-105 transition-all duration-300`}
            >
              <div
                className={`w-14 h-14 rounded-xl ${colors.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <IoMdMail
                  className={colors.iconColor}
                  size={24}
                  strokeWidth={2}
                />
              </div>

              <h3
                className={`${colors.text} mb-2 text-xl`}
              >
                Email
              </h3>

              <p className={`${colors.textMuted} mb-4`}>
                Bhawana121pal@gmail.com
              </p>

              <GoArrowUpRight
                className={`${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity`}
                size={20}
              />
            </a>

            {/* LinkedIn */}
            <a
              href="http://www.linkedin.com/in/bhavanapal"
              target="_blank"
              rel="noopener noreferrer"
              className={`group ${colors.cardBg} backdrop-blur-xl border ${colors.cardBorder} rounded-2xl p-8 hover:scale-105 transition-all duration-300`}
            >
              <div
                className={`w-14 h-14 rounded-xl ${colors.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <FaLinkedin 
                  className={colors.iconColor}
                  size={24}
                  strokeWidth={2}
                />
              </div>

              <h3
                className={`${colors.text} mb-2 text-xl`}
              >
                LinkedIn
              </h3>

              <p className={`${colors.textMuted} mb-4`}>
                Connect professionally
              </p>

              <GoArrowUpRight
                className={`${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity`}
                size={20}
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/bhavanapal"
              target="_blank"
              rel="noopener noreferrer"
              className={`group ${colors.cardBg} backdrop-blur-xl border ${colors.cardBorder} rounded-2xl p-8 hover:scale-105 transition-all duration-300`}
            >
              <div
                className={`w-14 h-14 rounded-xl ${colors.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <FaGithub 
                  className={colors.iconColor}
                  size={24}
                  strokeWidth={2}
                />
              </div>

              <h3
                className={`${colors.text} mb-2 text-xl`}
              >
                GitHub
              </h3>

              <p className={`${colors.textMuted} mb-4`}>
                Explore my code
              </p>

              <GoArrowUpRight
                className={`${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity`}
                size={20}
              />
            </a>
          </motion.div>

          {/* Footer */}
          <motion.div
            className={`pt-12 border-t ${colors.footerBorder} flex flex-col md:flex-row items-center justify-between gap-6`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#"
              className={`${colors.accent} hover:underline`}
            >
              Back to Top
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}