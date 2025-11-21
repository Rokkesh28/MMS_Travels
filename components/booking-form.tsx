"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Calendar, MapPin, MessageCircle } from "lucide-react"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    dropoff: "",
    date: "",
    vehicle: "Swift Car",
  })

  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Hello MMS Travels! I'd like to book a ${formData.vehicle}.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPickup: ${formData.pickup}\nDrop-off: ${formData.dropoff}\nDate: ${formData.date}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/919786449102?text=${encodedMessage}`, "_blank")

    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="booking" ref={formRef} className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-4 inline-block px-4 py-2 bg-[#d4af37]/20 rounded-full border border-[#d4af37]/40">
            <p className="text-[#0a2342] text-sm font-semibold tracking-widest">EASY BOOKING</p>
          </div>
          <h2 className="text-4xl font-bold text-[#0a2342] mb-4">Book Your Journey</h2>
          <p className="text-gray-600 text-lg">Reserve your vehicle in just a few minutes</p>
        </div>

        <div className="bg-white rounded-2xl border-2 border-[#d4af37]/30 shadow-xl p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="mb-4 text-6xl">✓</div>
              <h3 className="text-2xl font-bold text-[#0a2342] mb-2">Booking Details Sent!</h3>
              <p className="text-gray-600 mb-6">
                Your booking details have been sent to WhatsApp. We'll contact you shortly to confirm.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="tel:+919786449102"
                  className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg smooth-transition"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919786449102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg smooth-transition"
                >
                  <MessageCircle size={20} />
                  Contact via WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-[#0a2342] mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#d4af37] focus:outline-none smooth-transition"
                  placeholder="Your Name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-[#0a2342] mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#d4af37] focus:outline-none smooth-transition"
                  placeholder="Your Phone number"
                />
              </div>

              {/* Pickup Location */}
              <div>
                <label className="block text-sm font-semibold text-[#0a2342] mb-2">
                  <MapPin className="inline mr-2" size={16} />
                  Pickup Location
                </label>
                <input
                  type="text"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#d4af37] focus:outline-none smooth-transition"
                  placeholder="Enter pickup location"
                />
              </div>

              {/* Dropoff Location */}
              <div>
                <label className="block text-sm font-semibold text-[#0a2342] mb-2">
                  <MapPin className="inline mr-2" size={16} />
                  Drop-off Location
                </label>
                <input
                  type="text"
                  name="dropoff"
                  value={formData.dropoff}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#d4af37] focus:outline-none smooth-transition"
                  placeholder="Enter drop-off location"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-[#0a2342] mb-2">
                  <Calendar className="inline mr-2" size={16} />
                  Travel Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#d4af37] focus:outline-none smooth-transition"
                />
              </div>

              {/* Vehicle Type */}
              <div>
                <label className="block text-sm font-semibold text-[#0a2342] mb-2">Select Vehicle</label>
                <select
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#d4af37] focus:outline-none smooth-transition"
                >
                  <option value="Swift Car">Swift Car (5 Seater)</option>
                  <option value="Tata Dost Cargo">Tata Dost Cargo</option>
                  <option value="Marcopolo Van">Marcopolo Van (17 Seater)</option>
                  <option value="Tata ACE">Tata ACE (Mini Truck)</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0a2342] to-[#1a3a52] text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#d4af37]/50 smooth-transition"
              >
                Send Booking via WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
