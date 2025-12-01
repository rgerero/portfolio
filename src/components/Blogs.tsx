// src/components/Blogs.tsx (Styling Reworked)
// import React from 'react';

function Blogs() {
  return (
    // Reverted section bg to main page bg. Removed rounded corners from section.
    <section id="blogs" className="min-h-screen flex items-center py-20 bg-gray-900 dark:bg-black p-8 transition-colors duration-300">
      {/* Added inner div to act as the card with the specific background/shadow/border */}
      <div className="container mx-auto bg-gray-800 dark:bg-gray-900 shadow-lg rounded-lg p-8 transition-colors duration-300 border border-gray-700">
        <h2 className="text-3xl font-bold mb-4 text-white">Blogs & Learnings</h2>
        <p className="text-gray-400 mb-6">
          A place where I document my journey, troubleshoot complex issues, and share insights from my pet projects.
        </p>
        <div className="space-y-4">
          <article className="border-b border-gray-700 pb-4">
            <h3 className="text-xl font-semibold text-cyan-400">In-progress...</h3>
            <p className="text-gray-500 text-sm">pending</p>
          </article>
          <article className="border-b border-gray-700 pb-4">
            <h3 className="text-xl font-semibold text-cyan-400">Pending</h3>
            <p className="text-gray-500 text-sm">pending</p>
          </article>
          <article className="border-b border-gray-700 pb-4">
            <h3 className="text-xl font-semibold text-cyan-400">Pending</h3>
            <p className="text-gray-500 text-sm">pending</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
