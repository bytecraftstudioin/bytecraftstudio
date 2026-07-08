import { notFound } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";
import { projects } from "@/data/projects";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}



export default async function PortfolioDetailsPage({

  params,
}: PageProps) {
  const { slug } = await params;

 const project = projects.find(
  (item) => item.slug === slug
);

if (!project) {
  notFound();
}

const currentProject = project;
  return (
<main className="bg-[#0B0F19] text-white min-h-screen">

  {/* Hero */}

  <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* Image */}

      <div className="order-1">

      
      <img
  src={project.image}
          alt={project.title}
          className="
          w-full
          rounded-[24px]
          md:rounded-[32px]
          border
          border-white/10
          shadow-2xl
          transition-all
          duration-500
          hover:scale-[1.02]
          hover:border-cyan-400
          hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]
          "
        />

      </div>

      {/* Content */}

      <div className="order-2">

        <p className="uppercase tracking-[0.3em] text-cyan-400 text-xs sm:text-sm">
          {project.category}
        </p>

        <h1
          className="
          mt-5
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          font-black
          leading-tight
          break-words
          "
        >
          {project.title}
        </h1>

        <p
          className="
          mt-6
          text-base
          sm:text-lg
          md:text-xl
          text-gray-400
          leading-8
          "
        >
          {project.description}
        </p>

        {/* Buttons */}

        <div
          className="
          flex
          flex-col
          sm:flex-row
          gap-4
          mt-10
          "
        >

          <a
            href="/contact"
            className="
            w-full
            sm:w-auto
            text-center
            bg-cyan-500
            text-black
            font-bold
            px-8
            py-4
            rounded-2xl
            transition-all
            duration-300
            hover:bg-cyan-400
            hover:scale-105
            hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
            "
          >
            Start Similar Project
          </a>

          <a
            href="/portfolio"
            className="
            w-full
            sm:w-auto
            text-center
            border
            border-white/20
            px-8
            py-4
            rounded-2xl
            transition-all
            duration-300
            hover:border-cyan-400
            hover:bg-cyan-500/10
            hover:scale-105
            "
          >
            Back to Portfolio
          </a>

        </div>

      </div>

    </div>

  </section>

  {/* Project Overview */}

  <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-16">

    <div
      className="
      group
      rounded-[24px]
      md:rounded-[32px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      md:p-10
      transition-all
      duration-300
      hover:border-cyan-400
      hover:bg-cyan-500/5
      hover:-translate-y-2
      hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
      "
    >

      <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
        Overview
      </p>

      <h2 className="mt-4 text-3xl md:text-4xl font-black">
        Project Overview
      </h2>

      <p className="mt-6 text-gray-300 leading-8 text-base md:text-lg">
        {project.overview}
      </p>

    </div>

  </section>
        {/* Client & Project Details */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Client */}

          <div
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
            hover:-translate-y-2
            hover:border-cyan-400
            hover:bg-cyan-500/5
            hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
            "
          >

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
              Client
            </span>

            <h2 className="mt-4 text-3xl font-black">
              {project.client}
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              This project was developed specifically to solve the client's
              business challenges while ensuring performance,
              scalability, and long-term reliability.
            </p>

          </div>

          {/* Category */}

          <div
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
            hover:-translate-y-2
            hover:border-cyan-400
            hover:bg-cyan-500/5
            hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
            "
          >

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
              Category
            </span>

            <h2 className="mt-4 text-3xl font-black">
              {project.category}
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Designed with modern technologies and best practices to
              deliver exceptional user experience and business value.
            </p>

          </div>

        </div>

      </section>

      {/* Project Summary */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-20">

        <div
          className="
          rounded-[32px]
          border
          border-white/10
          bg-gradient-to-br
          from-white/5
          to-white/[0.02]
          backdrop-blur-xl
          p-6
          md:p-10
          transition-all
          duration-500
          hover:border-cyan-400
          hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]
          "
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Summary
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-black">
            Project Summary
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-6
              hover:border-cyan-400
              transition
              "
            >
              <p className="text-cyan-400 text-sm uppercase">
                Client
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {project.client}
              </h3>

            </div>

            <div
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-6
              hover:border-cyan-400
              transition
              "
            >
              <p className="text-cyan-400 text-sm uppercase">
                Category
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {project.category}
              </h3>

            </div>

            <div
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-6
              hover:border-cyan-400
              transition
              "
            >
              <p className="text-cyan-400 text-sm uppercase">
                Technologies
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {project.technologies.length}+
              </h3>

            </div>

          </div>

        </div>

      </section>

            {/* Problem & Solution */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Problem */}

          <div
            className="
            group
            rounded-[30px]
            border
            border-red-500/20
            bg-red-500/5
            backdrop-blur-xl
            p-6
            md:p-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-red-400
            hover:shadow-[0_0_35px_rgba(239,68,68,0.15)]
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-red-500/20
                flex
                items-center
                justify-center
                text-2xl
                transition
                group-hover:scale-110
                "
              >
                ⚠️
              </div>

              <div>

                <p className="text-red-400 uppercase tracking-[0.25em] text-sm">
                  Challenge
                </p>

                <h2 className="text-3xl font-black mt-1">
                  Problem
                </h2>

              </div>

            </div>

            <p className="mt-8 text-gray-300 leading-8 text-base md:text-lg">
              {project.problem}
            </p>

          </div>

          {/* Solution */}

          <div
            className="
            group
            rounded-[30px]
            border
            border-cyan-500/20
            bg-cyan-500/5
            backdrop-blur-xl
            p-6
            md:p-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
            hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-cyan-500/20
                flex
                items-center
                justify-center
                text-2xl
                transition
                group-hover:scale-110
                "
              >
                💡
              </div>

              <div>

                <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm">
                  Solution
                </p>

                <h2 className="text-3xl font-black mt-1">
                  Our Approach
                </h2>

              </div>

            </div>

            <p className="mt-8 text-gray-300 leading-8 text-base md:text-lg">
              {project.solution}
            </p>

          </div>

        </div>

      </section>

      {/* Quick Highlights */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-20">

        <div
          className="
          rounded-[32px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-6
          md:p-10
          "
        >

          <h2 className="text-3xl md:text-4xl font-black">
            Project Highlights
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-cyan-400 transition">
              <div className="text-3xl">🚀</div>
              <h3 className="mt-4 font-bold text-xl">
                Modern Stack
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                Latest technologies and scalable architecture.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-cyan-400 transition">
              <div className="text-3xl">⚡</div>
              <h3 className="mt-4 font-bold text-xl">
                High Performance
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                Optimized for speed and reliability.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-cyan-400 transition">
              <div className="text-3xl">🔒</div>
              <h3 className="mt-4 font-bold text-xl">
                Secure
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                Security-first implementation and best practices.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-cyan-400 transition">
              <div className="text-3xl">📈</div>
              <h3 className="mt-4 font-bold text-xl">
                Scalable
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                Built to support future business growth.
              </p>
            </div>

          </div>

        </div>

      </section>

            {/* Technologies */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

        <div className="text-center mb-14">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Technologies
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black">
            Built With Modern Technologies
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
            We selected reliable technologies to ensure performance,
            scalability, maintainability, and future growth.
          </p>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">

          {project.technologies.map((tech: string) => (

            <div
              key={tech}
              className="
              group
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-6
              text-center
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-cyan-400
              hover:bg-cyan-500/5
              hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]
              "
            >

              <div
                className="
                w-14
                h-14
                mx-auto
                rounded-2xl
                bg-blue-500/20
                flex
                items-center
                justify-center
                text-2xl
                transition
                duration-300
                group-hover:scale-110
                "
              >
                💻
              </div>

              <h3
                className="
                mt-5
                font-bold
                text-lg
                transition-colors
                duration-300
                group-hover:text-cyan-400
                "
              >
                {tech}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* Results */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-24">

        <div
          className="
          rounded-[32px]
          border
          border-white/10
          bg-gradient-to-br
          from-blue-600/10
          to-cyan-500/10
          backdrop-blur-xl
          p-6
          md:p-10
          "
        >

          <div className="text-center">

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
              Results
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-black">
              Project Outcomes
            </h2>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {project.results.map((result: string) => (

              <div
                key={result}
                className="
                group
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400
                hover:bg-cyan-500/5
                hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]
                "
              >

                <div
                  className="
                  w-12
                  h-12
                  rounded-full
                  bg-cyan-500/20
                  flex
                  items-center
                  justify-center
                  text-xl
                  "
                >
                  ✅
                </div>

                <h3
                  className="
                  mt-5
                  text-xl
                  font-bold
                  transition-colors
                  duration-300
                  group-hover:text-cyan-400
                  "
                >
                  {result}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

            {/* Related Case Studies */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

        <div className="text-center mb-14">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            More Projects
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black">
            Explore More Case Studies
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
            Discover how Bytecraft Studio helps businesses,
            startups, and organizations build modern digital
            experiences.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects
  .filter((item) => item.slug !== project.slug)
  .slice(0, 3)
            .map((item, index) => (

              <a
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="
                group
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-3
                hover:border-cyan-400
                hover:bg-cyan-500/5
                hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
                "
              >

                <div className="h-56 overflow-hidden bg-gradient-to-br from-blue-600/20 to-cyan-500/20 flex items-center justify-center">

                  <div
                    className="
                    text-6xl
                    transition-transform
                    duration-500
                    group-hover:scale-125
                    group-hover:rotate-6
                    "
                  >
                    🚀
                  </div>

                </div>

                <div className="p-6">

                  <p className="text-cyan-400 text-sm uppercase">
                    {item.category}
                  </p>

                  <h3
                    className="
                    mt-3
                    text-2xl
                    font-bold
                    transition-colors
                    duration-300
                    group-hover:text-cyan-400
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-400 leading-7">
                    {item.solution}
                  </p>

                </div>

              </a>

            ))}

        </div>

      </section>

      {/* Final CTA */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-20 md:pb-28">

        <div
          className="
          relative
          overflow-hidden
          rounded-[36px]
          md:rounded-[48px]
          bg-gradient-to-r
          from-blue-600
          via-blue-500
          to-cyan-500
          p-8
          md:p-16
          text-center
          transition-all
          duration-500
          hover:shadow-[0_0_70px_rgba(34,211,238,0.28)]
          "
        >

          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-cyan-300/20 blur-3xl"></div>

          <div className="relative z-10">

            <span
              className="
              inline-flex
              rounded-full
              border
              border-white/20
              bg-white/10
              px-4
              py-2
              uppercase
              tracking-[0.2em]
              text-xs
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
              text-white/90
              leading-8
              "
            >
              Whether you need a business website,
              Microsoft 365 deployment,
              IT infrastructure,
              software testing,
              or a custom web application,
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

                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
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

      {/* Client Testimonials */}

<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-24">

  <div className="text-center mb-14">

    <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
      Testimonials
    </p>

    <h2 className="text-4xl md:text-5xl font-black">
      What Clients Say
    </h2>

  </div>

  <div className="grid md:grid-cols-3 gap-6">

    {[
      {
        name: "Academic Research",
        review:
          "Outstanding work with excellent communication and technical expertise."
      },
      {
        name: "College Project",
        review:
          "Delivered a modern solution that exceeded expectations."
      },
      {
        name: "Bytecraft Studio",
        review:
          "Professional, scalable, and performance-focused development."
      },
    ].map((item) => (

      <div
        key={item.name}
        className="
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-8
        hover:border-cyan-400
        hover:-translate-y-2
        transition
        "
      >

        <div className="text-yellow-400 text-2xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="mt-6 text-gray-300 leading-8">
          "{item.review}"
        </p>

        <h3 className="mt-8 font-bold text-cyan-400">
          {item.name}
        </h3>

      </div>

    ))}

  </div>

</section>


    </main>

  )}