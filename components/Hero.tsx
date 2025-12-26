
import React from 'react';

const Hero: React.FC = () => {
  // Using the image provided by the user in the prompt context
  const groupImageUrl = "https://storage.googleapis.com/generativeai-downloads/images/sxs/file-0-0.png";

  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="font-festive text-4xl lg:text-6xl text-red-600 mb-4 animate-bounce">
              Il Natale è partecipazione!
            </h2>
            <h1 className="text-4xl lg:text-7xl font-serif-elegant font-bold text-slate-900 leading-tight mb-6">
              Costruiamo insieme il futuro di <span className="italic text-red-700">Cassino</span>.
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Siamo un gruppo di cittadini legati dall'amore per la nostra città. 
              Questo Natale, il nostro regalo più grande è l'impegno costante per una comunità più attiva e solidale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#attivita" className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition-all shadow-xl hover:translate-y-[-2px]">
                Le nostre attività 🎄
              </a>
              <a href="#chi-siamo" className="bg-white text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-red-600 hover:text-red-600 transition-all shadow-md">
                Scopri chi siamo
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-red-500/20 to-green-500/20 rounded-[2.5rem] blur-2xl"></div>
            <div className="relative bg-white p-3 rounded-[2rem] shadow-2xl rotate-1 border-8 border-white group overflow-hidden">
                <img 
                  src={groupImageUrl} 
                  alt="Partecipiamo Cassino - Gruppo sotto l'albero" 
                  className="rounded-2xl w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-red-50/50">
                  <p className="text-slate-800 font-medium italic text-center">
                    "Insieme, davanti alla nostra Chiesa di Sant'Antonio, per augurarvi il meglio."
                  </p>
                </div>
            </div>
            
            {/* Festive decorations around the image */}
            <div className="absolute -top-6 -right-6 text-5xl">🎁</div>
            <div className="absolute -bottom-6 -left-6 text-5xl">🔔</div>
          </div>
        </div>
      </div>

      {/* Background patterns */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50"></div>
    </section>
  );
};

export default Hero;
