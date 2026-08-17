import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";
import { useTheme } from "../context/ThemeContext";
import { FaWordpress } from "react-icons/fa";
import {
  Briefcase,
  GraduationCap,
  Code2,
} from "lucide-react";

const timeline = [

    {
    icon: Briefcase,

    year: "2025 - Currently",

    title: "Independent MERN Stack Developer | Backend Focused",

    organization: "Self-Employed",

    description:
      "Currently working independently as a Backend-Focused MERN Stack Developer, building and maintaining full-stack web applications with a strong focus on backend development.I primarily work with Node.js, Express.js, MongoDB, and REST APIs to develop scalable backend systems, implement authentication and authorization, design database structures, integrate third-party services, and build reliable server-side business logic. I also work with React.js when frontend development or API integration is required.",

    highlights: [
    "Designed and developed scalable RESTful APIs using Node.js and Express.js",
    "Built secure authentication and authorization systems using JWT and role-based access control",
    "Designed and optimized MongoDB/Mongoose schemas and database operations",
    "Integrated third-party APIs and external services into production applications",
    "Improved backend performance, reliability, and maintainability through modular architecture",
    "Developed React.js interfaces and integrated them with backend APIs when required",
    "Handled deployment, debugging, monitoring, and ongoing application maintenance",
    ],
  },

  
   {
    icon: Briefcase,

    year: "2024 - 2025",

    title: "Full Stack Developer (MERN)",

    organization: "Brain Mentors Pvt Ltd.(Apprenticeship)",

    description:
      "Currently working as a Full Stack MERN Developer focused on building scalable, secure, and performance-driven web applications.",

    highlights: [
    "Built full-stack applications using MERN stack",
    "Implemented JWT authentication and role-based access control",
    "Developed real-time features using Socket.io",
    ],
  },
  {
    icon: Code2,

    year: "2022 - 2024",

    title: "Web Developer",

    organization: "Freelance / Projects",

    description:
      "Transitioned into modern web development using frontend and backend technologies to build dynamic web applications.",

    highlights: [
      "Built responsive web applications using modern JavaScript",
      "Worked with REST APIs and backend integration",
      "Improved UI/UX with modern design practices",
    ],
  },

  {
    icon: FaWordpress,

    year: "2019 - 2022",

    title: "Wordpress Developer",

    organization: "Freelance",

    description:
      "Started my professional journey by building and customizing WordPress websites for clients, focusing on responsive design and performance optimization.",

    highlights: [
      "Developed and customized WordPress websites for clients",
      "Built responsive and SEO-friendly web pages",
      "Worked on theme customization and plugin integration",
    ],
  },

  {
    icon: GraduationCap,

    year: "",

    title:
      "Bachelor of Computer Application (BCA)",
    highlights: [
      "Built a strong foundation in computer science fundamentals, programming, and software development principles.",
    ],
  },
];

export default function ProfessionalSection() {
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

          timelineLine:
            "bg-gradient-to-b from-amber-400 via-amber-300 to-neutral-300",
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

          timelineLine:
            "bg-gradient-to-b from-amber-500 via-amber-600/50 to-neutral-700",
        };

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div ref={ref}>
          {/* Header */}
          <motion.div
            className="mb-20 max-w-3xl"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
            }}
          >
            <motion.div
              className={`w-16 h-0.5 ${colors.accentLine} mb-6`}
              initial={{
                width: 0,
              }}
              animate={
                isInView
                  ? {
                      width: 64,
                    }
                  : {}
              }
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
            />

            <h2
              className={`text-4xl md:text-5xl ${colors.text} mb-6`}
            >
              Professional Journey
            </h2>

            <p
              className={`text-xl ${colors.textMuted}`}
            >
              A focused path of growth and
              continuous learning
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <motion.div
              className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-px ${colors.timelineLine}`}
              initial={{
                scaleY: 0,
              }}
              animate={
                isInView
                  ? {
                      scaleY: 1,
                    }
                  : {}
              }
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              style={{
                transformOrigin: "top",
              }}
            />

            <div className="space-y-16">
              {timeline.map((item, index) => {
                const Icon = item.icon;

                const isLeft =
                  index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{
                      opacity: 0,
                      x: isLeft
                        ? -60
                        : 60,
                    }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {}
                    }
                    transition={{
                      delay:
                        index * 0.2,

                      duration: 0.8,

                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                  >
                    <div
                      className={`flex items-start gap-12 ${
                        isLeft
                          ? "md:flex-row"
                          : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Content */}
                      <div
                        className={`flex-1 ${
                          isLeft
                            ? "md:text-right"
                            : "md:text-left"
                        }`}
                      >
                        <div
                          className={`inline-block ${colors.cardBg} backdrop-blur-xl border ${colors.cardBorder} rounded-2xl p-8 max-w-lg hover:scale-[1.02] transition-transform duration-300`}
                        >
                          {item.year && (
                            <div
                              className={`${colors.accent} mb-2 text-sm tracking-wide`}
                            >
                              {item.year}
                            </div>
                          )}

                          <h3
                            className={`text-2xl ${colors.text} mb-1`}
                          >
                            {item.title}
                          </h3>

                          {item.organization && (
                            <div
                              className={`${colors.accent} mb-4 text-sm`}
                            >
                              {
                                item.organization
                              }
                            </div>
                          )}

                          <p
                            className={`${colors.textMuted} mb-6 leading-relaxed`}
                          >
                            {
                              item.description
                            }
                          </p>

                          <ul className="space-y-2">
                            {item.highlights.map(
                              (
                                highlight,
                                i
                              ) => (
                                <li
                                  key={i}
                                  className={`flex items-start gap-2 ${colors.textMuted} text-sm ${
                                    isLeft
                                      ? "md:flex-row-reverse md:text-right"
                                      : ""
                                  }`}
                                >
                                  <span
                                    className={`w-1 h-1 rounded-full ${colors.accentLine} mt-2 flex-shrink-0`}
                                  />

                                  <span>
                                    {
                                      highlight
                                    }
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>

                      {/* Icon */}
                      <motion.div
                        className={`relative z-10 w-16 h-16 rounded-full ${colors.iconBg} flex items-center justify-center flex-shrink-0 shadow-lg`}
                        initial={{
                          scale: 0,
                        }}
                        animate={
                          isInView
                            ? {
                                scale: 1,
                              }
                            : {}
                        }
                        transition={{
                          delay:
                            index * 0.2 +
                            0.3,

                          duration: 0.5,
                        }}
                      >
                        <Icon
                          className={
                            colors.iconColor
                          }
                          size={24}
                          strokeWidth={2}
                        />
                      </motion.div>

                      {/* Spacer */}
                      <div className="flex-1 hidden md:block" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
