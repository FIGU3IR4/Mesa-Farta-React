import { useState } from "react";
import { ShoppingBasket, Menu, X } from "lucide-react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const navLinks = [
    { href: "#catalogo", label: "Catálogo" },
    { href: "#monte-sua-cesta", label: "Monte sua Cesta" },
    { href: "#sobre", label: "Sobre Nós" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
<img 
  src="https://res.cloudinary.com/daxnmbaov/image/upload/v1776855698/Logo_cestao_off_c_r3cftk.png" 
  alt="Logo Cestão Mesa Farta" 
  className="h-12 w-auto object-contain"
/>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-green-700 hover:bg-green-50 transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#catalogo"
              className="ml-2 px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg shadow-sm transition-all hover:shadow-md active:scale-95"
            >
              Pedir Agora
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuAberto && (
        <div className="md:hidden bg-white border-t border-green-50 px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuAberto(false)}
              className="px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#catalogo"
            onClick={() => setMenuAberto(false)}
            className="mt-1 px-4 py-3 bg-orange-500 text-white text-sm font-semibold rounded-lg text-center"
          >
            Pedir Agora
          </a>
        </div>
      )}
    </header>
  );
}
