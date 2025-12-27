
import React from 'react';

const Hero: React.FC = () => {
  // Questa variabile ora punta al file che caricherai su GitHub
  // Carica un file chiamato 'foto-gruppo.jpg' o 'foto-gruppo.png' nel tuo repository
  const groupImageUrl = "./foto-gruppo.jpg"; 

  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
              🎄 Speciale Natale 2024/2025
            </div>
            <h2 className="font-festive text-5xl lg:text-7xl text-red-600 mb-6 animate-pulse">
              Natale a Cassino
            </h2>
            <h1 className="text-4xl lg:text-6xl font-serif-elegant font-bold text-slate-900 leading-tight mb-8">
              La forza della <span className="text-red-700 underline decoration-green-500 underline-offset-8">Partecipazione</span>.
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Insieme per rendere la nostra città un posto migliore. Questo Natale, vogliamo condividere con voi la gioia dell'impegno civile e della comunità.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a href="#attivita" className="bg-red-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-red-700 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                <span>Le nostre Iniziative</span>
                <span>🎁</span>
              </a>
              <a href="#chi-siamo" className="bg-white text-slate-800 border-2 border-slate-200 px-10 py-5 rounded-2xl font-bold text-xl hover:border-green-600 hover:text-green-700 transition-all shadow-md flex items-center justify-center">
                Chi Siamo
              </a>
            </div>
          </div>

          <div className="relative group">
            {/* Elementi decorativi dietro la foto */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-red-600 via-green-500 to-red-600 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Cornice polaroid festiva per la foto caricata */}
            <div className="relative bg-white p-4 pb-16 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform -rotate-2 hover:rotate-0 transition-all duration-500 border border-slate-100">
                <div className="overflow-hidden rounded-lg aspect-[4/3] bg-slate-100 flex items-center justify-center">
                    <img 
                      src={groupImageUrl} 
                      alt="Partecipiamo Cassino - Foto di Gruppo" 
                      className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback nel caso l'immagine non sia ancora stata caricata
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1543589077-47d81606c1ad?auto=format&fit=crop&q=80&w=1000";
                      }}
                    />
                </div>
                
                {/* Etichetta stile Polaroid */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="font-festive text-3xl text-slate-800">
                    Noi, per Cassino ❤️
                  </p>
                </div>

                {/* Fiocco di Natale sulla cornice */}
                <div className="absolute -top-8 -left-8 text-7xl drop-shadow-lg z-20">🎀</div>
                
                {/* Piccole stelle decorative */}
                <div className="absolute top-4 right-4 text-2xl animate-spin-slow">✨</div>
                <div className="absolute bottom-12 left-8 text-xl animate-bounce">⭐</div>
            </div>
            
            {/* Badge flottante */}
            <div className="absolute -bottom-8 -right-8 bg-green-700 text-white p-6 rounded-full shadow-2xl transform rotate-12 flex flex-col items-center justify-center w-32 h-32 border-4 border-white">
                <span className="text-3xl">🎅</span>
                <span className="font-bold text-xs uppercase text-center mt-1 leading-tight">Auguri di Cuore</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sfondo con forme morbide */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-red-50/50 rounded-bl-[100px] blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-green-50/50 rounded-tr-[100px] blur-3xl"></div>
    </section>
  );
};

export default Hero;
