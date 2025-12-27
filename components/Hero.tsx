
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  // URLs per testare diverse varianti (GitHub distingue tra .jpg e .JPG)
  const baseUrl = "https://raw.githubusercontent.com/xsmartcassino/partecipiamocassino/main/foto-gruppo";
  const variants = [".jpg", ".JPG", ".jpeg", ".png"];

  const [currentVariant, setCurrentVariant] = useState(0);
  const [imgSrc, setImgSrc] = useState(`${baseUrl}${variants[0]}?t=${new Date().getTime()}`);
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  const handleLoad = () => {
    console.log("✅ Foto di gruppo caricata con successo:", imgSrc);
    setStatus('success');
  };

  const handleError = () => {
    console.warn("⚠️ Fallito caricamento variante:", variants[currentVariant]);
    if (currentVariant < variants.length - 1) {
      const next = currentVariant + 1;
      setCurrentVariant(next);
      setImgSrc(`${baseUrl}${variants[next]}?t=${new Date().getTime()}`);
    } else {
      console.error("❌ Tutte le varianti dell'immagine hanno fallito il caricamento.");
      setStatus('error');
    }
  };

  const manualRetry = () => {
    setCurrentVariant(0);
    setStatus('loading');
    setImgSrc(`${baseUrl}${variants[0]}?refresh=${new Date().getTime()}`);
  };

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
              <a href="#attivita" className="bg-red-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-red-700 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 text-center">
                <span>Iniziative</span>
                <span>🎁</span>
              </a>
              <a href="#chi-siamo" className="bg-white text-slate-800 border-2 border-slate-200 px-10 py-5 rounded-2xl font-bold text-xl hover:border-green-600 hover:text-green-700 transition-all shadow-md flex items-center justify-center">
                Chi Siamo
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-6 bg-gradient-to-tr from-red-600 via-green-500 to-red-600 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div className="relative bg-white p-4 pb-16 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform -rotate-2 hover:rotate-0 transition-all duration-500 border border-slate-100">
                <div className="overflow-hidden rounded-lg aspect-[4/3] bg-slate-100 flex items-center justify-center relative">
                    
                    {status === 'loading' && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-20">
                        <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p className="text-slate-400 font-medium">Cerco la tua foto...</p>
                      </div>
                    )}

                    <img 
                      src={status === 'error' ? "https://images.unsplash.com/photo-1543589077-47d81606c1ad?auto=format&fit=crop&q=80&w=1000" : imgSrc} 
                      alt="Partecipiamo Cassino" 
                      className={`w-full h-full object-cover transition-all duration-700 ${status === 'success' ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                      onLoad={handleLoad}
                      onError={handleError}
                    />
                    
                    {status === 'error' && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white text-center p-6 backdrop-blur-sm z-30">
                        <p className="font-bold mb-2">Foto non trovata su GitHub 📸</p>
                        <p className="text-[10px] mb-4 opacity-80">Assicurati che il repository sia PUBBLICO e il file si chiami esattamente 'foto-gruppo.jpg'</p>
                        <button 
                          onClick={manualRetry}
                          className="bg-white text-red-600 px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-red-50"
                        >
                          🔄 RIPROVA ORA
                        </button>
                      </div>
                    )}
                </div>
                
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="font-festive text-3xl text-slate-800">
                    Noi, per Cassino ❤️
                  </p>
                </div>

                <div className="absolute -top-8 -left-8 text-7xl drop-shadow-lg z-20">🎀</div>
                <div className="absolute top-4 right-4 text-2xl animate-spin-slow">✨</div>
                <div className="absolute bottom-12 left-8 text-xl animate-bounce">⭐</div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-green-700 text-white p-6 rounded-full shadow-2xl transform rotate-12 flex flex-col items-center justify-center w-32 h-32 border-4 border-white z-20">
                <span className="text-3xl">🎅</span>
                <span className="font-bold text-[10px] uppercase text-center mt-1">Buone Feste</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-red-50/50 rounded-bl-[100px] blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-green-50/50 rounded-tr-[100px] blur-3xl"></div>
    </section>
  );
};

export default Hero;
