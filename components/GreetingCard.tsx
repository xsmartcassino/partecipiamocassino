
import React, { useEffect, useState } from 'react';
import { generateChristmasGreeting } from '../services/geminiService.ts';
import { ChristmasGreeting } from '../types.ts';

const GreetingCard: React.FC = () => {
  const [greeting, setGreeting] = useState<ChristmasGreeting | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGreeting = async () => {
      const data = await generateChristmasGreeting();
      setGreeting(data);
      setLoading(false);
    };
    fetchGreeting();
  }, []);

  if (loading) return (
    <div className="max-w-3xl mx-auto p-12 text-center">
      <div className="animate-spin text-4xl inline-block mb-4">🎄</div>
      <p className="text-slate-500 font-medium">Preparando il nostro messaggio di auguri per voi...</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 my-16">
      <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-[2.5rem] p-1 shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
        <div className="bg-white rounded-[2.3rem] p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full text-red-600 fill-current">
              <path d="M50 0L60 30H90L65 50L75 80L50 60L25 80L35 50L10 30H40L50 0Z" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
                <span className="text-4xl mr-4">✨</span>
                <h3 className="font-festive text-3xl md:text-4xl text-red-700 text-center">
                  {greeting?.title}
                </h3>
                <span className="text-4xl ml-4">✨</span>
            </div>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed text-center font-serif-elegant italic">
              "{greeting?.message}"
            </p>
            <div className="mt-10 flex justify-center">
                <div className="h-px w-24 bg-red-200"></div>
                <span className="mx-4 text-red-400 font-festive">Partecipiamo Cassino</span>
                <div className="h-px w-24 bg-red-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingCard;
