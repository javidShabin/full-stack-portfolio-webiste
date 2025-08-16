"use client"

import { useTheme } from "next-themes";
import React from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
      className="border border-white cursor-pointer"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle theme
      </button>
    </div>
  );
}
