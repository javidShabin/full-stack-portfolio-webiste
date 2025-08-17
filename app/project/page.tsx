"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with Next.js, TailwindCSS & Framer Motion.",
      tech: ["Next.js", "TailwindCSS", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.com",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "E-commerce App",
      description:
        "Full-stack MERN e-commerce app with authentication and payments.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://yourecommerce.com",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Blog Platform",
      description:
        "A blog platform with markdown, authentication & admin dashboard.",
      tech: ["Next.js", "MongoDB", "TailwindCSS"],
      github: "https://github.com/yourusername/blog-platform",
      demo: "https://yourblog.com",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="relative min-h-screen px-6 py-20 flex flex-col items-center overflow-hidden">
      {/* 🔹 Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10"
      >
        {/* Purple Blob */}
        <motion.div
          animate={{ x: [0, 120, -120, 0], y: [0, -60, 60, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute w-[650px] h-[650px] bg-purple-600/20 rounded-full blur-[160px] top-[-180px] left-[-180px]"
        />

        {/* Gray Blob */}
        <motion.div
          animate={{ x: [0, -100, 100, 0], y: [0, 70, -70, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute w-[550px] h-[550px] bg-gray-500/20 rounded-full blur-[140px] bottom-[-180px] right-[-180px]"
        />
      </motion.div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-zinc-900 dark:text-white relative z-10">
        My <span className="text-purple-500">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="group relative rounded-3xl overflow-hidden shadow-lg bg-white/10 dark:bg-zinc-900/40 border border-white/20 dark:border-zinc-800 hover:shadow-purple-500/30 transition-all"
          >
            {/* Project Image */}
            <div className="relative h-60 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-200 mb-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-purple-400 transition text-sm"
                >
                  <FaGithub size={16} /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-purple-400 transition text-sm"
                >
                  <FaExternalLinkAlt size={14} /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
