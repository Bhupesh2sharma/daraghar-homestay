'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import type { CarouselApi } from '@/components/ui/carousel'
import { Tent, Home, Wind } from 'lucide-react'

const AUTOPLAY_INTERVAL_MS = 4000

function AccommodationCardCarousel({ images, title }: { images: string[]; title: string }) {
  const [api, setApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    if (!api) return
    const interval = setInterval(() => {
      api.scrollNext()
    }, AUTOPLAY_INTERVAL_MS)
    return () => clearInterval(interval)
  }, [api])

  return (
    <Carousel opts={{ loop: true }} className="w-full h-full" setApi={setApi}>
      <CarouselContent className="h-full -ml-0">
        {images.map((imgSrc, idx) => (
          <CarouselItem key={idx} className="h-full pl-0">
            <div className="relative h-48 sm:h-56 md:h-64 w-full">
              <Image
                src={encodeURI(imgSrc)}
                alt={`${title} - ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 size-8 bg-black/50 hover:bg-black/70 border-0 text-white" />
      <CarouselNext className="right-2 size-8 bg-black/50 hover:bg-black/70 border-0 text-white" />
    </Carousel>
  )
}

const GLAMPING_CAROUSEL_IMAGES = [
  '/images/WhatsApp Image 2026-03-05 at 14.31.55 (1).jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.58 (1).jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.59 (1).jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.59.jpeg',
]

const WELLNESS_PODS_CAROUSEL_IMAGES = [
  '/images/WhatsApp Image 2026-03-05 at 14.31.47 (2).jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.49.jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.54.jpeg',
]

export default function Accommodations() {
  const accommodations = [
    {
      id: 1,
      title: 'Luxury Glamping Tents',
      description: 'Premium safari-style tents with all modern amenities',
      icon: Tent,
      features: ['En-suite bathrooms', 'Heated beds', 'Mountain views', '24/7 service'],
      price: '₹2,000 / person',
      priceNote: 'With dinner & breakfast',
      link: '/accommodations/glamping',
      carouselImages: GLAMPING_CAROUSEL_IMAGES,
    },
    {
      id: 2,
      title: 'Authentic Homestays',
      description: 'Experience local culture with warm family hospitality',
      icon: Home,
      features: ['Organic meals', 'Local guides', 'Cultural immersion', 'Family rooms'],
      price: '₹1,500 / person',
      priceNote: 'With dinner & breakfast',
      link: '/accommodations/homestay',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Tents & Mountain Wellness Pods',
      description: 'Modern eco-friendly pods and tents with panoramic views',
      icon: Wind,
      features: ['Sustainable design', 'Nature sounds', 'Meditation space', 'Sky windows'],
      price: '₹1,500 / person',
      priceNote: 'With dinner & breakfast',
      link: '/accommodations/pods',
      carouselImages: WELLNESS_PODS_CAROUSEL_IMAGES,
    },
  ]

  return (
    <section id="accommodations" className="py-8 sm:py-12 md:py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 sm:space-y-3 mb-6 sm:mb-8 md:mb-12">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest">Accommodations</span>
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Choose Your Mountain Escape
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            From luxury glamping to authentic cultural experiences, find your perfect stay.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {accommodations.map((acc) => {
            const Icon = acc.icon
            const hasCarousel = 'carouselImages' in acc && acc.carouselImages?.length
            return (
              <Card key={acc.id} className="group border-primary/20 hover:border-primary/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl flex flex-col">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-muted">
                  {hasCarousel ? (
                    <AccommodationCardCarousel
                      images={acc.carouselImages!}
                      title={acc.title}
                    />
                  ) : (
                    <Image
                      src={acc.image!}
                      alt={acc.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 text-white flex items-center gap-2 pointer-events-none">
                    <div className="p-2 bg-primary/20 backdrop-blur-sm rounded-lg">
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader className="space-y-2 p-4 sm:p-6 pb-2">
                  <CardTitle className="text-base sm:text-lg md:text-xl">{acc.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm line-clamp-2">{acc.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 p-4 sm:p-6 pt-0 flex-1 flex flex-col justify-between">
                  <div className="grid grid-cols-2 gap-2">
                    {acc.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                    <div className="flex flex-col">
                      <span className="text-lg sm:text-xl font-bold text-primary">{acc.price}</span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                        {'priceNote' in acc && acc.priceNote ? acc.priceNote : 'Includes Meals'}
                      </span>
                    </div>
                    <Link href={acc.link}>
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs sm:text-sm">
                        Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center pt-6 sm:pt-8 md:pt-12">
          <Link href="/accommodations">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              View All Accommodations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
