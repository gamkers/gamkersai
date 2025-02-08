import React, { useEffect, useRef } from 'react';
import { Code2, Globe, Package, Key, Lock, MessageSquareCode } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 bg-black/40 backdrop-blur-sm hover:transform hover:scale-105">
      <div className="mb-4 transform hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className="min-h-screen py-20 bg-black/80 flex items-center" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Advanced Security Features
          </span>
        </h2>
        <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section">
          <FeatureCard
            icon={<Code2 className="w-8 h-8 text-purple-500" />}
            title="Advanced Code Analysis"
            description="AI-driven vulnerability detection in code"
          />
          <FeatureCard
            icon={<Globe className="w-8 h-8 text-purple-500" />}
            title="Malware Analysis"
            description="Automated Malware Analysis Using AI"
          />
          <FeatureCard
            icon={<Package className="w-8 h-8 text-purple-500" />}
            title="Payload Detection"
            description="Detect & neutralize malicious payloads"
          />
          <FeatureCard
            icon={<Key className="w-8 h-8 text-purple-500" />}
            title="API Security"
            description="Prevent unauthorized access & attacks"
          />
          <FeatureCard
            icon={<Lock className="w-8 h-8 text-purple-500" />}
            title="Anti-Analysis"
            description="Protect your code from reverse engineering"
          />
          <FeatureCard
            icon={<MessageSquareCode className="w-8 h-8 text-purple-500" />}
            title="GAMKERSGPT AI"
            description="Real-time expert security assistance"
          />
        </div>
      </div>
    </section>
  );
}