import { faqs } from "@/data/faq";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FAQPage() {
  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      <section className="max-w-5xl mx-auto px-6 py-24">

        <SectionTitle
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to the most common questions about our services."
        />

        <div className="space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.question}
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
"
            >
             <div className="flex items-start gap-4">

  <div className="
  w-12
  h-12
  rounded-2xl
  bg-cyan-500/20
  flex
  items-center
  justify-center
  text-xl
  transition-all
  duration-300
  group-hover:scale-110
  ">
    ❓
  </div>

  <h2
    className="
    text-2xl
    font-bold
    transition-colors
    duration-300
    group-hover:text-cyan-400
    "
  >
    {faq.question}
  </h2>

</div>

              <p
className="
mt-4
text-gray-400
leading-8
transition-colors
duration-300
group-hover:text-gray-300
"
>
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}