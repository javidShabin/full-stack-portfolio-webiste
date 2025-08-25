"use client";

import { motion } from "framer-motion";
import { Code, Globe, Lightbulb, Users, Award, Zap } from "lucide-react";

export default function AboutPage() {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "Building complete web applications from frontend to backend with modern technologies.",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description:
        "Expert in React, Node.js, MongoDB, and other cutting-edge web technologies.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Creative approach to complex technical challenges with innovative solutions.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Excellent communication skills and experience working in agile development teams.",
    },
    {
      icon: Award,
      title: "Continuous Learning",
      description:
        "Self-taught developer committed to staying updated with latest industry trends.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Efficient development process ensuring timely project completion.",
    },
  ];

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Built" },
    { number: "15+", label: "Technologies" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12">
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800" />
      </div>

      <div className="max-w-6xl mx-auto">
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
              About Me
            </span>
          </motion.div>

          <h2 className="heading-lg mb-6">
            Crafting Digital <span className="gradient-text">Experiences</span>
          </h2>

          <p className="body-lg max-w-3xl mx-auto">
            I&apos;m{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              Javid Shabin
            </span>
            , a passionate{" "}
            <span className="font-semibold">Full Stack Developer</span> with a
            unique journey from non-IT background to becoming a skilled web
            developer. My passion for technology drives me to create exceptional
            digital solutions.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md mb-6 text-left">
              My <span className="gradient-text">Journey</span>
            </h3>

            <div className="space-y-6 text-left">
              <p className="body-md">
                Coming from a non-IT background, I&apos;ve proven myself as a{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  self-taught, highly motivated developer
                </span>{" "}
                dedicated to mastering modern web development.
              </p>

              <p className="body-md">
                I love turning complex ideas into{" "}
                <span className="font-semibold">
                  scalable, user-friendly applications
                </span>{" "}
                while constantly pushing myself to grow, adapt, and explore new
                technologies.
              </p>

              <p className="body-md">
                My approach combines{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  technical expertise
                </span>{" "}
                with{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  creative problem-solving
                </span>
                , ensuring every project exceeds expectations.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"
                >
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
                <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                  Full Stack Developer
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Specializing in modern web technologies and creating seamless
                  user experiences
                </p>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-md"
              >
                <Globe className="w-10 h-10 text-blue-500" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-md"
              >
                <Zap className="w-8 h-8 text-indigo-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-md text-center mb-12">
            What I <span className="gradient-text">Bring</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="card p-6 text-center group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-all duration-300">
                  <highlight.icon className="w-8 h-8 text-blue-500" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">
                  {highlight.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
