"use client";

import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    return (
    <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {({isSelected}) => (
        <>
          <Switch.Control
            className={`h-7.75 w-12.75 bg-black ${isSelected ? "bg-white text-cyan-500]" : ""}`} 
          >
            <Switch.Thumb
              className={`size-6.75 bg-black shadow-sm ${isSelected ? "ms-5.5 shadow-lg" : ""}`}
            >
              <Switch.Icon>
                {isSelected ? (
                  <FaSun className="size-4 text-cyan-600" />
                ) : (
                  <FaMoon className="size-4 text-blue-600" />
                )}
              </Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </>
      )}
    </Switch>
    );
};

export default ThemeToggle;


