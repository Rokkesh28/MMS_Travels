"use client"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/luxury-cars-transport-vehicles-premium.jpg')`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2342]/70 via-[#0a2342]/60 to-[#0a2342]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#d4af37]/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-[#d4af37]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-4xl">
          <div className="mb-4 inline-block px-4 py-2 bg-[#d4af37]/20 rounded-full border border-[#d4af37]/40">
            <p className="text-[#d4af37] text-sm font-semibold tracking-widest">PREMIUM TRAVEL SERVICE</p>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 leading-tight">
            MMS Travels <span className="gold-accent">&</span> Transport
          </h1>

          <p className="text-lg sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience Luxury Journey from Kanchipuram to Your Destination
          </p>

          <button
            onClick={scrollToBooking}
            className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-[#0a2342] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 smooth-transition transform hover:scale-105"
          >
            Book Now
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="text-[#d4af37]" size={32} />
        </div>
      </div>
    </section>
  )
}
