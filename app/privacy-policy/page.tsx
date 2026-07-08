import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Privacy Policy | Bytecraft Studio",
  description:
    "Read Bytecraft Studio's Privacy Policy to understand how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      {/* Hero */}

      <section className="relative overflow-hidden py-24">

        {/* Background Glow */}

        <div className="absolute inset-0 -z-10">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full" />

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full" />

        </div>

        <div className="max-w-5xl mx-auto px-6 text-center">

          <SectionTitle
            badge="Legal"
            title="Privacy Policy"
            description="Your privacy is important to Bytecraft Studio. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website and services."
          />

          <div className="inline-flex mt-10 px-6 py-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium">

            Last Updated • July 2026

          </div>

        </div>

      </section>

      {/* Table of Contents will come here */}

   
{/* Table of Contents */}

<section className="max-w-5xl mx-auto px-6 pb-20">

  <div
  className="
  group
  bg-white/5
  border
  border-white/10
  rounded-[32px]
  p-10
  transition-all
  duration-300
  hover:border-cyan-400
  hover:bg-cyan-500/5
  hover:-translate-y-1
  hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
"
>
    <h2 className="text-3xl font-black mb-8">
      Table of Contents
    </h2>

    <div className="grid md:grid-cols-2 gap-5">

      <a
        href="#information"
        className="
group
flex
items-center
justify-between
bg-white/5
rounded-2xl
p-5
border
border-transparent
transition-all
duration-300
hover:bg-cyan-500/10
hover:border-cyan-400
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
">
        <span>1. Information We Collect</span>
        <span>→</span>
      </a>

      <a
        href="#usage"
        className="
group
flex
items-center
justify-between
bg-white/5
rounded-2xl
p-5
border
border-transparent
transition-all
duration-300
hover:bg-cyan-500/10
hover:border-cyan-400
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
">
        <span>2. How We Use Information</span>
        <span>→</span>
      </a>

      <a
        href="#cookies"
        className="
group
flex
items-center
justify-between
bg-white/5
rounded-2xl
p-5
border
border-transparent
transition-all
duration-300
hover:bg-cyan-500/10
hover:border-cyan-400
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
">
        <span>3. Cookies</span>
        <span>→</span>
      </a>

      <a
        href="#thirdparty"
        className="
group
flex
items-center
justify-between
bg-white/5
rounded-2xl
p-5
border
border-transparent
transition-all
duration-300
hover:bg-cyan-500/10
hover:border-cyan-400
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
">
        <span>4. Third-Party Services</span>
        <span>→</span>
      </a>

      <a
        href="#security"
        className="
group
flex
items-center
justify-between
bg-white/5
rounded-2xl
p-5
border
border-transparent
transition-all
duration-300
hover:bg-cyan-500/10
hover:border-cyan-400
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
">
        <span>5. Data Security</span>
        <span>→</span>
      </a>

      <a
        href="#rights"
        className="
group
flex
items-center
justify-between
bg-white/5
rounded-2xl
p-5
border
border-transparent
transition-all
duration-300
hover:bg-cyan-500/10
hover:border-cyan-400
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
">
        <span>6. Your Rights</span>
        <span>→</span>
      </a>

      <a
        href="#contact"
        className="
group
flex
items-center
justify-between
bg-white/5
rounded-2xl
p-5
border
border-transparent
transition-all
duration-300
hover:bg-cyan-500/10
hover:border-cyan-400
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
">
        <span>7. Contact Us</span>
       <span className="transition-transform duration-300 group-hover:translate-x-2">
  →
</span>
      </a>

    </div>

  </div>

</section>

{/* Information We Collect */}

<section
  id="information"
  className="max-w-5xl mx-auto px-6 pb-10"
>

  <div className="
group
bg-white/5
border
border-white/10
rounded-[32px]
p-10
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/5
hover:-translate-y-1
hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
">

    <div className="flex items-center gap-5">

      <div className="
