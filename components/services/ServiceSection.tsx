
interface ServiceSectionProps {
  badge: string;
  title: string;
  description: string;
  features: string[];
  included: string[];
  reverse?: boolean;
}

export default function ServiceSection({
  badge,
  title,
  description,
  features,
  included,
  reverse = false,
}: ServiceSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-20">

      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >

        <div
className="
transition-all
duration-500
hover:-translate-y-1
"
>

          <p className="
text-cyan-400
uppercase
tracking-[0.3em]
text-sm
transition-all
duration-300
hover:tracking-[0.4em]
">
            {badge}
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 leading-tight break-words">
            {title}
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-400 leading-8">
            {description}
          </p>

          <div className="mt-10 space-y-4">

  {features.map((feature) => (

    <div
      key={feature}
      className="
      flex
      items-center
      gap-4
      bg-white/5
      border
      border-white/10
      rounded-2xl
      px-5
      py-4
      transition-all
      duration-300
      hover:border-cyan-400
      hover:bg-cyan-500/5
      hover:translate-x-2
      "
    >

      <span className="text-cyan-400 text-xl">
        ✔
      </span>

      <span>
        {feature}
      </span>

    </div>

  ))}

</div>

        </div>

        <div
className="
bg-white/5
border
border-white/10
rounded-[40px]
p-10
transition-all
duration-500
hover:border-cyan-400
hover:bg-cyan-500/5
hover:-translate-y-2
hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
"
>

        <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            What's Included
          </h3>

          <ul className="space-y-4 text-gray-300">
            {included.map((item) => (
              <li
key={item}
className="
flex
items-center
gap-3
transition-all
duration-300
hover:text-cyan-400
hover:translate-x-2
"
>

<span className="text-cyan-400">
✔
</span>

{item}

</li>
            ))}
          </ul>

        </div>

      </div>

    </section>
  );
}
