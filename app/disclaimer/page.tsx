import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Disclaimer | Bytecraft Studio",
  description:
    "Read the Bytecraft Studio Disclaimer regarding the use of our website, services, and information.",
};

export default function DisclaimerPage() {
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
            title="Disclaimer"
            description="Please read this Disclaimer carefully before using the Bytecraft Studio website. By accessing our website or services, you acknowledge and agree to the terms outlined below."
          />

          <div className="inline-flex mt-10 px-6 py-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium">

            Last Updated • July 2026

          </div>

        </div>

      </section>

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
        href="#general-information"
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
hover:border-cyan-400
hover:bg-cyan-500/10
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
">
        <span>1. General Information</span>
        <span
  className="
  transition-transform
  duration-300
  group-hover:translate-x-2
"
>
  →
</span>
</a>

      <a
        href="#professional-advice"
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
hover:border-cyan-400
hover:bg-cyan-500/10
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
">
        <span>2. No Professional Advice</span>
       <span
  className="
  transition-transform
  duration-300
  group-hover:translate-x-2
"
>
  →
</span>
      </a>

      <a
        href="#accuracy"
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
hover:border-cyan-400
hover:bg-cyan-500/10
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
">
        <span>3. Accuracy of Information</span>
        <span
  className="
  transition-transform
  duration-300
  group-hover:translate-x-2
"
>
  →
</span>
      </a>

      <a
        href="#external-links"
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
hover:border-cyan-400
hover:bg-cyan-500/10
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
">
        <span>4. External Links</span>
        <span
  className="
  transition-transform
  duration-300
  group-hover:translate-x-2
"
>
  →
</span>
      </a>

      <a
        href="#liability"
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
hover:border-cyan-400
hover:bg-cyan-500/10
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
">
        <span>5. Limitation of Liability</span>
        <span
  className="
  transition-transform
  duration-300
  group-hover:translate-x-2
"
>
  →
</span>
      </a>

      <a
        href="#changes"
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
hover:border-cyan-400
hover:bg-cyan-500/10
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
">
        <span>6. Changes to This Disclaimer</span>
        <span
  className="
  transition-transform
  duration-300
  group-hover:translate-x-2
"
>
  →
</span>
      </a>

      <a
        href="#contact"
        className="md:col-span-2 flex items-center justify-between bg-white/5 rounded-2xl p-5 border border-transparent hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
      >
        <span>7. Contact Us</span>
        <span
  className="
  transition-transform
  duration-300
  group-hover:translate-x-2
"
>
  →
</span>
      </a>

    </div>

  </div>

</section>

{/* General Information */}

<section
  id="general-information"
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
>   📄
      </div>

      <h2
  className="
  text-3xl
  font-black
  transition-colors
  duration-300
  group-hover:text-cyan-400
"
>   General Information
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      The information published on the Bytecraft Studio website is
      provided for general informational purposes only. While we strive
      to provide accurate, current, and useful information, nothing on
      this website should be interpreted as professional, financial,
      legal, or technical advice unless explicitly stated.
    </p>

    <p className="mt-6 text-gray-300 leading-8">
      Your use of this website and reliance on any information provided
      is entirely at your own discretion and risk.
    </p>

  </div>

</section>

{/* No Professional Advice */}

<section
  id="professional-advice"
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
  group-hover:bg-cyan-500/30
  "
> ⚖️
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
        No Professional Advice
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      Any content available on this website, including articles,
      tutorials, documentation, recommendations, or technical guides,
      is intended for educational and informational purposes only.
    </p>

    <p className="mt-6 text-gray-300 leading-8">
      Before making business, financial, legal, or technical decisions,
      you should seek advice from appropriately qualified professionals
      relevant to your situation.
    </p>

  </div>

</section>

{/* Accuracy of Information */}

<section
  id="accuracy"
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
  group-hover:bg-cyan-500/30
  "
> ✅
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
        Accuracy of Information
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      Bytecraft Studio makes reasonable efforts to ensure that the
      information presented on this website is accurate and up to date.
      However, we do not guarantee that all content will always be
      complete, accurate, reliable, or free from errors.
    </p>

    <p className="mt-6 text-gray-300 leading-8">
      Website content, services, pricing, technologies, and other
      information may change without prior notice as our business
      evolves and services improve.
    </p>

  </div>

</section>

{/* External Links */}

<section
  id="external-links"
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
  group-hover:bg-cyan-500/30
  "
> 🌐
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
        External Links
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      Our website may contain links to third-party websites,
      services, tools, or resources for your convenience.
      These external websites are not controlled or operated
      by Bytecraft Studio.
    </p>

    <p className="mt-6 text-gray-300 leading-8">
      We are not responsible for the content, privacy practices,
      security, availability, or accuracy of information provided
      by third-party websites. Visiting external links is entirely
      at your own discretion.
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
  group-hover:bg-cyan-500/30
  "
>  ⚠️
      </div>

      <h2
  className="
  text-3xl
  font-black
  transition-colors
  duration-300
  group-hover:text-cyan-400
"
>   Limitation of Liability
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      Bytecraft Studio shall not be liable for any direct,
      indirect, incidental, consequential, or special damages
      arising from the use of this website, reliance on its
      content, or interruptions in service.
    </p>

    <p className="mt-6 text-gray-300 leading-8">
      Although we make every effort to maintain accurate and
      secure information, we cannot guarantee uninterrupted
      availability, complete accuracy, or error-free operation
      of this website.
    </p>

  </div>

</section>

{/* Changes to This Disclaimer */}

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
  bg-cyan-500/20
  flex
  items-center
  justify-center
  text-2xl
  transition-all
  duration-300
  group-hover:scale-110
  group-hover:rotate-6
  group-hover:bg-cyan-500/30
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
>   Changes to This Disclaimer
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      Bytecraft Studio reserves the right to modify or update
      this Disclaimer at any time without prior notice to reflect
      changes in our services, legal obligations, or business
      practices.
    </p>

    <p className="mt-6 text-gray-300 leading-8">
      Any updates will become effective immediately upon publication
      on this page. We recommend reviewing this Disclaimer
      periodically to stay informed.
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

      <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-2xl">
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
      If you have any questions regarding this Disclaimer or any
      information available on the Bytecraft Studio website,
      please contact us. Our team will be happy to assist you.
    </p>

    <div className="grid md:grid-cols-2 gap-6 mt-10">

      <div className="
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
">
        <h3 className="text-xl font-bold mb-3">
          📧 Email
        </h3>

        <p className="text-gray-400">
          hello@bytecraftstudio.com
        </p>

      </div>

      <div className="
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
">

        <h3 className="text-xl font-bold mb-3">
          🌐 Website
        </h3>

        <p className="text-gray-400">
          https://bytecraftstudio.com
        </p>

      </div>

      <div className="
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
">

        <h3 className="text-xl font-bold mb-3">
          📍 Location
        </h3>

        <p className="text-gray-400">
          Chennai, Tamil Nadu, India
        </p>

      </div>

      <div className="
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
">

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

      <h2 className="text-5xl md:text-6xl font-black mt-6 leading-tight">
        Questions About
        <br />
        This Disclaimer?
      </h2>

      <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-300 leading-8">
        If you need clarification about the information published
        on our website or our services, feel free to get in touch.
        Our team is always ready to help.
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