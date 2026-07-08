import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Bytecraft Studio",
  description:
    "Learn about Bytecraft Studio, our mission, vision, and digital services.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

        <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
          About Bytecraft Studio
        </p>

        <h1 className="text-4xl sm:text-3xl sm:text-4xl md:text-5xl md:text-7xl font-black leading-tight break-words">
             We Build
          <span className="text-blue-400 block">
            Modern Digital Solutions
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-gray-300 leading-8 max-w-3xl">
          Bytecraft Studio is a technology agency focused on building
          professional websites, business solutions, Microsoft 365
          services, IT support, and software testing for startups,
          creators, and growing businesses.
        </p>

      </section>

<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

<div className="
bg-white/5
border
border-white/10
rounded-[32px]
p-6 md:p-10
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/5
">

<h2 className="text-3xl md:text-4xl font-black">
Our Mission
</h2>

<p className="mt-6 text-gray-300 leading-8">
Our mission is to help businesses establish a strong digital presence
through modern websites, cloud solutions, and reliable IT services.
</p>

</div>

<div>

<h2 className="text-4xl font-black">
Our Vision
</h2>

<p className="mt-6 text-gray-300 leading-8">
To become one of India's most trusted digital technology companies by
delivering innovative, scalable, and user-focused solutions.
</p>

</div>

</div>

</section>

<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20">

  <div className="text-center mb-16">
    <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
      Why Choose Us
    </p>

    <h2 className="text-3xl sm:text-4xl md:text-3xl md:text-5xl font-black mt-4">
      Why Businesses Choose Bytecraft Studio
    </h2>

    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
      We combine modern technology, creative design, and reliable support
      to help businesses grow faster in the digital world.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    <div className="
group
bg-white/5
border
border-white/10
rounded-3xl
p-6 md:p-8
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/5
hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
">
      <div className="text-3xl sm:text-4xl md:text-3xl md:text-5xl mb-5 transition-transform duration-300 group-hover:scale-110">🚀</div>
      <h3 className="text-2xl font-bold mb-3">Modern Technology</h3>
      <p className="text-gray-400">
        Built using the latest web technologies for speed, security, and scalability.
      </p>
    </div>

    <div className="
group
bg-white/5
border
border-white/10
rounded-3xl
p-6 md:p-8
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/5
hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
">
      <div className="text-3xl sm:text-4xl md:text-3xl md:text-5xl mb-5 transition-transform duration-300 group-hover:scale-110">🎨</div>
      <h3 className="text-2xl font-bold mb-3">Premium Design</h3>
      <p className="text-gray-400">
        Beautiful user experiences with responsive and professional interfaces.
      </p>
    </div>

    <div className="
group
bg-white/5
border
border-white/10
rounded-3xl
p-6 md:p-8
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/5
hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
">
      <div className="text-3xl sm:text-4xl md:text-3xl md:text-5xl mb-5 transition-transform duration-300 group-hover:scale-110">⚡</div>
      <h3 className="text-2xl font-bold mb-3">Fast Delivery</h3>
      <p className="text-gray-400">
        Efficient development process with quick turnaround and quality assurance.
      </p>
    </div>

    <div className="
group
bg-white/5
border
border-white/10
rounded-3xl
p-6 md:p-8
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/5
hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
">
      <div className="text-3xl sm:text-4xl md:text-3xl md:text-5xl mb-5 transition-transform duration-300 group-hover:scale-110">🔒</div>
      <h3 className="text-2xl font-bold mb-3">Secure Solutions</h3>
      <p className="text-gray-400">
        We follow modern security practices to protect your business and data.
      </p>
    </div>

    <div className="
group
bg-white/5
border
border-white/10
rounded-3xl
p-6 md:p-8
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/5
hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
">
      <div className="text-3xl sm:text-4xl md:text-3xl md:text-5xl mb-5 transition-transform duration-300 group-hover:scale-110">☁️</div>
      <h3 className="text-2xl font-bold mb-3">Cloud & Microsoft 365</h3>
      <p className="text-gray-400">
        Complete Microsoft 365 deployment, migration, and business email solutions.
      </p>
    </div>

    <div className="
