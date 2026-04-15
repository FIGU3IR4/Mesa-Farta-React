import { Minus, Plus, ShoppingBasket, Trash2 } from "lucide-react";
import { itensIndividuais } from "../data/mockData";
import { useCart } from "../context/CartContext";

function ItemRow({ item }) {
  const { itensPersonalizados, atualizarQuantidade } = useCart();
  const qtd = itensPersonalizados[item.id]?.quantidade || 0;

  function incrementar() {
    atualizarQuantidade(item.id, qtd + 1, item.preco, item.nome);
  }

  function decrementar() {
    atualizarQuantidade(item.id, qtd - 1, item.preco, item.nome);
  }

  return (
    <div
      className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all ${
        qtd > 0
          ? "bg-green-50 border border-green-200"
          : "bg-white border border-gray-100 hover:border-gray-200"
      }`}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div
          className={`w-2 h-2 rounded-full shrink-0 ${
            qtd > 0 ? "bg-green-500" : "bg-gray-200"
          }`}
        />
        <span
          className={`text-sm font-medium truncate ${
            qtd > 0 ? "text-green-800" : "text-gray-700"
          }`}
        >
          {item.nome}
        </span>
      </div>

      <div className="flex items-center gap-2 shrink-0 ml-3">
        {qtd > 0 && (
          <button
            onClick={decrementar}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-500 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all"
          >
            {qtd === 1 ? <Trash2 size={14} /> : <Minus size={14} />}
          </button>
        )}

        {qtd > 0 && (
          <span className="w-7 text-center text-sm font-bold text-green-700">
            {qtd}
          </span>
        )}

        <button
          onClick={incrementar}
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-green-600 hover:bg-green-700 text-white transition-all"
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
}

export default function CustomBasket() {
  const {
    itensPersonalizados,
    calcularTotalPersonalizado,
    limparCestaPersonalizada,
    abrirCheckoutPersonalizada,
  } = useCart();

  const totalItens = Object.values(itensPersonalizados).reduce(
    (acc, item) => acc + item.quantidade,
    0
  );
  const total = calcularTotalPersonalizado();
  const temItens = totalItens > 0;

  return (
    <section id="monte-sua-cesta" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-100 text-orange-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-3">
            Personalize
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">
            Monte sua Própria Cesta
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Selecione os produtos que você precisa e nós montamos a cesta
            personalizada para você.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-2">
              {itensIndividuais.map((item) => (
                <ItemRow key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <ShoppingBasket size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Minha Cesta</h3>
                    <p className="text-green-200 text-sm">Resumo do pedido</p>
                  </div>
                </div>

                {temItens ? (
                  <div className="mb-6 space-y-2 max-h-52 overflow-y-auto pr-1">
                    {Object.entries(itensPersonalizados).map(([id, item]) => (
                      <div
                        key={id}
                        className="flex justify-between items-start text-sm bg-white/10 rounded-lg px-3 py-2"
                      >
                        <span className="text-green-100 leading-tight mr-2 flex-1">
                          {item.nome}
                        </span>
                        <span className="text-white font-semibold shrink-0">
                          x{item.quantidade}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mb-6 py-8 text-center">
                    <div className="text-5xl mb-3">🛒</div>
                    <p className="text-green-200 text-sm">
                      Nenhum item adicionado ainda.
                      <br />
                      Selecione os produtos ao lado.
                    </p>
                  </div>
                )}

                <div className="border-t border-white/20 pt-4 mb-5">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-green-200 text-sm">
                      {totalItens} item{totalItens !== 1 ? "s" : ""} selecionado
                      {totalItens !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-100 font-semibold">
                      Valor Total Previsto:
                    </span>
                    <span className="text-2xl font-extrabold text-white">
                      R${" "}
                      {total.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>

                <button
                  onClick={abrirCheckoutPersonalizada}
                  disabled={!temItens}
                  className="w-full py-3.5 bg-orange-500 hover:bg-orange-400 disabled:bg-white/20 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all active:scale-95 mb-2"
                >
                  Finalizar minha cesta
                </button>

                {temItens && (
                  <button
                    onClick={limparCestaPersonalizada}
                    className="w-full py-2 text-green-200 hover:text-white text-sm font-medium transition-colors"
                  >
                    Limpar seleção
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
