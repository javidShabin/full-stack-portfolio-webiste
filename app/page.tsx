"use client"

import Hero from "@/components/Hero";
import React from "react";
import AboutPage from "./about/page";
import SkillsPage from "./skills/skills";

export default function Home() {

  return (
    <div>
      <Hero />
      <AboutPage />
      <SkillsPage />
    </div>
  );
}
