"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "javid.shabin@example.com",
      link: "mailto:javid.shabin@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "New York, NY, USA",
      link: "#"
    }
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/yourusername", color: "hover:text-gray-800 dark:hover:text-white" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", color: "hover:text-blue-600" },
    { name: "Twitter", url: "https://twitter.com/yourusername", color: "hover:text-blue-400" },
    { name: "Dribbble", url: "https://dribbble.com/yourusername", color: "hover:text-pink-500" }
  ];

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
              📧 Get In Touch
            </span>
          </motion.div>
          
          <h2 className="heading-lg mb-6">
            Let&apos;s Start a <span className="gradient-text">Conversation</span>
          </h2>
          
          <p className="body-lg max-w-3xl mx-auto">
            Ready to bring your ideas to life? I&apos;m always excited to discuss new projects, 
            opportunities, or just chat about technology. Let&apos;s connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="glass-strong rounded-3xl p-8">
              <h3 className="heading-md mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass border border-slate-200 dark:border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass border border-slate-200 dark:border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass border border-slate-200 dark:border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="What&apos;s this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl glass border border-slate-200 dark:border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                {/* Submit Status */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-600 dark:text-green-400"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Message sent successfully!</span>
                  </motion.div>
                )}
                
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-600 dark:text-red-400"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">Something went wrong. Please try again.</span>
                  </motion.div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="heading-md">Get In Touch</h3>
              
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 glass-strong rounded-2xl group cursor-pointer transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      {info.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="heading-md">Follow Me</h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 glass-strong hover:glass rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 transition-all duration-300"
                  >
                    <span className="text-lg font-semibold">{social.name[0]}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="glass-strong rounded-2xl p-6">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                💡 What&apos;s Next?
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                I typically respond within 24 hours. Whether you have a project in mind, 
                want to discuss opportunities, or just want to say hello, I&apos;d love to hear from you!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
