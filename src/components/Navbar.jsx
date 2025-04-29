import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="bg-gray-900 dark:bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Left: Brand */}
        <div className="flex-1">
            <div className="text-xl font-bold tracking-wide bg-[length:200%_200%] bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text animate-gradient-x">
                Fauzan Handoyo
            </div>
        </div>

        {/* Center: Navigation (Desktop Only) */}
        <div className="flex-1 hidden md:flex justify-center space-x-10 text-sm font-semibold tracking-wider">
          <a href="#home" className="hover:text-blue-300 transition">Home</a>
          <a href="#counter" className="hover:text-blue-300 transition">Counter</a>
          <a href="#cards" className="hover:text-blue-300 transition">Cards</a>
        </div>

        {/* Right: Toggle and Hamburger */}
        <div className="flex-1 flex justify-end items-center space-x-4">
          {/* Dark Mode Toggle */}
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                    className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 rounded-full peer dark:bg-gray-300 peer-checked:bg-blue-600 transition-colors duration-300 relative">
                    <span className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform transform peer-checked:translate-x-5" />
                </div>
            </label>


          {/* Hamburger Icon (Mobile Only) */}
          <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-gray-900 dark:bg-gray-800 px-4 pb-4">
          <ul className="space-y-2 text-sm font-medium tracking-wider">
            <li><a href="#home" className="block hover:text-blue-300">Home</a></li>
            <li><a href="#counter" className="block hover:text-blue-300">Counter</a></li>
            <li><a href="#cards" className="block hover:text-blue-300">Cards</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
