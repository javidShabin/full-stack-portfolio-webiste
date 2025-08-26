"use client";

import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaDocker, FaDatabase,
  FaHtml5, FaCss3Alt, FaJs, FaGitAlt
} from "react-icons/fa";
import {
  SiNextdotjs, SiMongodb, SiTailwindcss,
  SiExpress, SiTypescript, SiPostgresql,
  SiRedux, SiJest, SiWebpack, SiVercel, SiNetlify
} from "react-icons/si";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      skills: [
        { name: "React", icon: <FaReact className="text-sky-500" />, level: "Advanced", color: "from-sky-500 to-blue-600" },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, level: "Advanced", color: "from-gray-800 to-gray-600" },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: "Intermediate", color: "from-blue-600 to-blue-700" },
        { name: "Redux", icon: <SiRedux className="text-purple-600" />, level: "Intermediate", color: "from-purple-600 to-purple-700" },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: "Advanced", color: "from-orange-500 to-red-500" },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: "Advanced", color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: "Advanced", color: "from-yellow-400 to-orange-500" },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" />, level: "Advanced", color: "from-cyan-400 to-blue-500" },
      ]
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications and APIs",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: "Advanced", color: "from-green-600 to-green-700" },
        { name: "Express.js", icon: <SiExpress className="text-black dark:text-white" />, level: "Advanced", color: "from-gray-800 to-gray-600" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: "Advanced", color: "from-green-500 to-green-600" },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" />, level: "Intermediate", color: "from-blue-500 to-blue-600" },
        { name: "REST APIs", icon: <FaDatabase className="text-amber-600" />, level: "Advanced", color: "from-amber-600 to-orange-600" },
      ]
    },
    {
      title: "Development Tools",
      description: "Essential tools and platforms for modern development",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600" />, level: "Advanced", color: "from-orange-600 to-red-600" },
        { name: "Docker", icon: <FaDocker className="text-blue-500" />, level: "Learning", color: "from-blue-500 to-blue-600" },
        { name: "Jest", icon: <SiJest className="text-red-500" />, level: "Intermediate", color: "from-red-500 to-red-600" },
        { name: "Webpack", icon: <SiWebpack className="text-blue-500" />, level: "Learning", color: "from-blue-500 to-blue-600" },
        { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" />, level: "Intermediate", color: "from-gray-800 to-gray-600" },
        { name: "Netlify", icon: <SiNetlify className="text-green-500" />, level: "Intermediate", color: "from-green-500 to-green-600" },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "text-green-500";
      case "Intermediate": return "text-yellow-500";
      case "Learning": return "text-blue-500";
      default: return "text-gray-500";
    }
  };

  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 120, -120, 0], y: [0, -60, 60, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute w-[700px] h-[700px] bg-gradient-to-r from-purple-500/15 via-blue-500/15 to-purple-500/15 rounded-full blur-[200px] top-[-200px] left-[-200px]"
        />
        <motion.div
          animate={{ x: [0, -100, 100, 0], y: [0, 70, -70, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-500/15 via-cyan-500/15 to-blue-500/15 rounded-full blur-[180px] bottom-[-200px] right-[-200px]"
        />
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
            className="inline-flex items-center px-6 py-3 rounded-full glass-strong mb-8"
          >
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              🛠️ Technical Expertise
            </span>
          </motion.div>
          
          <h2 className="heading-lg mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          
          <p className="body-lg max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that enable me to 
            build exceptional digital experiences from concept to deployment.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <h3 className="heading-md mb-4">
                  {category.title}
                </h3>
                <p className="body-md text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group cursor-pointer"
                  >
                    <div className="glass-strong rounded-2xl p-6 text-center h-full transition-all duration-300 hover:shadow-2xl">
                      {/* Skill Icon */}
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                        <div className="text-3xl">{skill.icon}</div>
                      </div>
                      
                      {/* Skill Name */}
                      <h4 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                        {skill.name}
                      </h4>
                      
                      {/* Skill Level */}
                      <div className="flex items-center justify-center gap-2">
                        <span className={`text-sm font-medium ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mt-4">
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.level === "Advanced" ? "90%" : skill.level === "Intermediate" ? "70%" : "40%" }}
                            transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glass-strong rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="heading-md mb-4">
              Always <span className="gradient-text">Learning</span>
            </h3>
            <p className="body-md text-slate-600 dark:text-slate-400 mb-6">
              Technology evolves rapidly, and I&apos;m committed to staying at the forefront. 
              I&apos;m currently exploring new frameworks, tools, and methodologies to enhance my skillset.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["GraphQL", "AWS", "Kubernetes", "Machine Learning", "Web3"].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 glass rounded-full text-sm font-medium text-slate-600 dark:text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
