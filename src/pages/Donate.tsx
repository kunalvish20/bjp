import { Banknote, HeartHandshake, QrCode } from 'lucide-react'
import { SEO } from '../components/seo/SEO.tsx'
import { PageIntro } from './PagePrimitives.tsx'
import { DonationForm } from '../components/forms/DonationForm.tsx'
import { Reveal } from '../components/ui/Reveal.tsx'

export default function Donate() {
  return (
    <>
      <SEO title="Donate" description="Support Bharatiya Mitra Party with a transparent contribution to civic organising and public policy work." path="/donate" />
      <PageIntro eyebrow="Support the work" title="Back the people doing the patient work of public life." description="Your contribution helps us run listening circles, train volunteers, publish policy research, and keep this movement open to everyone." image="https://images.unsplash.com/photo-1773227059881-ef8ecf22aac8?auto=format&fit=crop&w=1800&q=85" />
      <section className="bg-civic-white py-10 md:py-16">
        <div className="page-container grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <DonationForm />
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">A clear contribution</span>
            <h2 className="display-heading mt-5 text-4xl font-bold leading-tight text-movement-navy sm:text-5xl">Every rupee should make the work more possible.</h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-slate">We publish the broad shape of our finances and keep our campaigns independent from private influence. Support the infrastructure of a people-powered movement.</p>
            <div className="mt-9 grid gap-3">
              <div className="flex gap-4 rounded-2xl border border-border bg-white p-5">
                <HeartHandshake className="mt-1 shrink-0 text-blaze-orange" size={23} />
                <div><p className="font-bold text-movement-navy">Fund listening</p><p className="mt-1 text-sm leading-6 text-slate">Help a local team host a room where people can be heard.</p></div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-border bg-white p-5">
                <Banknote className="mt-1 shrink-0 text-blaze-orange" size={23} />
                <div><p className="font-bold text-movement-navy">Keep it open</p><p className="mt-1 text-sm leading-6 text-slate">Support public research, volunteer tools, and accessible events.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-14 md:py-20">
        <div className="page-container grid gap-5 md:grid-cols-2">
          <Reveal className="rounded-3xl bg-movement-navy p-8 text-white md:p-10"><QrCode className="text-blaze-orange" size={32} /><h2 className="display-heading mt-12 text-4xl font-bold">Prefer UPI?</h2><p className="mt-4 max-w-md leading-7 text-white/65">Scan the QR code in the production version or use the handle below for a quick contribution.</p><p className="mt-6 rounded-2xl bg-white/10 px-4 py-3 font-mono text-sm text-white/80">bhartiyamitraparty@upi</p></Reveal>
          <Reveal delay={0.1} className="rounded-3xl bg-orange-50 p-8 md:p-10"><h2 className="display-heading text-4xl font-bold text-movement-navy">Bank transfer</h2><p className="mt-4 leading-7 text-slate">For larger contributions or institutional support, contact our finance team for verified bank details and compliance documentation.</p><a href="mailto:bhartiyamitrapartybmp@gmail.com" className="mt-7 inline-flex items-center break-all text-sm font-bold text-movement-navy underline decoration-blaze-orange decoration-2 underline-offset-8">bhartiyamitrapartybmp@gmail.com</a></Reveal>
        </div>
      </section>
    </>
  )
}
