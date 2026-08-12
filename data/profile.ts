const withBasePath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const profileData = {
  name: {
    first: "Niloy",
    middle: "Chandra",
    last: "Datta",
    full: "Niloy Chandra Datta",
  },

  title:
    "Java + Spring Boot Full-Stack Engineer | React | TypeScript | PostgreSQL",
  description:
    "BSc graduate focused on end-to-end web products with Java, Spring Boot, React, TypeScript, PostgreSQL, and secure REST APIs.",

  email: "niloy.datta.dev@gmail.com",

  social: {
    github: "",
    linkedin: "https://www.linkedin.com/in/niloy-datta-9897473a8/",
    hackerrank: "",
    leetcode: "",
    codechef: "",
    email: "",
  },

  availableForWork: true,

  stats: {
    launches: "4+",
    velocity: "42%",
    vitals: "100",
    codeforces: "1400",
  },

  about: [
    "I'm a BSc graduate focused on Java and Spring Boot full-stack development, with hands-on experience building web and mobile applications, REST APIs, and database-backed products.",
    "I am building deeper expertise in React, TypeScript, Java, Spring Boot, testing, and cloud-ready delivery. I enjoy turning practical problems into secure, responsive, end-to-end applications.",
  ],

  experiences: [
    {
      title: "Senior Full-Stack Developer",
      company: "InnovateTech Solutions",
      period: "Jan 2023 - Present",
      description:
        "Leading development of microservices architecture serving 100k+ daily active users. Architected scalable Java Spring Boot backend with PostgreSQL, achieving 99.99% uptime. Optimized API response times by 60% through database query optimization and caching strategies.",
      achievements: [
        "Led 4-person backend team",
        "Reduced system latency 60%",
        "Implemented CI/CD pipeline",
      ],
      skills: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "AWS",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      title: "Android Developer",
      company: "MobileFirst Labs",
      period: "Jun 2021 - Dec 2022",
      description:
        "Developed production Android apps using Kotlin and Jetpack Compose. Built features handling 50k+ monthly active users with <2s load times. Implemented real-time data synchronization and offline-first architecture.",
      achievements: [
        "Built 3 production apps",
        "50k+ MAU",
        "4.8★ app store rating",
      ],
      skills: ["Kotlin", "Jetpack Compose", "Room DB", "Firebase", "Retrofit"],
    },
    {
      title: "Software Developer",
      company: "StartupXYZ",
      period: "Jan 2020 - May 2021",
      description:
        "Full-stack development on web and mobile platforms. Contributed to core backend architecture decisions and launched initial Android MVP, establishing foundation for future growth.",
      achievements: ["Shipped MVP in 6 weeks", "99.9% uptime", "1M+ API calls"],
      skills: ["Java", "Spring", "React", "Firebase", "Android"],
    },
  ],

  liveProjects: [
    {
      id: 1,
      title: "EduNexus",
      tagline: "EduNexus: SSC/HSC, Tutor Finder & Java/DSA",
      description:
        "A live learning platform for SSC/HSC quiz practice, tutor discovery, and structured programming learning materials.",
      longDescription:
        "EduNexus brings together SSC/HSC exam preparation, interactive quizzes, tutor discovery, and a programming learning space. Learners can explore Java and DSA course materials in one practical platform.",
      highlights: [
        "SSC/HSC interactive quiz practice",
        "Tutor finder marketplace",
        "Java and DSA learning materials",
        "Responsive learning experience",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Vercel"],
      role: "Founder & Lead Architect",
      metrics: {
        status: "Live",
        users: "Active",
        uptime: "99.9%",
        impact: "High",
      },
      features: [
        "Tutor search",
        "Exam preparation",
        "Quiz practice",
        "Programming materials",
        "Mobile responsive",
      ],
      links: {
        github: "",
        live: "",
        casestudy: "#",
      },
      image: withBasePath("/projects/sikkhadev.png"),
      color: "from-blue-500 to-cyan-500",
    },
  ],

  projects: [
    {
      id: 1,
      title: "HomeHelp",
      tagline: "Live Service Marketplace for Home & Local Work",
      description:
        "A live platform that helps people find local service providers and workers for home and everyday needs, including plumbers, waiters, and other professionals.",
      longDescription:
        "HomeHelp connects customers with people offering practical services and work opportunities. The platform is designed to make it easier to discover, browse, and contact the right person for a job from anywhere in the world.",
      highlights: [
        "Live service-provider platform",
        "Plumber, waiter, and local-work discovery",
        "Worldwide audience focus",
        "Easy provider and job browsing",
      ],
      technologies: [
        "Live Web Platform",
        "Service Marketplace",
        "Provider Discovery",
        "Responsive Design",
      ],
      role: "Web Developer",
      metrics: {
        status: "Live",
        focus: "Services",
        reach: "Worldwide",
        users: "Customers & Workers",
      },
      features: [
        "Service discovery",
        "Worker profiles",
        "Job browsing",
        "Category search",
        "Responsive interface",
      ],
      links: {
        github: "",
        live: "#",
        casestudy: "#",
      },
      image: withBasePath("/projects/inventory.png"),
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "FitTrack",
      tagline: "Fitness, Gym & Nutrition Tracking App",
      description:
        "A mobile fitness app for tracking gym activity, nutrition, and day-to-day wellness goals using Flutter and Firebase.",
      longDescription:
        "FitTrack helps users stay consistent with their fitness routine by keeping gym and nutrition information in one place. Built as a mobile-first Flutter application with Firebase for app data and services.",
      highlights: [
        "Gym activity tracking",
        "Nutrition tracking",
        "Mobile-first experience",
        "Firebase-backed app services",
      ],
      technologies: ["Flutter", "Dart", "Firebase", "Mobile Development"],
      role: "Flutter Developer",
      metrics: {
        platform: "Mobile",
        tracking: "Gym & Nutrition",
        stack: "Flutter + Firebase",
        experience: "Mobile First",
      },
      features: [
        "Workout tracking",
        "Nutrition logs",
        "Fitness goals",
        "Firebase data services",
        "Mobile-friendly UI",
      ],
      links: {
        github: "",
        live: "#",
        casestudy: "#",
      },
      image: withBasePath("/projects/unimanage.png"),
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 3,
      title: "CodeLab IDE",
      tagline: "Programming Learning Platform & Online IDE",
      description:
        "A learning-focused coding platform with an online IDE for Java, C++, Python, and other languages, plus competitive-programming resources.",
      longDescription:
        "CodeLab IDE gives learners a place to practise code while learning core programming concepts. It includes materials for Java, C++, Python, and competitive programming so learners can study and apply concepts together.",
      highlights: [
        "Online coding practice environment",
        "Java, C++, Python, and other languages",
        "Competitive-programming materials",
        "Learning and practice in one place",
      ],
      technologies: [
        "Online IDE",
        "Java",
        "C++",
        "Python",
        "Competitive Programming",
      ],
      role: "Developer",
      metrics: {
        format: "Learning Platform",
        languages: "Java, C++, Python",
        resources: "CP Materials",
        purpose: "Learn & Practise",
      },
      features: [
        "Code practice",
        "Programming lessons",
        "Language learning paths",
        "Competitive programming resources",
        "Interactive IDE",
      ],
      links: {
        github: "",
        live: "#",
        casestudy: "#",
      },
      image: withBasePath("/projects/livechat.png"),
      color: "from-indigo-500 to-violet-500",
    },
  ],

  fullStackRoadmap: [
    {
      title: "TaskSphere",
      subtitle: "Multi-Tenant Enterprise SaaS",
      description:
        "A planned project and collaboration platform focused on organizations, workspaces, role-based access, dashboards, and activity tracking.",
      technologies: [
        "React + TypeScript",
        "Spring Boot",
        "PostgreSQL",
        "Redis",
        "Docker",
      ],
    },
    {
      title: "NovaCommerce",
      subtitle: "Distributed Commerce & Payment Platform",
      description:
        "A planned full-stack commerce platform to explore inventory, order workflows, payment status, and event-driven service communication.",
      technologies: [
        "React + TypeScript",
        "Spring Boot",
        "Kafka",
        "Redis",
        "PostgreSQL",
      ],
    },
    {
      title: "ConnectFlow",
      subtitle: "Real-Time Team Collaboration Platform",
      description:
        "A planned collaboration product for channels, direct messages, presence, file sharing, and real-time updates through WebSocket communication.",
      technologies: [
        "React + TypeScript",
        "Spring Boot",
        "WebSocket",
        "Kafka",
        "Docker",
      ],
    },
  ],

  skills: [
    {
      category: "Languages",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Java 21" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "HTML & CSS" },
      ],
    },
    {
      category: "Frontend Development",
      color: "from-sky-500 to-indigo-500",
      skills: [
        { name: "React" },
        { name: "React Router" },
        { name: "TanStack Query" },
        { name: "Redux Toolkit" },
        { name: "React Hook Form" },
        { name: "Responsive & Accessible UI" },
      ],
    },
    {
      category: "Backend Development",
      color: "from-aurora-cyan to-aurora-blue",
      skills: [
        { name: "Spring Boot" },
        { name: "Spring MVC" },
        { name: "Spring Data JPA" },
        { name: "Spring Security" },
        { name: "REST APIs" },
        { name: "JWT & OAuth2" },
        { name: "WebSocket" },
      ],
    },
    {
      category: "Database",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "PostgreSQL" },
        { name: "SQL" },
        { name: "Hibernate" },
        { name: "Redis" },
        { name: "MongoDB — Basic" },
      ],
    },
    {
      category: "Messaging & Real-Time",
      color: "from-violet-500 to-fuchsia-500",
      skills: [
        { name: "Apache Kafka" },
        { name: "Event-Driven Workflows" },
        { name: "WebSocket Communication" },
      ],
    },
    {
      category: "Testing & Quality",
      color: "from-amber-500 to-orange-500",
      skills: [
        { name: "JUnit 5" },
        { name: "Mockito" },
        { name: "Testcontainers" },
        { name: "React Testing Library" },
        { name: "Playwright" },
      ],
    },
    {
      category: "Developer Tools",
      color: "from-emerald-500 to-green-500",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Maven" },
        { name: "Postman" },
        { name: "Swagger / OpenAPI" },
      ],
    },
    {
      category: "DevOps & Cloud",
      color: "from-blue-500 to-purple-500",
      skills: [
        { name: "Docker" },
        { name: "CI/CD" },
        { name: "AWS S3" },
        { name: "GitHub Actions — Basic" },
        { name: "AWS EC2/RDS — Basic" },
      ],
    },
    {
      category: "Core Knowledge",
      color: "from-fuchsia-500 to-violet-500",
      skills: [
        { name: "Object-Oriented Programming" },
        { name: "Data Structures & Algorithms" },
        { name: "Database Design" },
        { name: "HTTP / REST" },
        { name: "System Design Fundamentals" },
      ],
    },
  ],

  certifications: [
    {
      title: "Oracle Certified Professional: Java SE 17 Developer",
      issuer: "Oracle",
      year: "2024",
      description:
        "Advanced certification covering functional programming, modularity, and concurrency in modern Java architecture.",
      credentialId: "1Z0-829",
      verificationUrl: "",
    },
    {
      title: "Spring Certified Professional 2024",
      issuer: "Broadcom / VMware",
      year: "2024",
      description:
        "Expert verification in building robust, production-grade microservices using Spring Boot and Spring Cloud-native patterns.",
      credentialId: "2V0-72.22",
      verificationUrl: "",
    },
    {
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      year: "2024",
      description:
        "Design and deployment of dynamically scalable, highly available, fault-tolerant, and reliable applications on AWS.",
      credentialId: "AWS-SA-PROF-2024",
      verificationUrl: "",
    },
  ],

  achievements: [
    {
      title: "IDEATHON 2024 - First Place",
      description:
        "Won grand prize for innovative microservices architecture design for scalable e-commerce platform",
      year: "2024",
      icon: "🏆",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Codeforces Rating: 1400",
      description:
        "Competitive programmer solving advanced algorithmic problems consistently",
      year: "Ongoing",
      icon: "💻",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Open Source Contributor",
      description:
        "Active contributor to Spring Framework and Android Architecture Components",
      year: "Ongoing",
      icon: "🌟",
      color: "from-green-500 to-emerald-500",
    },
  ],

  resume: {
    filename: "Niloy_Chandra_Datta_Resume.pdf",
    path: withBasePath("/resume/"),
  },

  academicProjects: [
    {
      id: 1,
      title: "Smart Attendance System",
      subtitle: "Microprocessor & Interfacing (MPI)",
      year: "University Project",
      description:
        "An Arduino-based attendance system that uses RFID cards to identify students and record attendance electronically.",
      technologies: ["Arduino", "RFID Card", "Embedded Systems"],
      github: "",
      image: withBasePath("/projects/inventory.png"),
      color: "from-blue-600 to-cyan-500",
    },
    {
      id: 2,
      title: "Job Portal",
      subtitle: "Database Management Systems (DBMS)",
      year: "University Project",
      description:
        "A job portal application built with MySQL for storing and managing job listings, candidate information, and application data.",
      technologies: ["MySQL", "Database Design", "SQL"],
      github: "",
      image: withBasePath("/projects/unimanage.png"),
      color: "from-purple-600 to-pink-500",
    },
    {
      id: 3,
      title: "University Management System",
      subtitle: "Object-Oriented Programming (OOP)",
      year: "University Project",
      description:
        "A university management system developed as an OOP project to organize core university information and administrative workflows.",
      technologies: [
        "Object-Oriented Programming",
        "Class Design",
        "CRUD Operations",
      ],
      github: "",
      image: withBasePath("/projects/unimanage.png"),
      color: "from-emerald-600 to-teal-500",
    },
  ],

  profilePicture: withBasePath("/niloy-profile.png"),
};
