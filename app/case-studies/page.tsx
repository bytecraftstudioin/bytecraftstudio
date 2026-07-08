import { caseStudies } from "@/data/caseStudies";

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
          Case Studies
        </p>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-black leading-tight break-words">
          Real Projects.
          <br />
          <span className="text-blue-400">
            Real Results.
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-base sm:text-lg text-gray-400 leading-8">
          Discover how Bytecraft Studio helps businesses solve
          real-world challenges with modern websites,
          Microsoft 365, networking,
          cloud infrastructure,
          business automation,
          and digital transformation.
        </p>

      </section>

      {/* Statistics */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

          {/* Projects */}

          <div
            className="
            group
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            md:p-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
            hover:bg-cyan-500/5
            hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
            "
          >

            <h2 className="text-4xl md:text-5xl font-black text-cyan-400 transition group-hover:scale-110">
              {caseStudies.length}+
            </h2>

            <p className="mt-3 text-gray-400 text-base">
              Completed Case Studies
            </p>

          </div>

          {/* Services */}

          <div
            className="
            group
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            md:p-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
            hover:bg-cyan-500/5
            hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
            "
          >

            <h2 className="text-4xl md:text-5xl font-black text-cyan-400 transition group-hover:scale-110">
              15+
            </h2>

            <p className="mt-3 text-gray-400 text-base">
              Business Services
            </p>

          </div>

          {/* Custom */}

          <div
            className="
            group
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            md:p-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
            hover:bg-cyan-500/5
            hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
            "
          >

            <h2 className="text-4xl md:text-5xl font-black text-cyan-400 transition group-hover:scale-110">
              100%
            </h2>

            <p className="mt-3 text-gray-400 text-base">
              Custom Solutions
            </p>

          </div>

        </div>

      </section>
            {/* Case Studies Grid */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">

          {caseStudies.map((study) => (

            <div
              key={study.slug}
              className="
              group
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-cyan-400
              hover:bg-cyan-500/5
              hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]
              "
            >

              {/* Image */}

              <div className="relative overflow-hidden h-56 md:h-64">

                <div className="h-64 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 flex items-center justify-center text-7xl">
  🚀
</div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent" />

              </div>

              {/* Content */}

              <div className="p-6 md:p-8">

                <span
                  className="
                  inline-flex
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-400/20
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-cyan-400
                  "
                >
                  {study.category}
                </span>

                <h3
                  className="
                  mt-5
                  text-2xl
                  font-black
                  leading-tight
                  transition-colors
                  duration-300
                  group-hover:text-cyan-400
                  "
                >
                  {study.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-8 text-sm md:text-base">
                  {study.solution}
                </p>

                <a
                  href={`/case-studies/${study.slug}`}
                  className="
                  inline-flex
                  items-center
                  mt-8
                  font-semibold
                  text-cyan-400
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  "
                >
                  View Case Study

                  <span className="ml-2">
                    →
                  </span>

                </a>

              </div>

            </div>

          ))}

        </div>

      </section>
            {/* Featured Case Study */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

        <div
          className="
          relative
          overflow-hidden
          rounded-[32px]
          md:rounded-[40px]
          border
          border-white/10
          bg-gradient-to-br
          from-white/5
          to-white/[0.02]
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-cyan-400
          hover:shadow-[0_0_60px_rgba(34,211,238,0.18)]
          "
        >

          {/* Background Glow */}

          <div className="absolute -top-28 -right-24 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

          <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>

          <div className="relative grid lg:grid-cols-2 gap-10 items-center p-6 sm:p-8 md:p-12 lg:p-16">

            {/* Left */}

            <div>

              <span
                className="
                inline-flex
                px-4
                py-2
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-400/20
                text-cyan-400
                uppercase
                tracking-[0.2em]
                text-xs
                "
              >
                Featured Project
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                Helping Businesses
                <span className="block text-blue-400">
                  Grow Digitally
                </span>
              </h2>

              <p className="mt-6 text-gray-400 leading-8 text-base md:text-lg">
                Every business has unique challenges.
                We design websites, deploy Microsoft 365,
                build secure IT infrastructure,
                improve productivity,
                and create scalable digital solutions
                that deliver measurable business results.
              </p>

              {/* Stats */}

              <div className="grid grid-cols-2 gap-4 mt-10">

                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">

                  <h3 className="text-3xl font-black text-cyan-400">
                    99%
                  </h3>

                  <p className="text-gray-400 mt-2 text-sm">
                    Client Satisfaction
                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">

                  <h3 className="text-3xl font-black text-cyan-400">
                    Fast
                  </h3>

                  <p className="text-gray-400 mt-2 text-sm">
                    Delivery
                  </p>

                </div>

              </div>

            </div>

            {/* Right */}

            <div
              className="
              rounded-[28px]
              bg-gradient-to-br
              from-blue-600/20
              to-cyan-500/20
              border
              border-white/10
              h-[260px]
              sm:h-[320px]
              md:h-[420px]
              flex
              items-center
              justify-center
              text-7xl
              transition-all
              duration-500
              hover:scale-[1.02]
              "
            >

              🚀

            </div>

          </div>

        </div>

      </section>

            {/* Why Choose Us */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

        <div className="text-center mb-12 md:mb-16">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            Built For Modern
            <span className="block text-blue-400">
              Businesses
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-base md:text-lg leading-8">
            We combine creativity, technology, and business strategy
            to deliver scalable digital solutions that help companies
            grow faster.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              icon: "⚡",
              title: "Fast Delivery",
              text: "Quick turnaround without compromising quality."
            },
            {
              icon: "🛡️",
              title: "Reliable Support",
              text: "Dedicated support before and after project delivery."
            },
            {
              icon: "🚀",
              title: "Modern Technology",
              text: "Built using the latest frameworks and cloud technologies."
            },
            {
              icon: "💼",
              title: "Business Focused",
              text: "Solutions designed to improve productivity and growth."
            },
          ].map((item) => (

            <div
              key={item.title}
              className="
              group
              rounded-[28px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-6
              md:p-8
              transition-all
              duration-300
              hover:-translate-y-3
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
                bg-gradient-to-br
                from-blue-600
                to-cyan-500
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
                mt-6
                text-2xl
                font-bold
                transition-colors
                duration-300
                group-hover:text-cyan-400
                "
              >
                {item.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>

            {/* Our Workflow */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

        <div className="text-center mb-14">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Our Workflow
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            How We Deliver
            <span className="block text-blue-400">
              Every Project
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-base md:text-lg leading-8">
            From understanding your requirements to final deployment,
            every project follows a structured process focused on quality,
            transparency, and long-term success.
          </p>

        </div>

        <div className="space-y-6">

          {[
            {
              number: "01",
              title: "Discovery",
              description:
                "We understand your business, goals, audience, and technical requirements."
            },
            {
              number: "02",
              title: "Planning",
              description:
                "We create a roadmap, timeline, and project strategy before development."
            },
            {
              number: "03",
              title: "Design & Development",
              description:
                "Modern UI/UX with scalable and high-performance development."
            },
            {
              number: "04",
              title: "Testing",
              description:
                "Every project is tested for speed, responsiveness, SEO, and security."
            },
            {
              number: "05",
              title: "Launch & Support",
              description:
                "Deployment, monitoring, maintenance, and continuous improvements."
            },
          ].map((step) => (

            <div
              key={step.number}
              className="
              group
              flex
              flex-col
              md:flex-row
              md:items-center
              gap-6
              rounded-[28px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-6
              md:p-8
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-cyan-400
              hover:bg-cyan-500/5
              hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
              "
            >

              <div
                className="
                flex-shrink-0
                w-20
                h-20
                rounded-full
                bg-gradient-to-br
                from-blue-600
                to-cyan-500
                flex
                items-center
                justify-center
                text-2xl
                font-black
                transition-all
                duration-300
                group-hover:scale-110
                "
              >
                {step.number}
              </div>

              <div>

                <h3
                  className="
                  text-2xl
                  font-bold
                  transition-colors
                  duration-300
                  group-hover:text-cyan-400
                  "
                >
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-400 leading-8">
                  {step.description}
                </p>

              </div>

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
          rounded-[32px]
          md:rounded-[48px]
          bg-gradient-to-r
          from-blue-600
          via-blue-500
          to-cyan-500
          p-8
          sm:p-10
          md:p-16
          text-center
          transition-all
          duration-500
          hover:shadow-[0_0_70px_rgba(34,211,238,0.30)]
          "
        >

          {/* Background Glow */}

          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-cyan-300/20 blur-3xl"></div>

          <div className="relative z-10">

            <span
              className="
              inline-flex
              items-center
              rounded-full
              border
              border-white/20
              bg-white/10
              backdrop-blur-xl
              px-4
              py-2
              text-xs
              uppercase
              tracking-[0.25em]
              "
            >
              Let's Work Together
            </span>

            <h2
              className="
              mt-8
              text-3xl
              sm:text-4xl
              md:text-6xl
              font-black
              leading-tight
              "
            >
              Ready To Build
              <span className="block">
                Your Next Project?
              </span>
            </h2>

            <p
              className="
              mt-6
              max-w-2xl
              mx-auto
              text-base
              md:text-lg
              leading-8
              text-white/90
              "
            >
              Whether you need a business website,
              Microsoft 365 deployment,
              IT infrastructure,
              cloud migration,
              or complete digital transformation,
              Bytecraft Studio is ready to help.
            </p>

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
                w-full
                sm:w-auto
                rounded-2xl
                bg-white
                text-black
                px-8
                py-4
                font-bold
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_35px_rgba(255,255,255,0.35)]
                "
              >
                Start Your Project

                <span
                  className="
                  ml-2
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  "
                >
                  →
                </span>

              </a>

              <a
                href="/services"
                className="
                inline-flex
                items-center
                justify-center
                w-full
                sm:w-auto
                rounded-2xl
                border
                border-white/30
                bg-white/10
                backdrop-blur-xl
                px-8
                py-4
                font-semibold
                transition-all
                duration-300
                hover:bg-white/20
                hover:border-white
                hover:scale-105
                "
              >
                Explore Services
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}