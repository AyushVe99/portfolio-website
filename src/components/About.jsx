import React from 'react';
import { FaCode, FaGraduationCap } from 'react-icons/fa';
import { SKILLS } from '../data/constants';

function About() {
  return (
    <div className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-purple">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Technical Arsenal - Bento Grid Large Item */}
          <div className="md:col-span-2 bg-[#1e1e1e] p-8 rounded-2xl border border-white/10 hover:border-electric-blue/50 transition-colors shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <FaCode className="text-electric-blue text-2xl" />
              <h3 className="text-2xl font-bold text-white">Technical Arsenal</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                  <span className={`mb-2 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </span>
                  <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Soft Skills - Stacked */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-[#1e1e1e] p-8 rounded-2xl border border-white/10 hover:border-electric-purple/50 transition-colors shadow-lg h-full">
              <div className="flex items-center gap-3 mb-6">
                <FaGraduationCap className="text-electric-purple text-2xl" />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-white">MCA</h4>
                  <p className="text-electric-blue">IPEM Group of Institutions</p>
                  <p className="text-sm text-gray-400">2021 - 2023 | CGPA: 7.6/10</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Achievements</h4>
                  <ul className="text-sm text-gray-400 list-disc list-inside space-y-1 mt-2">
                    <li>Top 5% globally in Newton School contests (Rank: #3956)</li>
                    <li>Solved 150+ problems on LeetCode (Top 15% globally)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
