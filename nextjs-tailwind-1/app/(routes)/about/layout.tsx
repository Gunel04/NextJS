// app/about/layout.tsx (Server Component)
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BuyHost - About page',
  description: 'This is the about page',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
