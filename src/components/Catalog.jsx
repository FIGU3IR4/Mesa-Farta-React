import { ShoppingCart, CheckCircle2 } from "lucide-react";
import { cestasprontas } from "../data/mockData";
import { useCart } from "../context/CartContext";

function CestaCard({ cesta }) {
  const { abrirCheckoutCestaPronta } = useCart();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img
          src={cesta.imagem}
          alt={cesta.nome}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="bg-white/95 text-green-700 font-bold text-xs px-3 py-1 rounded-full">
            {cesta.itens.length} itens inclusos
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-800 text-xl mb-1">{cesta.nome}</h3>
        <p className="text-3xl font-extrabold text-green-700 mb-4">
          R${" "}
          {cesta.preco.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </p>

        <div className="flex-1 mb-5">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            O que está incluso:
          </p>
          <ul className="space-y-1.5">
            {cesta.itens.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle2
                  size={14}
                  className="text-green-500 mt-0.5 shrink-0"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => abrirCheckoutCestaPronta(cesta)}
          className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all active:scale-95 shadow-sm hover:shadow-md"
        >
          <ShoppingCart size={18} />
          Comprar esta cesta
        </button>
      </div>
    </div>
  );
}

export default function Catalog() {
  return (
    <section id="catalogo" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-3">
            Nossas Cestas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">
            Catálogo de Cestas Básicas
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Escolha a cesta ideal para você ou sua família. Todos os produtos
            são selecionados com cuidado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cestasprontas.map((cesta) => (
            <CestaCard key={cesta.id} cesta={cesta} />
          ))}
        </div>
      </div>
    </section>
  );
}
