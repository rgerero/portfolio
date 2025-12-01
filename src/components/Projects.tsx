// src/components/Projects.tsx (min-h-screen added)
// import React from 'react';

function Projects() {
  const projects = [
    { id: 1, title: "CI/CD Automation Suite", description: "Developed a comprehensive automation suite using Jenkins and Docker." },
    { id: 2, title: "Cloud Migration Strategy", description: "Spearheaded migration of legacy systems to AWS infrastructure." },
    { id: 3, title: "React Portfolio Site", description: "Building this very website using React, Tailwind, and Vite." },
  ];

  return (
    // Added min-h-screen and flex utilities
    <section id="projects" className="min-h-screen flex items-center py-20 bg-gray-900 dark:bg-black p-8 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white">Pet Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-700">
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <a href="#" className="mt-4 inline-block text-cyan-500 hover:text-cyan-400">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
