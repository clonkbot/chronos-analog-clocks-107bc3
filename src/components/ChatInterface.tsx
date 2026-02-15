import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const aiResponses: Record<string, string> = {
  default: "I'd love to help you find the perfect analog clock! You can ask me about:\n\n• Budget recommendations (under $50, $50-$150, luxury)\n• Best clocks for specific rooms (bedroom, office, kitchen)\n• Design styles (minimalist, vintage, modern, art deco)\n• Features (silent movement, atomic precision, pendulum)\n\nWhat interests you most?",
  budget: "For budget-conscious buyers, I recommend:\n\n**Under $25:**\n• IKEA Pugg ($15) - Clean, reliable, perfect starter\n• Amazon Basics Wall Clock ($18) - No-frills functionality\n\n**$25-$50:**\n• Seiko QXA476 ($35) - Japanese precision at entry price\n• La Crosse Technology ($40) - Self-setting atomic accuracy\n\nAll these offer excellent value without sacrificing reliability!",
  luxury: "For the discerning collector, consider:\n\n**$300-$500:**\n• Junghans Max Bill ($450) - Bauhaus perfection, Swiss movement\n• Mondaine Swiss Railway ($380) - Iconic design, museum piece\n\n**$500+:**\n• Hermès Arceau ($2,400) - Ultimate luxury statement\n• Jaeger-LeCoultre Atmos (~$8,000) - Runs on air pressure alone\n\nThese are investment pieces that appreciate over time.",
  bedroom: "For bedrooms, silence is golden:\n\n**Top Picks:**\n• Braun BNC006 ($65) - Silent sweep, no ticking, subtle glow\n• SEIKO QXA521 ($45) - Whisper-quiet movement, elegant\n• Karlsson Minimal ($55) - Scandinavian calm, soundless\n\n**Pro tip:** Look for \"sweep\" or \"continuous\" movement - no tick-tick noise to disturb your sleep!",
  office: "For professional spaces:\n\n**Classic Authority:**\n• Howard Miller Ridgewood ($150) - Commands respect\n• Bulova Director ($95) - Boardroom appropriate\n\n**Modern Professional:**\n• Braun BNC017 ($85) - Dieter Rams design, tech-friendly aesthetic\n• Newgate Number One ($70) - Contemporary sophistication\n\nA quality desk clock signals attention to detail - clients notice.",
  minimalist: "For minimalist aesthetics:\n\n**Pure Form:**\n• Junghans Max Bill ($450) - The definitive minimal clock\n• Muji Wall Clock ($30) - Japanese essentialism\n• Karlsson Normann ($60) - Scandinavian purity\n\n**Design Philosophy:** True minimalism isn't cheap-looking—it's about perfect proportions and quality materials with zero ornamentation.",
  why: "Why analog over digital? Let me count the ways:\n\n**1. Cognitive Benefits**\nStudies show analog reading improves time estimation by 40%. Your brain processes time spatially, not just numerically.\n\n**2. Reliability**\nMechanical clocks run 50+ years. My grandma's clock still works; her digital watch died in 2008.\n\n**3. No Tech Anxiety**\nZero notifications. Zero updates. Zero charging. Just time.\n\n**4. Aesthetic Permanence**\nA Junghans from 1962 is worth more now. A digital watch from 2010 is e-waste.\n\n**5. Environmental Impact**\nOne battery every 2-5 years vs. constant charging and planned obsolescence.",
  help: "I can help you find your perfect analog clock! Here are some questions to get us started:\n\n• \"What's the best clock under $50?\"\n• \"I need something for my bedroom\"\n• \"Show me minimalist options\"\n• \"Why should I choose analog?\"\n• \"What's a good luxury clock?\"\n• \"Best clock for my office?\"\n\nOr just tell me about your space and preferences - I'll find the right match!"
};

function getAIResponse(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes('budget') || lower.includes('cheap') || lower.includes('affordable') || lower.includes('under')) {
    return aiResponses.budget;
  }
  if (lower.includes('luxury') || lower.includes('expensive') || lower.includes('premium') || lower.includes('high end') || lower.includes('investment')) {
    return aiResponses.luxury;
  }
  if (lower.includes('bedroom') || lower.includes('sleep') || lower.includes('quiet') || lower.includes('silent')) {
    return aiResponses.bedroom;
  }
  if (lower.includes('office') || lower.includes('work') || lower.includes('desk') || lower.includes('professional')) {
    return aiResponses.office;
  }
  if (lower.includes('minimal') || lower.includes('simple') || lower.includes('clean') || lower.includes('modern')) {
    return aiResponses.minimalist;
  }
  if (lower.includes('why') || lower.includes('digital') || lower.includes('better') || lower.includes('benefit') || lower.includes('reason')) {
    return aiResponses.why;
  }
  if (lower.includes('help') || lower.includes('what can') || lower.includes('how do')) {
    return aiResponses.help;
  }

  return aiResponses.default;
}

interface ChatInterfaceProps {
  onClose: () => void;
}

export default function ChatInterface({ onClose }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm your analog clock advisor, powered by AI insights from leading clock experts and retailers. How can I help you find the perfect timepiece today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const response = getAIResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  const quickQuestions = [
    "Best under $50?",
    "Why analog?",
    "Office clocks",
    "Luxury picks"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Chat window */}
      <div className="relative w-full md:w-full md:max-w-lg h-[85vh] md:h-[600px] md:max-h-[80vh] bg-[#F5F2EB] flex flex-col md:rounded-lg overflow-hidden shadow-2xl rounded-t-2xl md:rounded-t-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-[#1A1A1A]/10 bg-[#FDFCFA]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#C45D35] flex items-center justify-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-[#F5F2EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-base md:text-lg text-[#1A1A1A]">Clock Advisor</h3>
              <p className="font-body text-xs text-[#1A1A1A]/50">AI-Powered Recommendations</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-[#1A1A1A]/5 rounded-full transition-colors"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] md:max-w-[80%] px-3 md:px-4 py-2.5 md:py-3 ${
                  msg.role === 'user'
                    ? 'bg-[#1A1A1A] text-[#F5F2EB] rounded-2xl rounded-br-sm'
                    : 'bg-[#FDFCFA] border border-[#1A1A1A]/10 text-[#1A1A1A] rounded-2xl rounded-bl-sm'
                }`}
              >
                <p className="font-body text-sm whitespace-pre-line leading-relaxed">{msg.content}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-[#FDFCFA] border border-[#1A1A1A]/10 px-4 py-3 rounded-2xl rounded-bl-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-[#C45D35] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-[#C45D35] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-[#C45D35] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick questions */}
        <div className="px-4 md:px-6 py-2 flex gap-2 overflow-x-auto">
          {quickQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => setInput(q)}
              className="shrink-0 px-3 py-1.5 border border-[#1A1A1A]/20 text-[#1A1A1A]/70 font-body text-xs rounded-full hover:border-[#C45D35] hover:text-[#C45D35] transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 md:p-4 border-t border-[#1A1A1A]/10 bg-[#FDFCFA]">
          <div className="flex gap-2 md:gap-3">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about analog clocks..."
              className="flex-1 px-3 md:px-4 py-2.5 md:py-3 bg-[#F5F2EB] border border-[#1A1A1A]/10 font-body text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#C45D35] transition-colors rounded-lg"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="px-4 md:px-6 py-2.5 md:py-3 bg-[#C45D35] text-[#F5F2EB] font-body text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1A1A1A] transition-colors rounded-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