w-14
h-14
rounded-2xl
bg-cyan-500/20
flex
items-center
justify-center
text-2xl
transition-all
duration-300
group-hover:scale-110
group-hover:rotate-6
">
        📄
      </div>

      <h2
  className="
  text-3xl
  font-black
  transition-colors
  duration-300
  group-hover:text-cyan-400
"
>
        Information We Collect
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">

      Bytecraft Studio may collect information that you voluntarily
      provide when contacting us, requesting a quotation, submitting
      project requirements, or communicating with our team.

    </p>

    <ul className="mt-8 space-y-4 text-gray-300">

      <li
className="
flex
items-center
gap-3
transition-all
duration-300
hover:text-cyan-400
hover:translate-x-2
"
>
<span className="text-cyan-400">✔</span>
Full Name
</li>

      <li
className="
flex
items-center
gap-3
transition-all
duration-300
hover:text-cyan-400
hover:translate-x-2
"
>
<span className="text-cyan-400">✔</span> Email Address</li>

     <li
className="
flex
items-center
gap-3
transition-all
duration-300
hover:text-cyan-400
hover:translate-x-2
"
>
<span className="text-cyan-400">✔</span> Phone Number</li>

      <li
className="
flex
items-center
gap-3
transition-all
duration-300
hover:text-cyan-400
hover:translate-x-2
"
>
<span className="text-cyan-400">✔</span> Company Name</li>

     <li
className="
flex
items-center
gap-3
transition-all
duration-300
hover:text-cyan-400
hover:translate-x-2
"
>
<span className="text-cyan-400">✔</span> Business Requirements</li>

      <li
className="
flex
items-center
gap-3
transition-all
duration-300
hover:text-cyan-400
hover:translate-x-2
"
>
<span className="text-cyan-400">✔</span> Project Details</li>

     <li
className="
flex
items-center
gap-3
transition-all
duration-300
hover:text-cyan-400
hover:translate-x-2
"
>
<span className="text-cyan-400">✔</span> Any information you choose to provide</li>

    </ul>

  </div>

</section>

{/* How We Use Information */}

<section
  id="usage"
  className="max-w-5xl mx-auto px-6 pb-10"
>

  <div
  className="
  group
  bg-white/5
  border
  border-white/10
  rounded-[32px]
  p-10
  transition-all
  duration-300
  hover:border-cyan-400
  hover:bg-cyan-500/5
  hover:-translate-y-1
  hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
"
>

    <div className="flex items-center gap-5">

      <div
  className="
  w-14
  h-14
  rounded-2xl
  bg-blue-500/20
  flex
  items-center
  justify-center
  text-2xl
  transition-all
  duration-300
  group-hover:scale-110
  group-hover:rotate-6
"
>
  ⚙️
</div>

      <h2
  className="
  text-3xl
  font-black
  transition-colors
  duration-300
  group-hover:text-cyan-400
"
>
        How We Use Your Information
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">

      The information collected is used only for legitimate business
      purposes and to improve our services.

    </p>

    <ul className="mt-8 space-y-4 text-gray-300">

      <li
className="
flex
items-center
gap-3
transition-all
duration-300
hover:text-cyan-400
hover:translate-x-2
"
>
<span className="text-cyan-400">✔</span> Respond to enquiries</li>

      <li
className="
flex
items-center
gap-3
transition-all
duration-300
hover:text-cyan-400
hover:translate-x-2
"
>
<span className="text-cyan-400">✔</span> Provide quotations</li>

     <li
className="
flex
items-center
gap-3
transition-all
duration-300
hover:text-cyan-400
hover:translate-x-2
"
>
<span className="text-cyan-400">✔</span> Deliver requested services</li>

     <li
className="
flex
items-center
gap-3
transition-all
duration-300
hover:text-cyan-400
hover:translate-x-2
"
>
<span className="text-cyan-400">✔</span> Improve website performance</li>

      <li
className="
flex
items-center
gap-3
transition-all
duration-300
hover:text-cyan-400
hover:translate-x-2
"
>
<span className="text-cyan-400">✔</span> Customer support</li>

      <li
