interface ProjectModalProps {
  selectedProject: any;
  setSelectedProject: (project: any) => void;
  projects: any[];
}

export default function ProjectModal({
  selectedProject,
  setSelectedProject,
  projects,
}: ProjectModalProps) {
  if (!selectedProject) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-[999]
      bg-black/80
      backdrop-blur-xl
      flex
      items-center
      justify-center
      p-4
      "
    >
      <div
        className="
        relative
        w-full
        max-w-6xl
        max-h-[92vh]
        overflow-y-auto
        rounded-[36px]
        bg-[#111827]
        border
        border-white/10
        shadow-[0_0_60px_rgba(34,211,238,0.15)]
        "
      >
        {/* Close */}

        <button
          onClick={() => setSelectedProject(null)}
          className="
          absolute
          top-5
          right-5
          z-20
          w-11
          h-11
          rounded-full
          bg-white/10
          border
          border-white/10
          text-white
          transition-all
          duration-300
          hover:bg-red-500
          hover:scale-110
          "
        >
          ✕
        </button>

        <div className="grid lg:grid-cols-2">

          {/* Image */}

          <div className="relative overflow-hidden">

            <img
              src={`/project${
                projects.findIndex(
                  (p) => p.title === selectedProject.title
                ) + 1
              }.jpg`}
              alt={selectedProject.title}
              className="
              w-full
              h-[260px]
              md:h-[420px]
              lg:h-full
              object-cover
              transition-transform
              duration-700
              hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          </div>

          {/* Content */}

          <div className="p-6 md:p-10">

            <span
              className="
              inline-block
              px-3
              py-1
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-500/20
              text-cyan-400
              uppercase
              tracking-[0.2em]
              text-xs
              "
            >
              {selectedProject.type}
            </span>

            <h2 className="mt-5 text-3xl md:text-5xl font-black leading-tight">
              {selectedProject.title}
            </h2>

            <p className="mt-6 text-gray-300 leading-8">
              {selectedProject.description}
            </p>

            {/* Tech */}

            <h3 className="mt-10 mb-5 text-xl font-bold">
              Technologies Used
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "Next.js",
                "React",
                "Tailwind CSS",
                "TypeScript",
                "Responsive UI",
              ].map((tech) => (

                <span
                  key={tech}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  transition-all
                  duration-300
                  hover:border-cyan-400
                  hover:bg-cyan-500/10
                  hover:text-cyan-400
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-4 mt-10">

              <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">

                <h4 className="text-cyan-400 text-2xl font-black">
                  100%
                </h4>

                <p className="text-xs text-gray-400 mt-2">
                  Responsive
                </p>

              </div>

              <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">

                <h4 className="text-cyan-400 text-2xl font-black">
                  Fast
                </h4>

                <p className="text-xs text-gray-400 mt-2">
                  Performance
                </p>

              </div>

              <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">

                <h4 className="text-cyan-400 text-2xl font-black">
                  SEO
                </h4>

                <p className="text-xs text-gray-400 mt-2">
                  Optimized
                </p>

              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <button
                className="
                flex-1
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                py-4
                font-bold
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_35px_rgba(34,211,238,0.30)]
                "
              >
                Contact Us
              </button>

              <button
                onClick={() => setSelectedProject(null)}
                className="
                flex-1
                rounded-2xl
                border
                border-white/10
                bg-white/5
                py-4
                font-semibold
                transition-all
                duration-300
                hover:border-cyan-400
                hover:text-cyan-400
                "
              >
                Close
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}