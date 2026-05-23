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
            className={`h-7.75 w-12.75 shadow-lg rounded-full border bg-white ${isSelected ? "bg-black text-cyan-500]" : ""}`} 
          >
            <Switch.Thumb
              className={`size-6.75 bg-black shadow-sm ${isSelected ? "ms-5.5 shadow-lg" : ""}`}
            >
              <Switch.Icon>
                {isSelected ? (
                  <FaSun className="size-4 text-white" />
                ) : (
                  <FaMoon className="size-4 text-white" />
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


