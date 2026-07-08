import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Terms & Conditions | Bytecraft Studio",
  description:
    "Read the Terms & Conditions governing the use of Bytecraft Studio's website and services.",
};

export default function TermsPage() {
  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      {/* Hero */}

      <section className="relative overflow-hidden py-24">

        <div className="absolute inset-0 -z-10">

          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full" />

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full" />

        </div>

        <div className="max-w-5xl mx-auto px-6 text-center">

          <SectionTitle
            badge="Legal"
            title="Terms & Conditions"
            description="These Terms & Conditions govern your access to the Bytecraft Studio website and the services we provide. Please read them carefully before using our website."
          />

          <div className="inline-flex mt-10 px-6 py-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm">

            Last Updated • July 2026

          </div>

        </div>

      </section>

      {/* Table of Contents comes here */}


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
        href="#acceptance"
        className="flex items-center justify-between bg-white/5 rounded-2xl p-5 border border-transparent hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
      >
        <span>1. Acceptance of Terms</span>
        <span>→</span>
      </a>

      <a
        href="#services"
        className="flex items-center justify-between bg-white/5 rounded-2xl p-5 border border-transparent hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
      >
        <span>2. Services</span>
        <span>→</span>
      </a>

      <a
        href="#payments"
        className="flex items-center justify-between bg-white/5 rounded-2xl p-5 border border-transparent hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
      >
        <span>3. Payments</span>
        <span>→</span>
      </a>

      <a
        href="#client"
        className="flex items-center justify-between bg-white/5 rounded-2xl p-5 border border-transparent hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
      >
        <span>4. Client Responsibilities</span>
        <span>→</span>
      </a>

      <a
        href="#property"
        className="flex items-center justify-between bg-white/5 rounded-2xl p-5 border border-transparent hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
      >
        <span>5. Intellectual Property</span>
        <span>→</span>
      </a>

      <a
        href="#liability"
        className="flex items-center justify-between bg-white/5 rounded-2xl p-5 border border-transparent hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
      >
        <span>6. Limitation of Liability</span>
        <span>→</span>
      </a>

      <a
        href="#termination"
        className="flex items-center justify-between bg-white/5 rounded-2xl p-5 border border-transparent hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
      >
        <span>7. Termination</span>
        <span>→</span>
      </a>

      <a
        href="#changes"
        className="flex items-center justify-between bg-white/5 rounded-2xl p-5 border border-transparent hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
      >
        <span>8. Changes to Terms</span>
        <span>→</span>
      </a>

      <a
        href="#contact"
        className="md:col-span-2 flex items-center justify-between bg-white/5 rounded-2xl p-5 border border-transparent hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
      >
        <span>9. Contact Us</span>
        <span>→</span>
      </a>

    </div>

  </div>

</section>

{/* Acceptance of Terms */}

<section
  id="acceptance"
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
  bg-cyan-500/20
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
    📜
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
        Acceptance of Terms
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      By accessing or using the Bytecraft Studio website, you agree to
      comply with these Terms & Conditions. If you do not agree with
      any part of these terms, please discontinue use of our website
      and services.
    </p>

  </div>

</section>

{/* Services */}

<section
  id="services"
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
  💼
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
        Services
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      Bytecraft Studio provides professional digital services including
      website development, Shopify store development, WordPress websites,
      Microsoft 365 deployment, business email solutions, cloud migration,
      IT support, software testing, SEO optimization, website maintenance,
      and related technology services.
    </p>

    <p className="mt-6 text-gray-300 leading-8">
      Every project is delivered according to the agreed scope,
      timeline, and pricing discussed before work begins.
    </p>

  </div>

</section>

{/* Payments */}

<section
  id="payments"
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
> 💳
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
        Payments
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      Payment terms will be clearly communicated before the start of
      every project. Depending on the project, an advance payment may
      be required before work begins.
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
  Quotes are valid for a limited period.
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
  <span className="text-cyan-400">✔</span> Payments must be completed according to the agreed schedule.</li>

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
  <span className="text-cyan-400">✔</span> Delayed payments may affect project timelines.</li>

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
  <span className="text-cyan-400">✔</span> Additional work outside the agreed scope may incur extra charges.</li>

    </ul>

  </div>

</section>

{/* Client Responsibilities */}

<section
  id="client"
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
  🤝
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
        Client Responsibilities
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      Clients are responsible for providing accurate information,
      required content, approvals, and timely feedback necessary to
      complete the project successfully.
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
  <span className="text-cyan-400">✔</span> Provide project requirements clearly.</li>

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
  <span className="text-cyan-400">✔</span> Submit content and assets on time.</li>

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
  <span className="text-cyan-400">✔</span> Review and approve deliverables promptly.</li>

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
  <span className="text-cyan-400">✔</span> Ensure legal ownership of provided content.</li>

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
  <span className="text-cyan-400">✔</span> Cooperate throughout the project lifecycle.</li>

    </ul>

  </div>

</section>

{/* Intellectual Property */}

<section
  id="property"
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
  ©
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
        Intellectual Property
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      Unless otherwise agreed in writing, all website designs,
      source code, graphics, branding, documentation, and other
      materials created by Bytecraft Studio remain our intellectual
      property until full payment has been received.
    </p>

    <p className="mt-6 text-gray-300 leading-8">
      Clients retain ownership of content, logos, trademarks,
      and materials they provide for their projects.
    </p>

  </div>

</section>

{/* Limitation of Liability */}

<section
  id="liability"
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
 ⚠️
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
        Limitation of Liability
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      Bytecraft Studio shall not be liable for any indirect,
      incidental, consequential, or special damages arising
      from the use of our website or services.
    </p>

    <p className="mt-6 text-gray-300 leading-8">
      While we strive to deliver reliable and secure solutions,
      we cannot guarantee uninterrupted operation due to
      third-party services, internet outages, or circumstances
      beyond our control.
    </p>

  </div>

</section>

{/* Termination */}

<section
  id="termination"
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
  ❌
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
        Termination
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      We reserve the right to suspend or terminate services if
      these Terms & Conditions are violated, payments remain
      outstanding, or illegal or abusive activities are detected.
    </p>

  </div>

</section>

{/* Changes to Terms */}

<section
  id="changes"
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
  🔄
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
        Changes to These Terms
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      Bytecraft Studio may update these Terms & Conditions from
      time to time to reflect changes in our services, legal
      requirements, or business practices.
    </p>

    <p className="mt-6 text-gray-300 leading-8">
      The latest version will always be available on this page,
      and continued use of our website indicates your acceptance
      of any updates.
    </p>

  </div>

</section>

{/* Contact */}

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
>   Contact Us
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      If you have any questions regarding these Terms & Conditions
      or our services, please feel free to contact Bytecraft Studio.
      Our team will be happy to assist you.
    </p>

    <div className="grid md:grid-cols-2 gap-6 mt-10">

      <div
  className="
  group
  bg-white/5
  border
  border-white/10
  rounded-2xl
  p-6
  transition-all
  duration-300
  hover:border-cyan-400
  hover:bg-cyan-500/5
  hover:-translate-y-2
  hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
"
>

        <h3 className="text-xl font-bold mb-3">
          📧 Email
        </h3>

        <p className="text-gray-400">
          contact@bytecraftstudio.com
        </p>

      </div>

      <div
  className="
  group
  bg-white/5
  border
  border-white/10
  rounded-2xl
  p-6
  transition-all
  duration-300
  hover:border-cyan-400
  hover:bg-cyan-500/5
  hover:-translate-y-2
  hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
"
>

        <h3 className="text-xl font-bold mb-3">
          🌐 Website
        </h3>

        <p className="text-gray-400">
          https://bytecraftstudio.com
        </p>

      </div>

     <div
  className="
  group
  bg-white/5
  border
  border-white/10
  rounded-2xl
  p-6
  transition-all
  duration-300
  hover:border-cyan-400
  hover:bg-cyan-500/5
  hover:-translate-y-2
  hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
"
>
        <h3 className="text-xl font-bold mb-3">
          📍 Location
        </h3>

        <p className="text-gray-400">
          Chennai, Tamil Nadu, India
        </p>

      </div>

      <div
  className="
  group
  bg-white/5
  border
  border-white/10
  rounded-2xl
  p-6
  transition-all
  duration-300
  hover:border-cyan-400
  hover:bg-cyan-500/5
  hover:-translate-y-2
  hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
"
>
        <h3 className="text-xl font-bold mb-3">
          🕒 Business Hours
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

  <div className="rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 p-[2px]">

    <div className="bg-[#0B0F19] rounded-[40px] px-8 py-20 text-center">

      <p className="uppercase tracking-[0.3em] text-cyan-400">
        Need Assistance?
      </p>

      <h2 className="text-5xl md:text-6xl font-black mt-6 leading-tight">
        Questions About
        <br />
        Our Terms?
      </h2>

      <p className="mt-8 text-lg text-gray-300 max-w-3xl mx-auto leading-8">
        If you need clarification about these Terms & Conditions
        or would like to discuss your project requirements,
        our team is always ready to help.
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
" >
          Explore Services
        </a>

      </div>

    </div>

  </div>

</section>

    </main>
  );
}