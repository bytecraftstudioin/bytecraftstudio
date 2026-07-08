export default function ContactPage() {

  const services = [
    "🌐 Website Development",
    "🛒 Shopify Store Development",
    "📰 WordPress Website Development",
    "⚡ Business Email Solutions",
    "🟦 Microsoft 365 Setup",
    "☁️ Cloud Migration Services",
    "🖥️ IT Support Services",
    "🌐 Network & Wi-Fi Setup",
    "🔒 Data Backup & Recovery",
    "💻 Computer & Workstation Setup",
    "📹 CCTV & Network Integration",
    "🚀 Website Maintenance",
    "📈 SEO Optimization",
    "🔐 Website Security",
    "🧪 Software Testing",
  ];

  return (

    <main className="bg-[#0B0F19] text-white min-h-screen">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

        <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
          Contact
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight break-words">
          Let's Build
          <span className="block text-blue-400">
            Something Amazing.
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-gray-300 leading-8">
          Whether you need a professional business website,
          Shopify store, WordPress website,
          Microsoft 365 deployment,
          business email, cloud migration,
          or complete IT support,
          Bytecraft Studio is ready to help.
        </p>

      </section>

      {/* Contact Cards */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

          {/* Phone */}

          <div
            className="
            group
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
            md:p-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
            hover:bg-cyan-500/5
            hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
            "
          >

            <h3 className="text-xl font-bold transition group-hover:text-cyan-400">
              📞 Phone
            </h3>

            <p className="mt-4 text-gray-400 break-all">

              <a
                href="tel:+919600662516"
                className="hover:text-cyan-400 transition"
              >
                +91 96006 62516
              </a>

            </p>

          </div>

          {/* Email */}

          <div
            className="
            group
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
            md:p-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
            hover:bg-cyan-500/5
            hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
            "
          >

            <h3 className="text-xl font-bold transition group-hover:text-cyan-400">
              📧 Email
            </h3>

            <p className="mt-4 text-gray-400 break-all">

              <a
                href="mailto:contact@bytecraftstudio.com"
                className="hover:text-cyan-400 transition"
              >
                contact@bytecraftstudio.com
              </a>

            </p>

          </div>

          {/* Location */}

          <div
            className="
            group
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
            md:p-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
            hover:bg-cyan-500/5
            hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
            "
          >

            <h3 className="text-xl font-bold transition group-hover:text-cyan-400">
              📍 Location
            </h3>

            <p className="mt-4 text-gray-400">
              Chennai, Tamil Nadu
            </p>

          </div>

          {/* Hours */}

          <div
            className="
            group
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
            md:p-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
            hover:bg-cyan-500/5
            hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
            "
          >

            <h3 className="text-xl font-bold transition group-hover:text-cyan-400">
              🕒 Hours
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              Monday - Saturday
              <br />
              9:00 AM - 7:00 PM
            </p>

          </div>

        </div>

      </section>
      {/* Services */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20">

        <div className="text-center mb-10 md:mb-14">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            What We Do
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            Services We Can Help With
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-8">
            Professional digital solutions designed for startups,
            businesses, and growing organizations.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

          {services.map((service) => (

            <div
              key={service}
              className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-6
              md:p-7
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-cyan-400
              hover:bg-cyan-500/5
              hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
              "
            >

              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-gradient-to-br
                from-blue-600
                to-cyan-500
                flex
                items-center
                justify-center
                text-2xl
                transition-all
                duration-300
                group-hover:rotate-6
                group-hover:scale-110
                "
              >
                ⚡
              </div>

              <h3
                className="
                mt-6
                text-lg
                md:text-xl
                font-bold
                leading-8
                transition-colors
                duration-300
                group-hover:text-cyan-400
                "
              >
                {service}
              </h3>

            </div>

          ))}

        </div>

      </section>

            {/* CTA */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20">

        <div
          className="
          relative
          overflow-hidden
          rounded-[32px]
          md:rounded-[40px]
          bg-gradient-to-r
          from-blue-600
          via-blue-500
          to-cyan-500
          p-6
          sm:p-8
          md:p-14
          text-center
          transition-all
          duration-500
          hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]
          "
        >

          {/* Glow */}

          <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl" />

          <div className="relative z-10">

            <span
              className="
              inline-flex
              items-center
              px-4
              py-2
              rounded-full
              border
              border-white/20
              bg-white/10
              backdrop-blur-xl
              uppercase
              tracking-[0.2em]
              text-xs
              "
            >
              Ready to Start?
            </span>

            <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              Ready to Start
              <span className="block">
                Your Project?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-white/90 leading-8">
              Let's transform your ideas into modern websites,
              Microsoft 365 solutions, cloud infrastructure,
              and premium digital experiences.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeD-9Tuh-nEln__MdQWZqqC84k7yC-f_YVzXXir0V3cU2djrg/viewform?usp=header"
              className="
              inline-flex
              items-center
              justify-center
              mt-10
              w-full
              sm:w-auto
              bg-white
              text-black
              px-8
              py-4
              rounded-2xl
              font-bold
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_35px_rgba(255,255,255,0.35)]
              "
            >
              Start Your Project →
            </a>

          </div>

        </div>

      </section>

      {/* Legal */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-12">

        <div className="border-t border-white/10 pt-8">

          <p className="text-center text-sm text-gray-400 leading-8 max-w-3xl mx-auto">

            By submitting a project inquiry, you agree to our{" "}

            <a
              href="/terms"
              className="
              text-cyan-400
              hover:text-cyan-300
              hover:underline
              transition
              "
            >
              Terms & Conditions
            </a>

            {", "}

            <a
              href="/privacy-policy"
              className="
              text-cyan-400
              hover:text-cyan-300
              hover:underline
              transition
              "
            >
              Privacy Policy
            </a>

            {" "}and{" "}

            <a
              href="/refund-policy"
              className="
              text-cyan-400
              hover:text-cyan-300
              hover:underline
              transition
              "
            >
              Refund Policy
            </a>

            .

          </p>

        </div>

      </section>

    </main>
  );
}
