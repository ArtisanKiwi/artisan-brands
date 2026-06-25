"use client";

import { useRef, useState } from "react";
import { Button } from "@relume_io/relume-ui";
import { ArrowRight, Send } from "lucide-react";

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ─── Hero (Header76) ─────────────────────────────────────────────────────────

const heroImagesCol1 = [
  { src: "/content/hero_ka2.jpg", alt: "Kiwi Artisan" },
  { src: "/content/hero_pe1.jpg", alt: "Petite Eats" },
  { src: "/content/hero_ct.png", alt: "Crunch Time" },
  { src: "/content/hero_ka4.webp", alt: "Kiwi Artisan" },
  { src: "/content/hero_pe2.jpg", alt: "Petite Eats" },
  // duplicate for seamless loop
  { src: "/content/hero_ka2.jpg", alt: "Kiwi Artisan" },
  { src: "/content/hero_pe1.jpg", alt: "Petite Eats" },
  { src: "/content/hero_ct.png", alt: "Crunch Time" },
  { src: "/content/hero_ka4.webp", alt: "Kiwi Artisan" },
  { src: "/content/hero_pe2.jpg", alt: "Petite Eats" },
];

const heroImagesCol2 = [
  { src: "/content/hero_ka5.jpg", alt: "Kiwi Artisan" },
  { src: "/content/hero_ct_2.jpg", alt: "Crunch Time" },
  { src: "/content/hero_pe3.jpg", alt: "Petite Eats" },
  { src: "/content/hero_ka9.jpg", alt: "Kiwi Artisan" },
  { src: "/content/hero_ct4.jpg", alt: "Crunch Time" },
  // duplicate for seamless loop
  { src: "/content/hero_ka5.jpg", alt: "Kiwi Artisan" },
  { src: "/content/hero_ct_2.jpg", alt: "Crunch Time" },
  { src: "/content/hero_pe3.jpg", alt: "Petite Eats" },
  { src: "/content/hero_ka9.jpg", alt: "Kiwi Artisan" },
  { src: "/content/hero_ct4.jpg", alt: "Crunch Time" },
];

