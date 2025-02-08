import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { BuildWithUs } from './components/BuildWithUs';
import { Footer } from './components/Footer';
import { AnalysisTool } from './components/AnalysisTool';
import { ChevronRight } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function MainContent() {
  const navigate = useNavigate();

  const handleTryNow = () => {
    navigate('/analysis');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero onTryNow={handleTryNow} />
      <Features />
      <Stats />
      <BuildWithUs />
      
     {/* CTA Section */}
      <section className="min-h-screen py-24 bg-gradient-to-b from-purple-900/20 to-black flex items-center">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent mb-6">
            The Future of Cybersecurity Starts Here!
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Empower your security research with GAMKERS AI – an advanced suite designed for ethical hackers, 
            security professionals, and developers who demand cutting-edge protection.
          </p>
      
          {/* Key Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300 text-left mb-12">
            <div className="bg-gray-900/40 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">AI-Powered Code Analysis</h3>
              <p>Detect vulnerabilities faster with deep learning-based security scanning.</p>
            </div>
            <div className="bg-gray-900/40 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Real-Time Threat Detection</h3>
              <p>Get instant security advice from our AI expert system.</p>
            </div>
            <div className="bg-gray-900/40 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">GAMKERSGPT - DeepSeek-R1</h3>
              <p>Cyber security assistant designed to help you with your security-related queries</p>
            </div>
          </div>
      
          {/* Call to Action Button */}
          <button 
            onClick={handleTryNow}
            className="group px-12 py-4 bg-purple-600 rounded-full shadow-lg shadow-purple-500/30 
                       hover:shadow-purple-500/50 transition-all duration-300 text-lg font-bold inline-flex 
                       items-center tracking-wide uppercase"
          >
            Get Started Free
            <ChevronRight className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
      
          <p className="text-gray-400 text-sm mt-4">
            No credit card required. Get started in minutes.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/analysis" element={<AnalysisTool />} />
      </Routes>
    </Router>
  );
}

export default App;