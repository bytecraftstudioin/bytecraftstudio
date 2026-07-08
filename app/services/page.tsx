import { services } from "@/data/services";
import ServiceSection from "@/components/services/ServiceSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Bytecraft Studio",
  description:
    "Website development, Microsoft 365, IT support, business email, and software testing services.",
};

export default function ServicesPage() 

{
  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
          Our Services
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight break-words">
               Digital Solutions
          <span className="text-blue-400 block">
            Built For Businesses
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-base sm:text-lg text-gray-300 leading-8">
            From website development to Microsoft 365 deployment and
          professional IT support, Bytecraft Studio provides complete
          digital solutions that help businesses grow faster.
        </p>

      </section>

<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">

<div className="text-center">

<p className="text-cyan-400 uppercase tracking-[0.3em]">
Our Expertise
</p>

<h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 leading-tight">
Everything Your Business Needs
</h2>

<p className="mt-6 text-gray-400 text-base md:text-lg leading-8 max-w-3xl mx-auto">
From websites to Microsoft 365, IT infrastructure,
cloud solutions, and digital transformation,
Bytecraft Studio provides complete technology services
under one roof.
</p>

</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 md:mt-16">

{[
"🌐 Website Development",
"🛒 Shopify Store Development",
"📰 WordPress Website Development",
"⚡ Business Email Solutions",
"🟦 Microsoft 365 Setup",
"☁️ Cloud Migration Services",
"🖥️ IT Support Services",
"🌐 Network & Wi-Fi Setup",
"🔒 Data Backup & Recovery",
"💻 Computer & Workstation Setup",
"📹 CCTV & Network Integration",
"🚀 Website Maintenance",
"📈 SEO Optimization",
"🔐 Website Security",
"⚡ Performance Optimization",
"🧪 Software Testing",
].map((service)=>(

<div
key={service}
className="
group
bg-white/5
border
border-white/10
rounded-2xl
p-5
md:p-6
text-center
text-sm
sm:text-base
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:bg-cyan-500/5
hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
">

{service}

</div>

))}

</div>

</section>
<section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-6 pb-6 md:pt-8 md:pb-8">
  <div className="text-center mb-10 md:mb-16">
    <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
      Featured Service
    </p>
  </div>

</section>
{services.map((service) => (
  <ServiceSection
    key={service.title}
    badge={service.badge}
    title={service.title}
    description={service.description}
    features={service.features}
    included={service.included}
    reverse={service.reverse}
  />
))}
    </main>
  );
}
