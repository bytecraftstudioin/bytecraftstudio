interface Props {
  badge: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
}: Props) {
  return (
    <div className="text-center mb-16">

      <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
        {badge}
      </p>

      <h2 className="text-5xl font-black mt-4">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}

    </div>
  );
}