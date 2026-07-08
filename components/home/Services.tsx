import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    icon: "🌐",
    title: "Website Development",
    description:
      "Modern, responsive, and SEO-optimized websites built for performance and business growth.",
  },
  {
    icon: "📧",
    title: "Business Email Solutions",
    description:
      "Professional Microsoft 365 business email setup with custom domain integration.",
  },
  {
    icon: "☁️",
    title: "Microsoft 365 Setup",
    description:
      "Complete Microsoft 365 deployment, migration, licensing, and administration.",
  },
  {
    icon: "🖥️",
    title: "IT Support Services",
    description:
      "Reliable remote and onsite IT support to keep your business running smoothly.",
  },
  {
    icon: "📡",
    title: "Network & Wi-Fi Setup",
    description:
      "Secure office networking, Wi-Fi installation, and business connectivity solutions.",
  },
  {
    icon: "🚀",
    title: "Cloud Migration",
    description:
      "Move your emails, files, and applications securely to the cloud with zero downtime.",
  },
  {
    icon: "💾",
    title: "Backup & Recovery",
    description:
      "Automated backup strategies and disaster recovery planning for business continuity.",
  },
  {
    icon: "💻",
    title: "Workstation Setup",
    description:
      "Professional laptop, desktop, and workstation deployment for teams and offices.",
  },
  {
    icon: "📹",
    title: "CCTV & Security",
    description:
      "Smart surveillance systems with network integration for complete business security.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28"
    >
      <SectionTitle
        badge="Services"
        title="Our Services"
        description="Professional digital solutions designed to help businesses grow, scale, and succeed."
      />

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

        {services.map((service, index) => (

          <div
            key={index}
            className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            transition-all
            duration-500
            hover:-translate-y-3
            hover:border-cyan-400
            hover:bg-cyan-500/5
            hover:shadow-[0_0_45px_rgba(34,211,238,0.18)]
            "
          >

            {/* Glow */}

            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Icon */}

            <div
              className="
              relative
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
              group-hover:rotate-6
              group-hover:scale-110
              "
            >
              {service.icon}
            </div>

            {/* Title */}

            <h3
              className="
              mt-8
              text-2xl
              font-black
              transition-colors
              duration-300
              group-hover:text-cyan-400
              "
            >
              {service.title}
            </h3>

            {/* Description */}

            <p className="mt-5 text-gray-400 leading-8">
              {service.description}
            </p>

            {/* Learn More */}

            <button
              className="
              mt-8
              inline-flex
              items-center
              gap-2
              text-cyan-400
              font-semibold
              transition-all
              duration-300
              group-hover:gap-4
              "
            >
              Learn More

              <span>→</span>

            </button>

          </div>

        ))}

      </div>

    </section>
  );
}