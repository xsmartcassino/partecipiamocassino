
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contatti" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <span className="text-2xl font-serif-elegant font-bold">
                Partecipiamo <span className="text-red-500">Cassino</span>
              </span>
            </div>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              Uniti per una Cassino più bella, vivibile e partecipata. 
              Siamo un movimento civico aperto a tutti coloro che vogliono dare il proprio contributo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.01 3.71.054 1.14.044 1.918.27 2.616.54.713.276 1.308.676 1.902 1.27.594.594.994 1.19 1.27 1.902.27.698.496 1.476.54 2.616.044.926.054 1.28.054 3.71s-.01 2.784-.054 3.71c-.044 1.14-.27 1.918-.54 2.616-.276.713-.676 1.308-1.27 1.902-.594.594-1.19.994-1.902 1.27-.698.27-1.476.496-2.616.54-.926.044-1.28.054-3.71.054s-2.784-.01-3.71-.054c-1.14-.044-1.918-.27-2.616-.54-.713-.276-1.308-.676-1.902-1.27-.594-.594-.994-1.19-1.27-1.902-.27-.698-.496-1.476-.54-2.616C2.01 14.784 2 14.43 2 12s.01-2.784.054-3.71c.044-1.14.27-1.918.54-2.616.276-.713.676-1.308 1.27-1.902.594-.594 1.19-.994 1.902-1.27.698-.27 1.476-.496 2.616-.54C9.216 2.01 9.57 2 12 2h.315zm0-2C9.55 0 9.223.01 8.246.054 7.234.1 6.38.256 5.613.555c-.793.308-1.464.717-2.132 1.385-.668.668-1.077 1.339-1.385 2.132-.299.767-.456 1.621-.501 2.633C1.01 9.223 1 9.55 1 12s.01 2.777.054 3.754c.045 1.012.202 1.866.501 2.633.308.793.717 1.464 1.385 2.132.668.668 1.339 1.077 2.132 1.385.767.299 1.621.456 2.633.501.977.045 1.304.054 3.754.054s2.777-.01 3.754-.054c1.012-.045 1.866-.202 2.633-.501.793-.308 1.464-.717 2.132-1.385.668-.668 1.077-1.339 1.385-2.132.299-.767.456-1.621.501-2.633.045-.977.054-1.304.054-3.754s-.01-2.777-.054-3.754c-.045-1.012-.202-1.866-.501-2.633-.308-.793-.717-1.464-1.385-2.132-.668-.668-1.339-1.077-2.132-1.385-.767-.299-1.621-.456-2.633-.501C14.777.01 14.45 0 12 0h-.315z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Link Rapidi</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">Iniziative Natale</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Programma Politico</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Iscriviti al Gruppo</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">News locali</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contatti</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-red-500">📍</span>
                <span>Cassino, FR - Italia</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500">📧</span>
                <span>info@partecipiamocassino.it</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500">📱</span>
                <span>+39 0776 XXX XXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Partecipiamo Cassino. Tutti i diritti riservati. Buone Feste!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
