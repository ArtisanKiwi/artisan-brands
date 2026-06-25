import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Artisan Brands — Consumer Brand Incubator & Investment Platform',
  description: 'Artisan Brands builds, acquires and scales emerging consumer brands across Australia and New Zealand.',
  openGraph: {
    title: 'Artisan Brands',
    description: 'Consumer brand incubator and investment platform across Australia and New Zealand.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
