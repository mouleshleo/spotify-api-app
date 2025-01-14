import "./mode.css";
import React, { useState } from "react";

function DarkMode() {
  const [mode, setMode] = useState(false);
  // 0 - dark, 1 - light

  const changeMode = () => {
    setMode((prevMode) => {
        const newMode = !prevMode; // Toggle between true (dark) and false (light)
        document.body.classList.toggle("dark", newMode); // Add "dark" if true, remove if false
        return newMode;
    });
};

const changerClassName = mode
    ? "changer border rounded-full p-2 bg-gray-800 hover:rotate-6 hover:scale-125 duration-100" // Dark mode
    : "changer border rounded-full p-2 bg-white hover:rotate-6 hover:scale-125 duration-100";  // Light mode

  return (
    <div className="fixed top-10 right-11">
      <button onClick={changeMode} className={changerClassName}>
        {mode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFF"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#FFFFFF"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default DarkMode;