className="
flex
items-center
gap-3
transition-all
duration-300
hover:text-cyan-400
hover:translate-x-2
"
>
<span className="text-cyan-400">✔</span> Project communication</li>

      <li
className="
flex
items-center
gap-3
transition-all
duration-300
hover:text-cyan-400
hover:translate-x-2
"
>
<span className="text-cyan-400">✔</span> Security monitoring</li>

    </ul>

  </div>

</section>

{/* Cookies */}

<section
  id="cookies"
  className="max-w-5xl mx-auto px-6 pb-20"
>

  <div
  className="
  group
  bg-white/5
  border
  border-white/10
  rounded-[32px]
  p-10
  transition-all
  duration-300
  hover:border-cyan-400
  hover:bg-cyan-500/5
  hover:-translate-y-1
  hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
"
>

    <div className="flex items-center gap-5">

      <div
  className="
  w-14
  h-14
  rounded-2xl
  bg-blue-500/20
  flex
  items-center
  justify-center
  text-2xl
  transition-all
  duration-300
  group-hover:scale-110
  group-hover:rotate-6
"
>
  🍪
      </div>

      <h2
  className="
  text-3xl
  font-black
  transition-colors
  duration-300
  group-hover:text-cyan-400
"
>
        Cookies
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">

      Our website may use cookies and similar technologies to improve
      website functionality, analyze visitor behavior, remember user
      preferences, and enhance the browsing experience.

    </p>

    <p className="mt-6 text-gray-300 leading-8">

      You can disable cookies through your browser settings at any
      time. However, certain features of the website may not function
      correctly if cookies are disabled.

    </p>

  </div>

</section>

{/* Third-Party Services */}

<section
  id="thirdparty"
  className="max-w-5xl mx-auto px-6 pb-10"
>

  <div
  className="
  group
  bg-white/5
  border
  border-white/10
  rounded-[32px]
  p-10
  transition-all
  duration-300
  hover:border-cyan-400
  hover:bg-cyan-500/5
  hover:-translate-y-1
  hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
"
>

    <div className="flex items-center gap-5">

      <div
  className="
  w-14
  h-14
  rounded-2xl
  bg-blue-500/20
  flex
  items-center
  justify-center
  text-2xl
  transition-all
  duration-300
  group-hover:scale-110
  group-hover:rotate-6
"
>
  🌐
      </div>

      <h2
  className="
  text-3xl
  font-black
  transition-colors
  duration-300
  group-hover:text-cyan-400
"
>
        Third-Party Services
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      Bytecraft Studio may use trusted third-party services to improve
      website functionality, security, analytics, communication, and
      service delivery.
    </p>

    <div className="grid md:grid-cols-2 gap-5 mt-10">

      <div className="
group
bg-white/5
rounded-2xl
p-5
border
border-white/10
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/5
hover:-translate-y-1
">
        ✔ Microsoft 365
      </div>

      <div className="
group
bg-white/5
rounded-2xl
p-5
border
border-white/10
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/5
hover:-translate-y-1
">
        ✔ Google Analytics
      </div>

      <div className="
group
bg-white/5
rounded-2xl
p-5
border
border-white/10
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/5
hover:-translate-y-1
">
        ✔ Google Forms
      </div>

      <div className="
group
bg-white/5
rounded-2xl
p-5
border
border-white/10
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/5
hover:-translate-y-1
">
        ✔ Vercel Hosting
      </div>

      <div className="
group
bg-white/5
rounded-2xl
p-5
border
border-white/10
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/5
hover:-translate-y-1
">
        ✔ Cloudflare
      </div>

      <div className="
group
bg-white/5
rounded-2xl
p-5
border
border-white/10
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/5
hover:-translate-y-1
">
        ✔ GitHub
      </div>

    </div>

  </div>

</section>

{/* Data Security */}

<section
  id="security"
  className="max-w-5xl mx-auto px-6 pb-10"
>

  <div
  className="
  group
  bg-white/5
  border
  border-white/10
  rounded-[32px]
  p-10
  transition-all
  duration-300
  hover:border-cyan-400
  hover:bg-cyan-500/5
  hover:-translate-y-1
  hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
