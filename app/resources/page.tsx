import { resources } from "@/data/resources";
import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Resources | Bytecraft Studio",
  description:
    "Free guides, tutorials, and articles on web development, Microsoft 365, SEO, AI, and business technology.",
};

export default function ResourcesPage() {
  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
          Resources
        </p>

        <h1 className="
text-5xl
md:text-7xl
font-black
leading-tight
transition-all
duration-300
hover:tracking-tight
">
          Learn,
          <span className="text-blue-400 block">
            Build & Grow
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-gray-300 text-lg leading-relaxed">
          Explore expert guides, tutorials, business tips, Microsoft 365
          resources, web development articles, SEO strategies, and more.
        </p>

      </section>

<section className="max-w-7xl mx-auto px-6 pb-24">

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    {[
      "🌐 Web Development",
      "☁️ Microsoft 365",
      "📧 Business Email",
      "🖥️ IT Support",
      "🧪 Software Testing",
      "🚀 SEO",
      "🤖 AI",
      "🔒 Cyber Security",
    ].map((category) => (

      <a
        key={category}
        href="#"
        className="
group
bg-white/5
border
border-white/10
rounded-3xl
p-8
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/5
hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
">

        <h3 className="
text-2xl
font-bold
transition-colors
duration-300
group-hover:text-cyan-400
">
          {category}
        </h3>

        <p className="text-gray-400 mt-4">
          Explore articles and practical guides.
        </p>

      </a>

    ))}

  </div>

</section>
<section className="max-w-7xl mx-auto px-6 pb-24">

<SectionTitle
  badge="Resources"
  title="Knowledge Hub"
  description="Expert articles, guides, and insights to help businesses grow online."
/>

<div className="grid lg:grid-cols-3 gap-8">
{resources.map((article) => (

  <div
    key={article.slug}
    className="
group
bg-white/5
border
border-white/10
rounded-3xl
overflow-hidden
transition-all
duration-300
hover:-translate-y-3
hover:border-cyan-400
hover:bg-cyan-500/5
hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
">

    <div className="
h-56
bg-gradient-to-br
from-blue-500/20
to-cyan-500/20
flex
items-center
justify-center
overflow-hidden
">

<div className="
text-7xl
transition-transform
duration-500
group-hover:scale-125
group-hover:rotate-6
">
📚
</div>

</div>

    <div className="p-8">

      <p className="text-cyan-400 text-sm">
        {article.category}
      </p>

      <h3 className="
text-2xl
font-bold
mt-3
transition-colors
duration-300
group-hover:text-cyan-400
">
        {article.title}
      </h3>

      <p className="text-gray-400 mt-4">
        {article.description}
      </p>

      <a
        href={`/resources/${article.slug}`}
        className="
inline-flex
items-center
gap-2
mt-6
text-cyan-400
font-semibold
transition-all
duration-300
group-hover:translate-x-2
hover:text-cyan-300
">
        Read Article →
      </a>

    </div>

  </div>

))}

</div>

</section>

    </main>
  );
}