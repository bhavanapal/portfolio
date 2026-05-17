import LivingBackground from "./components/LivingBackground";
import ThemeToggle from "./components/ThemeToggle";
import ThemeTransition from "./components/ThemeTransition";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import ProfessionalSection from "./components/ProfessionalSection";
import ContactSection from "./components/contact";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background */}
      <LivingBackground />

      {/* Theme Animation */}
      <ThemeTransition />

      {/* Theme Button */}
      <ThemeToggle />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <About />
        <Skills />
        <Projects/>
        <ProfessionalSection/>
       <ContactSection/>
      </main>
    </div>
  );
}
