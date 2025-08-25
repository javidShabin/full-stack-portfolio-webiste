"use client"

import Hero from "@/components/Hero";
import React from "react";
import AboutPage from "./about/page";
import SkillsPage from "./skills/skills";
import ProjectsPage from "./project/page";
import ContactPage from "./contact/page";
import BlogPage from "./blog/page";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <BlogPage />
      <ContactPage />
    </div>
  );
}
