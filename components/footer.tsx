'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background border-t border-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo2.png"
                alt="THE LUING VILLAGE - Homestay & Glamping"
                width={64}
                height={64}
                className="rounded-full object-contain flex-shrink-0"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-px w-5 bg-gradient-to-r from-transparent to-primary rounded-full" />
                  <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text font-bold text-lg leading-tight text-transparent">
                    THE LUING VILLAGE
                  </span>
                  <span className="h-px w-5 bg-gradient-to-l from-transparent to-primary rounded-full" />
                </div>
                <span className="block text-xs uppercase tracking-wider text-background/70 mt-0.5">Homestay & Glamping</span>
                <span className="block text-xs italic text-primary font-serif mt-0.5">A home away from home</span>
              </div>
            </Link>
            <p className="text-background/80">Experience authentic Sikkimese village life in our ancestral home on the peaceful slopes of Lower Luing, where generations of heritage meet warm hospitality.</p>
            <div className="flex gap-3">
              {[Facebook, Instagram].map((Icon, idx) => (
                <button key={idx} className="w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-lg flex items-center justify-center text-background transition-colors">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Accommodations', href: '#accommodations' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-background/80 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact Info</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-primary flex-shrink-0" />
                <span>Lower Luing, Gangtok, Sikkim</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-background transition-colors">+91 9876 543 210</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:info@luingvillage.com" className="hover:text-background transition-colors">info@luingvillage.com</a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Newsletter</h3>
            <p className="text-background/80">Subscribe to get special offers and mountain tips.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-primary/20 text-foreground placeholder:text-background/60 border border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/30" />

        {/* Bottom */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-background/80 text-sm">
          <p>&copy; {currentYear} THE LUING VILLAGE. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made with <span className="text-red-400">♥</span> by <a href="https://waglogy.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors font-semibold">Waglogy</a>
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-background transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
