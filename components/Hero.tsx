"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center text-center px-6 md:px-12 py-28 overflow-hidden">
      
      {/* Animated Background Blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10"
      >
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="absolute w-[700px] h-[700px] bg-purple-600/25 rounded-full blur-[180px] top-[-200px] left-[-200px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 60, -60, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          className="absolute w-[600px] h-[600px] bg-gray-500/25 rounded-full blur-[160px] bottom-[-200px] right-[-200px]"
        />
      </motion.div>

      {/* Hero Content */}
      <span className="text-sm font-medium tracking-wide text-purple-400 uppercase">
        Hi, I’m Javid Shabin
      </span>
      <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-gray-300">
        Full Stack <span className="text-purple-500">MERN Developer</span>
      </h1>
      <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
        I build simple, fast, and modern web applications.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="ghost"
          className="px-6 py-3 text-lg rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
        >
          View Projects
        </Button>
        <Button
          variant="outline"
          className="px-6 py-3 text-lg rounded-full border-zinc-300 dark:border-zinc-700 bg-white/30 dark:bg-zinc-800/30 text-zinc-800 dark:text-zinc-200"
        >
          Download Resume
        </Button>
      </div>
    </section>
  );
}