group
bg-white/5
border
border-white/10
rounded-3xl
p-6 md:p-8
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/5
hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
">
      <div className="text-3xl sm:text-4xl md:text-3xl md:text-5xl mb-5 transition-transform duration-300 group-hover:scale-110">🤝</div>
      <h3 className="text-2xl font-bold mb-3">Long-Term Support</h3>
      <p className="text-gray-400">
        We don't just deliver projects—we build lasting partnerships with ongoing support.
      </p>
    </div>

  </div>

</section>

<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20">

  <div className="text-center mb-16">
    <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
      Our Expertise
    </p>

    <h2 className="text-3xl sm:text-4xl md:text-3xl md:text-5xl font-black mt-4">
      Our Core Services
    </h2>

    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
      We provide end-to-end digital solutions that help businesses
      establish, grow, and manage their online presence efficiently.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    <div className="
group
bg-white/5
border
border-white/10
rounded-3xl
p-6 md:p-8
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/5
hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
">
      <h3 className="text-2xl font-bold mb-4">
        🌐 Website Development
      </h3>
      <p className="text-gray-400">
        Modern business websites, landing pages, portfolio websites,
        and custom web applications.
      </p>
    </div>

    <div className="
group
bg-white/5
border
border-white/10
rounded-3xl
p-6 md:p-8
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/5
hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
">
      <h3 className="text-2xl font-bold mb-4">
        ☁️ Microsoft 365
      </h3>
      <p className="text-gray-400">
        Business email setup, Microsoft 365 migration,
        Teams, Outlook, and OneDrive configuration.
      </p>
    </div>

    <div className="
group
bg-white/5
border
border-white/10
rounded-3xl
p-6 md:p-8
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/5
hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
">
      <h3 className="text-2xl font-bold mb-4">
        🖥️ IT Support
      </h3>
      <p className="text-gray-400">
        Remote and on-site IT support, workstation setup,
        networking, and troubleshooting.
      </p>
    </div>

    <div className="
group
bg-white/5
border
border-white/10
rounded-3xl
p-6 md:p-8
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/5
hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
">
      <h3 className="text-2xl font-bold mb-4">
        📧 Business Email
      </h3>
      <p className="text-gray-400">
        Professional domain-based email setup with enhanced
        security and reliability.
      </p>
    </div>

    <div className="
group
bg-white/5
border
border-white/10
rounded-3xl
p-6 md:p-8
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/5
hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
">
      <h3 className="text-2xl font-bold mb-4">
        🧪 Software Testing
      </h3>
      <p className="text-gray-400">
        Manual testing, cross-browser testing,
        mobile testing, and QA services.
      </p>
    </div>

    <div className="
group
bg-white/5
border
border-white/10
rounded-3xl
p-6 md:p-8
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/5
hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
">
      <h3 className="text-2xl font-bold mb-4">
        🚀 SEO & Performance
      </h3>
      <p className="text-gray-400">
        Website optimization, technical SEO,
        Core Web Vitals improvements, and performance tuning.
      </p>
    </div>

  </div>

</section>

<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20">

  <div className="text-center mb-16">
    <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
      Our Technology Stack
    </p>

    <h2 className="text-3xl sm:text-4xl md:text-3xl md:text-5xl font-black mt-4">
      Technologies We Use
    </h2>

    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
      We use modern technologies and industry-standard tools to build
      secure, scalable, and high-performance digital solutions.
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-5">

    <span className="
bg-white/5
border
border-white/10
px-6
py-3
rounded-full
text-sm md:text-lg
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/10
hover:-translate-y-1
">
      ⚛️ React
    </span>

    <span className="
bg-white/5
border
border-white/10
px-6
py-3
rounded-full
text-sm md:text-lg
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/10
hover:-translate-y-1
">
      ▲ Next.js
    </span>

    <span className="
bg-white/5
border
border-white/10
px-6
py-3
rounded-full
text-sm md:text-lg
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/10
hover:-translate-y-1
">
      🎨 Tailwind CSS
    </span>

    <span className="
