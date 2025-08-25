"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, BookOpen, Code, Rocket, GraduationCap, Briefcase } from "lucide-react";

export default function BlogPage() {
  const journey = [
    {
      year: "2022",
      title: "Where It All Began",
      description: "Started as a Sociology student. My parents' financial struggles kept me away from IT, but my passion for technology never faded.",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
      achievements: ["Sociology Student", "Passion for Technology", "Self-Motivation"]
    },
    {
      year: "2023",
      title: "Learning on a Phone",
      description: "With no laptop, I studied HTML, CSS, and JavaScript on my mobile. It was challenging, but consistency kept me moving forward.",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      achievements: ["HTML & CSS", "JavaScript Basics", "Mobile Learning"]
    },
    {
      year: "2023",
      title: "My First Laptop",
      description: "Finally got a laptop! I dove deep into JavaScript, then explored React, Tailwind, Node, and Express to build real projects.",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
      achievements: ["React Development", "Node.js & Express", "Real Projects"]
    },
    {
      year: "2024",
      title: "Leveling Up",
      description: "Discovered Next.js, Nest.js, and Docker. Built more scalable apps, and proved that self-learning is powerful.",
      icon: GraduationCap,
      color: "from-orange-500 to-red-500",
      achievements: ["Next.js & Nest.js", "Docker", "Scalable Apps"]
    },
    {
      year: "2025",
      title: "Internship & Beyond",
      description: "Started as a teaching + developer intern in a startup. My journey shows how passion and persistence can change everything.",
      icon: Briefcase,
      color: "from-indigo-500 to-purple-500",
      achievements: ["Teaching Intern", "Developer Role", "Startup Experience"]
    }
  ];

  const blogPosts = [
    {
      title: "My Journey from Sociology to Software Development",
      excerpt: "How I transitioned from a non-IT background to becoming a full-stack developer through self-learning and determination.",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "Career Journey",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Learning to Code on a Mobile Phone",
      excerpt: "The challenges and strategies I used to learn programming without a laptop, and how it shaped my learning approach.",
      date: "March 10, 2025",
      readTime: "4 min read",
      category: "Learning",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Building My First Full-Stack Application",
      excerpt: "A detailed walkthrough of my first complete web application and the lessons learned during development.",
      date: "March 5, 2025",
      readTime: "7 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -80, 80, 0],
          }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="absolute w-[700px] h-[700px] bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-purple-500/15 rounded-full blur-[200px] top-[-200px] left-[-200px]"
        />
        <motion.div
          animate={{
            x: [0, -120, 120, 0],
            y: [0, 100, -100, 0],
          }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-500/15 via-cyan-500/15 to-blue-500/15 rounded-full blur-[220px] bottom-[-200px] right-[-200px]"
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
              📚 My Journey & Thoughts
            </span>
          </motion.div>
          
          <h2 className="heading-lg mb-6">
            My <span className="gradient-text">Journey</span>
          </h2>
          
          <p className="body-lg max-w-3xl mx-auto">
            A continuous path of learning, passion, and self-growth from a non-IT
            background to becoming a full-stack developer. Every step has been a lesson.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 via-blue-400 to-cyan-400 rounded-full" />

            <div className="space-y-16">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-96 glass-strong rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:scale-105 ${
                    index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                  }`}>
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Year Badge */}
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-500/20 border border-purple-500/30 mb-4">
                      {item.year}
                    </span>
                    
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <div className="w-2 h-2 rounded-full bg-purple-500" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-4 border-white dark:border-slate-900 shadow-lg z-10" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="heading-md mb-4">
              Latest <span className="gradient-text">Articles</span>
            </h3>
            <p className="body-md text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Sharing insights, lessons learned, and thoughts on my development journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <article className="glass-strong rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                  {/* Post Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {post.title}
                    </h4>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium group-hover:gap-3 transition-all duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="glass-strong rounded-3xl p-8 max-w-2xl mx-auto">
              <h4 className="heading-sm mb-4">
                Want to Read More?
              </h4>
              <p className="body-md text-slate-600 dark:text-slate-400 mb-6">
                I regularly share insights about my development journey, technical challenges, and lessons learned.
              </p>
              <a
                href="https://medium.com/@yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Follow My Blog
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
