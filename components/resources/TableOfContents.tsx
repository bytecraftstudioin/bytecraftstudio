export default function TableOfContents() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 my-16">

      <h2 className="text-2xl font-bold mb-6">
        Table of Contents
      </h2>

      <ol className="space-y-4">

        {[
          "What is a Professional Business Email?",
          "Why Every Business Needs One",
          "Microsoft 365 Benefits",
          "Domain Setup Guide",
          "Best Practices",
          "Frequently Asked Questions",
        ].map((item, index) => (

          <li
            key={item}
            className="
            group
            flex
            justify-between
            items-center
            bg-white/5
            border
            border-transparent
            rounded-2xl
            px-5
            py-4
            text-gray-300
            transition-all
            duration-300
            hover:border-cyan-400
            hover:bg-cyan-500/10
            hover:-translate-y-1
            hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
            "
          >

            <span>
              {index + 1}. {item}
            </span>

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>

          </li>

        ))}

      </ol>

    </div>
  );
}