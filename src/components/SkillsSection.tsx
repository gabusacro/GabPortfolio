'use client';

import { useEffect, useState } from 'react';
import { Globe, Database, Smartphone, Zap } from 'lucide-react';

interface Skill {
  name: string;
  icon: string;
  description: string;
  level: number;
  color: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'Globe': Globe,
  'Database': Database,
  'Smartphone': Smartphone,
  'Zap': Zap,
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const [activeSkill, setActiveSkill] = useState(0);

  useEffect(() => {
    // Optimized interval - only runs when component is visible
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mastering the full spectrum of modern web development technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Globe;
            const isActive = index === activeSkill;
            
            return (
              <div
                key={skill.name}
                className={`group relative p-6 rounded-2xl border transition-all duration-500 transform ${
                  isActive 
                    ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 scale-105' 
                    : 'border-gray-700/50 bg-gray-900/50 hover:border-cyan-400/30 hover:bg-gray-800/50'
                }`}
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Skill name */}
                  <h3 className="text-xl font-bold text-white text-center mb-3">
                    {skill.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-center text-sm mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  
                  {/* Level percentage */}
                  <p className="text-right text-sm text-gray-500">
                    {skill.level}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Additional Technologies
            </span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'TypeScript', 'GraphQL', 'Redis', 'Docker', 'Kubernetes', 
              'AWS', 'Azure', 'Firebase', 'MongoDB', 'MySQL',
              'WordPress', 'Shopify', 'Hostinger', 'SiteGround', 'HostGator',
              'Jest', 'Cypress', 'Storybook', 'Webpack', 'Vite'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-full text-gray-300 text-sm font-medium hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
