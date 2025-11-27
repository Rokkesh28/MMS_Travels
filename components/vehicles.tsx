"use client"

import { useState } from "react"
import { Users } from "lucide-react"

const vehiclesData = [
  {
    id: 1,
    name: "Marcopolo Van",
    capacity: 17,
    type: "Passenger Van",
    description: "Premium  coach for group travel with maximum comfort and spacious seating.",
    image: "/images/van1.png",
  },
  {
    id: 2,
    name: "Swift Car",
    capacity: 5,
    type: "Car",
    description: "Perfect for small groups and short trips. Fuel-efficient and comfortable with air conditioning.",
    image: "/images/swift.png",
  },
  {
    id: 3,
    name: "Tata ACE",
    capacity: "2+Load",
    type: "Mini Truck",
    description: "Ideal for cargo transport and goods delivery with reliable performance.",
    image: "/images/tata-ace.png",
  },
  {
    id: 4,
    name: "Ashok Leyland Dost ",
    capacity: "2+Load",
    type: "Cargo Van",
    description: "Heavy-duty cargo vehicle perfect for commercial shipments and goods transport.",
    image: "/images/dost.png",
  },
]

export default function Vehicles() {
  const [selectedVehicle, setSelectedVehicle] = useState<number | null>(null)

  const handleBooking = (vehicleName: string) => {
    const bookingForm = document.getElementById("booking")
    bookingForm?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="vehicles" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-4 inline-block px-4 py-2 bg-[#d4af37]/20 rounded-full border border-[#d4af37]/40">
            <p className="text-[#0a2342] text-sm font-semibold tracking-widest">OUR FLEET</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0a2342] mb-4">Premium Vehicles</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from our diverse fleet of well-maintained, comfortable vehicles for all your travel needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {vehiclesData.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-[#d4af37] smooth-transition hover:shadow-2xl cursor-pointer"
              onMouseEnter={() => setSelectedVehicle(vehicle.id)}
              onMouseLeave={() => setSelectedVehicle(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2342]/80 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-[#d4af37] text-[#0a2342] px-3 py-1 rounded-full text-sm font-semibold">
                  {vehicle.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0a2342] mb-2">{vehicle.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{vehicle.description}</p>

                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-[#0a2342]">
                    <Users size={20} />
                    <span className="font-semibold">
                      {vehicle.capacity} {typeof vehicle.capacity === "string" ? "" : "Seater"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleBooking(vehicle.name)}
                  className="w-full bg-gradient-to-r from-[#0a2342] to-[#1a3a52] text-white py-3 rounded-lg font-bold hover:shadow-lg smooth-transition group-hover:from-[#d4af37] group-hover:to-[#f4d03f] group-hover:text-[#0a2342]"
                >
                  Book This Vehicle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
