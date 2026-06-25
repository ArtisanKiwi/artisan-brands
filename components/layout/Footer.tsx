'use client'

import { FaLinkedinIn } from 'react-icons/fa'

const brands = [
  { label: 'Kiwi Artisan', href: '#kiwi-artisan' },
  { label: 'Petite Eats', href: '#petite-eats' },
  { label: 'Crunch Time', href: '#crunch-time' },
  { label: 'Artisan DC', href: '#artisan-dc' },
]

const nav = [
  { label: 'Brands', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function scrollTo(href: string) {
  const target = document.querySelector(href)
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-cream">
      <div className="max-w-8xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-16">
          <div>
            <div className="mb-5">
              <img src="/content/artisan_brands_logo.png" alt="Artisan Brands" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              A Next-Gen FMCG consumer brands group built on a proprietary customer acquisition and distribution platform.
            </p>
            <a
              href="https://www.linkedin.com/company/artisanbrands/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Artisan Brands on LinkedIn"
              className="inline-flex items-center gap-2 text-white/50 hover:text-brand-cream transition-colors duration-200"
            >
              <FaLinkedinIn size={16} />
              <span className="text-xs">LinkedIn</span>
            </a>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-caramel mb-5">Our Brands</p>
            <ul className="space-y-3">
              {brands.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); scrollTo(href) }}
                    className="text-sm text-white/60 hover:text-brand-cream transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-caramel mb-5">Company</p>
            <ul className="space-y-3">
              {nav.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); scrollTo(href) }}
                    className="text-sm text-white/60 hover:text-brand-cream transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Artisan Brands Limited. All rights reserved.
          </p>
          <p className="text-xs text-white/30">Australia &amp; New Zealand</p>
        </div>
      </div>
    </footer>
  )
}
