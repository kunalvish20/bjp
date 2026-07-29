export const formatEventDate = (date: string) =>
  new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(date))

export const formatShortDate = (date: string) =>
  new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short' }).format(new Date(date))

export const formatNumber = (value: number) => new Intl.NumberFormat('en-IN').format(value)
