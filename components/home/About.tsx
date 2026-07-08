export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-6 pb-8 md:pt-10 md:pb-12 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Stats */}

        <div
          className="
          group
          bg-white/5
          backdrop-blur-2xl
          border
          border-white/10
          rounded-[36px]
          p-5
          md:p-8
          transition-all
          duration-500
          hover:border-cyan-400/40
          hover:shadow-[0_0_45px_rgba(34,211,238,0.15)]
          "
        >

          <div className="grid grid-cols-2 gap-4 md:gap-6">

            {/* Card 1 */}

            <div
              className="
              bg-blue-500/10
              border
              border-blue-500/20
              rounded-3xl
              p-6
              transition-all
              duration-300
              hover:-translate-y-2
              hover:scale-105
              hover:bg-blue-500/20
              "
            >
              <h2 className="text-3xl md:text-4xl font-black text-blue-400">
                10+
              </h2>

              <p className="mt-2 text-gray-300">
                Projects
              </p>
            </div>

            {/* Card 2 */}

            <div
              className="
              bg-cyan-500/10
              border
              border-cyan-500/20
              rounded-3xl
              p-6
              transition-all
              duration-300
              hover:-translate-y-2
              hover:scale-105
              hover:bg-cyan-500/20
              "
            >
              <h2 className="text-3xl md:text-4xl font-black text-cyan-400">
                24/7
              </h2>

              <p className="mt-2 text-gray-300">
                Support
              </p>
            </div>

            {/* Card 3 */}

            <div
              className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-6
              transition-all
              duration-300
              hover:-translate-y-2
              hover:scale-105
              hover:border-cyan-400
              "
            >
              <h2 className="text-3xl md:text-4xl font-black text-blue-400">
                Fast
              </h2>

              <p className="mt-2 text-gray-300">
                Delivery
              </p>
            </div>

            {/* Card 4 */}

            <div
              className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-6
              transition-all
              duration-300
              hover:-translate-y-2
              hover:scale-105
              hover:border-cyan-400
              "
            >
              <h2 className="text-3xl md:text-4xl font-black text-blue-400">
                UI
              </h2>

              <p className="mt-2 text-gray-300">
                Focused
              </p>
            </div>

          </div>

        </div>

        {/* Right Content */}

        <div>

          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-500/10
            px-4
            py-2
            "
          >

            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>

            <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs sm:text-sm">
              About Us
            </p>

          </div>

          <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">

            Turning Ideas

            <span className="block text-blue-400">
              Into Digital Reality.
            </span>

          </h2>

          <p className="mt-8 text-gray-300 text-lg leading-8 max-w-xl">

            We create premium websites, business platforms,
            Microsoft 365 solutions, software testing services,
            and modern digital experiences that help businesses
            grow faster with performance, security, and beautiful design.

          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <a
              href="#services"
              className="
              inline-flex
              justify-center
              items-center
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-8
              py-4
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_35px_rgba(34,211,238,0.30)]
              "
            >
              Explore Services
            </a>

            <a
              href="#projects"
              className="
              inline-flex
              justify-center
              items-center
              rounded-2xl
              border
              border-white/10
              bg-white/5
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
              View Portfolio
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}