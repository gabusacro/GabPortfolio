import Link from 'next/link';
import { ArrowRight, Github, Globe } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, admin dashboard, and inventory management. Built with modern technologies for scalability and performance.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    image: 'https://picsum.photos/600/400?random=1',
    featured: true,
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'Full-Stack',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, team collaboration, and progress tracking. Features include drag-and-drop, notifications, and reporting.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    image: 'https://picsum.photos/600/400?random=2',
    featured: true,
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'Full-Stack',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Modern portfolio website built with Next.js and Tailwind CSS. Features smooth animations, responsive design, and optimized performance.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    image: 'https://picsum.photos/600/400?random=3',
    featured: true,
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'Frontend',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location-based forecasts, interactive maps, and historical data visualization.',
    tech: ['React', 'OpenWeather API', 'Chart.js', 'CSS Modules'],
    image: 'https://picsum.photos/600/400?random=4',
    featured: false,
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'Frontend',
  },
  {
    id: 5,
    title: 'API Gateway Service',
    description: 'Microservices API gateway with authentication, rate limiting, and request routing. Built for high-performance enterprise applications.',
    tech: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker'],
    image: 'https://picsum.photos/600/400?random=5',
    featured: false,
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'Backend',
  },
  {
    id: 6,
    title: 'Mobile Fitness App',
    description: 'Cross-platform mobile application for fitness tracking with workout plans, progress monitoring, and social features.',
    tech: ['React Native', 'Firebase', 'Redux', 'Native Base'],
    image: 'https://picsum.photos/600/400?random=6',
    featured: false,
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'Mobile',
  },
];

const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'Mobile'];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              My Projects
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Showcasing my best work and technical expertise across various technologies and domains.
            </p>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-400 to-accent-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-primary-100 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article key={project.id} className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[16/9] w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 rounded-full bg-primary-600 px-3 py-1 text-xs font-medium text-white">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 left-4 rounded-full bg-gray-800/80 text-white px-3 py-1 text-xs font-medium">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <Link
                        href={project.github}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </Link>
                      <Link
                        href={project.live}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="h-5 w-5" />
                      </Link>
                    </div>
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      View Details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Interested in working together on a project?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
            >
                              Let&apos;s Discuss Your Project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
