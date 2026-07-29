import { CheckCircle2, LoaderCircle, QrCode } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/Button.tsx'
import { FormField, fieldClassName } from './FormField.tsx'

type DonationValues = { name: string; email: string; amount: string }
const amounts = ['500', '1,000', '2,500', 'Other']

export function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState('1,000')
  const [payMethod, setPayMethod] = useState<'card' | 'qr'>('card')
  const [done, setDone] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<DonationValues>({ mode: 'onBlur' })
  const onSubmit = async () => { await new Promise((resolve) => setTimeout(resolve, 900)); setDone(true) }
  
  if (done) return <div className="flex min-h-[450px] flex-col justify-center rounded-3xl border border-border bg-white p-7 md:p-10"><CheckCircle2 className="text-civic-green" size={44} /><h2 className="display-heading mt-6 text-4xl font-bold text-movement-navy">Thank you for backing the work.</h2><p className="mt-4 leading-7 text-slate">This is a demo checkout. In production, this step will securely connect to your payment partner.</p></div>

  return (
    <div className="rounded-3xl border border-border bg-white p-6 md:p-8">
      <div className="mb-8 flex gap-2 rounded-xl bg-civic-white p-1.5 shadow-inner">
        <button onClick={() => setPayMethod('card')} className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition-all ${payMethod === 'card' ? 'bg-white text-movement-navy shadow-sm' : 'text-slate hover:text-movement-navy'}`}>Online Payment</button>
        <button onClick={() => setPayMethod('qr')} className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition-all ${payMethod === 'qr' ? 'bg-white text-movement-navy shadow-sm' : 'text-slate hover:text-movement-navy'}`}>Scan QR (UPI)</button>
      </div>

      {payMethod === 'card' ? (
        <form onSubmit={handleSubmit(onSubmit)} className="animate-in fade-in slide-in-from-bottom-2 duration-300" noValidate>
          <fieldset><legend className="text-sm font-bold text-movement-navy">Choose an amount</legend><div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">{amounts.map((amount) => <button type="button" key={amount} onClick={() => setSelectedAmount(amount)} className={`h-12 rounded-2xl border text-sm font-bold transition ${selectedAmount === amount ? 'border-blaze-orange bg-orange-50 text-blaze-orange' : 'border-border text-movement-navy hover:border-blaze-orange'}`}>{amount === 'Other' ? amount : `₹${amount}`}</button>)}</div></fieldset>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <FormField label="Full name" error={errors.name?.message}><input {...register('name', { required: 'Name is required.' })} placeholder="Your name" className={fieldClassName} /></FormField>
            <FormField label="Email address" error={errors.email?.message}><input {...register('email', { required: 'Email is required.', pattern: { value: /\S+@\S+\.\S+/, message: 'Enter a valid email.' } })} type="email" placeholder="you@example.com" className={fieldClassName} /></FormField>
          </div>
          <input type="hidden" value={selectedAmount} {...register('amount')} />
          <p className="mt-6 text-xs leading-5 text-slate">By continuing, you agree that this contribution is voluntary and will be used for lawful civic activity in line with our transparency policy.</p>
          <Button type="submit" className="mt-6 w-full" disabled={isSubmitting} icon={isSubmitting ? LoaderCircle : undefined}>{isSubmitting ? 'Preparing secure checkout...' : `Continue with ₹${selectedAmount}`}</Button>
        </form>
      ) : (
        <div className="flex min-h-[360px] flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="relative flex h-56 w-56 items-center justify-center rounded-2xl border-2 border-dashed border-border bg-civic-white overflow-hidden p-2">
            <img src="/qr.png" alt="UPI QR Code" className="h-full w-full object-contain rounded-xl" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.classList.remove('hidden'); }} />
            <QrCode size={100} strokeWidth={1} className="hidden text-slate/40" />
          </div>
          <h3 className="display-heading mt-6 text-3xl font-bold text-movement-navy">Scan to Pay</h3>
          <p className="mt-2 max-w-[240px] text-center text-sm leading-6 text-slate">Open any UPI app like GPay, PhonePe, or Paytm and scan this code.</p>
          <div className="mt-6 flex w-full max-w-[280px] flex-col items-center justify-center gap-1 rounded-2xl bg-orange-50 py-4 px-6 border border-orange-100/50">
             <span className="text-[0.65rem] font-bold uppercase tracking-wider text-blaze-orange">Or use UPI ID</span>
             <span className="font-mono text-base font-bold text-movement-navy">janawaaz@upi</span>
          </div>
        </div>
      )}
    </div>
  )
}
