'use client';

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons for light and dark themes

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check and apply the saved theme preference on mount
  useEffect(() => {
    const userTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (userTheme === 'dark' || (!userTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark:text-white'); // Apply dark mode
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark'); // Apply light mode
      setIsDarkMode(false);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark'); // Switch to light mode
      localStorage.setItem('theme', 'light'); // Save preference
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark'); // Switch to dark mode
      localStorage.setItem('theme', 'dark'); // Save preference
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition"
    >
      {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;
