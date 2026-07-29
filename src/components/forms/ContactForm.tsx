import { CheckCircle2, LoaderCircle } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/Button.tsx'
import { FormField, fieldClassName, textareaClassName } from './FormField.tsx'

type ContactValues = { name: string; email: string; topic: string; message: string }

export function ContactForm() {
  const [done, setDone] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactValues>({ mode: 'onBlur' })
  const onSubmit = async () => { await new Promise((resolve) => setTimeout(resolve, 700)); setDone(true); reset() }
  if (done) return <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8"><CheckCircle2 className="text-civic-green" size={38} /><h2 className="display-heading mt-5 text-3xl font-bold text-movement-navy">Message received.</h2><p className="mt-3 leading-7 text-slate">A member of our team will get back to you as soon as possible.</p><button type="button" onClick={() => setDone(false)} className="mt-5 text-sm font-bold text-movement-navy underline decoration-blaze-orange decoration-2 underline-offset-8">Send another message</button></div>
  return <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-border bg-white p-6 shadow-civic-soft md:p-8" noValidate><div className="space-y-5"><div className="grid gap-5 sm:grid-cols-2"><FormField label="Your name" error={errors.name?.message}><input {...register('name', { required: 'Name is required.' })} placeholder="Full name" className={fieldClassName} /></FormField><FormField label="Email address" error={errors.email?.message}><input {...register('email', { required: 'Email is required.', pattern: { value: /\S+@\S+\.\S+/, message: 'Enter a valid email.' } })} type="email" placeholder="you@example.com" className={fieldClassName} /></FormField></div><FormField label="What can we help with?" error={errors.topic?.message}><select {...register('topic', { required: 'Choose a topic.' })} className={fieldClassName}><option value="">Choose a topic</option><option>Membership and volunteering</option><option>Media request</option><option>Public issue or suggestion</option><option>Donation support</option><option>Something else</option></select></FormField><FormField label="Your message" error={errors.message?.message}><textarea {...register('message', { required: 'Please add a message.' })} placeholder="Tell us a little more..." className={textareaClassName} /></FormField><Button type="submit" disabled={isSubmitting} icon={isSubmitting ? LoaderCircle : undefined}>{isSubmitting ? 'Sending...' : 'Send message'}</Button></div></form>
}
