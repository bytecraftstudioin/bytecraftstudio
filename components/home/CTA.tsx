export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28">

      <div
        className="
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-white/10
        bg-gradient-to-br
        from-[#2563eb]
        via-[#1d4ed8]
        to-[#06b6d4]
        px-6
        py-16
        md:px-16
        md:py-20
        text-center
        transition-all
        duration-500
        hover:scale-[1.02]
        hover:shadow-[0_0_80px_rgba(34,211,238,0.25)]
        "
      >

        {/* Glow Effects */}

        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white/10 blur-[140px]" />

        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-cyan-300/20 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.18),transparent_60%)]" />

        {/* Floating Circles */}

        <div className="absolute top-12 left-12 w-3 h-3 rounded-full bg-white/40 animate-pulse" />

        <div className="absolute bottom-14 right-14 w-4 h-4 rounded-full bg-cyan-200/50 animate-pulse" />

        <div className="relative z-10">

          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/20
            bg-white/10
            px-5
            py-2
            backdrop-blur-xl
            "
          >

            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

            <span className="uppercase tracking-[0.25em] text-xs font-semibold">
              Ready To Start?
            </span>

          </div>

          <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight max-w-4xl mx-auto">

            Let's Build

            <span className="block">
              Something Incredible.
            </span>

          </h2>

          <p className="mt-8 text-white/90 text-lg leading-8 max-w-2xl mx-auto">

            Build premium websites, Microsoft 365 solutions,
            business email, cloud infrastructure, and digital
            experiences with Bytecraft Studio.

          </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

            <a
              href="#contact"
              className="
              group
              inline-flex
              items-center
              justify-center
              rounded-2xl
              bg-white
              text-black
              px-8
              py-4
              font-bold
              transition-all
              duration-300
              hover:scale-105
              hover:-translate-y-1
              hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]
              "
            >
              Start Your Project

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>

            </a>

            <a
              href="#projects"
              className="
              group
              inline-flex
              items-center
              justify-center
              rounded-2xl
              border
              border-white/20
              bg-white/10
              backdrop-blur-xl
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-white/20
              hover:border-white
              hover:scale-105
              hover:-translate-y-1
              "
            >
              Explore Our Work

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>

            </a>

          </div>

          {/* Bottom Stats */}

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto">

            <div>
              <h3 className="text-3xl font-black">10+</h3>
              <p className="text-white/80 text-sm mt-2">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black">24/7</h3>
              <p className="text-white/80 text-sm mt-2">
                Support
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black">100%</h3>
              <p className="text-white/80 text-sm mt-2">
                Client Focus
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}