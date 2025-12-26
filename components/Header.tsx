
import React from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Attività', href: '#attivita' },
  { label: 'Contatti', href: '#contatti' },
];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-red-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-red-100">
              P
            </div>
            <span className="text-xl font-serif-elegant font-bold text-slate-800">
              Partecipiamo <span className="text-red-600">Cassino</span>
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-red-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <button className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-all shadow-md active:scale-95">
              Unisciti a noi
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
