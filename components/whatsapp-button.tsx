"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsApp = () => {
    const message = "Hi, I'd like to book a vehicle with MMS Travels & Transport."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/919786449102?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat bubble */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-2xl p-4 max-w-xs animate-in fade-in slide-in-from-bottom-4">
          <p className="text-sm text-[#0a2342] font-semibold mb-3">Hi! 👋 Need help booking?</p>
          <p className="text-xs text-gray-600 mb-4">
            Chat with us on WhatsApp. Available 24/7 for your transport needs!
          </p>
          <button
            onClick={handleWhatsApp}
            className="w-full bg-green-500 text-white py-2 rounded-lg text-sm font-bold hover:bg-green-600 smooth-transition"
          >
            Chat on WhatsApp
          </button>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-br from-green-400 to-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 hover:scale-110 smooth-transition"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  )
}