function Hero() {
  return (
    <section className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0 min-h-screen bg-brand-cream">
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end py-16 lg:py-0">
        <h1 className="font-serif mb-5 text-display-xl md:mb-6 text-brand-charcoal leading-[1.05]">
          Where emerging{" "}
          <em className="not-italic text-brand-green">consumer brands</em>{" "}
          are built to last.
        </h1>
        <p className="text-brand-muted leading-relaxed md:text-lg max-w-md">
          Artisan Brands Limited develops and scales premium consumer brands across Australia and New Zealand through a modern, demand-first approach to FMCG growth.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button
            onClick={() => scrollTo("#portfolio")}
            className="bg-brand-green text-brand-cream hover:bg-brand-green-light border-none"
          >
            View our brands
          </Button>
        </div>
      </div>

      {/* Scrolling image columns */}
      <div className="h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-x-4 h-full">
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            {heroImagesCol1.map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <img className="absolute inset-0 size-full object-cover" src={image.src} alt={image.alt} />
                </div>
              </div>
            ))}
          </div>
          <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4" style={{ animationDirection: "reverse" }}>
            {heroImagesCol2.map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <img className="absolute inset-0 size-full object-cover" src={image.src} alt={image.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Intro ───────────────────────────────────────────────────────────────────

function Intro() {
  return (
    <section id="about" className="bg-white py-section">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div>
            <h2 className="font-serif text-display-md text-brand-charcoal text-balance mb-10 leading-snug">
              We don't just invest in consumer brands -{" "}
              <em className="not-italic text-brand-green">we build them</em>.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-brand-muted leading-relaxed">
              <p>
                Artisan Brands Limited (ABL) is a Next-Gen FMCG consumer brands group built on a proprietary customer acquisition and distribution platform. We develop and scale premium consumer brands across Australia and New Zealand.
              </p>
              <p>
                The Group operates across direct-to-consumer, ecommerce, wholesale and retail channels, leveraging the ADC Platform to accelerate customer acquisition, market validation and brand expansion.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 mt-16">
              {[
                { title: "Build", body: "We incubate consumer brands from the ground up, combining demand-first market insight with hands-on operational support." },
                { title: "Acquire", body: "We identify and acquire established consumer brands with untapped growth potential across the ANZ market." },
                { title: "Scale", body: "We accelerate growth through direct-to-consumer, ecommerce, wholesale, grocery distribution, and live retail activations." },
              ].map(({ title, body }) => (
                <div key={title} className="p-8 lg:p-10">
                  <h3 className="font-serif text-2xl font-medium text-brand-charcoal mb-4">{title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}

// ─── Brand section (Header137 restored) ──────────────────────────────────────

type BrandSectionProps = {
  id: string;
  logo: string;
  logoAlt: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaUrl: string | null;
  video?: string;
  bigImage: string;
  accent: string;
  flip?: boolean;
  overlay?: boolean;
};

function BrandSection({ id, logo, logoAlt, heading, description, ctaLabel, ctaUrl, video, bigImage, accent, flip, overlay }: BrandSectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 grid grid-cols-1 items-center lg:grid-cols-2 ${accent}`}>
      {/* Copy */}
      <div className={`mx-[5%] py-16 sm:max-w-md lg:py-24 ${flip ? "lg:order-2 lg:ml-20 lg:mr-[5vw] lg:justify-self-start" : "lg:ml-[5vw] lg:mr-20 lg:justify-self-end"}`}>
        <img src={logo} alt={logoAlt} className="w-56 h-auto mb-8 object-contain object-left" />
        <h2 className="font-serif mb-5 text-3xl md:text-4xl font-medium text-brand-charcoal leading-tight">{heading}</h2>
        <p className="text-brand-muted leading-relaxed">{description}</p>
        <div className="mt-6 md:mt-8">
          {ctaUrl ? (
            <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              {ctaLabel} <ArrowRight size={15} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-muted border border-brand-border px-6 py-3">
              {ctaLabel}
            </span>
          )}
        </div>
      </div>

      {/* Two-image layout: large bg photo + small overlapping video */}
      <div className={`relative flex items-center min-h-[24rem] lg:h-screen lg:max-h-[60rem] ${flip ? "lg:order-1" : ""}`}>
        {/* Large background image */}
        <div className={`relative ${flip ? "mr-[10%]" : "ml-[10%]"} w-full h-full`}>
          <img
            src={bigImage}
            alt={logoAlt}
            className="w-full h-full min-h-[24rem] lg:h-screen lg:max-h-[60rem] object-cover"
          />
          {overlay && <div className="absolute inset-0 bg-black/40" />}
        </div>
        {/* Small overlapping video/image */}
        <div className={`absolute w-[45%] z-10 ${flip ? "right-0 pr-[5%] lg:pr-0" : "left-0 pl-[5%] lg:pl-0"}`}>
          {video ? (
            <video className="aspect-[2/3] w-full object-cover" autoPlay loop muted playsInline>
              <source src={video} type="video/mp4" />
            </video>
          ) : (
            <img src={logo} alt={logoAlt} className="aspect-[2/3] w-full object-contain bg-white p-6" />
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Brand data ───────────────────────────────────────────────────────────────

const brands: BrandSectionProps[] = [
  {
    id: "kiwi-artisan",
    logo: "/content/kiwiartisan_partner_logo.png",
    logoAlt: "Kiwi Artisan",
    heading: "Reinventing traditional staples for modern consumers.",
    description: "Kiwi Artisan offers a unique range of specialty food products across New Zealand and Australia. Focused on reinventing traditional staple goods to delight, entertain and serve customers better in modern times - products that feel both comforting and genuinely new.",
    ctaLabel: "Visit Kiwi Artisan Website",
    ctaUrl: "https://www.kiwiartisan.co.nz",
    video: "/content/kiwiartisan_video.mp4",
    bigImage: "/content/kiwiartisan_big.jpg",
    accent: "bg-[#F0EADA]",
  },
  {
    id: "petite-eats",
    logo: "/content/petiteeats_partner_logo.png",
    logoAlt: "Petite Eats",
    heading: "Trusted feeding essentials for modern families.",
    description: "A family-focused consumer brand delivering trusted feeding essentials, mealtime products, and family solutions for modern parents across New Zealand and Australia. Serving more than 20,000 customers through direct-to-consumer, ecommerce, wholesale, and grocery distribution channels.",
    ctaLabel: "Visit Petite Eats Website",
    ctaUrl: "https://www.petiteeats.co.nz",
    video: undefined,
    bigImage: "/content/petiteeats_big.webp",
    accent: "bg-[#F5F1EC]",
    flip: true,
  },
  {
    id: "crunch-time",
    logo: "/content/crunchtime_partner_logo.png",
    logoAlt: "Crunch Time",
    heading: "Premium snacking with unmistakable attitude.",
    description: "A bold new snack brand redefining everyday snacking with irresistible crunch, premium ingredients and unmistakable attitude. Inspired by Australian brittle bites with flavour profiles spanning nutty, toffee and caramel - no compromise on flavour, texture or quality.",
    ctaLabel: "Website Coming Soon",
    ctaUrl: null,
    video: "/content/crunchtime_video.mp4",
    bigImage: "/content/crunchtime_big.jpg",
    accent: "bg-[#FFFBEB]",
  },
  {
    id: "artisan-dc",
    logo: "/content/artisandc_partner_logo.png",
    logoAlt: "Artisan DC",
    heading: "The proprietary platform accelerating D2C brand growth.",
    description: "The ADC Platform gives consumer brands real-world reach through live events, mall sites and activations across Australia and New Zealand - putting products in front of thousands of engaged shoppers every week. Every activation generates first-party customer data, purchase behaviour insights and a validated customer base, turning each event into both a sales channel and a live market research engine.",
    ctaLabel: "Visit Artisan DC Website",
    ctaUrl: "https://artisan-dc-bfip.vercel.app/",
    video: "/content/artisandc_video.MOV",
    bigImage: "/content/artisandc_big.png",
    accent: "bg-white",
    flip: true,
    overlay: true,
  },
];

// ─── About ───────────────────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section id="mission" className="scroll-mt-20 bg-white py-section">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-serif text-display-md text-brand-charcoal leading-snug text-balance mb-10">
              "To build the brands that shape how Australia and New Zealand eat, live and consume - one exceptional product at a time."
            </blockquote>
            <p className="text-brand-muted leading-relaxed">
              Consumer markets across Australia and New Zealand are at an inflection point. Legacy brands are losing relevance, and the window for bold new entrants has never been wider. Artisan Brands exists to capitalise on that opportunity - with the discipline of an investment house and the instincts of a builder.
            </p>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
    formRef.current?.reset();
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-brand-off-white py-section">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="font-serif text-display-md text-brand-charcoal text-balance leading-tight mb-8">
              Let's talk about what we can build together.
            </h2>
            <div className="space-y-5 text-brand-muted leading-relaxed mb-12">
              <p>Whether you're a founder with an emerging consumer brand, an established brand seeking a strategic partner, or an investor looking for ANZ consumer exposure - we'd like to hear your story.</p>
              <p>Fill out the form and a member of our team will be in touch within two business days.</p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Founders", body: "Emerging consumer brands across food, beverage, lifestyle and family." },
                { label: "Investors", body: "Capital partners seeking ANZ consumer brand exposure." },
                { label: "Brand partners", body: "Established brands looking for a scaled growth platform." },
              ].map(({ label, body }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="divider mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-brand-charcoal mb-1">{label}</p>
                    <p className="text-sm text-brand-muted">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="border border-brand-green bg-brand-green/5 p-10 flex flex-col items-start gap-4">
                <div className="w-10 h-10 bg-brand-green flex items-center justify-center">
                  <Send size={16} className="text-brand-cream" />
                </div>
                <h3 className="font-serif text-2xl text-brand-charcoal">Message received.</h3>
                <p className="text-brand-muted text-sm">Thanks for reaching out. A member of our team will be in touch within two business days.</p>
                <button onClick={() => setSubmitted(false)} className="text-sm text-brand-green underline underline-offset-4 mt-2">Send another message</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium tracking-[0.12em] uppercase text-brand-charcoal mb-2">Full name <span className="text-brand-caramel">*</span></label>
                    <input id="name" name="name" type="text" required autoComplete="name"
                      className="w-full border border-brand-border bg-white px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-green transition-colors duration-200"
                      placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium tracking-[0.12em] uppercase text-brand-charcoal mb-2">Email <span className="text-brand-caramel">*</span></label>
                    <input id="email" name="email" type="email" required autoComplete="email"
                      className="w-full border border-brand-border bg-white px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-green transition-colors duration-200"
                      placeholder="jane@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-medium tracking-[0.12em] uppercase text-brand-charcoal mb-2">Company / Brand</label>
                  <input id="company" name="company" type="text" autoComplete="organization"
                    className="w-full border border-brand-border bg-white px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-green transition-colors duration-200"
                    placeholder="Your company or brand name" />
                </div>
                <div>
                  <label htmlFor="reason" className="block text-xs font-medium tracking-[0.12em] uppercase text-brand-charcoal mb-2">I'm reaching out as a</label>
                  <select id="reason" name="reason"
                    className="w-full border border-brand-border bg-white px-4 py-3 text-sm text-brand-charcoal focus:outline-none focus:border-brand-green transition-colors duration-200">
                    <option value="">Select one</option>
                    <option value="founder">Founder / brand owner</option>
                    <option value="investor">Investor</option>
                    <option value="partner">Brand or channel partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium tracking-[0.12em] uppercase text-brand-charcoal mb-2">Message <span className="text-brand-caramel">*</span></label>
                  <textarea id="message" name="message" required rows={5}
                    className="w-full border border-brand-border bg-white px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-green transition-colors duration-200 resize-none"
                    placeholder="Tell us about your brand, your goals, or what you're looking for..." />
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? "Sending..." : "Send message"}
                  {!loading && <Send size={15} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />

      {/* Our Brands */}
      <section id="portfolio" className="scroll-mt-20 bg-brand-cream pt-section pb-0">
        <div className="max-w-8xl mx-auto px-6 lg:px-10 mb-14 text-center">
          <h2 className="font-serif text-display-md text-brand-charcoal">Our Brands</h2>
        </div>
        {brands.map((brand) => (
          <BrandSection key={brand.id} {...brand} />
        ))}
      </section>

      <AboutSection />

      <ContactSection />
    </>
  );
}
