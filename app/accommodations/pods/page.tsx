'use client'

import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Check, Wind, Utensils, Leaf, Sparkles } from 'lucide-react'

const PODS_IMAGES = [
  '/images/WhatsApp Image 2026-03-05 at 14.31.47 (2).jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.49.jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.54.jpeg',
]

export default function PodsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold">Tents & Mountain Wellness Pods</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Modern eco-friendly pods and tents with panoramic views — where comfort meets nature
            </p>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-primary">₹1,500 / person</p>
              <p className="text-sm text-muted-foreground">With dinner & breakfast</p>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative h-96 sm:h-[28rem] md:h-[32rem] rounded-2xl overflow-hidden shadow-2xl mb-12">
            <Image
              src={encodeURI(PODS_IMAGES[0])}
              alt="Tents & Mountain Wellness Pods at THE LUING VILLAGE"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          {/* Description */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">About Our Tents & Wellness Pods</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At THE LUING VILLAGE, our tents and mountain wellness pods offer a unique blend of sustainable design and comfort. Whether you choose a cozy tent nestled in the greenery or a modern pod with sky windows, you&apos;ll wake up to birdsong, fresh mountain air, and stunning views. Each space is designed for rest, reflection, and reconnection with nature.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Sustainable, eco-friendly design',
                    'Nature sounds & peaceful setting',
                    'Meditation space & sky windows',
                    'Panoramic mountain views',
                    'Comfortable bedding & heating',
                    'Private deck or sit-out',
                    'Organic meals (dinner & breakfast)',
                    'Plastic-free environment',
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check size={20} className="text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div>
              <Card className="border-primary/30 shadow-xl sticky top-24">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-4">What&apos;s Included</h3>
                    <div className="space-y-3">
                      {[
                        { icon: Utensils, text: 'Dinner & breakfast' },
                        { icon: Leaf, text: 'Eco-friendly amenities' },
                        { icon: Wind, text: 'Mountain views' },
                        { icon: Sparkles, text: 'Wellness-focused stay' },
                      ].map((item, idx) => {
                        const Icon = item.icon
                        return (
                          <div key={idx} className="flex items-center gap-3">
                            <Icon size={18} className="text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item.text}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <Link href="/booking" className="block w-full">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold">
                      Book Your Stay
                    </Button>
                  </Link>

                  <Link href="/contact" className="block">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                      Request Information
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Gallery</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {PODS_IMAGES.map((src, idx) => (
                <div key={idx} className="relative h-56 md:h-64 rounded-lg overflow-hidden group">
                  <Image
                    src={encodeURI(src)}
                    alt={`Tents & Wellness Pods - ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">In Your Pod / Tent</h3>
              <ul className="space-y-3">
                {[
                  'Comfortable mattress & bedding',
                  'Sky windows or mesh for stargazing',
                  'Reading light & charging point',
                  'Natural ventilation',
                  'Eco toiletries',
                  'Tea/coffee on request',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Around THE LUING VILLAGE</h3>
              <ul className="space-y-3">
                {[
                  'Meditation & quiet zones',
                  'Organic garden & farm',
                  'Bonfire & lounge area',
                  'Walking trails',
                  'Local guide on request',
                  'Plastic-free policy',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
            <p className="text-muted-foreground mb-6">
              Experience tents and wellness pods at THE LUING VILLAGE. With dinner and breakfast included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Book Now
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Back Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
