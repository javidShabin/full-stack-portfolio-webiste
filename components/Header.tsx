"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/project" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      {/* Desktop Header (Top Glassy Nav) */}
      <header className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50">
        <div className="flex items-center justify-between px-10 py-4 rounded-2xl
        backdrop-blur-2xl bg-white/40 dark:bg-zinc-900/40 border border-white/20 dark:border-white/10 
        shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
          >
            MyPortfolio
          </Link>

          {/* Desktop Nav */}
          <nav className="flex space-x-10 text-base font-medium">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Link
                    href={link.href}
                    className={`${
                      isActive
                        ? "text-zinc-900 dark:text-white font-semibold"
                        : "text-zinc-600 dark:text-zinc-300"
                    } transition-colors`}
                  >
                    {link.name}
                  </Link>

                  {/* Active Underline */}
                  {isActive && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-zinc-900 dark:bg-white"
                    />
                  )}
                </motion.div>
              );
            })}
          </nav>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-full 
              bg-white/40 dark:bg-zinc-800/40 border border-white/20 dark:border-white/10 
              hover:scale-110 transition-transform backdrop-blur-md shadow-md"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "light" ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-5 h-5 text-yellow-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-5 h-5 text-blue-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          )}
        </div>
      </header>

      {/* Mobile Bottom Nav (Glassy Dock) */}
      <nav className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 w-[94%] max-w-lg 
      z-50 flex justify-around items-center py-3 rounded-2xl 
      backdrop-blur-2xl bg-white/40 dark:bg-zinc-900/40 border border-white/20 dark:border-white/10 
      shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={index}
              href={link.href}
              className={`text-sm font-medium ${
                isActive
                  ? "text-zinc-900 dark:text-white font-semibold"
                  : "text-zinc-600 dark:text-zinc-300"
              }`}
            >
              {link.name}
            </Link>
          );
        })}

        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full 
            bg-white/40 dark:bg-zinc-800/40 border border-white/20 dark:border-white/10 
            hover:scale-110 transition-transform backdrop-blur-md shadow-md"
          >
            {theme === "light" ? (
              <Sun className="w-4 h-4 text-yellow-500" />
            ) : (
              <Moon className="w-4 h-4 text-blue-400" />
            )}
          </button>
        )}
      </nav>
    </>
  );
}
