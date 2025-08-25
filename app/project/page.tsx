"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt} from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with advanced features including real-time inventory, payment processing, and admin dashboard.",
      longDescription: "Built with modern technologies to provide a seamless shopping experience. Features include user authentication, product management, order tracking, and responsive design.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://yourecommerce.com",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
      category: "Full Stack",
      status: "Live",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      longDescription: "A comprehensive project management tool that helps teams stay organized and productive. Features include task assignment, deadline tracking, and team communication.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "TailwindCSS"],
      github: "https://github.com/yourusername/task-app",
      demo: "https://yourtaskapp.com",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      category: "Full Stack",
      status: "Live",
      featured: true
    },
    {
      title: "Blog Platform",
      description: "Modern blog platform with markdown support, SEO optimization, and content management system.",
      longDescription: "A feature-rich blogging platform designed for content creators. Includes markdown editor, SEO tools, analytics dashboard, and responsive design.",
      tech: ["Next.js", "MongoDB", "TailwindCSS", "Framer Motion", "MDX"],
      github: "https://github.com/yourusername/blog-platform",
      demo: "https://yourblog.com",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      category: "Frontend",
      status: "Live",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts and interactive maps.",
      longDescription: "A comprehensive weather application that provides detailed forecasts, historical data, and interactive visualizations. Integrates with multiple weather APIs.",
      tech: ["React", "TypeScript", "Chart.js", "Mapbox", "OpenWeather API"],
      github: "https://github.com/yourusername/weather-app",
      demo: "https://yourweatherapp.com",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1200&q=80",
      category: "Frontend",
      status: "Live",
      featured: false
    },
    {
      title: "API Gateway",
      description: "Microservices API gateway with authentication, rate limiting, and monitoring capabilities.",
      longDescription: "A robust API gateway that handles authentication, authorization, rate limiting, and request routing for microservices architecture.",
      tech: ["Node.js", "Express", "Redis", "JWT", "Docker", "Kubernetes"],
      github: "https://github.com/yourusername/api-gateway",
      demo: "https://yourgateway.com",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      category: "Backend",
      status: "Development",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing my work, skills, and professional journey.",
      longDescription: "A modern, responsive portfolio website built with cutting-edge technologies. Features smooth animations, dark mode, and optimized performance.",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Vercel"],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.com",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
      category: "Frontend",
      status: "Live",
      featured: false
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="relative py-24 px-6 md:px-12">
      
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-8"
          >
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Featured Work
            </span>
          </motion.div>
          
          <h2 className="heading-lg mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="body-lg max-w-3xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, 
            from concept to deployment. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - Smaller, More Futuristic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-500 relative">
                
                {/* Futuristic Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                      project.status === "Live" 
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 rounded-lg text-xs font-medium bg-slate-900/80 dark:bg-slate-800/80 text-white border border-slate-700/50 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-12 left-3">
                      <span className="px-2 py-1 rounded-lg text-xs font-medium bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-500/30 backdrop-blur-sm">
                        ⭐ Featured
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-sm line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 text-sm font-medium"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 text-sm font-medium"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      Demo
                    </a>
                  </div>
                </div>

                {/* Futuristic Border Glow */}
                <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:via-indigo-500/20 group-hover:to-purple-500/20 transition-all duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-4xl mx-auto border border-slate-200 dark:border-slate-700 shadow-lg">
            <h3 className="heading-md mb-4">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h3>
            <p className="body-md text-slate-600 dark:text-slate-400 mb-6">
              Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary"
              >
                Start a Project
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View More on GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
