export interface Project {
  slug: string;
  category: string;
  title: string;

  client: string;
  problem: string;

  description: string;
  image: string;
  overview: string;

  requirements: string[];
  challenges: string[];

  solution: string;

  features: string[];
  technologies: string[];
  results: string[];

  live: string;
  github: string;
}

export const projects: Project[] = [
  {
    slug: "ai-compression-framework",

    category: "Research & Development",

    title: "AI Compression Framework",

    client: "Academic Research",

    problem:
      "Large image datasets required high storage space while maintaining excellent image quality.",

    description:
      "Advanced AI-based compression framework focused on improving storage efficiency and performance.",

    image: "/project1.jpg",

    overview:
      "The AI Compression Framework is an intelligent research project developed to reduce storage requirements while maintaining excellent image quality. The solution combines machine learning techniques with modern compression algorithms to improve efficiency for businesses handling large amounts of media files.",

    requirements: [
      "Reduce storage usage",
      "Maintain image quality",
      "Fast compression speed",
      "Research prototype",
    ],

    challenges: [
      "Large image datasets",
      "Compression without quality loss",
      "Optimizing AI model performance",
      "Processing speed",
    ],

    solution:
      "Bytecraft Studio developed an AI-powered compression workflow capable of automatically selecting the best compression strategy based on image content while preserving visual quality.",

    features: [
      "AI-based Compression",
      "High Quality Output",
      "Fast Processing",
      "Storage Optimization",
      "Performance Monitoring",
    ],

    technologies: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "NumPy",
      "Flask",
    ],

    results: [
      "60% storage reduction",
      "Improved processing performance",
      "Maintained high image quality",
      "Scalable research framework",
    ],

    live: "#",

    github: "#",
  },
    {
    slug: "event-management-platform",

    category: "Web Application",

    title: "Event Management Platform",

    client: "College Project",

    problem:
      "Managing college events manually caused scheduling conflicts, attendance issues, and inefficient communication.",

    description:
      "Modern event management system with booking, scheduling, and real-time event tracking.",

    image: "/project2.jpg",

    overview:
      "A complete web-based event management platform designed to simplify event registration, scheduling, attendee management, QR attendance, and certificate generation for colleges and organizations.",

    requirements: [
      "Online event registration",
      "QR attendance",
      "Admin dashboard",
      "Certificate generation",
    ],

    challenges: [
      "Managing multiple events",
      "Real-time registrations",
      "Attendance tracking",
      "User-friendly interface",
    ],

    solution:
      "Developed a responsive web application with secure authentication, QR attendance, real-time event management, automated certificate generation, and notifications.",

    features: [
      "Event Registration",
      "QR Attendance",
      "Admin Dashboard",
      "Certificate Generator",
      "Notifications",
    ],

    technologies: [
      "Flutter",
      "MySQL",
      "REST API",
      "PHP",
      "Firebase",
    ],

    results: [
      "Automated event workflow",
      "Reduced manual work",
      "Improved attendee management",
      "Faster event organization",
    ],

    live: "#",

    github: "#",
  },

  {
    slug: "fashion-brand-portfolio",

    category: "Creative Website",

    title: "Fashion Brand Portfolio",

    client: "Fashion Brand",

    problem:
      "The client needed a premium online portfolio that reflected their luxury brand identity across all devices.",

    description:
      "Premium portfolio website designed for fashion and creative brands with modern UI.",

    image: "/project3.jpg",

    overview:
      "A modern portfolio website created for a fashion brand to showcase collections, brand identity, services, and customer engagement through an elegant user experience.",

    requirements: [
      "Premium UI/UX",
      "Mobile Responsive Design",
      "Fast Loading",
      "Gallery Showcase",
    ],

    challenges: [
      "Luxury brand appearance",
      "Responsive layouts",
      "Image optimization",
      "Modern animations",
    ],

    solution:
      "Designed and developed a premium responsive portfolio with smooth animations, optimized images, and a clean visual identity reflecting the client's brand.",

    features: [
      "Modern UI Design",
      "Image Gallery",
      "Responsive Layout",
      "SEO Optimized",
      "Fast Performance",
    ],

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
    ],

    results: [
      "Premium brand identity",
      "Faster loading website",
      "Improved user experience",
      "Mobile friendly design",
    ],

    live: "#",

    github: "#",
  },
    {
    slug: "mobile-app-qa-testing",

    category: "Software Testing",

    title: "Mobile App QA Testing",

    client: "Mobile Application Startup",

    problem:
      "The application had UI inconsistencies, crashes, and compatibility issues across multiple Android devices.",

    description:
      "Comprehensive testing solutions for mobile applications across multiple devices.",

    image: "/project4.jpg",

    overview:
      "Performed comprehensive manual testing for Android applications across different devices, ensuring functionality, usability, stability, and performance before production deployment.",

    requirements: [
      "Functional Testing",
      "UI Testing",
      "Cross Device Testing",
      "Bug Reporting",
    ],

    challenges: [
      "Multiple Android devices",
      "UI inconsistencies",
      "Performance bottlenecks",
      "Application crashes",
    ],

    solution:
      "Executed detailed test cases, reported bugs with reproduction steps, verified fixes, and ensured application stability across multiple Android devices.",

    features: [
      "Manual Testing",
      "Regression Testing",
      "UI Testing",
      "Cross Device Validation",
      "Bug Documentation",
    ],

    technologies: [
      "Android",
      "Jira",
      "BrowserStack",
      "Excel",
      "Postman",
    ],

    results: [
      "Reduced production bugs",
      "Improved application stability",
      "Better user experience",
      "Detailed QA reports",
    ],

    live: "#",

    github: "#",
  },

  {
    slug: "performance-optimization",

    category: "Application Testing",

    title: "Performance Optimization",

    client: "Business Website",

    problem:
      "The website suffered from slow loading speeds, poor Core Web Vitals, and a low Lighthouse performance score.",

    description:
      "Performance analysis and optimization for smooth and scalable application experience.",

    image: "/project5.jpg",

    overview:
      "A performance optimization project focused on improving website speed, application responsiveness, scalability, and overall user experience through modern optimization techniques.",

    requirements: [
      "Improve Page Speed",
      "Reduce Load Time",
      "Optimize Assets",
      "Better Core Web Vitals",
    ],

    challenges: [
      "Slow loading pages",
      "Large media assets",
      "High server response time",
      "Poor Lighthouse score",
    ],

    solution:
      "Optimized images, implemented lazy loading, reduced JavaScript bundle size, improved caching strategies, and enhanced frontend performance using modern best practices.",

    features: [
      "Performance Audit",
      "Image Optimization",
      "Lazy Loading",
      "Code Splitting",
      "Caching Strategy",
    ],

    technologies: [
      "Next.js",
      "Lighthouse",
      "Chrome DevTools",
      "Tailwind CSS",
      "Vercel",
    ],

    results: [
      "50% faster page loading",
      "Improved Core Web Vitals",
      "Higher Lighthouse score",
      "Better user experience",
    ],

    live: "#",

    github: "#",
  },
    {
    slug: "cross-platform-testing",

    category: "Quality Assurance",

    title: "Cross Platform Testing",

    client: "Enterprise Client",

    problem:
      "The application behaved differently across browsers, operating systems, and mobile devices, causing inconsistent user experiences.",

    description:
      "Cross-device and cross-platform testing to ensure compatibility and reliability.",

    image: "/project6.jpg",

    overview:
      "Performed cross-platform testing across multiple browsers, operating systems, and mobile devices to ensure consistent functionality and user experience.",

    requirements: [
      "Browser Compatibility",
      "Mobile Compatibility",
      "Responsive Testing",
      "Cross Platform Validation",
    ],

    challenges: [
      "Different browser behaviour",
      "Responsive layout issues",
      "Device compatibility",
      "OS-specific bugs",
    ],

    solution:
      "Executed comprehensive compatibility testing across Chrome, Edge, Firefox, Safari, Android, and Windows environments while documenting and verifying bug fixes.",

    features: [
      "Cross Browser Testing",
      "Responsive Testing",
      "Device Validation",
      "Bug Reporting",
      "Compatibility Verification",
    ],

    technologies: [
      "BrowserStack",
      "Chrome",
      "Firefox",
      "Microsoft Edge",
      "Android",
    ],

    results: [
      "Improved cross-browser compatibility",
      "Reduced UI issues",
      "Consistent user experience",
      "Higher application reliability",
    ],

    live: "#",

    github: "#",
  },
];

export default projects;