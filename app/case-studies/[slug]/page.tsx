import { notFound } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";
import { projects } from "@/data/projects";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const study = caseStudies.find(
    (item) => item.slug === slug
  );

  if (!study) {
    notFound();
  }

  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      {/* Hero */}
<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

  <p className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 uppercase tracking-[0.2em] text-xs sm:text-sm">
    {study.category}
  </p>

  <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-black leading-tight break-words">
    {study.title}
  </h1>

  <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-8">
    {study.problem}
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-400 transition">
      <p className="text-gray-400 text-sm">
        Client
      </p>

      <h3 className="text-xl md:text-2xl font-bold mt-3 break-words">
        {study.client}
      </h3>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-400 transition">
      <p className="text-gray-400 text-sm">
        Category
      </p>

      <h3 className="text-xl md:text-2xl font-bold mt-3 break-words">
        {study.category}
      </h3>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-400 transition">
      <p className="text-gray-400 text-sm">
        Technologies
      </p>

      <h3 className="text-xl md:text-2xl font-bold mt-3">
        {study.technologies.length}+
      </h3>
    </div>

  </div>

</section>

      {/* Problem & Solution */}

<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">

    {/* Problem */}

    <div
  className="
  group
  bg-white/5
  border
  border-red-500/20
  rounded-3xl
  p-6
  md:p-10
  transition-all
  duration-300
  hover:-translate-y-2
  hover:border-red-400
  hover:bg-red-500/5
  hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]
  "
>

      <div className="
w-16
h-16
rounded-2xl
bg-red-500/10
flex
items-center
justify-center
text-3xl
transition-all
duration-300
group-hover:scale-110
group-hover:rotate-6
"> ⚠️
      </div>

      <h2 className="text-4xl font-black mt-8">
        The Challenge
      </h2>

      <p className="text-gray-300 leading-8 mt-6">
        {study.problem}
      </p>

    </div>

    {/* Solution */}

    <div
  className="
  group
  bg-white/5
  border
  border-cyan-500/20
  rounded-3xl
  p-6
  md:p-10
  transition-all
  duration-300
  hover:-translate-y-2
  hover:border-cyan-400
  hover:bg-cyan-500/5
  hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
  ">

      <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl group-hover:scale-110
group-hover:rotate-6">
        💡
      </div>

      <h2 className="text-4xl font-black mt-8">
        Our Solution
      </h2>

      <p className="text-gray-300 leading-8 mt-6">
        {study.solution}
      </p>

    </div>

  </div>

</section>

{/* Technologies */}

<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">

   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">

    {/* Technologies */}
<div
  className="
  group
  bg-white/5
  border
  border-white/10
  rounded-3xl
  p-6
  md:p-10
  transition-all
  duration-300
  hover:border-cyan-400
  hover:bg-cyan-500/5
  hover:-translate-y-2
"
>

  <h2 className="text-3xl md:text-4xl font-black">
    Technologies Used
  </h2>

  <p className="text-gray-400 mt-4">
    Modern technologies used to deliver this solution.
  </p>

  <div className="flex flex-wrap gap-3 mt-8">

    {study.technologies.map((tech) => (

      <span
        key={tech}
        className="
        px-4
        py-2
        rounded-full
        text-sm
        md:text-base
        bg-cyan-500/10
        border
        border-cyan-500/20
        text-cyan-300
        transition-all
        duration-300
        hover:bg-cyan-500/20
        hover:scale-105
        "
      >
        {tech}
      </span>

    ))}

  </div>

</div>

    {/* Project Overview */}

   <div
  className="
  group
  bg-white/5
  border
  border-white/10
  rounded-3xl
  p-6
  md:p-10
  transition-all
  duration-300
  hover:border-cyan-400
  hover:bg-cyan-500/5
  hover:-translate-y-2
">

      <h2 className="text-4xl font-black">
        Project Overview
      </h2>

      <div className="space-y-6 mt-8">

        <div className="flex justify-between border-b border-white/10 pb-4">
          <span className="text-gray-400">
            Client
          </span>

          <span className="font-semibold">
            {study.client}
          </span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-4">
          <span className="text-gray-400">
            Category
          </span>

          <span className="font-semibold">
            {study.category}
          </span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-4">
          <span className="text-gray-400">
            Technologies
          </span>

          <span className="font-semibold">
            {study.technologies.length}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Status
          </span>

          <span className="text-green-400 font-semibold">
            Completed
          </span>
        </div>

      </div>

    </div>

  </div>

</section>

      {/* Results */}

