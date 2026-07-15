import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";
import { useTheme } from "../context/ThemeContext";
import { ArrowUpRight} from "lucide-react";
import { FaPoll } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";

const projects = [
    {
    title: "Meeting Analyzer Counter",
    subtitle: "analyzes a meeting transcript and tells you how “productive vs wasteful” the meeting actually was.",
      
    description:
      "we could analyze meeting conversations and uncover how much unnecessary jargon, filler words, and repeated phrases are being used — then measure how productive or wasteful the meeting actually was?",
    
   challenge:
       "Invalid request payloads could cause unexpected errors or inconsistent data.",

   solution:
       "Added request validation and centralized error handling to ensure consistent API responses and improve reliability.",
    
   tech: ["Node.js", "Express.js", "MongoDB","Mongoose","REST APIs", "Docker", "CI/CD", "SuperTest", "Swagger", "Vitest", "Middleware & Error Handling", "Zod"],

    live: "https://meeting-bullshit-counter-production.onrender.com/docs/",
    github: "https://github.com/bhavanapal/meeting-bullshit-counter",
        
    icon: SiGooglemeet,
  },
  {
    title: "Real-Time Polling Application",
    subtitle: "Secure Authentication & Scalable APIs",
    description:
      "Built a scalable polling application with secure JWT authentication, role-based access control, and optimized backend architecture for efficient vote processing and real-time results.",

    challenge:
      "One of the key challenges was preventing duplicate voting to ensure fairness and maintain data integrity.and Another challenge was securing poll data and preventing unauthorized access or modifications.",

    solution:
      "I addressed these challenges by implementing JWT-based authentication and backend validation to prevent duplicate voting and ensure data integrity. Protected API routes secured poll data from unauthorized access, while optimized backend logic maintained accurate and consistent vote processing.",

    tech: ["React.js", "Node.js", "Express.js", "MongoDB","Mongoose","JWT Authentication", "REST APIs", "Zustand", "Axios", "Socket.io","bcrypt","Zod"],

    live:  "https://polling-app-six-inky.vercel.app/" ,
    github: "https://github.com/bhavanapal/polling-app",

    icon: FaPoll,
  },

  {
    title: "Workshop Feedback & Certificate Automation System",
    subtitle: "Automated platform for workshop feedback and certificate generation",

    description:
      "Developed a web application that streamlines workshop feedback collection and automates certificate generation for participants. Designed to reduce manual work and improve efficiency using React.js, Context API, and Appwrite.",

    challenge:
      "Generating certificates dynamically with participant-specific information while maintaining consistent formatting.",

    solution:
      "Implemented automated certificate generation logic with dynamic data rendering to generate personalized certificates efficiently.",

    tech: [
      "React.js",
      "ContextAPI",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "Appwrite",
      "EmailJS",
      "Authentication",
    ], 

    live:   "https://workshop-feedback-certificate-autom.vercel.app/", 
    github: "https://github.com/bhavanapal/Workshop-feedback-certificate-automation-system",

    icon: GrWorkshop,
  },

   {
    title: "E-commerce Website",
    subtitle: "Responsive platform for online shopping and product browsing",
    description:
      "Developed a modern and fully responsive e-commerce frontend featuring product listings, shopping cart interface, responsive navigation, and interactive UI components. The project focuses on clean design, user experience, and mobile responsiveness using Tailwind CSS utility classes.",
    tech: ["Javascript", "HTML5", "CSS3", "Tailwind"],
    live:  "https://bhavanapal.github.io/Rahba-ShopNow-E-commerce/",
    github: "https://github.com/bhavanapal/Rahba-ShopNow-E-commerce",
    icon: FaShoppingCart,
  },

   {
    title: "Destination paradise",
    description:
      "Developed a responsive travel website using HTML, CSS, and JavaScript that showcases popular tourist destinations.Focused on clean layout design, smooth navigation, and engaging visual experience for users.",
    tech: ["Javascript", "HTML5", "CSS3"],
    live:  "https://bhavanapal.github.io/Destination-Paradise-with-JavaScript/",
    github: "https://github.com/bhavanapal/next-destination",
    icon: MdTravelExplore,
  },
];

export default function Projects() {
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
          techBg: "bg-neutral-100",
          techText: "text-neutral-700",
          iconBg: "bg-amber-100",
          iconColor: "text-amber-700",
        }
      : {
          text: "text-neutral-50",
          textMuted: "text-neutral-400",
          accent: "text-amber-400",
          accentLine: "bg-amber-500",
          cardBg: "bg-neutral-800/40",
          cardBorder: "border-neutral-700/40",
          techBg: "bg-neutral-700/40",
          techText: "text-neutral-300",
          iconBg: "bg-amber-900/20",
          iconColor: "text-amber-400",
        };

  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref}>
          {/* Header */}
          <motion.div
            className="mb-20 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className={`w-16 h-0.5 ${colors.accentLine} mb-6`}
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            />

            <h2 className={`text-4xl md:text-5xl ${colors.text} mb-6`}>
              Featured Projects
            </h2>

            <p className={`text-xl ${colors.textMuted}`}>
           Real-world apps built for scalability, performance, and depth
            </p>
          </motion.div>

          {/* Projects */}
          <div className="space-y-20">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 60 }}
                  {/* animate={isInView ? { opacity: 1, y: 0 } : {}} */}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group"
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Card */}
                    <div className={isEven ? "" : "lg:order-2"}>
                      <div
                        className={`${colors.cardBg} backdrop-blur-xl border ${colors.cardBorder} rounded-3xl p-12 hover:scale-[1.02] transition-transform duration-500 min-h-[400px] flex flex-col justify-between`}
                      >
                        <div>
                          <div
                            className={`w-16 h-16 rounded-2xl ${colors.iconBg} flex items-center justify-center mb-8`}
                          >
                            <Icon
                              className={colors.iconColor}
                              size={32}
                              strokeWidth={1.5}
                            />
                          </div>

                          <h3
                            className={`text-3xl ${colors.text} mb-3`}
                          >
                            {project.title}
                          </h3>

                          <p className={`${colors.textMuted} mb-8`}>
                            {project.subtitle}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className={`px-4 py-2 ${colors.techBg} rounded-full ${colors.techText} text-sm`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`space-y-8 ${
                        isEven ? "" : "lg:order-1"
                      }`}
                    >
                      <p
                        className={`text-lg ${colors.textMuted} leading-relaxed`}
                      >
                        {project.description}
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h4
                            className={`${colors.accent} mb-3 uppercase text-sm tracking-wide`}
                          >
                            Challenge
                          </h4>

                          <p
                            className={`${colors.textMuted} leading-relaxed`}
                          >
                            {project.challenge}
                          </p>
                        </div>

                        <div>
                          <h4
                            className={`${colors.accent} mb-3 uppercase text-sm tracking-wide`}
                          >
                            Solution
                          </h4>

                          <p
                            className={`${colors.textMuted} leading-relaxed`}
                          >
                            {project.solution}
                          </p>
                        </div>
                      </div>


<div className="flex items-center gap-4">

  {/* Live Demo */}
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
   className={`flex items-center gap-2 ${colors.accent} hover:gap-3 transition-all duration-300 group`}
  >
    Live
    <ArrowUpRight
      size={18}
      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
    />
  </a>

  {/* GitHub */}
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
   className={`flex items-center gap-2 ${colors.accent} hover:gap-3 transition-all duration-300 group`}
  >
    GitHub

    <ArrowUpRight
      size={18}
      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
    />
  </a>
</div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
