interface Props {
  category: string;
  title: string;
  description: string;
}

export default function ArticleHeader({
  category,
  title,
  description,
}: Props) {
  return (
    <>

      {/* Category Badge */}

      <div
        className="
        inline-flex
        items-center
        px-5
        py-2
        rounded-full
        bg-cyan-500/10
        border
        border-cyan-500/20
        text-cyan-400
        uppercase
        tracking-[0.25em]
        text-sm
        font-semibold
        transition-all
        duration-300
        hover:bg-cyan-500/20
        hover:border-cyan-400
        hover:scale-105
        "
      >
        {category}
      </div>

      {/* Title */}

      <h1
        className="
        text-5xl
        md:text-6xl
        font-black
        leading-tight
        mt-8
        "
      >
        {title}
      </h1>

      {/* Description */}

      <p
        className="
        mt-8
        text-xl
        text-gray-400
        leading-8
        max-w-3xl
        transition-colors
        duration-300
        hover:text-gray-300
        "
      >
        {description}
      </p>

      {/* Meta Information */}

      <div className="flex flex-wrap gap-5 mt-10">

        <div
          className="
          flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          bg-white/5
          border
          border-white/10
          text-sm
          text-gray-300
          transition-all
          duration-300
          hover:border-cyan-400
          hover:bg-cyan-500/10
          "
        >
          👤 <span>Bytecraft Studio</span>
        </div>

        <div
          className="
          flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          bg-white/5
          border
          border-white/10
          text-sm
          text-gray-300
          transition-all
          duration-300
          hover:border-cyan-400
          hover:bg-cyan-500/10
          "
        >
          📅 <span>June 30, 2026</span>
        </div>

        <div
          className="
          flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          bg-white/5
          border
          border-white/10
          text-sm
          text-gray-300
          transition-all
          duration-300
          hover:border-cyan-400
          hover:bg-cyan-500/10
          "
        >
          ⏱️ <span>8 min read</span>
        </div>

      </div>

    </>
  );
}