'use client';

import InteractiveHero from '@/components/InteractiveHero';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const skills = [
  { name: 'Frontend Development', icon: 'Globe', description: 'React, Next.js, TypeScript, Tailwind CSS', level: 85, color: 'from-blue-500 to-cyan-500' },
  { name: 'Backend Development', icon: 'Database', description: 'Node.js, Express, PostgreSQL, Supabase', level: 75, color: 'from-emerald-500 to-teal-500' },
  { name: 'Mobile Development', icon: 'Smartphone', description: 'React Native, Progressive Web Apps', level: 70, color: 'from-purple-500 to-pink-500' },
  { name: 'Web Platforms & Hosting', icon: 'Globe', description: 'WordPress, Shopify, Hostinger, SiteGround', level: 80, color: 'from-indigo-500 to-purple-500' },
  { name: 'DevOps & Tools', icon: 'Zap', description: 'Docker, CI/CD, AWS, Vercel', level: 65, color: 'from-orange-500 to-red-500' },
];

const featuredProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center',
    featured: true,
    github: '#',
    live: '#',
    category: 'Full-Stack',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
    featured: true,
    github: '#',
    live: '#',
    category: 'Web App',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Modern portfolio website built with Next.js and Tailwind CSS.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop&crop=center',
    featured: true,
    github: '#',
    live: '#',
    category: 'Frontend',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden pt-20">
      {/* Interactive Hero Section with Client-Side Effects */}
      <InteractiveHero />
      
      {/* Skills Section */}
      <SkillsSection skills={skills} />
      
      {/* Projects Section */}
      <ProjectsSection projects={featuredProjects} />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
