'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: Github, color: 'from-cyan-500 to-purple-500' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin, color: 'from-purple-500 to-pink-500' },
  { name: 'Email', href: 'mailto:contact@example.com', icon: Mail, color: 'from-emerald-500 to-teal-500' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-400/20' 
        : 'bg-black/40 backdrop-blur-md'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="group flex items-center gap-2">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap">
                Gabriel Sacro
              </span>
              <span className="text-xs font-medium text-gray-400 -mt-1">
                PORTFOLIO
              </span>
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-300"
            >
              {item.name}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
          ))}
        </div>

        {/* Social Links & CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-6">
          {/* Social Links */}
          <div className="flex gap-x-4">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group p-2 bg-gradient-to-r ${item.color} bg-opacity-20 border border-cyan-400/30 rounded-lg hover:bg-opacity-40 transition-all duration-300 backdrop-blur-sm`}
                aria-label={item.name}
              >
                <item.icon className="h-4 w-4 text-cyan-300 group-hover:text-white transition-colors duration-300" />
              </Link>
            ))}
          </div>
          
          {/* CTA Button */}
          <Link
            href="/contact"
            className="group relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white text-sm shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="group p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg hover:bg-opacity-40 transition-all duration-300 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-5 w-5 text-cyan-300 group-hover:text-white transition-colors duration-300" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-xl" />
          <div className="fixed inset-y-0 right-0 z-[60] w-full overflow-y-auto bg-black/90 backdrop-blur-xl border-l border-cyan-400/20 px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                                 <span className="text-lg font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap">
                   Gabriel Sacro
                 </span>
              </Link>
              <button
                type="button"
                className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg hover:bg-opacity-40 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-5 w-5 text-cyan-300" />
              </button>
            </div>
            
            <div className="flow-root">
              <div className="space-y-6">
                {/* Navigation */}
                <div className="space-y-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-lg font-semibold text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 rounded-xl transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="pt-6 border-t border-cyan-400/20">
                  <div className="flex gap-x-4 justify-center">
                    {socialLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`p-3 bg-gradient-to-r ${item.color} bg-opacity-20 border border-cyan-400/30 rounded-lg hover:bg-opacity-40 transition-all duration-300`}
                        aria-label={item.name}
                      >
                        <item.icon className="h-5 w-5 text-cyan-300" />
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Mobile CTA */}
                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
