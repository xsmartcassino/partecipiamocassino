
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Snowfall from './components/Snowfall.tsx';
import GreetingCard from './components/GreetingCard.tsx';
import AboutSection from './components/AboutSection.tsx';
import Footer from './components/Footer.tsx';
import ChatBot from './components/ChatBot.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-red-100 selection:text-red-900">
      <Snowfall />
      <Header />
      
      <main className="flex-grow">
        {/* Festive Banner */}
        <div className="bg-red-700 text-white text-center py-2 px-4 overflow-hidden relative">
           <p className="font-festive text-xl animate-pulse inline-block">
             🎄 Buon Natale e Felice Anno Nuovo da Partecipiamo Cassino! 🎄
           </p>
        </div>

        <Hero />
        
        <GreetingCard />
        
        <AboutSection />
        
        {/* Call to Action Section */}
        <section className="py-20 relative overflow-hidden bg-green-900 text-white">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="grid grid-cols-6 gap-4 p-8">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="text-6xl transform rotate-12">❄</div>
              ))}
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif-elegant font-bold mb-6">Vuoi fare la tua parte per Cassino?</h2>
            <p className="text-xl text-green-100 mb-10 leading-relaxed">
              Il miglior modo per festeggiare è partecipare. Unisciti al nostro gruppo e contribuisci attivamente ai progetti per la nostra città.
            </p>
            <button className="bg-white text-green-900 px-10 py-4 rounded-full font-bold text-xl hover:bg-red-50 hover:scale-105 transition-all shadow-2xl">
              Partecipa Ora
            </button>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* Chatbot Natalizio */}
      <ChatBot />
    </div>
  );
};

export default App;
