// src/components/Home.tsx 
// import React from 'react';
import { ChevronRight } from 'lucide-react';

function Home() {
  return (
    // Use deep black background that matches the site-wide theme
    // <section id="projects" className="py-20 bg-gray-900 dark:bg-black p-8 transition-colors duration-300"></section>
    // <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white p-4">
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 dark:bg-black text-white p-4">
      <div className="text-center max-w-4xl">

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-gray-100">
          Hi, I'm Alfred
        </h1>
        
        {/* The first sentence stands out with the cyan accent color */}
        <p className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-4 animate-fadeIn">
          I'm a Full Stack Software Engineer & DevOps Specialist
        </p>

        {/* Muted gray text for main description */}
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Building scalable systems with expertise in <strong className="text-cyan-400">CI/CD pipelines</strong>, cloud architecture, and modern web technologies.
        </p>

        <a
          href="#contact"
          // Cyan accent button style for consistency
          className="inline-flex items-center bg-cyan-600 text-gray-900 py-3 px-8 rounded-lg shadow-xl hover:bg-cyan-500 transition duration-300 transform hover:scale-105 text-lg font-semibold"
        >
          Get In Touch
          <ChevronRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

export default Home;
