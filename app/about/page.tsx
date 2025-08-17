"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center text-center px-6 md:px-12 py-28 overflow-hidden">
      
      {/* Animated Background Blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10"
      >
        <motion.div
          animate={{
            x: [0, 120, -120, 0],
            y: [0, -60, 60, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          className="absolute w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[160px] top-[-150px] left-[-150px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 70, -70, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="absolute w-[500px] h-[500px] bg-gray-500/20 rounded-full blur-[140px] bottom-[-150px] right-[-150px]"
        />
      </motion.div>

      {/* About Content */}
      <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
        About <span className="text-purple-500">Me</span>
      </h2>
      <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
        I’m <span className="font-semibold">Javid Shabin</span>, a{" "}
        <span className="text-purple-500 font-medium">MERN Stack Developer</span> 
        with a strong passion for technology and problem-solving.  
        Coming from a non-IT background, I’ve proven myself as a{" "}
        <span className="font-semibold">self-taught, highly motivated, and continuous learner</span>,  
        dedicated to mastering modern web development.  
        I love turning ideas into scalable, user-friendly applications while constantly pushing myself 
        to grow, adapt, and explore new technologies.
      </p>
    </section>
  );
}
