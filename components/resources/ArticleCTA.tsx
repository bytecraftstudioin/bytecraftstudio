export default function ArticleCTA() {
  return (
    <section className="my-24">

      <div
        className="
        rounded-[36px]
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
        p-10
        text-center
        transition-all
        duration-500
        hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]
        "
      >

        <h2 className="text-4xl font-black">
          Need Professional Microsoft 365 Setup?
        </h2>

        <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
          Bytecraft Studio helps businesses deploy Microsoft 365,
          business email, Teams, OneDrive, and cloud solutions.
        </p>

        <a
          href="/contact"
          className="
          inline-block
          mt-10
          bg-white
          text-black
          px-8
          py-4
          rounded-xl
          font-bold
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_0_35px_rgba(255,255,255,0.35)]
          "
        >
          Contact Bytecraft Studio
        </a>

      </div>

    </section>
  );
}