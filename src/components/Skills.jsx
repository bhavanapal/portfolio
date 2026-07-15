import { motion } from "framer-motion";

import { useInView } from "./hooks/useInView";

import { useTheme } from "../context/ThemeContext.js";

const skillGroups = [
  {
    category: "Frontend",

    skills: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Zustand",
      "Redux",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "shadcn/ui",
      "Responsive Design",
    ],
  },

  {
    category: "Backend",

    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.io",
      "Authentication (JWT, bcrypt)",
      "Middleware handling",
      "API security",
    ],
  },

  {
    category: "Database",

    skills: [
      "MongoDB",
      "Mongoose",
    ],
  },
  
  {
    category: "Cloud & DevOps",

    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "CI/CD",
      "Vitest",
      "Supertest",
      "Swagger",
      "VS Code",
      "Vercel / Render / AWS / Netlify (deployment)",
    ],
  },

  {
    category: "AI & Automation",

    skills: [
      "Github Copilot",
      "ChatGpt",
      "Cursor AI",
      "Gemini",
      "Cursor AI"
      "Prompt Engineering",
    ],
  },

   {
    category: "Product Type",

    skills: [
      "Saas Application",
      "REST API Platforms",
      "Backend Systems",
      "API-First Application",
      "Real-time Application",
      "Multi-user Application Design",
      "API Integration",
      "Authentication & Authorization"
    ],
  },
];

export default function Skills() {
  const { ref, isInView } =
    useInView();

  const { theme } = useTheme();

  const colors =
    theme === "light"
      ? {
          text: "text-neutral-900",

          textMuted:
            "text-neutral-600",

          accent: "text-amber-700",

          accentLine:
            "bg-amber-600",

          cardBg:
            "bg-neutral-50/80",

          cardBorder:
            "border-neutral-200/60",

          skillBg:
            "bg-neutral-100",

          skillText:
            "text-neutral-700",
        }
      : {
          text: "text-neutral-50",

          textMuted:
            "text-neutral-400",

          accent: "text-amber-400",

          accentLine:
            "bg-amber-500",

          cardBg:
            "bg-neutral-800/40",

          cardBorder:
            "border-neutral-700/40",

          skillBg:
            "bg-neutral-700/40",

          skillText:
            "text-neutral-300",
        };

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
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
              Technical Foundation
            </h2>

            <p
              className={`text-xl ${colors.textMuted}`}
            >
              A versatile toolkit for
              building modern, scalable
              web applications
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map(
              (group, index) => (
                <motion.div
                  key={
                    group.category
                  }
                  initial={{
                    opacity: 0,
                    y: 40,
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
                    delay:
                      index * 0.1,

                    duration: 0.8,

                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className={`${colors.cardBg} backdrop-blur-xl border ${colors.cardBorder} rounded-2xl p-8 hover:scale-105 transition-transform duration-300`}
                >
                  <h3
                    className={`${colors.accent} mb-6 tracking-wide uppercase text-sm`}
                  >
                    {
                      group.category
                    }
                  </h3>

                  <ul className="space-y-3">
                    {group.skills.map(
                      (skill) => (
                        <li
                          key={skill}
                          className={`flex items-center gap-3 ${colors.textMuted}`}
                        >
                          <span
                            className={`w-1 h-1 rounded-full ${colors.accentLine}`}
                          />

                          {skill}
                        </li>
                      )
                    )}
                  </ul>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
