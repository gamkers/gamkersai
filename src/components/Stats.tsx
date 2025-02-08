import React from 'react';
import { Users, Shield, Zap, Code2, Globe, Award } from 'lucide-react';

interface StatCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
}

function StatCard({ number, label, icon }: StatCardProps) {
  return (
    <div className="p-6 rounded-lg border border-purple-500/20 bg-black/40 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
        {number}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section id = "Stats" className="min-h-screen py-20 bg-black/80 flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Security at Scale
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
          <StatCard 
            icon={<Code2 className="w-12 h-12 text-purple-500" />}
            number="7+" 
            label="Languages Supported" 
          />
          <StatCard 
            icon={<Shield className="w-12 h-12 text-purple-500" />}
            number="1000+" 
            label="Security Rules" 
          />
          <StatCard 
            icon={<Zap className="w-12 h-12 text-purple-500" />}
            number="<2min" 
            label="Analysis Speed" 
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <StatCard 
            icon={<Users className="w-12 h-12 text-purple-500" />}
            number="50k+" 
            label="Active Users" 
          />
          <StatCard 
            icon={<Globe className="w-12 h-12 text-purple-500" />}
            number="99.9%" 
            label="Uptime" 
          />
          <StatCard 
            icon={<Award className="w-12 h-12 text-purple-500" />}
            number="4.9/5" 
            label="User Rating" 
          />
        </div>
      </div>
    </section>
  );
}