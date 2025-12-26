
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="chi-siamo" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-3">La Nostra Visione</h2>
          <h3 className="text-4xl font-serif-elegant font-bold text-slate-900">Perché Partecipiamo Cassino?</h3>
          <div className="h-1.5 w-24 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Cittadinanza Attiva",
              desc: "Crediamo che il cambiamento parta da ogni singolo cittadino che sceglie di non restare a guardare.",
              icon: "🤝"
            },
            {
              title: "Trasparenza",
              desc: "Promuoviamo una gestione chiara e aperta della cosa pubblica per il bene di tutti i cassinati.",
              icon: "🔍"
            },
            {
              title: "Amore per il Territorio",
              desc: "Valorizziamo le nostre radici, la nostra storia e la bellezza di Cassino, dalla Rocca Janula all'Abbazia.",
              icon: "🏰"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-6">{item.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
