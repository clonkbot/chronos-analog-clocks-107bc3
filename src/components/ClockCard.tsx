interface ClockCardProps {
  name: string;
  price: string;
  source: string;
  description: string;
  rating: number;
  image: string;
  index: number;
}

export default function ClockCard({ name, price, source, description, rating, image, index }: ClockCardProps) {
  return (
    <div
      className="group bg-[#F5F2EB] border border-[#F5F2EB]/10 hover:border-[#C45D35] transition-all duration-500 overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image container */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent" />
        <div className="absolute top-3 right-3 px-2 py-1 bg-[#C45D35] text-[#F5F2EB] font-body text-xs tracking-wider">
          {source}
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-[#B8860B]' : 'text-[#F5F2EB]/30'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="font-body text-xs text-[#F5F2EB] ml-1">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-base md:text-lg text-[#1A1A1A] group-hover:text-[#C45D35] transition-colors duration-300 leading-tight">
            {name}
          </h3>
          <span className="font-display text-lg md:text-xl text-[#C45D35] shrink-0 ml-2">{price}</span>
        </div>
        <p className="font-body text-xs md:text-sm text-[#1A1A1A]/60 leading-relaxed mb-4">
          {description}
        </p>
        <button className="w-full py-2.5 md:py-3 border border-[#1A1A1A]/20 text-[#1A1A1A] font-body text-xs tracking-widest uppercase group-hover:bg-[#1A1A1A] group-hover:text-[#F5F2EB] group-hover:border-[#1A1A1A] transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
}
