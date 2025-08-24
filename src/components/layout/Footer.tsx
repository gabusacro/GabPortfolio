'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Sparkles, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-cyan-400/20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-7 w-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  GAB
                </span>
                <span className="text-sm font-medium text-gray-400 -mt-1">
                  PORTFOLIO
                </span>
              </div>
            </Link>
            <p className="text-gray-300 max-w-md leading-relaxed mb-6">
              Full-stack developer passionate about creating innovative digital solutions with cutting-edge technologies. 
              Transforming ideas into reality, one line of code at a time.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://github.com" className="group p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/40 hover:to-purple-500/40 transition-all duration-300 backdrop-blur-sm">
                <Github className="h-5 w-5 text-cyan-300 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="https://linkedin.com" className="group p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-lg hover:bg-gradient-to-r hover:from-purple-500/40 hover:to-pink-500/40 transition-all duration-300 backdrop-blur-sm">
                <Linkedin className="h-5 w-5 text-purple-300 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="mailto:contact@example.com" className="group p-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 rounded-lg hover:bg-gradient-to-r hover:from-emerald-500/40 hover:to-teal-500/40 transition-all duration-300 backdrop-blur-sm">
                <Mail className="h-5 w-5 text-emerald-300 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="group text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="group text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  My Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
              Services
            </h3>
            <ul className="space-y-4">
              <li className="text-gray-400">Frontend Development</li>
              <li className="text-gray-400">Backend Development</li>
              <li className="text-gray-400">Full-Stack Solutions</li>
              <li className="text-gray-400">Mobile Development</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-cyan-400/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © 2024 Gab Portfolio. Made with <Heart className="h-4 w-4 text-red-400" /> and lots of ☕
            </p>
            
            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              className="group p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/40 hover:to-purple-500/40 transition-all duration-300 backdrop-blur-sm"
            >
              <ArrowUp className="h-5 w-5 text-cyan-300 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
