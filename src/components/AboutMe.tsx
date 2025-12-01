// src/components/AboutMe.tsx (Description and Alignment Updated)
// import React from 'react';
import { Code2, Cloud, Workflow, Zap, LucideIcon } from 'lucide-react';

interface HighlightItem {
    icon: LucideIcon;
    title: string;
    description: string;
}

const highlights: HighlightItem[] = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'React, .NET, and modern web technologies'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'AWS, Docker, and Kubernetes'
    },
    {
      icon: Workflow,
      title: 'CI/CD Pipelines',
      description: 'Gitlab, Azure DevOps, and Jenkins'
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'PowerShell, Bash, and Python'
    }
];

function AboutMe() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-20 bg-gray-900 dark:bg-black p-8 transition-colors duration-300">
      
      <h2 className="text-4xl font-bold text-white mb-8 max-w-6xl mx-auto px-4 md:px-0">About Me</h2>

      <div className="container mx-auto bg-gray-800 dark:bg-gray-900 shadow-lg rounded-lg p-8 transition-colors duration-300 border border-gray-700">
        
        {/* Added items-start to the grid for better alignment of the two columns */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* Column 1: Updated Professional Summary */}
          <div className="space-y-4">
            <p className="text-gray-400">
              I'm a seasoned Full Stack Software Engineer and DevOps specialist with a passion for building robust, scalable systems that drive business value and operational excellence.
            </p>
            <p className="text-gray-400">
              With extensive experience in automation, CI/CD pipeline development, I specialize in transforming complex technical challenges into streamlined solutions that empower teams and accelerate delivery.
            </p>
            <p className="text-gray-400">
              My approach combines deep technical expertise with a commitment to continuous improvement, ensuring that systems are not only functional but optimized for performance, security, and maintainability.
            </p>
            <p className="text-gray-400">
              From architecting enterprise applications to implementing automated deployment pipelines, I bring a holistic perspective to software development that bridges development and operations.
            </p>
          </div>
          
          {/* Column 2: Highlights/Expertise Section */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4"> 
                {highlights.map((item) => (
                    <div 
                        key={item.title} 
                        className="h-full border-2 border-gray-700 hover:border-cyan-600 transition-all duration-300 hover:shadow-lg bg-gray-800 rounded-lg"
                    >
                        <div className="p-6 space-y-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
                                <item.icon className="w-6 h-6 text-white" /> 
                            </div>
                            <h3 className="font-semibold text-white">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
