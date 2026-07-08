export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center min-h-screen overflow-hidden">

      {/* Left */}

      <div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 backdrop-blur-xl">

          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>

          <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs sm:text-sm">
            Bytecraft Studio
          </p>

        </div>

        <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95]">

          We Build

          <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-cyan-300 bg-clip-text text-transparent">

            Digital

          </span>

          Experiences.

        </h1>

        <p className="mt-8 text-gray-300 text-base md:text-lg leading-8 max-w-xl">

          Professional Website Development,
          Microsoft 365 Setup,
          Business Email Solutions,
          Software Testing,
          and IT Support Services for modern businesses.

        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">

          <a
            href="#contact"
            className="
            group
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
            hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
            "
          >

            Start Your Project

            <span className="ml-2 transition-transform group-hover:translate-x-1">

              →

            </span>

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
            backdrop-blur-xl
            px-8
            py-4
            font-semibold
            transition-all
            duration-300
            hover:border-cyan-400
            hover:bg-cyan-500/10
            hover:text-cyan-400
            hover:-translate-y-1
            "
          >

            View Portfolio

          </a>

        </div>

        <div className="grid grid-cols-3 gap-6 mt-14">

          <div>

            <h3 className="text-3xl font-black text-cyan-400">
              10+
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Projects
            </p>

          </div>

          <div>

            <h3 className="text-3xl font-black text-cyan-400">
              24/7
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Support
            </p>

          </div>

          <div>

            <h3 className="text-3xl font-black text-cyan-400">
              100%
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Client Focus
            </p>

          </div>

        </div>

      </div>

      {/* Right */}

      <div className="relative flex justify-center items-center mt-10 lg:mt-0">

        <div className="absolute w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />

        <div
          className="
          relative
          bg-white/5
          backdrop-blur-2xl
          border
          border-white/10
          rounded-[36px]
          md:rounded-[42px]
          p-6
          md:p-10
          shadow-2xl
          transition-all
          duration-500
          hover:-translate-y-3
          hover:scale-[1.02]
          hover:border-cyan-400
          hover:shadow-[0_0_50px_rgba(34,211,238,0.25)]
          "
        >

          <div className="bg-gradient-to-br from-[#111827] to-[#1e293b] rounded-3xl p-6">

            <div className="flex gap-2 mb-8">

              <div className="w-3 h-3 rounded-full bg-red-500"></div>

              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

              <div className="w-3 h-3 rounded-full bg-green-500"></div>

            </div>

            <div className="flex justify-center items-center">

              <img
                src="/logo.png"
                alt="Bytecraft Studio"
                className="
                w-40
                md:w-52
                object-contain
                transition-all
                duration-500
                hover:rotate-6
                hover:scale-110
                "
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}