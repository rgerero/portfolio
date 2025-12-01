// src/App.tsx (Footer Reverted to Simple Layout)
// import React from 'react';
import { ThemeProvider } from './context/ThemeContext'; 
import Home from './components/Home'
import AboutMe from './components/AboutMe';
// import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import './index.css';
// Ensure the Heart icon is imported
import { Heart } from 'lucide-react'; 

// Simple Footer Component
function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        // Use bg-black matching the site theme
        <footer className="bg-black text-white pb-4 transition-colors duration-300">
            {/* Constrain width and center content */}
            <div className="max-w-6xl mx-auto pt-10 px-4 md:px-0">                 
                {/* Bottom Bar: Copyright and Built With Info */}
                <div className="flex justify-between items-center text-xs text-gray-500">
                    <p>© {currentYear} Alfred Ryan Gerero. All rights reserved.</p>
                    <p className="flex items-center">
                        Built with <Heart className="w-3 h-3 mx-1 text-red-500 fill-red-500" /> using React & Tailwind CSS
                    </p>
                </div>

            </div>
        </footer>
    );
}

// App Component (remains the same as previous steps)
function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-900 dark:bg-black font-sans transition-colors duration-300">
        
        <header className="bg-gray-800 dark:bg-gray-900 shadow-lg p-4 sticky top-0 z-10 transition-colors duration-300">
          <nav className="max-w-6xl mx-auto flex justify-center items-center">
            {/* <div className="text-2xl font-bold text-white">Alfred Gerero</div> */}
            <div className="flex items-center space-x-4">
              <a href="#home" className="mx-2 text-gray-400 hover:text-cyan-400 hidden md:inline">Home</a>
              <a href="#about" className="mx-2 text-gray-400 hover:text-cyan-400 hidden md:inline">About</a>
              {/* <a href="#projects" className="mx-2 text-gray-400 hover:text-cyan-400 hidden md:inline">Projects</a> */}
              <a href="#blogs" className="mx-2 text-gray-400 hover:text-cyan-400 hidden md:inline">Blogs</a>
              <a href="#contact" className="mx-2 text-gray-400 hover:text-cyan-400">Contact</a>
              {/* <ThemeToggle /> */}
            </div>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto p-4 md:p-8">
          <Home /> 
          <AboutMe />
          {/* <Projects /> */}
          <Blogs />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
