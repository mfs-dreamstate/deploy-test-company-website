'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="nav-minimal">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-xl font-semibold text-black">
            Deploy Test Company
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-black transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <div className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-4 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-black transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-black transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-black transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-black transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}