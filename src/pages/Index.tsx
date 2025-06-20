import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillTag } from "@/components/SkillTag";
import { ContactForm } from "@/components/ContactForm";
import { Github, Mail, ExternalLink, ArrowDown } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include payment integration, admin dashboard, and real-time inventory management.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "https://github.com/shoaib/ecommerce",
      demoUrl: "https://demo-ecommerce.com",
    },
    {
      title: "Task Management CLI",
      description:
        "Command-line task management tool built with C++. Supports task creation, scheduling, priority management, and data persistence.",
      tags: ["C++", "CLI", "SQLite", "CMake"],
      githubUrl: "https://github.com/shoaib/task-cli",
    },
    {
      title: "Weather Dashboard",
      description:
        "Responsive web app displaying real-time weather data with interactive charts and location-based forecasts using modern web technologies.",
      tags: ["HTML", "CSS", "JavaScript", "API Integration"],
      githubUrl: "https://github.com/shoaib/weather-app",
      demoUrl: "https://weather-dashboard.com",
    },
    {
      title: "Personal Blog Engine",
      description:
        "Minimalist blog engine with markdown support, syntax highlighting, and SEO optimization. Built for developers who love writing.",
      tags: ["React", "Markdown", "Next.js", "TypeScript"],
      githubUrl: "https://github.com/shoaib/blog-engine",
      demoUrl: "https://shibi-blog.com",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "C",
    "C++",
    "Python",
    "Git",
    "PostgreSQL",
    "MongoDB",
  ];

  return (
    <div className="min-h-screen bg-portfolio-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center section-padding">
        {/* Animated Background Blob */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 red-blob animate-gradient-shift bg-red-glow-gradient bg-400% opacity-30" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 red-blob animate-float" />

        <div className="grid-container grid-12 items-center relative z-10">
          {/* Left Side - Text Content */}
          <div className="col-span-4 md:col-span-5 xl:col-span-7">
            <div
              className={`space-y-6 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-heading font-bold leading-tight">
                <span className="block">Hi, I'm</span>
                <span className="block text-gradient-red">Shoaib Hayat</span>
                <span className="block text-2xl md:text-3xl xl:text-4xl text-gray-300 font-normal">
                  (ShiBi)
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                Turning Ideas into Code, One Project at a Time
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button size="lg" asChild>
                  <a href="#projects" className="group">
                    View Projects
                    <ArrowDown
                      size={20}
                      className="group-hover:translate-y-1 transition-transform"
                    />
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Avatar/Illustration */}
          <div className="col-span-4 md:col-span-3 xl:col-span-5 flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-portfolio-red/20 to-transparent border-2 border-portfolio-red/30 flex items-center justify-center animate-float">
              <div className="w-64 h-64 rounded-full bg-portfolio-dark-grey flex items-center justify-center text-8xl">
                👨‍💻
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-portfolio-red" />
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="section-padding bg-portfolio-dark-grey relative"
      >
        <div className="grid-container">
          <div className="grid-12 items-center">
            <div className="col-span-4 md:col-span-3 xl:col-span-4 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-portfolio-red/50 glow-red animate-on-scroll">
                <div className="w-full h-full bg-gradient-to-br from-portfolio-red/20 to-portfolio-dark-grey flex items-center justify-center text-8xl">
                  👤
                </div>
              </div>
            </div>
            <div className="col-span-4 md:col-span-5 xl:col-span-8 space-y-6">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-heading font-bold animate-on-scroll">
                About Me
              </h2>
              <div className="space-y-4 text-lg text-gray-300 animate-on-scroll">
                <p>
                  I'm a passionate developer who loves crafting elegant
                  solutions to complex problems. With expertise spanning from
                  low-level programming in C/C++ to modern web development with
                  React and Node.js.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or
                  building tools that make developers' lives easier.
                </p>
                <p>
                  My journey in software development has taught me that the best
                  code is not just functional, but also readable, maintainable,
                  and purposeful.
                </p>
              </div>
              {/* Progress Timeline */}
              <div className="pt-6 animate-on-scroll">
                <div className="flex items-center space-x-4">
                  <div className="h-2 bg-portfolio-red rounded-full flex-1 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-portfolio-red to-portfolio-red-glow animate-gradient-shift bg-400%" />
                  </div>
                  <span className="text-portfolio-red font-semibold">
                    5+ Years Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="grid-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-heading font-bold animate-on-scroll">
              Projects
            </h2>
            <p className="text-xl text-gray-300 mt-4 animate-on-scroll">
              Some of my recent work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-portfolio-dark-grey">
        <div className="grid-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-heading font-bold animate-on-scroll">
              Skills
            </h2>
            <p className="text-xl text-gray-300 mt-4 animate-on-scroll">
              Technologies I work with
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <SkillTag key={skill} skill={skill} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="grid-container">
          <div className="grid-12 items-start">
            <div className="col-span-4 md:col-span-4 xl:col-span-6 space-y-6">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-heading font-bold animate-on-scroll">
                Get in Touch
              </h2>
              <div className="space-y-4 animate-on-scroll">
                <p className="text-xl text-gray-300">
                  Let's build something together. Feel free to reach out!
                </p>
                <p className="text-gray-400">
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a good conversation about technology.
                </p>
              </div>
              <div className="space-y-4 animate-on-scroll">
                <Button variant="secondary" asChild className="w-full">
                  <a
                    href="mailto:shoaib@example.com"
                    className="flex items-center gap-3"
                  >
                    <Mail size={20} />
                    shoaib@example.com
                  </a>
                </Button>
                <Button variant="secondary" asChild className="w-full">
                  <a
                    href="https://github.com/shoaib"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Github size={20} />
                    GitHub Profile
                  </a>
                </Button>
              </div>
            </div>
            <div className="col-span-4 md:col-span-4 xl:col-span-6">
              <div className="animate-on-scroll">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-portfolio-black border-t border-portfolio-red/20 py-8">
        <div className="grid-container">
          <div className="text-center space-y-4">
            <p className="text-gray-400">
              Made with ❤️ by{" "}
              <span className="text-portfolio-red font-semibold">ShiBi</span>
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/shoaib"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-portfolio-red transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:shoaib@example.com"
                className="text-gray-400 hover:text-portfolio-red transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
