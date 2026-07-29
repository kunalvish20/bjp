import { ArrowUpRight, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'dark' | 'outline' | 'ghost'

type ButtonProps = {
  children: React.ReactNode
  variant?: ButtonVariant
  icon?: LucideIcon
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-party-saffron text-white shadow-[0_10px_18px_rgba(240,90,36,0.25)] hover:bg-party-red',
  dark: 'bg-party-forest text-white hover:bg-party-green',
  outline: 'border border-party-forest/30 bg-white text-party-forest hover:border-party-saffron hover:text-party-saffron',
  ghost: 'border border-party-line bg-white text-party-forest hover:border-party-green hover:bg-party-cream',
}

export function Button({ children, variant = 'primary', icon: Icon = ArrowUpRight, className = '', type = 'button', disabled, onClick }: ButtonProps) {
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-[0.3rem] px-5 text-sm font-black tracking-[0.01em] transition duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}>
      <span>{children}</span>
      <Icon aria-hidden="true" size={16} strokeWidth={2.4} />
    </button>
  )
}

type ButtonLinkProps = Omit<ButtonProps, 'type' | 'disabled'> & { to: string }

export function ButtonLink({ children, variant = 'primary', icon: Icon = ArrowUpRight, className = '', to, onClick }: ButtonLinkProps) {
  return (
    <Link to={to} onClick={onClick} className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-[0.3rem] px-5 text-sm font-black tracking-[0.01em] transition duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`}>
      <span>{children}</span>
      <Icon aria-hidden="true" size={16} strokeWidth={2.4} />
    </Link>
  )
}

export function IconButton({ label, icon: Icon, className = '', onClick }: { label: string; icon: LucideIcon; className?: string; onClick?: () => void }) {
  return (
    <button type="button" aria-label={label} onClick={onClick} className={`inline-flex h-10 w-10 items-center justify-center rounded-[0.3rem] border border-white/30 bg-white/10 text-white transition hover:bg-party-saffron ${className}`}>
      <Icon aria-hidden="true" size={18} strokeWidth={2} />
    </button>
  )
}
