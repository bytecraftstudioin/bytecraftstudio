import Link from "next/link";
import { resources } from "@/data/resources";

interface Props {
  currentSlug: string;
}

export default function RelatedArticles({
  currentSlug,
}: Props) {
  const related = resources.filter(
    (item) => item.slug !== currentSlug
  );

  return (
    <section className="my-20">

      <h2 className="text-3xl font-black mb-10">
        Related Articles
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {related.slice(0, 4).map((item) => (

          <Link
            key={item.slug}
            href={`/resources/${item.slug}`}
            className="
            group
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
            transition-all
            duration-300
            hover:border-cyan-400
            hover:bg-cyan-500/5
            hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
            "
          >

            <p className="text-cyan-400 text-sm">
              {item.category}
            </p>

            <h3
              className="
              text-2xl
              font-bold
              mt-4
              transition-colors
              duration-300
              group-hover:text-cyan-400
              "
            >
              {item.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {item.description}
            </p>

            <div
              className="
              mt-6
              text-cyan-400
              font-semibold
              transition-all
              duration-300
              group-hover:translate-x-2
              "
            >
              Read Article →
            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}