// 🚨 DO NOT MODIFY – FINALIZED
// This file contains all the content for your portfolio website
// Edit the values below to update what appears on your website

export const siteData = {
  // Personal Information
  personal: {
    name: "Gabriel Sacro",
    displayName: "GABRIELSACRO", // What appears in header/footer
    email: "gabu.sacro@gmail.com",
    title: "Full-Stack Developer",
    location: "Philippines",
    bio: "Full-stack developer passionate about creating innovative digital solutions with cutting-edge technologies. Transforming ideas into reality, one line of code at a time.",
    shortBio: "Passionate full-stack developer crafting digital solutions with cutting-edge technologies."
  },

  // Social Media Links
  social: {
    github: "https://github.com/gabusacro",
    linkedin: "https://linkedin.com/in/gabrielsacro",
    twitter: "https://twitter.com/gabrielsacro",
    instagram: "https://instagram.com/gabrielsacro",
    facebook: "https://facebook.com/gabrielsacro"
  },

  // Hero Section
  hero: {
    greeting: "Hello, I'm",
    mainTitle: "Gabriel Sacro",
    subtitle: "Full-Stack Developer",
    description: "I build exceptional digital experiences that combine cutting-edge technology with creative design. From concept to deployment, I bring ideas to life.",
    ctaText: "View My Work",
    ctaLink: "/projects"
  },

  // About Section
  about: {
    title: "About Me",
    subtitle: "Passionate Developer & Problem Solver",
    content: [
      "I'm a full-stack developer with a passion for creating innovative digital solutions. With expertise in modern web technologies, I specialize in building scalable applications that deliver exceptional user experiences.",
      "My journey in software development began with a curiosity about how things work on the web. Today, I leverage cutting-edge technologies to solve complex problems and bring creative ideas to life.",
      "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."
    ],
    skills: [
      "Frontend Development",
      "Backend Development", 
      "Mobile Development",
      "Database Design",
      "API Development",
      "DevOps & Deployment"
    ]
  },

  // Services Section
  services: {
    title: "Services I Offer",
    subtitle: "Comprehensive Development Solutions",
    services: [
      {
        title: "Frontend Development",
        description: "Modern, responsive web applications using React, Next.js, and cutting-edge CSS frameworks.",
        icon: "💻",
        features: ["Responsive Design", "Performance Optimization", "Modern Frameworks", "User Experience"]
      },
      {
        title: "Backend Development",
        description: "Robust server-side solutions with scalable architecture and secure APIs.",
        icon: "⚙️",
        features: ["API Development", "Database Design", "Authentication", "Security"]
      },
      {
        title: "Full-Stack Solutions",
        description: "End-to-end development from concept to deployment with seamless integration.",
        icon: "🚀",
        features: ["Complete Applications", "System Integration", "Deployment", "Maintenance"]
      },
      {
        title: "Mobile Development",
        description: "Cross-platform mobile applications that work seamlessly across devices.",
        icon: "📱",
        features: ["Cross-Platform", "Native Performance", "App Store Deployment", "Updates"]
      }
    ]
  },

  // Skills Section
  skills: {
    title: "Skills & Technologies",
    subtitle: "My Technical Expertise",
    categories: [
      {
        name: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
      },
      {
        name: "Backend", 
        skills: ["Node.js", "Express", "Python", "Django", "PHP", "Laravel", "Java"]
      },
      {
        name: "Database",
        skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase"]
      },
      {
        name: "DevOps & Tools",
        skills: ["Git", "Docker", "AWS", "Vercel", "Netlify", "CI/CD", "Linux"]
      },
      {
        name: "Additional Technologies",
        skills: ["WordPress", "Shopify", "Hostinger", "SiteGround", "HostGator", "Mobile Development"]
      }
    ]
  },

  // Projects Section
  projects: {
    title: "Featured Projects",
    subtitle: "Some of my recent work",
    projects: [
      {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with payment integration, user management, and admin dashboard.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "/projects/ecommerce.jpg",
        liveUrl: "https://project1.com",
        githubUrl: "https://github.com/gabusacro/project1",
        featured: true
      },
      {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team features.",
        technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
        image: "/projects/taskapp.jpg",
        liveUrl: "https://project2.com",
        githubUrl: "https://github.com/gabusacro/project2",
        featured: true
      },
      {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
        technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        image: "/projects/portfolio.jpg",
        liveUrl: "https://gabrielsacro.com",
        githubUrl: "https://github.com/gabusacro/portfolio",
        featured: true
      }
    ]
  },

  // Experience Section
  experience: {
    title: "Work Experience",
    subtitle: "My professional journey",
    experiences: [
      {
        title: "Senior Full-Stack Developer",
        company: "Tech Company Inc.",
        period: "2022 - Present",
        description: "Leading development of enterprise applications, mentoring junior developers, and implementing best practices.",
        achievements: [
          "Led development of 3 major applications",
          "Improved team productivity by 40%",
          "Implemented CI/CD pipeline"
        ]
      },
      {
        title: "Full-Stack Developer",
        company: "Digital Agency",
        period: "2020 - 2022",
        description: "Developed client websites and applications using modern technologies and responsive design principles.",
        achievements: [
          "Delivered 15+ client projects",
          "Reduced page load times by 60%",
          "Maintained 99.9% uptime"
        ]
      },
      {
        title: "Junior Developer",
        company: "Startup",
        period: "2019 - 2020",
        description: "Started my journey in web development, learning modern frameworks and best practices.",
        achievements: [
          "Built first production application",
          "Learned React and Node.js",
          "Contributed to team projects"
        ]
      }
    ]
  },

  // Education Section
  education: {
    title: "Education",
    subtitle: "My academic background",
    degrees: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "University Name",
        period: "2015 - 2019",
        description: "Studied computer science fundamentals, algorithms, data structures, and software engineering principles.",
        achievements: ["Dean's List", "Programming Competition Winner", "Graduated with Honors"]
      }
    ]
  },

  // Contact Section
  contact: {
    title: "Get In Touch",
    subtitle: "Let's work together",
    description: "I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!",
    email: "gabu.sacro@gmail.com",
    phone: "+63 912 345 6789",
    location: "Philippines",
    availability: "Available for new projects",
    responseTime: "I usually respond within 24 hours"
  },

  // Footer Section
  footer: {
    copyright: "© 2024 Gabriel Sacro. All rights reserved.",
    madeWith: "Made with ❤️ and lots of ☕",
    quickLinks: [
      { name: "About Me", href: "/about" },
      { name: "My Projects", href: "/projects" },
      { name: "Get In Touch", href: "/contact" }
    ]
  },

  // SEO & Meta
  seo: {
    title: "Gabriel Sacro - Full-Stack Developer Portfolio",
    description: "Full-stack developer passionate about creating innovative digital solutions with cutting-edge technologies.",
    keywords: ["full-stack developer", "web development", "React", "Node.js", "Philippines", "portfolio"],
    author: "Gabriel Sacro",
    ogImage: "/og-image.jpg"
  }
};

// Export individual sections for easy access
export const { 
  personal, 
  social, 
  hero, 
  about, 
  services, 
  skills, 
  projects, 
  experience, 
  education, 
  contact, 
  footer, 
  seo 
} = siteData;
