interface SectionTitleProps {
  badge: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  description,
  center = true,
}: SectionTitleProps) {
  return (
    <div
      className={`${
        center ? "text-center" : ""
      } mb-8 md:mb-10 transition-all duration-300`}
    >
      {/* Badge */}

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
        tracking-[0.3em]
        text-sm
        font-semibold
        transition-all
        duration-300
        hover:bg-cyan-500/20
        hover:border-cyan-400
        hover:scale-105
        "
      >
        {badge}
      </div>

      {/* Title */}

      <h2
        className="
        text-4xl
        md:text-5xl
        font-black
        mt-6
        leading-tight
        transition-all
        duration-300
        hover:text-cyan-400
        "
      >
        {title}
      </h2>

      {/* Description */}

      {description && (
        <p
          className="
          mt-6
          text-gray-400
          max-w-3xl
          leading-8
          mx-auto
          transition-colors
          duration-300
          hover:text-gray-300
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}