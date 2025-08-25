"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, BookOpen, Code, Rocket, GraduationCap, Briefcase } from "lucide-react"; // removed MapPin ✅

export default function BlogPage() {
  const journey = [
    {
      year: "2022",
      title: "Where It All Began",
      description: "Started as a Sociology student. My parents&apos; financial struggles kept me away from IT, but my passion for technology never faded.", // fixed apostrophe
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
              📚 My Journey &amp; Thoughts
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
        {/* ... (rest of your timeline/blog post code unchanged) ... */}
      </div>
    </section>
  );
}
