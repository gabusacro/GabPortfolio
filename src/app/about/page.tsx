import Link from 'next/link';
import { ArrowRight, Award, Clock } from 'lucide-react';

const experiences = [
  {
    year: '2023 - Present',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Company',
    description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies.',
  },
  {
    year: '2021 - 2023',
    title: 'Full-Stack Developer',
    company: 'Startup',
    description: 'Built scalable web applications and mobile apps for growing businesses.',
  },
  {
    year: '2019 - 2021',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    description: 'Created responsive and interactive user interfaces for various client projects.',
  },
];

const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'University Name',
    year: '2019',
    description: 'Focused on software engineering and web development fundamentals.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Me
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Passionate full-stack developer with a love for creating innovative solutions and learning new technologies.
            </p>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-400 to-accent-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              My Story
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                I&apos;m a passionate full-stack developer with over 5 years of experience building web applications and digital solutions. 
                My journey in tech started with a curiosity about how websites work, which quickly evolved into a deep passion for 
                creating user-centered digital experiences.
              </p>
              <p className="mb-6">
                I specialize in modern web technologies including React, Next.js, Node.js, and cloud platforms. I believe in writing 
                clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing 
                knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Experience
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              My journey through different roles and companies
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="ml-16">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                        {experience.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-lg text-primary-600 mb-3">
                      {experience.company}
                    </p>
                    <p className="text-gray-600">
                      {experience.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Education
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              My academic background and continuous learning
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent-600 text-white">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="ml-16">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-accent-600 mb-3">
                      {edu.school}
                    </p>
                    <p className="text-gray-600">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to work together?
            </h2>
            <p className="mt-4 text-lg leading-8 text-primary-100">
              Let&apos;s discuss your project and bring your ideas to life.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="text-sm font-semibold leading-6 text-white hover:text-primary-100 transition-colors flex items-center gap-2"
              >
                View My Work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