"
>

    <div className="flex items-center gap-5">

      <div
  className="
  w-14
  h-14
  rounded-2xl
  bg-blue-500/20
  flex
  items-center
  justify-center
  text-2xl
  transition-all
  duration-300
  group-hover:scale-110
  group-hover:rotate-6
"
>
 🔒
      </div>

      <h2
  className="
  text-3xl
  font-black
  transition-colors
  duration-300
  group-hover:text-cyan-400
"
>
        Data Security
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      We implement appropriate technical and organizational security
      measures to safeguard your information against unauthorized
      access, disclosure, alteration, or destruction.
    </p>

    <ul className="mt-8 space-y-4 text-gray-300">

      <li
  className="
  flex
  items-center
  gap-3
  transition-all
  duration-300
  hover:text-cyan-400
  hover:translate-x-2
"
>
  <span className="text-cyan-400">✔</span>
  SSL Encryption
</li>

      <li
  className="
  flex
  items-center
  gap-3
  transition-all
  duration-300
  hover:text-cyan-400
  hover:translate-x-2
"
>
  <span className="text-cyan-400">✔</span> Secure Hosting</li>

      <li
  className="
  flex
  items-center
  gap-3
  transition-all
  duration-300
  hover:text-cyan-400
  hover:translate-x-2
"
>
  <span className="text-cyan-400">✔</span> Access Control</li>

      <li
  className="
  flex
  items-center
  gap-3
  transition-all
  duration-300
  hover:text-cyan-400
  hover:translate-x-2
"
>
  <span className="text-cyan-400">✔</span> Regular Software Updates</li>

      <li
  className="
  flex
  items-center
  gap-3
  transition-all
  duration-300
  hover:text-cyan-400
  hover:translate-x-2
"
>
  <span className="text-cyan-400">✔</span> Secure Cloud Services</li>

      <li
  className="
  flex
  items-center
  gap-3
  transition-all
  duration-300
  hover:text-cyan-400
  hover:translate-x-2
"
>
  <span className="text-cyan-400">✔</span> Industry Best Practices</li>

    </ul>

  </div>

</section>

{/* Your Rights */}

<section
  id="rights"
  className="max-w-5xl mx-auto px-6 pb-20"
>

  <div
  className="
  group
  bg-white/5
  border
  border-white/10
  rounded-[32px]
  p-10
  transition-all
  duration-300
  hover:border-cyan-400
  hover:bg-cyan-500/5
  hover:-translate-y-1
  hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
"
>

    <div className="flex items-center gap-5">

      <div
  className="
  w-14
  h-14
  rounded-2xl
  bg-blue-500/20
  flex
  items-center
  justify-center
  text-2xl
  transition-all
  duration-300
  group-hover:scale-110
  group-hover:rotate-6
"
>
 👤
      </div>

     <h2
  className="
  text-3xl
  font-black
  transition-colors
  duration-300
  group-hover:text-cyan-400
"
>
        Your Rights
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      Depending on applicable laws, you may have rights regarding
      your personal information.
    </p>

    <ul className="mt-8 space-y-4 text-gray-300">

      <li
  className="
  flex
  items-center
  gap-3
  transition-all
  duration-300
  hover:text-cyan-400
  hover:translate-x-2
"
>
  <span className="text-cyan-400">✔</span>
  Request access to your personal information
</li>

     <li
  className="
  flex
  items-center
  gap-3
  transition-all
  duration-300
  hover:text-cyan-400
  hover:translate-x-2
"
>
  <span className="text-cyan-400">✔</span> Request correction of inaccurate information</li>

      <li
  className="
  flex
  items-center
  gap-3
  transition-all
  duration-300
  hover:text-cyan-400
  hover:translate-x-2
"
>
  <span className="text-cyan-400">✔</span> Request deletion of your information where applicable</li>

      <li
  className="
  flex
  items-center
  gap-3
  transition-all
  duration-300
  hover:text-cyan-400
  hover:translate-x-2
