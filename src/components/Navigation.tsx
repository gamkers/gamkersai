import React from 'react';
import { Shield } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
    >
      {children}
    </a>
  );
}

export function Navigation() {
  return (
    <nav className="fixed w-full backdrop-blur-md bg-black/50 z-50 border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold">GAMKERS</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#Stats">Stats</NavLink>
            <NavLink href="#contribute">Contribute</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <button className="px-4 py-2 bg-purple-600 rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}