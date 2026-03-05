'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-sec.jpeg"
          alt="THE LUING VILLAGE Background"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay - darker for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-block animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/40 bg-black/30 text-white text-xs sm:text-sm font-medium backdrop-blur-sm shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Lower Luing, Gangtok
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up delay-100">
            <h1 className="text-balance">
              <span className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
                <span className="h-0.5 w-12 sm:w-20 bg-gradient-to-r from-transparent via-white/60 to-white/90 rounded-full shrink-0" />
                <span className="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                  THE LUING VILLAGE
                </span>
                <span className="h-0.5 w-12 sm:w-20 bg-gradient-to-l from-transparent via-white/60 to-white/90 rounded-full shrink-0" />
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 font-light text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                Homestay & Glamping
              </span>
              <span className="block w-24 h-0.5 mx-auto mt-3 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-white italic font-serif drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              — A home away from home —
            </p>
            <p className="text-balance text-base sm:text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
              A peaceful retreat nestled in the sunny slopes of Lower Luing, where time slows down and nature breathes life into every moment.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8 animate-fade-in-up delay-200">
            <Link href="/booking">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl gap-2 w-full sm:w-auto text-lg h-12 px-8">
                Book Your Stay <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="#our-story">
              <Button size="lg" variant="outline" className="border-2 border-white bg-white/20 hover:bg-white/35 text-white font-semibold w-full sm:w-auto text-lg h-12 px-8 backdrop-blur-sm shadow-[0_2px_12px_rgba(0,0,0,0.4)] [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                Our Story
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-8 pt-8 sm:pt-12 md:pt-16 border-t border-white/30 max-w-4xl mx-auto animate-fade-in-up delay-300">
            <div className="space-y-1">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">Plastic-Free</p>
              <p className="text-xs sm:text-sm text-white/85 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">Environment</p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">Organic</p>
              <p className="text-xs sm:text-sm text-white/85 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">Sikkimese Cuisine</p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">Village Life</p>
              <p className="text-xs sm:text-sm text-white/85 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">Authentic Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
