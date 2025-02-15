import bg from "./bg.jpg";

interface HeroProps {
  onTryNow: () => void;
}

export function Hero({ onTryNow }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50"></div>
      <div className="absolute inset-0">
        <img 
          src={bg} 
          alt="Cybersecurity Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-500">
            Secure Your Code. Defend Your Systems.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            AI-powered security suite for real-time threat detection, vulnerability analysis, and risk mitigation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={onTryNow}
              className="px-8 py-4 bg-purple-600 rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 text-lg font-semibold"
            >
              Try GAMKERS AI
            </button>
            <button className="px-8 py-4 border border-purple-500 rounded-lg hover:bg-purple-500/10 transition-all duration-300 text-lg font-semibold">
              Contribute
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}