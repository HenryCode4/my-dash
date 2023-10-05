


import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className=" w-[3rem] h-[3rem] backdrop-blur-[0.5rem] shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ?  <Moon /> : <Sun /> }
    </button>
  );
}