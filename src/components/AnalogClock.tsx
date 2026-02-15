interface AnalogClockProps {
  time: Date;
}

export default function AnalogClock({ time }: AnalogClockProps) {
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondsDeg = seconds * 6;
  const minutesDeg = minutes * 6 + seconds * 0.1;
  const hoursDeg = hours * 30 + minutes * 0.5;

  return (
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
      {/* Outer decorative ring */}
      <div className="absolute inset-0 rounded-full border-2 border-[#1A1A1A]/20 animate-pulse" style={{ animationDuration: '4s' }} />

      {/* Main clock face */}
      <div className="absolute inset-3 sm:inset-4 rounded-full bg-[#FDFCFA] shadow-2xl border border-[#1A1A1A]/10">
        {/* Inner shadow */}
        <div className="absolute inset-2 rounded-full" style={{
          boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.1)'
        }} />

        {/* Hour markers */}
        {[...Array(12)].map((_, i) => {
          const angle = i * 30;
          const isMain = i % 3 === 0;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 origin-center"
              style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
            >
              <div
                className={`absolute left-1/2 -translate-x-1/2 ${isMain ? 'w-1 h-4 md:h-5 bg-[#1A1A1A]' : 'w-0.5 h-2 md:h-3 bg-[#1A1A1A]/40'}`}
                style={{ top: '10%' }}
              />
            </div>
          );
        })}

        {/* Hour numbers for main positions */}
        {[12, 3, 6, 9].map((num, i) => {
          const positions = [
            { top: '12%', left: '50%', transform: 'translateX(-50%)' },
            { top: '50%', right: '10%', transform: 'translateY(-50%)' },
            { bottom: '10%', left: '50%', transform: 'translateX(-50%)' },
            { top: '50%', left: '10%', transform: 'translateY(-50%)' }
          ];
          return (
            <span
              key={num}
              className="absolute font-display text-sm md:text-base text-[#1A1A1A]/80"
              style={positions[i]}
            >
              {num}
            </span>
          );
        })}

        {/* Brand mark */}
        <div className="absolute top-[32%] left-1/2 -translate-x-1/2 text-center">
          <span className="font-display text-[8px] md:text-[10px] tracking-widest text-[#C45D35]">CHRONOS</span>
        </div>

        {/* Hour hand */}
        <div
          className="absolute left-1/2 top-1/2 w-1.5 md:w-2 bg-[#1A1A1A] rounded-full origin-bottom transition-transform"
          style={{
            height: '22%',
            transform: `translateX(-50%) translateY(-100%) rotate(${hoursDeg}deg)`,
            boxShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}
        />

        {/* Minute hand */}
        <div
          className="absolute left-1/2 top-1/2 w-1 md:w-1.5 bg-[#1A1A1A] rounded-full origin-bottom transition-transform"
          style={{
            height: '32%',
            transform: `translateX(-50%) translateY(-100%) rotate(${minutesDeg}deg)`,
            boxShadow: '1px 1px 3px rgba(0,0,0,0.2)'
          }}
        />

        {/* Second hand */}
        <div
          className="absolute left-1/2 top-1/2 origin-bottom"
          style={{
            transform: `translateX(-50%) translateY(-100%) rotate(${secondsDeg}deg)`,
            transition: 'transform 0.1s cubic-bezier(0.4, 2.08, 0.55, 0.44)'
          }}
        >
          <div className="w-0.5 bg-[#C45D35] rounded-full" style={{ height: '36%', minHeight: '80px' }} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0.5 h-4 md:h-6 bg-[#C45D35] rounded-full" />
        </div>

        {/* Center cap */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#C45D35] rounded-full shadow-lg" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#1A1A1A] rounded-full" />
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full opacity-50 pointer-events-none" style={{
        background: 'radial-gradient(circle at 30% 30%, rgba(196, 93, 53, 0.1) 0%, transparent 50%)'
      }} />
    </div>
  );
}
