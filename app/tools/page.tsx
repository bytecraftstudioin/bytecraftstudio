import type { Metadata } from "next";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Free Online Tools | Bytecraft Studio",

  description:
    "Use 25+ free online tools including Spin Wheel, Dice Roller, Coin Flip, QR Code Generator, Password Generator, Random Number Generator, BMI Calculator, Age Calculator, GST Calculator, EMI Calculator, Percentage Calculator, Unit Converter and more.",

  keywords: [
    "Free Online Tools",
    "Spin Wheel",
    "Dice Roller",
    "Coin Flip",
    "Random Number Generator",
    "QR Code Generator",
    "Password Generator",
    "Age Calculator",
    "BMI Calculator",
    "GST Calculator",
    "EMI Calculator",
    "Unit Converter",
    "Percentage Calculator",
    "Developer Tools",
    "Utility Tools",
    "Bytecraft Studio",
  ],

  openGraph: {
    title: "Free Online Tools | Bytecraft Studio",
    description:
      "25+ free online productivity and developer tools.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Free Online Tools | Bytecraft Studio",
    description:
      "25+ free online tools for developers, students and businesses.",
  },
};
export default function ToolsPage() {
  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      {/* Hero */}

<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

  <div className="max-w-4xl">

    <span
      className="
      inline-block
      px-4
      py-2
      rounded-full
      bg-cyan-500/10
      border
      border-cyan-500/20
      text-cyan-400
      uppercase
      tracking-[0.25em]
      text-xs
      sm:text-sm
      "
    >
      Free Online Tools
    </span>

    <h1
      className="
      mt-6
      text-4xl
      sm:text-5xl
      md:text-7xl
      font-black
      leading-tight
      break-words
      "
    >
      25+ Free Online
      <span className="block text-blue-400">
        Productivity Tools
      </span>
    </h1>

    <p
      className="
      mt-8
      text-base
      md:text-lg
      text-gray-300
      leading-8
      max-w-3xl
      "
    >
      Use free online tools from Bytecraft Studio including
      <strong className="text-white">
        {" "}
        Spin Wheel,
        Coin Flip,
        Random Number Generator,
        Dice Roller,
        Name Picker,
        Password Generator,
        QR Code Generator,
        BMI Calculator,
        Age Calculator,
        GST Calculator,
        EMI Calculator,
        Unit Converter,
        Percentage Calculator,
        FD Calculator
      </strong>
      {" "}and many more.

      Every tool is fast,
      mobile-friendly,
      secure,
      SEO optimized,
      and completely free.
    </p>

    <div
      className="
      mt-10
      flex
      flex-col
      sm:flex-row
      gap-4
      "
    >

      <a
        href="#tools"
        className="
        w-full
        sm:w-auto
        text-center
        bg-cyan-500
        hover:bg-cyan-400
        text-black
        font-bold
        px-8
        py-4
        rounded-2xl
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
        "
      >
        Explore Tools →
      </a>

      <a
        href="/services"
        className="
        w-full
        sm:w-auto
        text-center
        border
        border-white/15
        hover:border-cyan-400
        hover:text-cyan-400
        rounded-2xl
        px-8
        py-4
        font-semibold
        transition-all
        duration-300
        "
      >
        Custom Development
      </a>

    </div>

    {/* Quick Stats */}

    <div
      className="
      grid
      grid-cols-2
      md:grid-cols-4
      gap-4
      mt-10
      "
    >

      {[
        ["25+", "Free Tools"],
        ["100%", "Free"],
        ["24/7", "Available"],
        ["⚡", "Fast"],
      ].map(([value, label]) => (

        <div
          key={label}
          className="
          rounded-2xl
          bg-white/5
          border
          border-white/10
          p-3
          text-center
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-cyan-400
          hover:bg-cyan-500/5
          "
        >

          <h3 className="text-3xl font-black text-cyan-400">
            {value}
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            {label}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* Tools Grid */}

<section
  id="tools"
  className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-20 md:pb-24"
>

  <div className="text-center mb-14">

    <span
      className="
      inline-block
      px-4
      py-2
      rounded-full
      bg-cyan-500/10
      border
      border-cyan-500/20
      text-cyan-400
      uppercase
      tracking-[0.25em]
      text-xs
      sm:text-sm
      "
    >
      Our Collection
    </span>

    <h2
      className="
      mt-6
      text-3xl
      sm:text-4xl
      md:text-6xl
      font-black
      "
    >
      Explore Free Online Tools
    </h2>

    <p
      className="
      mt-6
      max-w-3xl
      mx-auto
      text-gray-400
      text-base
      md:text-lg
      leading-8
      "
    >
      Free productivity, calculator, random picker,
      converter and utility tools built for developers,
      students, businesses and everyday users.
    </p>

  </div>

  <div
    className="
    grid
    grid-cols-1
    sm:grid-cols-2
    xl:grid-cols-3
    gap-6
    "
  >

    {tools.map((tool) => (

      <div
        key={tool.title}
        className="
        group
        overflow-hidden
        rounded-[30px]
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        p-6
        md:p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400
        hover:bg-cyan-500/5
        hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]
        "
      >

        <div
          className="
          w-16
          h-16
          rounded-2xl
          bg-cyan-500/10
          border
          border-cyan-500/20
          flex
          items-center
          justify-center
          text-3xl
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:rotate-6
          "
        >
          {tool.icon}
        </div>

        <h3
          className="
          mt-8
          text-xl
          md:text-2xl
          font-bold
          transition-colors
          duration-300
          group-hover:text-cyan-400
          "
        >
          {tool.title}
        </h3>

        <p
          className="
          mt-5
          text-gray-400
          leading-7
          text-sm
          md:text-base
          min-h-[80px]
          "
        >
          {tool.description}
        </p>

        <a
          href={tool.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
          mt-8
          inline-flex
          w-full
          items-center
          justify-center
          rounded-2xl
          bg-blue-600
          px-6
          py-3
          font-semibold
          transition-all
          duration-300
          hover:bg-cyan-500
          hover:text-black
          hover:scale-[1.02]
          "
        >
          Open Tool
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

      </div>

    ))}

  </div>

</section>


     {/* Why Choose Our Tools */}

<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

  <div className="text-center">

    <span
      className="
      inline-block
      px-4
      py-2
      rounded-full
      bg-cyan-500/10
      border
      border-cyan-500/20
      text-cyan-400
      uppercase
      tracking-[0.25em]
      text-xs
      sm:text-sm
      "
    >
      Why Bytecraft Studio?
    </span>

    <h2
      className="
      mt-6
      text-3xl
      sm:text-4xl
      md:text-6xl
      font-black
      "
    >
      Why Choose Our Tools?
    </h2>

    <p
      className="
      mt-6
      max-w-3xl
      mx-auto
      text-gray-400
      text-base
      md:text-lg
      leading-8
      "
    >
      Every online tool is carefully designed to deliver
      speed, accuracy, simplicity and an excellent user
      experience across all devices.
    </p>

  </div>

  <div
    className="
    mt-16
    grid
    grid-cols-1
    sm:grid-cols-2
    xl:grid-cols-3
    gap-6
    "
  >

    {[
      {
        icon: "⚡",
        title: "Lightning Fast",
        desc: "Optimized for instant results with fast loading speeds."
      },
      {
        icon: "📱",
        title: "Mobile Friendly",
        desc: "Works perfectly on phones, tablets and desktop devices."
      },
      {
        icon: "🔒",
        title: "Secure & Private",
        desc: "Your data stays on your device whenever possible."
      },
      {
        icon: "🆓",
        title: "100% Free",
        desc: "No subscriptions, hidden charges or registrations required."
      },
      {
        icon: "🌍",
        title: "Available Anywhere",
        desc: "Access every tool anytime from anywhere in the world."
      },
      {
        icon: "🚀",
        title: "Constantly Growing",
        desc: "New online tools are added regularly with continuous improvements."
      }
    ].map((item) => (

      <div
        key={item.title}
        className="
        group
        rounded-[30px]
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        p-6
        md:p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400
        hover:bg-cyan-500/5
        hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
        "
      >

        <div
          className="
          w-16
          h-16
          rounded-2xl
          bg-cyan-500/10
          border
          border-cyan-500/20
          flex
          items-center
          justify-center
          text-3xl
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:rotate-6
          "
        >
          {item.icon}
        </div>

        <h3
          className="
          mt-8
          text-xl
          md:text-2xl
          font-bold
          transition-colors
          duration-300
          group-hover:text-cyan-400
          "
        >
          {item.title}
        </h3>

        <p
          className="
          mt-5
          text-gray-400
          leading-7
          text-sm
          md:text-base
          "
        >
          {item.desc}
        </p>

      </div>

    ))}

  </div>

</section>


{/* Statistics */}

<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

  <div className="text-center">

    <span
      className="
      inline-block
      px-4
      py-2
      rounded-full
      bg-cyan-500/10
      border
      border-cyan-500/20
      text-cyan-400
      uppercase
      tracking-[0.25em]
      text-xs
      sm:text-sm
      "
    >
      Platform Statistics
    </span>

    <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-black">
      Growing Every Day
    </h2>

    <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-base md:text-lg leading-8">
      Bytecraft Studio continuously adds new online tools,
      improves performance, and delivers better user experiences.
    </p>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

    {[
      ["25+", "Free Tools"],
      ["100%", "Free Access"],
      ["24/7", "Availability"],
      ["⚡", "Fast Performance"],
    ].map(([value, label]) => (

      <div
        key={label}
        className="
        group
        rounded-[28px]
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        p-3
        md:p-8
        text-center
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400
        hover:bg-cyan-500/5
        hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
        "
      >

        <h3 className="text-4xl md:text-5xl font-black text-cyan-400">
          {value}
        </h3>

        <p className="mt-3 text-sm md:text-base text-gray-300">
          {label}
        </p>

      </div>

    ))}

  </div>

</section>

{/* Coming Soon */}

<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-20 md:pb-24">

  <div className="text-center">

    <span
      className="
      inline-block
      px-4
      py-2
      rounded-full
      bg-blue-500/10
      border
      border-blue-500/20
      text-blue-400
      uppercase
      tracking-[0.25em]
      text-xs
      sm:text-sm
      "
    >
      Coming Soon
    </span>

    <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-black">
      More Powerful Tools
    </h2>

    <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-base md:text-lg leading-8">
      We're constantly building new free online utilities to
      help developers, students, businesses and creators.
    </p>

  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">

    {[
      "📄 PDF Merge",
      "✂️ PDF Split",
      "🖼️ Image Compressor",
      "📷 Image Resizer",
      "💱 Currency Converter",
      "🌍 Time Zone Converter",
      "🔐 SHA256 Generator",
      "📝 Lorem Ipsum Generator",
      "🔤 JSON Formatter",
      "💻 HTML Minifier",
      "⚙️ CSS Minifier",
      "🚀 JavaScript Minifier",
    ].map((tool) => (

      <div
        key={tool}
        className="
        group
        rounded-[28px]
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        p-6
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400
        hover:bg-cyan-500/5
        hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
        "
      >

        <h3 className="text-lg md:text-xl font-semibold transition-colors duration-300 group-hover:text-cyan-400">
          {tool}
        </h3>

        <p className="mt-4 text-gray-400 leading-7 text-sm">
          Coming soon to Bytecraft Studio's growing collection
          of free online productivity tools.
        </p>

      </div>

    ))}

  </div>

</section>

      {/* Final CTA */}

<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-20 md:pb-28">

  <div
    className="
    relative
    overflow-hidden
    rounded-[36px]
    bg-gradient-to-r
    from-blue-600
    via-blue-500
    to-cyan-500
    p-[2px]
    "
  >

    <div
      className="
      relative
      rounded-[36px]
      bg-[#0B0F19]
      px-6
      py-14
      md:px-12
      md:py-20
      text-center
      overflow-hidden
      "
    >

      {/* Background Glow */}

      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative z-10">

        <span
          className="
          inline-block
          px-4
          py-2
          rounded-full
          bg-cyan-500/10
          border
          border-cyan-500/20
          text-cyan-400
          uppercase
          tracking-[0.25em]
          text-xs
          sm:text-sm
          "
        >
          Ready To Start?
        </span>

        <h2
          className="
          mt-6
          text-3xl
          sm:text-4xl
          md:text-6xl
          font-black
          leading-tight
          "
        >
          Build Better.
          <span className="block text-cyan-400">
            Work Smarter.
          </span>
        </h2>

        <p
          className="
          mt-8
          max-w-3xl
          mx-auto
          text-gray-300
          text-base
          md:text-lg
          leading-8
          "
        >
          Looking for a custom website, Shopify store,
          Microsoft 365 deployment, software testing,
          or a powerful business solution?

          Bytecraft Studio helps businesses build
          modern, secure and scalable digital experiences.
        </p>

        {/* Buttons */}

        <div
          className="
          mt-10
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-4
          "
        >

          <a
            href="/contact"
            className="
            group
            inline-flex
            items-center
            justify-center
            rounded-2xl
            bg-cyan-500
            px-8
            py-4
            font-bold
            text-black
            transition-all
            duration-300
            hover:bg-cyan-400
            hover:scale-105
            hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
            "
          >
            Start Your Project

            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </a>

          <a
            href="/services"
            className="
            inline-flex
            items-center
            justify-center
            rounded-2xl
            border
            border-white/20
            bg-white/5
            backdrop-blur-xl
            px-8
            py-4
            font-semibold
            transition-all
            duration-300
            hover:border-cyan-400
            hover:bg-cyan-500/10
            hover:text-cyan-400
            "
          >
            Explore Services
          </a>

        </div>

        {/* Trust Cards */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">

          {[
            ["25+", "Free Tools"],
            ["15+", "Professional Services"],
            ["24/7", "Support"],
            ["100%", "Secure"],
          ].map(([value, label]) => (

            <div
              key={label}
              className="
              rounded-2xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              p-3
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-cyan-400
              hover:bg-cyan-500/10
              "
            >

              <h3 className="text-3xl md:text-4xl font-black text-cyan-400">
                {value}
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                {label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>

{/* FAQ */}

<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-20 md:pb-28">

  <div className="text-center">

    <span
      className="
      inline-block
      px-4
      py-2
      rounded-full
      bg-cyan-500/10
      border
      border-cyan-500/20
      text-cyan-400
      uppercase
      tracking-[0.25em]
      text-xs
      sm:text-sm
      "
    >
      Frequently Asked Questions
    </span>

    <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-black">
      Common Questions
    </h2>

    <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-base md:text-lg leading-8">
      Everything you need to know about Bytecraft Studio's
      free online tools and digital services.
    </p>

  </div>

  <div className="mt-16 space-y-5">

    {[
      {
        q: "Are all tools completely free?",
        a: "Yes. Every online tool available on Bytecraft Studio can be used free without registration."
      },
      {
        q: "Do these tools work on mobile devices?",
        a: "Yes. Every tool is fully responsive and optimized for Android, iPhone, tablets and desktop browsers."
      },
      {
        q: "Is my data stored?",
        a: "No. Most tools process information directly in your browser. Your privacy is always our priority."
      },
      {
        q: "Will more tools be added?",
        a: "Yes. We regularly release new calculators, developer tools, productivity utilities and AI-powered solutions."
      },
      {
        q: "Can businesses request custom tools?",
        a: "Absolutely. Bytecraft Studio builds custom business software, web applications and productivity tools for companies."
      }
    ].map((faq) => (

      <details
        key={faq.q}
        className="
        group
        rounded-[24px]
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        p-6
        transition-all
        duration-300
        hover:border-cyan-400
        hover:bg-cyan-500/5
        "
      >

        <summary
          className="
          cursor-pointer
          list-none
          text-lg
          md:text-xl
          font-semibold
          transition-colors
          duration-300
          group-hover:text-cyan-400
          "
        >
          {faq.q}
        </summary>

        <p className="mt-5 text-gray-400 leading-8">
          {faq.a}
        </p>

      </details>

    ))}

  </div>

</section>
    </main>
  );
}