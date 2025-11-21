import { Phone, MapPin, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0a1a2e] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#d4af37] to-[#f4d03f] rounded-lg flex items-center justify-center text-[#0a2342] font-bold">
                MMS
              </div>
              <h3 className="text-xl font-bold">MMS Travels</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Premium travel and transport services based in Kanchipuram, Tamil Nadu. Owner: M. Parthiban
            </p>
            <p className="text-gray-400 text-sm">
              With experienced drivers and well-maintained vehicles, we ensure every journey is safe, comfortable, and
              reliable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#d4af37]">Quick Links</h4>
            <ul className="space-y-2">
              {["Our Vehicles", "Book Now", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-[#d4af37] smooth-transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#d4af37]">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="tel:+919786449102"
                className="flex items-center gap-3 text-gray-400 hover:text-[#d4af37] smooth-transition"
              >
                <Phone size={20} />
                <span>+91 9786449102</span>
              </a>
              <a
                href="tel:+919787939102"
                className="flex items-center gap-3 text-gray-400 hover:text-[#d4af37] smooth-transition"
              >
                <Phone size={20} />
                <span>+91 9787939102</span>
              </a>
              <a
                href="https://wa.me/919786449102"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#d4af37] smooth-transition"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Chat</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 pt-2">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">13C/36, Vellaikulam Street</p>
                  <p className="text-sm">Kanchipuram, Tamil Nadu - 631502</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 MMS Travels & Transport. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Developed by Rokkesh.Ramakrishnan <span className="text-[#d4af37]">❤</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