bg-white/5
border
border-white/10
px-6
py-3
rounded-full
text-sm md:text-lg
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/10
hover:-translate-y-1
">
      🟨 JavaScript
    </span>

    <span className="
bg-white/5
border
border-white/10
px-6
py-3
rounded-full
text-sm md:text-lg
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/10
hover:-translate-y-1
">
      🔷 TypeScript
    </span>

    <span className="
bg-white/5
border
border-white/10
px-6
py-3
rounded-full
text-sm md:text-lg
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/10
hover:-translate-y-1
">
      🟢 Node.js
    </span>

    <span className="
bg-white/5
border
border-white/10
px-6
py-3
rounded-full
text-sm md:text-lg
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/10
hover:-translate-y-1
">
      🐬 MySQL
    </span>

    <span className="
bg-white/5
border
border-white/10
px-6
py-3
rounded-full
text-sm md:text-lg
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/10
hover:-translate-y-1
">
      ☁️ Microsoft 365
    </span>

    <span className="
bg-white/5
border
border-white/10
px-6
py-3
rounded-full
text-sm md:text-lg
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/10
hover:-translate-y-1
">
      🌐 WordPress
    </span>

    <span className="
bg-white/5
border
border-white/10
px-6
py-3
rounded-full
text-sm md:text-lg
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/10
hover:-translate-y-1
">
      🐙 Git & GitHub
    </span>

    <span className="
bg-white/5
border
border-white/10
px-6
py-3
rounded-full
text-sm md:text-lg
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/10
hover:-translate-y-1
">
      📱 Responsive Design
    </span>

    <span className="
bg-white/5
border
border-white/10
px-6
py-3
rounded-full
text-sm md:text-lg
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/10
hover:-translate-y-1
">
      🔒 Cyber Security
    </span>

  </div>

</section>

<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20">

  <div className="text-center mb-16">
    <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
      Our Achievements
    </p>

    <h2 className="text-3xl sm:text-4xl md:text-3xl md:text-5xl font-black mt-4">
      Growing with Every Project
    </h2>

    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
      Every project helps us improve our expertise and deliver even better
      digital experiences for businesses and entrepreneurs.
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">

    <div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6 md:p-8
text-center
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/5
">
      <h3 className="text-3xl sm:text-4xl md:text-3xl md:text-5xl font-black text-blue-400">10+</h3>
      <p className="mt-3 text-gray-400">
        Projects Completed
      </p>
    </div>

    <div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6 md:p-8
text-center
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/5
">
      <h3 className="text-3xl sm:text-4xl md:text-3xl md:text-5xl font-black text-blue-400">24/7</h3>
      <p className="mt-3 text-gray-400">
        Support
      </p>
    </div>

    <div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6 md:p-8
text-center
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/5
">
      <h3 className="text-3xl sm:text-4xl md:text-3xl md:text-5xl font-black text-blue-400">100%</h3>
      <p className="mt-3 text-gray-400">
        Client Focus
      </p>
    </div>

    <div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6 md:p-8
text-center
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/5
">
      <h3 className="text-3xl sm:text-4xl md:text-3xl md:text-5xl font-black text-blue-400">Fast</h3>
      <p className="mt-3 text-gray-400">
        Project Delivery
      </p>
    </div>

  </div>

</section>

<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="
rounded-[40px]
bg-gradient-to-r
from-blue-600
to-cyan-500
p-6 sm:p-8 md:p-12
text-center
transition-all
duration-500
hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]
">

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
      Let's Build Something Amazing Together
    </h2>

    <p className="mt-6 text-white/90 max-w-2xl mx-auto text-sm md:text-lg">
      Whether you need a professional website, Microsoft 365 setup,
      business email, IT support, or software testing, we're ready
      to help your business grow.
    </p>

    <a
      href="/contact"
      className="
inline-block
mt-10
bg-white
text-black
font-bold
px-8
py-4
rounded-2xl
transition-all
duration-300
hover:scale-105
hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]
"
    >
      Start Your Project
    </a>

  </div>

</section>

    </main>
  );
}