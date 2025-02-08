import React from 'react';
import { Github, ExternalLink, Code, Users, MessageSquare, Rocket } from 'lucide-react';

interface BuildCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

function BuildCard({ title, description, icon, link }: BuildCardProps) {
  return (
    <a 
      href={link}
      className="group p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 bg-black/40 backdrop-blur-sm hover:transform hover:scale-105"
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-2xl font-bold ml-3 flex items-center">
          {title}
          <ExternalLink className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </a>
  );
}

export function BuildWithUs() {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-black to-purple-900/20 flex items-center" id="contribute">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Build with Us</h2>
            <p className="text-xl text-gray-300">
              Join our open-source community and shape the future of cybersecurity
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <BuildCard
              icon={<Code className="w-8 h-8 text-purple-500" />}
              title="API Documentation"
              description="Integrate GAMKERS AI into your security workflow with our comprehensive API"
              link="#"
            />
            <BuildCard
              icon={<Github className="w-8 h-8 text-purple-500" />}
              title="GitHub Repository"
              description="Contribute to our open-source project and help improve cybersecurity"
              link="#"
            />
            <BuildCard
              icon={<Users className="w-8 h-8 text-purple-500" />}
              title="Join the Community"
              description="Connect with security experts and developers worldwide"
              link="#"
            />
            <BuildCard
              icon={<MessageSquare className="w-8 h-8 text-purple-500" />}
              title="Developer Forum"
              description="Get help, share insights, and discuss security challenges"
              link="#"
            />
          </div>
          <div className="text-center mt-12">
            <button className="group px-8 py-4 bg-purple-600 rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 text-lg font-semibold inline-flex items-center">
              <Rocket className="w-5 h-5 mr-2 transform group-hover:rotate-12 transition-transform duration-300" />
              Start Contributing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}