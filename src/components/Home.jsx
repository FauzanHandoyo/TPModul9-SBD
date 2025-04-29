import React, { useState, useEffect } from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-4 flex justify-center items-center"
    >
      <div className="max-w-xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 border border-gray-200 dark:border-gray-700 text-center">
        <h1 className="text-4xl font-bold bg-[length:200%_200%] bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text animate-gradient-x">
          Hi, I'm Fauzan Handoyo
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          I’m a passionate developer who enjoys crafting responsive web applications using modern tools like React. I specialize in building user-friendly, performant interfaces.
        </p>
      </div>
    </section>
  );
};

export default Home;
