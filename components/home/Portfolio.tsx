import SectionTitle from "@/components/ui/SectionTitle";

interface PortfolioProps {
  projects: any[];
  setSelectedProject: (project: any) => void;
}

export default function Portfolio({
  projects,
  setSelectedProject,
}: PortfolioProps) {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28"
    >
      <SectionTitle
        badge="Projects"
        title="Featured Works"
        description="Explore some of our recent projects and discover how Bytecraft Studio transforms ideas into premium digital experiences."
      />

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <div
            key={index}
            className="
            group
            overflow-hidden
            rounded-[32px]
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            transition-all
            duration-500
            hover:-translate-y-3
            hover:border-cyan-400
            hover:shadow-[0_0_45px_rgba(34,211,238,0.20)]
            "
          >

            {/* Image */}

            <div className="relative overflow-hidden h-64">

              <img
                src={`/project${index + 1}.jpg`}
                alt={project.title}
                className="
                w-full
                h-full
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
                "
              />

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/60
                via-transparent
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                "
              />

            </div>

            {/* Content */}

            <div className="p-7">

              <span
                className="
                inline-block
                px-3
                py-1
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/20
                text-xs
                uppercase
                tracking-[0.2em]
                text-cyan-400
                "
              >
                {project.type}
              </span>

              <h3
                className="
                mt-5
                text-2xl
                lg:text-3xl
                font-black
                transition-colors
                duration-300
                group-hover:text-cyan-400
                "
              >
                {project.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-8 line-clamp-3">
                {project.description}
              </p>

              <button
                onClick={() => setSelectedProject(project)}
                className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-6
                py-3
                font-semibold
                transition-all
                duration-300
                hover:border-cyan-400
                hover:bg-cyan-500/10
                hover:text-cyan-400
                hover:translate-x-1
                "
              >
                View Details

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}