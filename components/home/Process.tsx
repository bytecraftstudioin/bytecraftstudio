import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  {
    title: "Discovery",
    description:
      "Understanding client goals, business requirements, target audience, and project objectives before development begins.",
    icon: "🔍",
  },
  {
    title: "Planning",
    description:
      "Creating a detailed roadmap, timeline, technology stack, and execution strategy for successful delivery.",
    icon: "📋",
  },
  {
    title: "Design",
    description:
      "Designing modern, user-friendly, responsive interfaces with premium user experience and branding.",
    icon: "🎨",
  },
  {
    title: "Development",
    description:
      "Building scalable, secure, high-performance websites and applications using modern technologies.",
    icon: "💻",
  },
  {
    title: "Testing",
    description:
      "Performing quality assurance, performance testing, security validation, and bug fixing before launch.",
    icon: "🧪",
  },
  {
    title: "Launch",
    description:
      "Deploying the project, monitoring performance, and providing continuous support for future growth.",
    icon: "🚀",
  },
];

export default function Process() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28">

      <SectionTitle
        badge="Workflow"
        title="Our Process"
        description="Our proven workflow ensures every project is delivered with quality, performance, and reliability."
      />

      <div className="space-y-6">

        {steps.map((step, index) => (

          <div
            key={index}
            className="
            group
            flex
            flex-col
            sm:flex-row
            items-start
            sm:items-center
            gap-6
            rounded-[30px]
            border
            border-white/10
            bg-white/5
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

            {/* Step Number */}

            <div
              className="
              shrink-0
              w-16
              h-16
              rounded-2xl
              bg-gradient-to-br
              from-blue-600
              to-cyan-500
              flex
              items-center
              justify-center
              text-2xl
              transition-transform
              duration-300
              group-hover:scale-110
              "
            >
              {step.icon}
            </div>

            {/* Content */}

            <div className="flex-1">

              <div className="flex items-center gap-3 flex-wrap">

                <span
                  className="
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                  text-cyan-400
                  tracking-[0.2em]
                  uppercase
                  "
                >
                  Step {index + 1}
                </span>

                <h3
                  className="
                  text-2xl
                  font-black
                  transition-colors
                  duration-300
                  group-hover:text-cyan-400
                  "
                >
                  {step.title}
                </h3>

              </div>

              <p className="mt-4 text-gray-400 leading-8">
                {step.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}