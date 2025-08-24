import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const contactMethods = [
  {
    name: 'Email',
    value: 'contact@example.com',
    href: 'mailto:contact@example.com',
    icon: Mail,
    description: 'Send me an email anytime',
  },
  {
    name: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    icon: Phone,
    description: 'Call me during business hours',
  },
  {
    name: 'Location',
    value: 'San Francisco, CA',
    href: '#',
    icon: MapPin,
    description: 'Based in the Bay Area',
  },
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: Github,
    description: 'Check out my code',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
    description: 'Connect professionally',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Get In Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ready to start a project or just want to chat? I&apos;d love to hear from you.
            </p>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-400 to-accent-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Let&apos;s Connect
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Choose your preferred way to reach out
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method) => (
              <div key={method.name} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 mb-4">
                  <method.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {method.name}
                </h3>
                <p className="text-gray-600 mb-3">
                  {method.description}
                </p>
                <Link
                  href={method.href}
                  className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  {method.value}
                </Link>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Follow Me
            </h3>
            <div className="flex justify-center gap-8">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="group flex flex-col items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 group-hover:bg-primary-100 transition-colors mb-4">
                    <social.icon className="h-8 w-8 text-gray-600 group-hover:text-primary-600 transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                    {social.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {social.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Send a Message
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Fill out the form below and I&apos;ll get back to you as soon as possible
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="Project inquiry"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-lg leading-8 text-primary-100">
              Let&apos;s discuss your ideas and bring them to life with modern web technologies.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/projects"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-white hover:text-primary-100 transition-colors"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
