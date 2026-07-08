import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Bytecraft Studio",
  description:
    "Explore our portfolio of web development, Microsoft 365, and software testing projects.",
};

export default function PortfolioPage() {
  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

        <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
          Our Portfolio
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight break-words">
          Projects That
          <span className="text-blue-400 block">
            Make an Impact
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-base sm:text-lg text-gray-300 leading-8">
          Explore a selection of our recent projects in website
          development, Microsoft 365, software testing, and digital
          transformation.
        </p>

      </section>

      {/* Portfolio Grid */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-16 md:pb-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="
              group
              overflow-hidden
              rounded-[28px]
              md:rounded-[32px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-cyan-400
              hover:bg-cyan-500/5
              hover:shadow-[0_0_45px_rgba(34,211,238,0.15)]
              "
            >

              {/* Image */}

              <div className="relative h-52 sm:h-56 overflow-hidden bg-gradient-to-br from-blue-600/20 to-cyan-500/20">

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="text-6xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
                    💼
                  </div>

                </div>

              </div>

              {/* Content */}

              <div className="p-6 md:p-8">

                <p className="text-cyan-400 uppercase tracking-wider text-xs md:text-sm">
                  {project.category}
                </p>

                <h3 className="
                  mt-3
                  text-2xl
                  md:text-3xl
                  font-black
                  leading-tight
                  transition-colors
                  duration-300
                  group-hover:text-cyan-400
                ">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7 text-sm md:text-base">
                  {project.description}
                </p>

                <a
                  href={`/portfolio/${project.slug}`}
                  className="
                  inline-flex
                  items-center
                  justify-center
                  mt-8
                  w-full
                  sm:w-auto
                  bg-blue-600
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  transition-all
                  duration-300
                  hover:bg-cyan-500
                  hover:text-black
                  hover:scale-105
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
                  "
                >
                  View Project →

                </a>

              </div>

            </div>

          ))}

        </div>

      </section>
            {/* Portfolio Highlights */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

        <div className="text-center mb-12 md:mb-16">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Portfolio Highlights
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            Delivering Results That Matter
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8 text-base md:text-lg">
            Every project is built with quality, performance,
            scalability, and user experience in mind.
          </p>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">

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
            text-center
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
            hover:bg-cyan-500/5
            hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
            "
          >

            <h3 className="text-3xl md:text-5xl font-black text-blue-400 transition duration-300 group-hover:scale-110">
              10+
            </h3>

            <p className="mt-3 text-sm md:text-base text-gray-400">
              Projects
            </p>

          </div>

          {/* Client Focus */}

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
            text-center
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
            hover:bg-cyan-500/5
            hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
            "
          >

            <h3 className="text-3xl md:text-5xl font-black text-blue-400 transition duration-300 group-hover:scale-110">
              100%
            </h3>

            <p className="mt-3 text-sm md:text-base text-gray-400">
              Client Focus
            </p>

          </div>

          {/* Support */}

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
            text-center
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
            hover:bg-cyan-500/5
            hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
            "
          >

            <h3 className="text-3xl md:text-5xl font-black text-blue-400 transition duration-300 group-hover:scale-110">
              24/7
            </h3>

            <p className="mt-3 text-sm md:text-base text-gray-400">
              Support
            </p>

          </div>

          {/* Delivery */}

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
            text-center
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
            hover:bg-cyan-500/5
            hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
            "
          >

            <h3 className="text-3xl md:text-5xl font-black text-blue-400 transition duration-300 group-hover:scale-110">
              Fast
            </h3>

            <p className="mt-3 text-sm md:text-base text-gray-400">
              Delivery
            </p>

          </div>

        </div>

      </section>
            {/* CTA */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-16 md:pb-24">

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

          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">

            <span
              className="
              inline-flex
              items-center
              rounded-full
              border
              border-white/20
              bg-white/10
              px-4
              py-2
              text-xs
              uppercase
              tracking-[0.2em]
              backdrop-blur-xl
              "
            >
              Ready to Build?
            </span>

            <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              Have a Project
              <span className="block">
                In Mind?
              </span>
            </h2>

            <p className="mt-6 text-base md:text-lg leading-8 text-white/90 max-w-2xl mx-auto">

              Let's build something modern, scalable,
              and impactful together. We'd love to hear
              about your next project.

            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

              <a
                href="/contact"
                className="
                inline-flex
                items-center
                justify-center
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
                Start Your Project
              </a>

              <a
                href="/services"
                className="
                inline-flex
                items-center
                justify-center
                w-full
                sm:w-auto
                border
                border-white/30
                bg-white/10
                backdrop-blur-xl
                px-8
                py-4
                rounded-2xl
                font-semibold
                transition-all
                duration-300
                hover:bg-white/20
                hover:border-white
                "
              >
                View Services
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}