import SectionTitle from "@/components/ui/SectionTitle";

export default function RefundPolicyPage() {
  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      {/* Hero */}

      <section className="max-w-5xl mx-auto px-6 py-24">

        <SectionTitle
          badge="Legal"
          title="Refund Policy"
          description="This Refund Policy explains the conditions under which refunds may or may not be provided for services offered by Bytecraft Studio."
        />

        <div className="mt-12 bg-white/5 border border-white/10 rounded-[32px] p-8">

          <div className="flex flex-wrap gap-10">

            <div>
              <p className="text-gray-500 text-sm">
                Last Updated
              </p>

              <p className="text-xl font-semibold mt-2">
                July 2026
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                Company
              </p>

              <p className="text-xl font-semibold mt-2">
                Bytecraft Studio
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                Policy Version
              </p>

              <p className="text-xl font-semibold mt-2">
                Version 1.0
              </p>
            </div>

          </div>

        </div>

      </section>

            {/* Table of Contents */}

      <section className="max-w-5xl mx-auto px-6 pb-12">

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">

          <h2 className="text-3xl font-black mb-8">
            Contents
          </h2>

          <div className="grid md:grid-cols-2 gap-5 text-gray-300">

            <a href="#overview" className="hover:text-cyan-400 transition">
              1. Refund Policy Overview
            </a>

            <a href="#eligible" className="hover:text-cyan-400 transition">
              2. Eligible Refunds
            </a>

            <a href="#non-refundable" className="hover:text-cyan-400 transition">
              3. Non-Refundable Services
            </a>

            <a href="#project-cancellation" className="hover:text-cyan-400 transition">
              4. Project Cancellation
            </a>

            <a href="#digital-products" className="hover:text-cyan-400 transition">
              5. Digital Products
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              6. Contact Us
            </a>

          </div>

        </div>

      </section>

      {/* Refund Policy Overview */}

      <section
        id="overview"
        className="max-w-5xl mx-auto px-6 pb-10"
      >

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">

          <div className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-2xl">
              💳
            </div>

            <h2 className="text-3xl font-black">
              Refund Policy Overview
            </h2>

          </div>

          <p className="mt-8 text-gray-300 leading-8">
            At Bytecraft Studio, we are committed to delivering high-quality
            digital services. Since most of our work involves custom website
            development, Microsoft 365 configuration, IT consulting, software
            testing, and other personalized services, refunds are handled on a
            case-by-case basis.
          </p>

          <p className="mt-6 text-gray-300 leading-8">
            By purchasing our services, you acknowledge and agree to this
            Refund Policy before project commencement.
          </p>

        </div>

      </section>

            {/* Eligible Refunds */}

      <section
        id="eligible"
        className="max-w-5xl mx-auto px-6 pb-10"
      >

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">

          <div className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center text-2xl">
              ✅
            </div>

            <h2 className="text-3xl font-black">
              Eligible Refunds
            </h2>

          </div>

          <p className="mt-8 text-gray-300 leading-8">
            Refunds may be considered in the following situations after review
            by Bytecraft Studio:
          </p>

          <ul className="mt-8 space-y-4 text-gray-300">

            <li>✔ Duplicate payments made accidentally.</li>

            <li>✔ Payment received but the project has not yet started.</li>

            <li>✔ We are unable to deliver the agreed service due to internal reasons.</li>

            <li>✔ Refunds approved by mutual written agreement between the client and Bytecraft Studio.</li>

          </ul>

        </div>

      </section>

      {/* Non-Refundable Services */}

      <section
        id="non-refundable"
        className="max-w-5xl mx-auto px-6 pb-20"
      >

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">

          <div className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center text-2xl">
              ❌
            </div>

            <h2 className="text-3xl font-black">
              Non-Refundable Services
            </h2>

          </div>

          <p className="mt-8 text-gray-300 leading-8">
            Because our services are customized and require significant time
            and effort, refunds will generally <strong>not</strong> be provided
            for the following:
          </p>

          <ul className="mt-8 space-y-4 text-gray-300">

            <li>• Website Development Projects</li>

            <li>• Shopify Store Development</li>

            <li>• WordPress Website Development</li>

            <li>• Microsoft 365 Setup & Migration</li>

            <li>• Business Email Configuration</li>

            <li>• SEO Optimization Services</li>

            <li>• Website Maintenance</li>

            <li>• Software Testing & QA Services</li>

            <li>• IT Support Services already delivered.</li>

          </ul>

        </div>

      </section>

      {/* Project Cancellation */}

<section
  id="project-cancellation"
  className="max-w-5xl mx-auto px-6 pb-10"
>

  <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">

    <div className="flex items-center gap-5">

      <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center text-2xl">
        🚫
      </div>

      <h2 className="text-3xl font-black">
        Project Cancellation
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      Clients may request cancellation before the project begins.
      Once design, development, migration, testing, or implementation
      has started, refunds may not be available because resources
      have already been allocated to the project.
    </p>

    <p className="mt-6 text-gray-300 leading-8">
      If a project is cancelled after work has started, any completed
      work, milestones, or delivered services may be billed accordingly.
    </p>

  </div>

</section>

{/* Digital Products & Third-Party Services */}

<section
  id="digital-products"
  className="max-w-5xl mx-auto px-6 pb-10"
>

  <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">

    <div className="flex items-center gap-5">

      <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-2xl">
        📦
      </div>

      <h2 className="text-3xl font-black">
        Digital Products & Third-Party Services
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      Refunds cannot be provided for digital products, software
      licenses, subscriptions, domain registrations, hosting,
      Microsoft 365 licenses, Shopify subscriptions, WordPress
      premium themes/plugins, or any third-party services purchased
      on behalf of the client.
    </p>

    <p className="mt-6 text-gray-300 leading-8">
      Such purchases are governed by the refund policies of the
      respective third-party providers.
    </p>

  </div>

</section>

{/* Partial Refunds */}

<section
  id="partial-refunds"
  className="max-w-5xl mx-auto px-6 pb-20"
>

  <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">

    <div className="flex items-center gap-5">

      <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-2xl">
        💰
      </div>

      <h2 className="text-3xl font-black">
        Partial Refunds
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      In exceptional situations, Bytecraft Studio may approve a
      partial refund based on the amount of work completed,
      project stage, and expenses already incurred.
    </p>

    <ul className="mt-8 space-y-4 text-gray-300">

      <li>✔ Work already completed will be deducted.</li>

      <li>✔ Third-party expenses are non-refundable.</li>

      <li>✔ Custom development hours already spent are non-refundable.</li>

      <li>✔ Approved refunds will be processed using the original payment method whenever possible.</li>

    </ul>

  </div>

</section>

{/* Contact */}

<section
  id="contact"
  className="max-w-5xl mx-auto px-6 pb-20"
>

  <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">

    <div className="flex items-center gap-5">

      <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-2xl">
        📞
      </div>

      <h2 className="text-3xl font-black">
        Contact Us
      </h2>

    </div>

    <p className="mt-8 text-gray-300 leading-8">
      If you have questions regarding payments, cancellations,
      or refund eligibility, please contact Bytecraft Studio before
      purchasing any service. We'll be happy to clarify our policies
      and help you choose the right solution.
    </p>

    <div className="grid md:grid-cols-2 gap-6 mt-10">

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

        <h3 className="text-xl font-bold mb-3">
          📧 Email
        </h3>

        <p className="text-gray-400">
          contact@bytecraftstudio.com
        </p>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

        <h3 className="text-xl font-bold mb-3">
          🌐 Website
        </h3>

        <p className="text-gray-400">
          https://bytecraftstudio.com
        </p>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

        <h3 className="text-xl font-bold mb-3">
          💳 Refund Processing
        </h3>

        <p className="text-gray-400">
          Approved refunds are typically processed within
          <br />
          <span className="text-white font-semibold">
            5–10 Business Days
          </span>
        </p>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

        <h3 className="text-xl font-bold mb-3">
          📍 Location
        </h3>

        <p className="text-gray-400">
          Chennai, Tamil Nadu, India
        </p>

      </div>

    </div>

  </div>

</section>

{/* CTA */}

<section className="max-w-6xl mx-auto px-6 pb-28">

  <div className="rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 p-[2px]">

    <div className="bg-[#0B0F19] rounded-[40px] px-8 py-20 text-center">

      <p className="uppercase tracking-[0.3em] text-cyan-400">
        Need Help?
      </p>

      <h2 className="text-5xl md:text-6xl font-black mt-6 leading-tight">
        Questions About
        <br />
        Refunds?
      </h2>

      <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-300 leading-8">
        Before purchasing any Bytecraft Studio service,
        feel free to contact us for clarification regarding
        pricing, project scope, cancellations, and refund eligibility.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-12">

        <a
          href="/contact"
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
        >
          Contact Us
        </a>

        <a
          href="/services"
          className="border border-white/20 hover:border-cyan-400 px-8 py-4 rounded-2xl transition"
        >
          Explore Services
        </a>

      </div>

    </div>

  </div>

</section>

</main>
  )
}