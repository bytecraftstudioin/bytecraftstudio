"use client";
import { useState } from "react";

export default function BytecraftStudio() {

  const [selectedProject, setSelectedProject] = useState<any>(null);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
 const services = [
  'Website Development',
  'Business Email Solutions',
  'Microsoft 365 Setup',
  'IT Support Services',
  'Network & Wi-Fi Setup',
  'Cloud Migration Services',
  'Data Backup & Recovery',
  'Computer & Workstation Setup',
  'CCTV & Network Integration',
];

 const projects = [
  {
    title: 'AI Compression Framework',
    type: 'Research & Development',
    description:
      'Advanced AI-based compression framework focused on improving storage efficiency and performance.',
  },
  {
    title: 'Event Management Platform',
    type: 'Web Application',
    description:
      'Modern event management system with booking, scheduling, and real-time event tracking.',
  },
  {
    title: 'Fashion Brand Portfolio',
    type: 'Creative Website',
    description:
      'Premium portfolio website designed for fashion and creative brands with modern UI.',
  },
  {
    title: 'Mobile App QA Testing',
    type: 'Software Testing',
    description:
      'Comprehensive testing solutions for mobile applications across multiple devices.',
  },
  {
    title: 'Performance Optimization',
    type: 'Application Testing',
    description:
      'Performance analysis and optimization for smooth and scalable application experience.',
  },
  {
    title: 'Cross Platform Testing',
    type: 'Quality Assurance',
    description:
      'Cross-device and cross-platform testing to ensure compatibility and reliability.',
  },
];

  return (
    <div className="bg-[#0B0F19] text-white min-h-screen overflow-x-hidden font-sans">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[580px] h-[580px] bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[580px] h-[580px] bg-cyan-400/20 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
<nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/20">
  <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
    
    <h1 className="text-xl md:text-2xl font-bold tracking-wider">
      BYTECRAFT
    </h1>

    <div className="hidden md:flex gap-8 text-sm">
      <a href="#about" className="hover:text-cyan-400 transition">
        About
      </a>

      <a href="#services" className="hover:text-cyan-400 transition">
        Services
      </a>

      <a href="#projects" className="hover:text-cyan-400 transition">
        Projects
      </a>

      <a href="#contact" className="hover:text-cyan-400 transition">
        Contact
      </a>
    </div>

    <a
      href="#contact"
      className="bg-blue-500 hover:bg-blue-600 transition px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-lg shadow-blue-500/30 inline-block"
    >
      Start Project
    </a>

  </div>
</nav>
      {/* Hero */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-28 grid lg:grid-cols-2 gap-10 md:gap-16 items-center min-h-screen overflow-hidden">
        <div>
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-6 text-sm">
            Bytecraft Studio
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] break-words">
            We Build
            <span className="text-blue-400 block">Digital</span>
            Experiences.
          </h1>

          <p className="mt-6 md:mt-8 text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
         Professional Website Development, Microsoft 365 Setup, Business Email Solutions, and IT Support Services for growing businesses.
          </p>
<div className="flex flex-col gap-4 mt-10 w-full pr-4">

  <a
    href="#contact"
    className="w-full text-center bg-blue-500 hover:bg-blue-600 transition px-7 py-4 rounded-2xl font-semibold shadow-2xl shadow-blue-500/30"
  >
    Start Your Project
  </a>

  <a
    href="#projects"
    className="w-full text-center border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition px-7 py-4 rounded-2xl font-semibold"
  >
    View Works
  </a>

</div>
        </div>

        <div className="relative flex items-center justify-center mt-10 lg:mt-0 w-full">
          <div className="w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-3xl absolute" />

         <div className="relative bg-white/5 mx-auto backdrop-blur-xl border border-white/10 rounded-[32px] md:rounded-[40px] p-5 md:p-10 shadow-2xl transition duration-500 scale-90 sm:scale-100">
          <div className="bg-gradient-to-br from-[#111827] to-[#1e293b] rounded-3xl p-4 md:p-6 w-full max-w-[320px] mx-auto">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
<div className="flex items-center justify-center h-full w-full">
  <img
    src="/logo.png"
    alt="Bytecraft Logo"
    width={180}
    height={180}
    className="object-contain"
  />
</div>        
   </div>
          </div>
        </div>
      </section>

      {/* About */}
     <section id="about" className="max-w-7xl mx-auto px-5 md:px-6 py-20 md:py-28 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-5 md:p-8 backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="bg-blue-500/10 p-6 rounded-3xl border border-blue-500/20">
                <h2 className="text-2xl md:text-4xl font-black text-blue-400">10+</h2>
                <p className="text-gray-300 mt-2 text-sm md:text-base">Projects</p>
              </div>

              <div className="bg-cyan-500/10 p-6 rounded-3xl border border-cyan-500/20">
                <h2 className="text-2xl md:text-4xl font-black text-blue-400">24/7</h2>
                <p className="text-gray-300 mt-2 text-sm md:text-base">Support</p>
              </div>

              <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                <h2 className="text-2xl md:text-4xl font-black text-blue-400">Fast</h2>
                <p className="text-gray-300 mt-2 text-sm md:text-base">Delivery</p>
              </div>

              <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                <h2 className="text-2xl md:text-4xl font-black text-blue-400">UI</h2>
                <p className="text-gray-300 mt-2 text-sm md:text-base">Focused</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight break-words">
             Turning Ideas Into Digital Reality.
            </h2>

            <p className="mt-8 text-gray-300 text-lg leading-relaxed">
              We design and develop modern websites, apps, and digital products that combine creativity, performance, and immersive user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-5 md:px-6 py-20 md:py-28">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Services
          </p>

          <h2 className="text-5xl font-black">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-[32px] p-8 backdrop-blur-xl hover:-translate-y-3 transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition">
                ⚡
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service}
              </h3>

              <p className="text-gray-400 leading-relaxed">
  {
   index === 0
  ? "Professional business websites designed for growth and performance."
  : index === 1
  ? "Professional email solutions using Microsoft 365 and custom domains."
  : index === 2
  ? "Microsoft 365 deployment, migration, and user management."
  : index === 3
  ? "Reliable on-site and remote IT support for businesses."
  : index === 4
  ? "Secure office network and Wi-Fi installation and configuration."
  : index === 5
  ? "Cloud migration services for email, files, and business applications."
  : index === 6
  ? "Automated backup solutions and disaster recovery planning."
  : index === 7
  ? "Computer, laptop, and workstation setup for offices and teams."
  : "CCTV installation, network integration, and monitoring solutions."
  }
</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Workflow
          </p>

          <h2 className="text-5xl font-black">
            Our Process
          </h2>
        </div>

        <div className="space-y-10">
          {['Discovery', 'Planning', 'Design', 'Development', 'Testing', 'Launch'].map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-8 bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-xl font-black">
                {index + 1}
              </div>

              <div>
                <h3 className="text-2xl font-bold">{step}</h3>
                <p className="text-gray-400 mt-2">
  {
    index === 0
      ? "Understanding client goals, ideas, and requirements before starting the project."
      : index === 1
      ? "Creating a structured roadmap and strategy for smooth project execution."
      : index === 2
      ? "Designing clean, modern, and engaging user interfaces with premium aesthetics."
      : index === 3
      ? "Developing scalable, fast, and responsive digital solutions using modern technologies."
      : index === 4
      ? "Ensuring quality, performance, security, and bug-free user experience."
      : "Deploying the final product with optimization, support, and future scalability."
  }
</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-5 md:px-6 py-20 md:py-28">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Projects
          </p>

          <h2 className="text-5xl font-black">
            Featured Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[36px] bg-white/5 border border-white/10"
            >
           <div className="h-[280px] overflow-hidden">
  <img
    src={`/project${index + 1}.jpg`}
    alt={project.title}
    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
  />
</div>

              <div className="p-8">
                <p className="text-cyan-400 text-sm uppercase tracking-wider mb-3">
                  {project.type}
                </p>
                <h3 className="text-3xl font-bold mb-4">
  {project.title}
</h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
  {project.description}
</p>

                <button
  onClick={() => setSelectedProject(project)}
  className="border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition px-5 py-3 rounded-full text-sm font-medium"
>
  View Details
</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-28">
       <div className="relative overflow-hidden rounded-[32px] md:rounded-[50px] bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-14 md:p-16 text-center">
          <div className="bg-black rounded-[32px] flex items-center justify-center mx-auto"/>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight max-w-4xl mx-auto">
              Let’s Build Something Amazing Together.
            </h2>

            <p className="mt-8 text-lg text-white/80 max-w-2xl mx-auto">
              Transform your ideas into premium digital products with Bytecraft Studio.
            </p>
<a
  href="#contact"
  className="mt-10 inline-block bg-white text-black hover:scale-105 transition px-8 py-4 rounded-2xl font-bold shadow-2xl"
>
  Let’s Talk
</a>
            
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-5 md:px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Contact
            </p>

            <h2 className="text-5xl font-black leading-tight">
              Have an Idea?
            </h2>

            <p className="mt-8 text-gray-300 text-lg leading-relaxed max-w-lg">
              Let’s create a powerful website or app for your brand with premium animations and modern UI.
            </p>
          </div>

        <div className="bg-white/5 border border-white/10 rounded-[28px] md:rounded-[40px] p-6 md:p-10 backdrop-blur-xl space-y-6">

  <input
    type="text"
    placeholder="Your Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
  />

  <input
    type="email"
    placeholder="Your Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
  />

  <textarea
    rows={5}
    placeholder="Tell us about your project"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
  />
<button
  onClick={() => {
    window.location.href = `mailto:contact@bytecraftstudio.com?subject=New Project From ${name}&body=Name: ${name}%0AEmail: ${email}%0AProject Details: ${message}`;
  }}
  className="w-full bg-blue-500 hover:bg-blue-600 transition py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/30"
>
    Send Message
  </button>

</div>
</div>
</section>

{/* Footer */}

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-gray-400">
        <h2 className="text-3xl font-black text-white mb-4">
          BYTECRAFT STUDIO
        </h2>

        <p>
          Crafting the Future, Byte by Byte.
        </p>
<div className="flex flex-wrap justify-center gap-5 md:gap-8 mt-6 text-sm">

  <a
    href="https://www.instagram.com/bytecraft.studio_?igsh=MTJ6aHhvd3ZvaHA5cA=="
    target="_blank"
    className="hover:text-cyan-400 transition"
  >
    Instagram
  </a>

  <a
    href="mailto:contact@bytecraftstudio.com"
    className="hover:text-cyan-400 transition"
  >
    Email
  </a>

  <a
    href="https://www.linkedin.com/in/bytecraftstudio?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    target="_blank"
    className="hover:text-cyan-400 transition"
  >
    LinkedIn
  </a>

  <a
    href="https://www.fiverr.com/s/e6ZwDPk"
    target="_blank"
    className="hover:text-cyan-400 transition"
  >
    Fiverr
  </a>

</div>
      </footer>
      {selectedProject && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6">
    <div className="bg-[#111827] flex flex-col md:flex-row border border-white/10 rounded-[32px] max-w-2xl w-[95%] md:w-full overflow-hidden relative">
      <img src={`/project${projects.findIndex(
  (p) => p.title === selectedProject.title
) + 1}.jpg`}
        alt={selectedProject.title}
        className="w-full h-[220px] md:h-[300px] object-cover"
      />

<div className="p-8">
  <p className="text-cyan-400 uppercase tracking-wider text-sm mb-3">
    {selectedProject.type}
  </p>

  <h2 className="text-3xl md:text-4xl font-black mb-6">
    {selectedProject.title}
  </h2>

  <p className="text-gray-300 leading-relaxed mb-8">
    {selectedProject.description}
  </p>

  <div className="flex flex-wrap gap-3">
    <span className="bg-blue-500/20 px-4 py-2 rounded-full text-sm">
      React
    </span>

    <span className="bg-cyan-500/20 px-4 py-2 rounded-full text-sm">
      Next.js
    </span>

    <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
      Tailwind CSS
    </span>
  </div>
</div>
<button
  onClick={() => setSelectedProject(null)}
  className="absolute top-3 right-3 md:top-5 md:right-5 bg-black/50 hover:bg-red-500 transition w-10 h-10 rounded-full"
>
  ✕
</button>

    </div>
  </div>
)}

    </div>
  );
}