"
>
  <span className="text-cyan-400">✔</span> Withdraw consent where processing is based on consent</li>

      <li
  className="
  flex
  items-center
  gap-3
  transition-all
  duration-300
  hover:text-cyan-400
  hover:translate-x-2
"
>
  <span className="text-cyan-400">✔</span> Contact us regarding any privacy-related concerns</li>

    </ul>

  </div>

</section>

{/* Contact Us */}

<section
  id="contact"
  className="max-w-5xl mx-auto px-6 pb-20"
>

  <div
  className="
  group
  bg-white/5
  border
  border-white/10
  rounded-[32px]
  p-10
  transition-all
  duration-300
  hover:border-cyan-400
  hover:bg-cyan-500/5
  hover:-translate-y-1
  hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
"
>

    <div className="flex items-center gap-5">

     <div
  className="
  w-14
  h-14
  rounded-2xl
  bg-blue-500/20
  flex
  items-center
  justify-center
  text-2xl
  transition-all
  duration-300
  group-hover:scale-110
  group-hover:rotate-6
"
>
  📞
      </div>

      <h2
  className="
  text-3xl
  font-black
  transition-colors
  duration-300
  group-hover:text-cyan-400
"
>
        Contact Us
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      If you have any questions about this Privacy Policy or how
      Bytecraft Studio handles your personal information, please
      contact us using the details below.
    </p>

    <div className="grid md:grid-cols-2 gap-6 mt-10">

      <div className="
group
bg-white/5
rounded-2xl
p-6
border
border-white/10
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/5
hover:-translate-y-2
hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
">

        <h3 className="font-bold text-xl mb-4">
          📧 Email
        </h3>

        <p className="text-gray-400">
          contact@bytecraftstudio.com
        </p>

      </div>

      <div className="
group
bg-white/5
rounded-2xl
p-6
border
border-white/10
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/5
hover:-translate-y-2
hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
">

        <h3 className="font-bold text-xl mb-4">
          📍 Location
        </h3>

        <p className="text-gray-400">
          Chennai, Tamil Nadu, India
        </p>

      </div>

      <div className="
group
bg-white/5
rounded-2xl
p-6
border
border-white/10
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/5
hover:-translate-y-2
hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
">

        <h3 className="font-bold text-xl mb-4">
          🌐 Website
        </h3>

        <p className="text-gray-400">
          https://bytecraftstudio.com
        </p>

      </div>

      <div className="
group
bg-white/5
rounded-2xl
p-6
border
border-white/10
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/5
hover:-translate-y-2
hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
">

        <h3 className="font-bold text-xl mb-4">
          💬 Support
        </h3>

        <p className="text-gray-400">
          Monday – Saturday
          <br />
          9:00 AM – 7:00 PM
        </p>

      </div>

    </div>

  </div>

</section>

{/* CTA */}

<section className="max-w-6xl mx-auto px-6 pb-28">

  <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 p-[2px]">

    <div className="
bg-[#0B0F19]
rounded-[40px]
px-8
py-20
text-center
transition-all
duration-500
hover:shadow-[0_0_60px_rgba(34,211,238,0.18)]
">

      <p className="uppercase tracking-[0.3em] text-cyan-400">
        Need More Information?
      </p>

      <h2 className="text-5xl md:text-6xl font-black mt-6">
        Questions About
        <br />
        Your Privacy?
      </h2>

      <p className="mt-8 max-w-3xl mx-auto text-gray-300 text-lg leading-8">
        If you have any questions regarding this Privacy Policy,
        your personal information, or our services,
        we're always happy to help.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-12">

        <a
          href="/contact"
          className="
bg-cyan-500
text-black
font-bold
px-8
py-4
rounded-2xl
transition-all
duration-300
hover:bg-cyan-400
hover:scale-105
hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
">
          Contact Us
        </a>

        <a
          href="/services"
         className="
border
border-white/20
text-white
font-bold
px-8
py-4
rounded-2xl
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/10
hover:scale-105
">
          Explore Services
        </a>

      </div>

    </div>

  </div>

</section>

 </main>
  );
}