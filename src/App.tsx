import { useState, useEffect } from 'react';
import AnalogClock from './components/AnalogClock';
import ClockCard from './components/ClockCard';
import ChatInterface from './components/ChatInterface';

const clockRecommendations = [
  {
    name: "Braun BNC006 Classic",
    price: "$65",
    source: "Amazon",
    description: "Iconic Dieter Rams design. Silent sweep movement. Perfect desk companion.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop"
  },
  {
    name: "Newgate Chrysler",
    price: "$89",
    source: "Design Within Reach",
    description: "Art deco inspired. Polished chrome case. Statement wall piece.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400&h=400&fit=crop"
  },
  {
    name: "Junghans Max Bill",
    price: "$450",
    source: "MoMA Store",
    description: "Bauhaus masterpiece. Swiss quartz precision. Museum-quality design.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=400&h=400&fit=crop"
  },
  {
    name: "IKEA Pugg",
    price: "$15",
    source: "IKEA",
    description: "Budget-friendly classic. Clean white dial. Perfect starter clock.",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    name: "Howard Miller Gallery",
    price: "$180",
    source: "Wayfair",
    description: "Large 25-inch diameter. Wrought iron frame. Farmhouse elegance.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=400&h=400&fit=crop"
  },
  {
    name: "Citizen CC2034",
    price: "$120",
    source: "Best Buy",
    description: "Atomic precision. Auto-sync technology. Wood grain finish.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1415604934674-561df9abf539?w=400&h=400&fit=crop"
  }
];

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F2EB] relative overflow-x-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full border border-[#C45D35]/10" />
        <div className="absolute top-[-15%] right-[-5%] w-[50vw] h-[50vw] rounded-full border border-[#C45D35]/5" />
        <div className="absolute bottom-[-30%] left-[-20%] w-[80vw] h-[80vw] rounded-full border border-[#1A1A1A]/5" />
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 md:px-8 lg:px-16 py-6 md:py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center">
              <div className="w-1 h-3 md:h-4 bg-[#C45D35] origin-bottom" style={{ transform: 'rotate(30deg)' }} />
            </div>
            <span className="font-display text-lg md:text-xl tracking-tight text-[#1A1A1A]">CHRONOS</span>
          </div>
          <button
            onClick={() => setShowChat(!showChat)}
            className="px-4 md:px-6 py-2 md:py-3 bg-[#1A1A1A] text-[#F5F2EB] font-body text-xs md:text-sm tracking-widest uppercase hover:bg-[#C45D35] transition-colors duration-300"
          >
            {showChat ? 'Close' : 'Ask AI'}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-4 md:px-8 lg:px-16 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="font-body text-xs md:text-sm tracking-[0.3em] text-[#C45D35] uppercase mb-3 md:mb-4">The Case for Analog</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl leading-[0.9] text-[#1A1A1A] mb-4 md:mb-6">
              Time<br />
              <span className="italic">Deserves</span><br />
              Precision
            </h1>
            <p className="font-body text-base md:text-lg text-[#1A1A1A]/70 max-w-md leading-relaxed mb-6 md:mb-8">
              In an age of digital distraction, analog clocks offer something profound:
              a tangible connection to the passage of time. No batteries dying mid-meeting.
              No screens to crack. Just elegant mechanics serving you for decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href="#recommendations" className="inline-block px-6 md:px-8 py-3 md:py-4 border-2 border-[#1A1A1A] text-[#1A1A1A] font-body text-xs md:text-sm tracking-widest uppercase hover:bg-[#1A1A1A] hover:text-[#F5F2EB] transition-all duration-300 text-center">
                View Recommendations
              </a>
              <button
                onClick={() => setShowChat(true)}
                className="px-6 md:px-8 py-3 md:py-4 bg-[#C45D35] text-[#F5F2EB] font-body text-xs md:text-sm tracking-widest uppercase hover:bg-[#B8860B] transition-colors duration-300"
              >
                Get Advice
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <AnalogClock time={currentTime} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-4 md:px-8 lg:px-16 py-12 md:py-20 border-y border-[#1A1A1A]/10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl lg:text-6xl text-[#C45D35]">97%</p>
            <p className="font-body text-xs md:text-sm tracking-widest uppercase text-[#1A1A1A]/60 mt-2">More Reliable</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl lg:text-6xl text-[#C45D35]">50+</p>
            <p className="font-body text-xs md:text-sm tracking-widest uppercase text-[#1A1A1A]/60 mt-2">Year Lifespan</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl lg:text-6xl text-[#C45D35]">0</p>
            <p className="font-body text-xs md:text-sm tracking-widest uppercase text-[#1A1A1A]/60 mt-2">Software Updates</p>
          </div>
        </div>
      </section>

      {/* Why Analog Section */}
      <section className="relative z-10 px-4 md:px-8 lg:px-16 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-8 md:mb-12 text-center">
            Why <span className="italic text-[#C45D35]">Analog</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: "Cognitive Clarity", desc: "Reading analog develops spatial reasoning. Your brain processes time as a visual arc, not abstract numbers." },
              { title: "Zero Distractions", desc: "No notifications. No updates. No temptation to check your phone. Just time, beautifully displayed." },
              { title: "Aesthetic Permanence", desc: "A well-made clock becomes an heirloom. Digital devices become e-waste within years." },
              { title: "Power Independent", desc: "A mechanical clock runs for decades without electricity. Try that with your smartwatch." }
            ].map((item, i) => (
              <div key={i} className="p-5 md:p-6 border border-[#1A1A1A]/10 hover:border-[#C45D35]/50 transition-colors duration-300 group">
                <div className="w-8 md:w-10 h-8 md:h-10 rounded-full border border-[#C45D35] flex items-center justify-center mb-3 md:mb-4 group-hover:bg-[#C45D35] transition-colors duration-300">
                  <span className="font-display text-sm md:text-base text-[#C45D35] group-hover:text-[#F5F2EB] transition-colors duration-300">{i + 1}</span>
                </div>
                <h3 className="font-display text-lg md:text-xl text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="font-body text-sm md:text-base text-[#1A1A1A]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section id="recommendations" className="relative z-10 px-4 md:px-8 lg:px-16 py-12 md:py-20 bg-[#1A1A1A]">
        <div className="mb-8 md:mb-12">
          <p className="font-body text-xs md:text-sm tracking-[0.3em] text-[#C45D35] uppercase mb-3 md:mb-4">Curated Selection</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#F5F2EB]">
            Top Analog Clocks
          </h2>
          <p className="font-body text-sm md:text-base text-[#F5F2EB]/60 mt-3 md:mt-4 max-w-xl">
            Hand-picked recommendations from trusted retailers. Every price point, every style.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {clockRecommendations.map((clock, i) => (
            <ClockCard key={i} {...clock} index={i} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 md:px-8 lg:px-16 py-16 md:py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-4 md:mb-6">
            Make the <span className="italic text-[#C45D35]">Switch</span>
          </h2>
          <p className="font-body text-base md:text-lg text-[#1A1A1A]/70 mb-6 md:mb-8">
            Your relationship with time matters. Choose a clock that respects it.
          </p>
          <button
            onClick={() => setShowChat(true)}
            className="px-8 md:px-12 py-4 md:py-5 bg-[#C45D35] text-[#F5F2EB] font-body text-xs md:text-sm tracking-widest uppercase hover:bg-[#1A1A1A] transition-colors duration-300"
          >
            Get Personalized Advice
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 md:px-8 lg:px-16 py-6 md:py-8 border-t border-[#1A1A1A]/10">
        <div className="text-center">
          <p className="font-body text-xs text-[#1A1A1A]/40">
            Requested by @stringer_kade · Built by @clonkbot
          </p>
        </div>
      </footer>

      {/* Chat Interface */}
      {showChat && <ChatInterface onClose={() => setShowChat(false)} />}
    </div>
  );
}

export default App;
