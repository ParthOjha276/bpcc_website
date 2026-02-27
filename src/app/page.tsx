import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center bg-bpcc-navy overflow-hidden">

        {/* Abstract Background Element (The "Gold Glow") */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bpcc-gold/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Tagline */}
          <p className="text-bpcc-gold font-sans font-semibold tracking-[0.2em] text-sm uppercase mb-6 animate-fade-in">
            BITS Pilani Consulting Club
          </p>

          {/* Main Headline (Serif Power) */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8">
            Strategize. <br />
            <span className="italic text-gray-400">Solve.</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bpcc-gold to-yellow-500">
              Succeed.
            </span>
          </h1>

          {/* Subtext */}
          <p className="font-sans text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Bridging the gap between academic excellence and strategic impact.
            We solve complex problems for the world's leading organizations.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-bpcc-navy px-8 py-4 font-semibold rounded-sm hover:bg-gray-100 transition-all min-w-[180px]">
              View Our Work
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 font-semibold rounded-sm hover:border-bpcc-gold hover:text-bpcc-gold transition-all min-w-[180px]">
              Contact Us
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-50"></div>
        </div>
      </section>

      {/* IMPACT STATS SECTION (Preview) */}
      <section className="py-24 bg-bpcc-cream">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Consulting Alumni", value: "1000+" },
            { label: "Unicorn Founders", value: "15+" },
            { label: "Years of Legacy", value: "60+" },
            { label: "Alumni Network", value: "150k+" },
          ].map((stat, i) => (
            <div key={i} className="group cursor-default">
              <h3 className="font-serif text-5xl font-bold text-bpcc-navy mb-2 group-hover:text-bpcc-gold transition-colors duration-300">
                {stat.value}
              </h3>
              <p className="font-sans text-xs font-bold text-bpcc-grey uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}