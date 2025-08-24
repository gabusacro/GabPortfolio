'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function InteractiveHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Throttle mouse tracking to 8fps (120ms) for better performance
    let timeoutId: NodeJS.Timeout;
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }, 120);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {/* Custom cursor effect - optimized performance */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
        
        {/* Profile Photo as Background Element */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="relative">
            {/* Large photo background */}
            <div className="w-[600px] h-[600px] rounded-full overflow-hidden opacity-50">
              <img
                src="/profile.png"
                alt="Gabriel Sacro"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Subtle geometric overlays */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-16 left-16 w-24 h-24 border border-orange-400/20 rotate-45"></div>
              <div className="absolute bottom-16 right-16 w-20 h-20 border border-red-400/20 -rotate-45"></div>
            </div>
          </div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 border border-emerald-400/30 transform rotate-12 animate-spin"></div>
        
        {/* Main content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-300 text-sm font-medium">Available for new opportunities</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent whitespace-nowrap">
                GABRIEL SACRO
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Full-Stack Developer crafting{' '}
              <span className="text-cyan-300 font-semibold">innovative digital experiences</span>
              {' '}with cutting-edge technologies
            </p>
            
            {/* Description */}
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transforming complex ideas into elegant, scalable solutions. Specializing in modern web applications, 
              mobile development, and cloud infrastructure that drive business growth.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#projects" 
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span>View My Work</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-3 border border-cyan-400/30 text-cyan-300 hover:text-white hover:bg-cyan-500/20 font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                <span>Get In Touch</span>
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
