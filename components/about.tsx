export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-[#0a2342]">
      <div className="max-w-6xl mx-auto">
        {/* Swapped: Image Left | Content Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/parthi.png"
                alt="M. Parthiban - Owner"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2342] via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="mb-4 inline-block px-4 py-2 bg-[#d4af37]/20 rounded-full border border-[#d4af37]/40">
              <p className="text-[#d4af37] text-sm font-semibold tracking-widest">ABOUT US</p>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Mr. M. <span className="text-[#d4af37]">Parthiban</span>
            </h2>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              With over 15+ years of dedicated experience in the travel and tours industry, 
              Mr. M. Parthiban has built a reputation for excellence and reliability. 
              His commitment to customer satisfaction and safe travel practices has made 
              MMS Travels & Transport a trusted name in Kanchipuram.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <span className="text-[#0a2342] font-bold text-sm">✓</span>
                  </div>
                </div>
                <p className="text-gray-300 text-base">
                  <span className="font-semibold text-white">Safe & Smooth Driving:</span> 
                  Well known for professional and smooth driving skills that ensure 
                  passenger safety and comfort on every journey.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <span className="text-[#0a2342] font-bold text-sm">✓</span>
                  </div>
                </div>
                <p className="text-gray-300 text-base">
                  <span className="font-semibold text-white">Vehicle Excellence:</span> 
                  All vehicles are maintained in excellent condition to provide maximum 
                  comfort, cleanliness, and reliability.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <span className="text-[#0a2342] font-bold text-sm">✓</span>
                  </div>
                </div>
                <p className="text-gray-300 text-base">
                  <span className="font-semibold text-white">Customer Care:</span> 
                  Punctuality, friendly approach, and dedicated service are the 
                  hallmarks of our operations. Your satisfaction is our priority.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "500+", label: "Happy Customers" },
                { number: "15+", label: "Years Experience" },
                { number: "4", label: "Vehicle Types" },
                { number: "24/7", label: "Support" },
              ].map((stat, idx) => (
                <div key={idx} className="border-l-2 border-[#d4af37] pl-4">
                  <p className="text-3xl font-bold text-[#d4af37]">{stat.number}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