<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

  <div className="text-center">

    <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 uppercase tracking-[0.25em] text-xs sm:text-sm">
      Project Results
    </span>

    <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
      Measurable Outcomes
    </h2>

    <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-base md:text-lg leading-8">
      Every project is focused on delivering measurable business value,
      better performance, improved user experience, and long-term growth.
    </p>

  </div>

  {/* Results */}

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-14">

    {study.results.map((result) => (

      <div
        key={result}
        className="
        group
        bg-white/5
        border
        border-white/10
        rounded-[28px]
        p-6
        md:p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400
        hover:bg-cyan-500/5
        hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
        "
      >

        <div className="flex items-start gap-5">

          <div
            className="
            w-14
            h-14
            shrink-0
            rounded-2xl
            bg-cyan-500/10
            border
            border-cyan-500/20
            flex
            items-center
            justify-center
            text-2xl
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:rotate-6
            "
          >
            ✅
          </div>

          <div>

            <h3 className="text-xl md:text-2xl font-bold">
              Success
            </h3>

            <p className="mt-3 text-gray-400 leading-7 text-sm md:text-base">
              {result}
            </p>

          </div>

        </div>

      </div>

    ))}

  </div>

  {/* Statistics */}

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mt-16">

    <div
      className="
      group
      rounded-[28px]
      bg-white/5
      border
      border-white/10
      p-8
      md:p-10
      text-center
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-cyan-400
      hover:bg-cyan-500/5
      hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
      "
    >

      <h3 className="text-4xl md:text-5xl font-black text-cyan-400">
        100%
      </h3>

      <p className="mt-4 text-gray-300 text-sm md:text-base">
        Client Focused Solution
      </p>

    </div>

    <div
      className="
      group
      rounded-[28px]
      bg-white/5
      border
      border-white/10
      p-8
      md:p-10
      text-center
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-cyan-400
      hover:bg-cyan-500/5
      hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
      "
    >

      <div className="text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110">
        ⚡
      </div>

      <p className="mt-4 text-gray-300 text-sm md:text-base">
        Performance Optimized
      </p>

    </div>

    <div
      className="
      group
      rounded-[28px]
      bg-white/5
      border
      border-white/10
      p-8
      md:p-10
      text-center
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-cyan-400
      hover:bg-cyan-500/5
      hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
      "
    >

      <div className="text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110">
        🔒
      </div>

      <p className="mt-4 text-gray-300 text-sm md:text-base">
        Secure & Reliable
      </p>

    </div>

  </div>

</section>

{/* Related Case Studies */}






{/* More Projects */}

<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

  <div className="text-center">

    <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 uppercase tracking-[0.25em] text-xs sm:text-sm">
      More Projects
    </span>

    <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
      Explore More Projects
    </h2>

    <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-base md:text-lg leading-8">
      Discover how Bytecraft Studio helps businesses through
      websites, Microsoft 365, Shopify, WordPress,
      IT Support and Digital Transformation.
    </p>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mt-14">

    {projects
  .filter((item) => item.slug !== study.slug)
  .slice(0, 3)
  .map((item) => (

        <div
          key={item.slug}
          className="
          group
          rounded-[30px]
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          overflow-hidden
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-cyan-400
          hover:bg-cyan-500/5
          hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]
          "
        >

          <img
            src={item.image}
            alt={item.title}
            className="
            h-56
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
            "
          />

          <div className="p-6 md:p-8">

            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs uppercase tracking-wider">
              {item.category}
            </span>

            <h3 className="mt-6 text-2xl font-bold transition group-hover:text-cyan-400">
              {item.title}
            </h3>

            <p className="mt-5 text-gray-400 leading-7 text-sm md:text-base line-clamp-3">
              {item.description}
            </p>

            <a
              href={`/portfolio/${item.slug}`}
              className="
              inline-flex
              items-center
              mt-8
              font-semibold
              text-cyan-400
              transition-all
              duration-300
              group-hover:translate-x-2
              "
            >
              View Project →
            </a>

          </div>

        </div>

      ))}

  </div>

</section>

{/* Final CTA */}

<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-20 md:pb-28">

  <div className="rounded-[36px] bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-[2px]">

    <div className="rounded-[36px] bg-[#0B0F19] px-6 py-14 md:px-12 md:py-20 text-center">

      <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 uppercase tracking-[0.25em] text-xs sm:text-sm">
        Ready To Start?
      </span>

      <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
        Let's Build Your
        <span className="block">
          Next Digital Project
        </span>
      </h2>

      <p className="mt-8 max-w-3xl mx-auto text-gray-300 text-base md:text-lg leading-8">
        Whether you need a modern website, Shopify store,
        Microsoft 365 deployment, IT support or software testing,
        Bytecraft Studio is ready to help your business grow.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-14">

        {[
          ["15+", "Professional Services"],
          ["⚡", "Fast Delivery"],
          ["🔒", "Secure Solutions"],
          ["🤝", "Ongoing Support"],
        ].map(([icon, text]) => (

          <div
            key={text}
            className="
            group
            rounded-[24px]
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            p-6
            md:p-8
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-cyan-400
            hover:bg-cyan-500/5
            hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
            "
          >

            <div className="text-4xl md:text-5xl font-black text-cyan-400 transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>

            <p className="mt-4 text-sm md:text-base text-gray-300">
              {text}
            </p>

          </div>

        ))}

      </div>

      <a
        href="/contact"
        className="
        inline-flex
        items-center
        justify-center
        mt-14
        rounded-2xl
        bg-cyan-500
        px-8
        py-4
        font-bold
        text-black
        transition-all
        duration-300
        hover:scale-105
        hover:bg-cyan-400
        hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
        "
      >
        Start Your Project →
      </a>

    </div>

  </div>

</section>
</main>
  )
}