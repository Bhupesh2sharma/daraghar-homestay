'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Gallery() {
  const images = [
    { title: 'Mountain Views', span: 'col-span-2 row-span-2', image: '/images/img-hero.jpeg' },
    { title: 'Glamping Setup', image: '/images/WhatsApp Image 2026-03-05 at 14.31.55 (1).jpeg' },
    { title: 'Bonfire Gathering', image: '/images/WhatsApp Image 2026-03-05 at 14.31.58 (1).jpeg' },
    { title: 'Village Life', span: 'col-span-2', image: '/images/WhatsApp Image 2026-03-05 at 14.31.59.jpeg' },
    { title: 'Organic Meals', image: '/images/WhatsApp Image 2026-03-05 at 14.31.47 (2).jpeg' },
    { title: 'Forest Trails', image: '/images/WhatsApp Image 2026-03-05 at 14.31.54.jpeg' },
    { title: 'Tea Gardens', span: 'row-span-2', image: '/images/WhatsApp Image 2026-03-05 at 14.31.49.jpeg' },
    { title: 'Prayer Flags', image: '/images/WhatsApp Image 2026-03-05 at 14.31.48.jpeg' },
    { title: 'Rhododendron Blooms', image: '/images/WhatsApp Image 2026-03-05 at 14.31.52.jpeg' },
    { title: 'Local Cuisine', image: '/images/WhatsApp Image 2026-03-05 at 14.31.57 (1).jpeg' },
    { title: 'Meditation Space', span: 'col-span-2', image: '/images/WhatsApp Image 2026-03-05 at 14.32.00.jpeg' },
    { title: 'Monastery Views', image: '/images/WhatsApp Image 2026-03-05 at 14.37.34.jpeg' },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/img-hero.jpeg"
          alt=""
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 sm:space-y-3 mb-6 sm:mb-8 md:mb-12">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase">Gallery</span>
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Visual Journey
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Step into THE LUING VILLAGE through stunning photography.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 md:mb-12 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[240px]">
          {images.map((item, idx) => (
            <div key={idx} className={`relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-0 ${item.span || ''}`}>
              <Image
                src={encodeURI(item.image)}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm sm:text-base drop-shadow-lg">{item.title}</p>
                <div className="w-12 h-0.5 bg-primary mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg gap-2">
              View Full Gallery <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
