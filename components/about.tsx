export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-[#0a2342]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="mb-4 inline-block px-4 py-2 bg-[#d4af37]/20 rounded-full border border-[#d4af37]/40">
              <p className="text-[#d4af37] text-sm font-semibold tracking-widest">ABOUT US</p>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Your Trusted Travel <span className="text-[#d4af37]">Partner</span>
            </h2>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              MMS Travels & Transport has been serving the Kanchipuram community with premium travel and transport
              services for over a decade. We pride ourselves on reliability, comfort, and exceptional customer service.
            </p>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Our well-maintained fleet and professional drivers ensure that every journey is safe, comfortable, and
              memorable. We're committed to providing value and reliability to our customers.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "500+", label: "Happy Customers" },
                { number: "10+", label: "Years Experience" },
                { number: "5", label: "Vehicle Types" },
                { number: "24/7", label: "Support" },
              ].map((stat, idx) => (
                <div key={idx} className="border-l-2 border-[#d4af37] pl-4">
                  <p className="text-3xl font-bold text-[#d4af37]">{stat.number}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/professional-drivers-vehicle-service.jpg" alt="MMS Travels Service" className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2342] via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
