"use client";

import { motion } from "framer-motion";

export default function BlogPage() {
  const journey = [
    {
      year: "2022",
      title: "Where It All Began",
      desc: "Started as a Sociology student. My parents’ financial struggles kept me away from IT, but my passion for technology never faded.",
    },
    {
      year: "2023",
      title: "Learning on a Phone",
      desc: "With no laptop, I studied HTML, CSS, and JavaScript on my mobile. It was challenging, but consistency kept me moving.",
    },
    {
      year: "2023",
      title: "My First Laptop",
      desc: "Finally got a laptop! I dove deep into JavaScript, then explored React, Tailwind, Node, and Express to build real projects.",
    },
    {
      year: "2024",
      title: "Leveling Up",
      desc: "Discovered Next.js, Nest.js, and Docker. Built more scalable apps, and proved that self-learning is powerful.",
    },
    {
      year: "2025",
      title: "Internship & Beyond",
      desc: "Started as a teaching + developer intern in a startup. My journey shows how passion and persistence can change everything.",
    },
  ];

  return (
    <section className="relative min-h-screen px-6 md:px-12 py-28 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -80, 80, 0],
          }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[180px] top-[-150px] left-[-150px]"
        />
        <motion.div
          animate={{
            x: [0, -120, 120, 0],
            y: [0, 100, -100, 0],
          }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="absolute w-[700px] h-[700px] bg-gray-500/20 rounded-full blur-[200px] bottom-[-150px] right-[-150px]"
        />
      </motion.div>

      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-extrabold text-zinc-900 dark:text-white">
          My <span className="text-purple-500">Journey</span>
        </h2>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
          A continuous path of learning, passion, and self-growth from a non-IT
          background to becoming a MERN stack developer.
        </p>
      </div>

      {/* Vertical Story Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-purple-400 to-purple-700 rounded-full" />

        <div className="space-y-16">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content Box */}
              <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-lg border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-xl max-w-sm">
                <span className="text-sm font-bold text-purple-500">
                  {item.year}
                </span>
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mt-1">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Connector Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-500 border-4 border-white dark:border-zinc-900 shadow-md" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
