import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const codeString = `const developer = {
  name: "Ayush Verma",
  role: "Full Stack Developer",
  skills: [
    "Next.js", "React",
    "Node.js", "TypeScript",
    "AWS", "Azure"
  ],
  passion: "Building Scalable Solutions"
};`;

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-purple/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="text-left space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-purple">
              Digital Experiences
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-lg">
            Results-driven Full Stack Developer with 2 years of experience in designing, developing, and deploying MERN stack applications.
          </p>

          <div className="flex gap-4 pt-4">
            <Link to="projects" smooth={true} duration={500} className="px-8 py-3 bg-electric-blue hover:bg-blue-600 text-white rounded-lg font-medium transition-all cursor-pointer shadow-lg shadow-blue-500/25">
              View Work
            </Link>
            <a href="https://github.com/AyushVe99" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-700 rounded-lg hover:border-gray-500 hover:bg-white/5 transition-all text-gray-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ayush-verma-08b125227/" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-700 rounded-lg hover:border-gray-500 hover:bg-white/5 transition-all text-gray-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* 3D Code Block */}
        <div className="relative group perspective-1000 hidden md:block">
          <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue to-electric-purple rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative transform rotate-y-12 rotate-x-6 transition-transform duration-500 hover:rotate-0">
            <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-gray-800">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-gray-500 font-mono">developer.ts</span>
              </div>
              <div className="p-4">
                <SyntaxHighlighter
                  language="typescript"
                  style={atomDark}
                  customStyle={{
                    background: 'transparent',
                    padding: 0,
                    fontSize: '0.9rem',
                    lineHeight: '1.5'
                  }}
                >
                  {codeString}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
