'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { X } from 'lucide-react'

const GALLERY_IMAGES = [
  '/images/img-hero.jpeg',
  '/images/hero-sec.jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.47.jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.47 (1).jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.47 (2).jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.48.jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.48 (1).jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.49.jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.51.jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.51 (1).jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.52.jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.54.jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.55.jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.55 (1).jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.57.jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.57 (1).jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.58.jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.58 (1).jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.59.jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.59 (1).jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.31.59 (2).jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.32.00.jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.32.00 (2).jpeg',
  '/images/WhatsApp Image 2026-03-05 at 14.37.34.jpeg',
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [selectedImage])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold">Gallery</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore the beauty of THE LUING VILLAGE through our photography collection
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {GALLERY_IMAGES.map((src, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImage(src)}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all aspect-[4/3] min-h-0 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Image
                  src={encodeURI(src)}
                  alt={`THE LUING VILLAGE - Photo ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </button>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
              onClick={() => setSelectedImage(null)}
              role="dialog"
              aria-modal="true"
              aria-label="View full size image"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <div
                className="relative w-full max-w-5xl h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={encodeURI(selectedImage)}
                  alt="THE LUING VILLAGE - Full size"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
            </div>
          )}

          <div className="text-center pt-12">
            <Link href="/">
              <Button size="lg" variant="outline" className="border-primary text-primary">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
