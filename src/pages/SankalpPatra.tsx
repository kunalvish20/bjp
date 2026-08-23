import { FileText } from 'lucide-react'
import { SEO } from '../components/seo/SEO.tsx'
import { ButtonLink } from '../components/ui/Button.tsx'
import { sankalpCommitments } from '../data/sankalpPatraData.ts'

export default function SankalpPatra() {
  return (
    <>
      <SEO title="Sankalp Patra" description="Read Bharatiya Mitra Party's 21-point Sankalp Patra covering governance, justice, education, healthcare, public administration, and national development." path="/sankalp-patra" />
      <main data-bilingual-skip="true" className="bg-party-cream">
        <section className="border-b border-party-line bg-white py-14 sm:py-16 lg:py-20">
          <div className="page-container">
            <div className="max-w-4xl">
              <span className="eyebrow">Bharatiya Mitra Party / <span lang="hi">भारतीय मित्र पार्टी</span></span>
              <h1 className="display-heading mt-5 max-w-3xl text-4xl font-bold leading-tight text-party-forest sm:text-5xl lg:text-6xl">
                Our Sankalp Patra
                <span lang="hi" className="mt-3 block text-[0.72em] leading-tight text-party-forest/78">हमारा संकल्प पत्र</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-party-ink/72 sm:text-lg sm:leading-8">
                Our commitments for accountable governance, public welfare and national development.
                <span lang="hi" className="mt-2 block font-medium leading-8 text-party-ink/68">जवाबदेह शासन, जनकल्याण और राष्ट्र के विकास के लिए हमारे संकल्प।</span>
              </p>
              <div className="mt-7 inline-flex items-center gap-3 rounded-xl border border-party-line bg-party-cream px-4 py-3 text-party-forest">
                <FileText size={20} aria-hidden="true" className="shrink-0 text-party-saffron" />
                <p className="text-sm font-black leading-tight">21 Commitments <span lang="hi" className="ml-1 font-bold text-party-ink/62">/ 21 संकल्प</span></p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-14 lg:py-16">
          <div className="page-container">
            <div className="mx-auto max-w-5xl border-y border-party-line py-7">
              <p className="max-w-3xl text-base leading-8 text-party-ink/72">
                The Sankalp Patra presents the key commitments and policy perspectives of Bharatiya Mitra Party across governance, justice, education, healthcare, public administration and national development.
              </p>
              <p lang="hi" className="mt-3 max-w-3xl text-base font-medium leading-8 text-party-ink/70">
                संकल्प पत्र भारतीय मित्र पार्टी के शासन, न्याय, शिक्षा, स्वास्थ्य, लोक प्रशासन और राष्ट्रीय विकास से जुड़े प्रमुख संकल्पों एवं नीतिगत विचारों को प्रस्तुत करता है।
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="sankalp-list-heading" className="pb-16 sm:pb-20 lg:pb-24">
          <div className="page-container">
            <div className="mx-auto max-w-5xl">
              <div className="mb-8 flex flex-col justify-between gap-4 border-b border-party-line pb-5 sm:flex-row sm:items-end">
                <div>
                  <span className="eyebrow">Official text / <span lang="hi">मूल पाठ</span></span>
                  <h2 id="sankalp-list-heading" className="display-heading mt-3 text-3xl font-bold text-party-forest sm:text-4xl">Our 21 Commitments</h2>
                </div>
                <p lang="hi" className="text-sm font-bold text-party-ink/60">हमारे 21 संकल्प</p>
              </div>

              <div className="divide-y divide-party-line border-y border-party-line bg-white">
                {sankalpCommitments.map((commitment) => (
                  <article key={commitment.id} id={`commitment-${commitment.id}`} className="grid gap-4 px-4 py-7 sm:px-6 md:grid-cols-[5rem_1fr] md:gap-8 md:py-9 lg:px-8">
                    <div className="flex items-center md:block">
                      <span className="font-display text-4xl font-bold leading-none text-party-forest sm:text-5xl">{String(commitment.id).padStart(2, '0')}</span>
                    </div>
                    <div className="max-w-3xl">
                      <p className="text-[0.68rem] font-black uppercase tracking-[0.14em] text-party-saffron">English</p>
                      <p lang="en" className="mt-2 text-base font-semibold leading-8 text-party-ink sm:text-lg sm:leading-9">{commitment.english}</p>
                      <p lang="hi" className="mt-6 text-[0.68rem] font-black uppercase tracking-[0.14em] text-party-saffron">हिन्दी</p>
                      <p lang="hi" className="mt-2 text-base font-medium leading-8 text-party-ink/78 sm:text-lg sm:leading-9">{commitment.hindi}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-party-forest py-12 text-white sm:py-16">
          <div className="page-container flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-party-saffron">Take part / <span lang="hi">साथ जुड़ें</span></p>
              <h2 className="display-heading mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">Help carry these commitments into public life.</h2>
            </div>
            <ButtonLink to="/join" icon={undefined}>Join our Party</ButtonLink>
          </div>
        </section>
      </main>
    </>
  )
}
