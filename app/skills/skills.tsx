"use client";

import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaDocker, FaDatabase,
  FaHtml5, FaCss3Alt, FaJs
} from "react-icons/fa";
import {
  SiNextdotjs, SiMongodb, SiTailwindcss,
  SiGithub, SiExpress
} from "react-icons/si";

export default function SkillsPage() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: "Advanced" },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: "Advanced" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: "Advanced" },
    { name: "React", icon: <FaReact className="text-sky-500" />, level: "Advanced" },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, level: "Beginner" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: "Advanced" },
    { name: "Express.js", icon: <SiExpress className="text-black dark:text-white" />, level: "Advanced" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: "Advanced" },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" />, level: "Advanced" },
    { name: "Docker", icon: <FaDocker className="text-blue-500" />, level: "Learning" },
    { name: "Git & GitHub", icon: <SiGithub className="text-gray-800 dark:text-white" />, level: "Intermediate" },
    { name: "Databases", icon: <FaDatabase className="text-amber-600" />, level: "Intermediate" },
  ];

  return (
    <section className="relative min-h-screen px-6 py-20 flex flex-col items-center overflow-hidden">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10"
      >
        <motion.div
          animate={{ x: [0, 120, -120, 0], y: [0, -60, 60, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute w-[650px] h-[650px] bg-purple-600/20 rounded-full blur-[160px] top-[-180px] left-[-180px]"
        />
        <motion.div
          animate={{ x: [0, -100, 100, 0], y: [0, 70, -70, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute w-[550px] h-[550px] bg-gray-500/20 rounded-full blur-[140px] bottom-[-180px] right-[-180px]"
        />
      </motion.div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-zinc-900 dark:text-white text-center">
        Technical <span className="text-purple-500">Skills</span>
      </h2>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center 
                       p-6 sm:p-8 lg:p-5 xl:p-4   {/* ⬅ reduce padding on large screens */}
                       w-full rounded-2xl 
                       bg-white/10 dark:bg-zinc-900/20 
                       backdrop-blur-xl border border-white/20 dark:border-zinc-700/40
                       shadow-md hover:shadow-purple-500/40 
                       transition-all duration-300
                       min-h-[180px] sm:min-h-[200px] lg:min-h-[160px] xl:min-h-[150px]"  // ⬅ reduce height on larger screens
          >
            <div className="text-5xl sm:text-6xl lg:text-5xl mb-3">{skill.icon}</div>
            <h3 className="text-lg sm:text-xl lg:text-base font-semibold text-zinc-800 dark:text-zinc-200">
              {skill.name}
            </h3>
            <p className="text-sm sm:text-base lg:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              {skill.level}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
