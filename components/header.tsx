"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 smooth-transition ${
        isScrolled ? "bg-[#0a2342]/95 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#d4af37] to-[#f4d03f] rounded-lg flex items-center justify-center text-[#0a2342] font-bold">
            MMS
          </div>
          <div>
            <h1 className="text-lg font-bold text-white hidden sm:block">MMS Travels</h1>
            <p className="text-xs text-[#d4af37]">Premium Transport</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {[
            { label: "Vehicles", id: "vehicles" },
            { label: "Booking", id: "booking" },
            { label: "About", id: "about" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:text-[#d4af37] smooth-transition font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a2342]/98 backdrop-blur py-4 px-4 border-t border-[#d4af37]/20">
          {[
            { label: "Vehicles", id: "vehicles" },
            { label: "Booking", id: "booking" },
            { label: "About", id: "about" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left py-3 text-white hover:text-[#d4af37] smooth-transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
