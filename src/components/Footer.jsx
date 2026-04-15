import { ShoppingBasket, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center">
                <ShoppingBasket size={18} className="text-white" />
              </div>
              <span className="font-bold text-white text-lg">Cestão Mesa Farta</span>
            </div>
            <p className="text-green-300 text-sm leading-relaxed">
              Levando qualidade e carinho em cada cesta básica que entregamos.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["#catalogo", "#monte-sua-cesta", "#sobre"].map((href, i) => (
                <li key={i}>
                  <a
                    href={href}
                    className="text-green-300 hover:text-white text-sm transition-colors"
                  >
                    {["Catálogo de Cestas", "Monte sua Cesta", "Sobre Nós"][i]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-green-300">
                <Phone size={14} className="text-green-400" />
                (81) 9 8773-1779
              </div>
              <div className="flex items-start gap-2 text-sm text-green-300">
                <MapPin size={14} className="text-green-400 mt-0.5 shrink-0" />
                Rua Roberto Silveira 23b - Jordão Baixo, Recife
              </div>
              <div className="flex items-center gap-3 mt-4">
                <a href="https://www.instagram.com/cestabasicamesafarta/" className="w-8 h-8 bg-green-700 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram size={14} className="text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-green-700 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors">
                  <Facebook size={14} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 pt-6 text-center text-green-400 text-xs">
          © {new Date().getFullYear()} Cestão Mesa Farta. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
