import { useState } from "react";
import { X, MapPin, Send, ChevronRight } from "lucide-react";
import { useCart } from "../context/CartContext";

const WHATSAPP_NUMBER = "5581999999999";
const initialForm = { rua: "", numero: "", bairro: "", referencia: "" };

export default function CheckoutModal() {
  const {
    modalAberto,
    fecharModal,
    cestaSelecionada,
    tipoCheckout,
    itensPersonalizados,
    calcularTotalPersonalizado,
    limparCestaPersonalizada,
  } = useCart();

  const [form, setForm] = useState(initialForm);
  const [erros, setErros] = useState({});

  if (!modalAberto) return null;

  const isPronta = tipoCheckout === "pronta";
  const total = isPronta
    ? cestaSelecionada?.preco
    : calcularTotalPersonalizado();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (erros[name]) setErros((prev) => ({ ...prev, [name]: "" }));
  }

  function validar() {
    // Validação removida para tornar o endereço opcional
    return true;
  }

  function montarMensagem() {
    // Só monta a string de endereço se houver dados preenchidos
    const temDadosEndereco = form.rua || form.numero || form.bairro;
    
    const endereco = temDadosEndereco 
      ? [
          `${form.rua || 'S/N'}, ${form.numero || 'S/N'}`,
          form.bairro ? `Bairro: ${form.bairro}` : null,
          form.referencia ? `Ponto de referência: ${form.referencia}` : null,
        ].filter(Boolean).join("\n")
      : "Retirada ou endereço a combinar";

    if (isPronta) {
      const itensStr = cestaSelecionada.itens
        .map((item) => `  • ${item}`)
        .join("\n");
      return (
        `Olá! Gostaria de fazer um pedido na Cesta & Vida! 🛒\n\n` +
        `*📦 PEDIDO:* ${cestaSelecionada.nome}\n\n` +
        `*Itens inclusos:*\n${itensStr}\n\n` +
        `*💰 Valor Total:* R$ ${total?.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}\n\n` +
        `*📍 Endereço de Entrega:*\n${endereco}`
      );
    } else {
      const itensStr = Object.values(itensPersonalizados)
        .map((item) => `  • ${item.nome} (x${item.quantidade})`)
        .join("\n");
      return (
        `Olá! Gostaria de fazer um pedido na Cesta & Vida! 🛒\n\n` +
        `*📦 CESTA PERSONALIZADA:*\n${itensStr}\n\n` +
        `*💰 Valor Total Previsto:* R$ ${total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}\n\n` +
        `*📍 Endereço de Entrega:*\n${endereco}`
      );
    }
  }

  function handleSubmit() {
    if (!validar()) return;
    const mensagem = montarMensagem();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
    fecharModal();
    setForm(initialForm);
    if (!isPronta) limparCestaPersonalizada();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={fecharModal}
      />
      <div className="relative w-full sm:max-w-lg bg-white sm:rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sm:rounded-t-2xl">
          <div>
            <h2 className="font-bold text-gray-800 text-lg">Finalizar Pedido</h2>
            <p className="text-gray-500 text-sm">Preencha o endereço (opcional)</p>
          </div>
          <button
            onClick={fecharModal}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-5 border-b border-gray-50 bg-green-50">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Resumo do pedido
          </p>
          {isPronta ? (
            <>
              <p className="font-bold text-gray-800 text-base">{cestaSelecionada?.nome}</p>
              <p className="text-xs text-gray-500 mt-1">
                {cestaSelecionada?.itens.length} itens inclusos
              </p>
            </>
          ) : (
            <>
              <p className="font-bold text-gray-800 text-base">Cesta Personalizada</p>
              <div className="mt-2 space-y-1 max-h-28 overflow-y-auto">
                {Object.values(itensPersonalizados).map((item, i) => (
                  <p key={i} className="text-xs text-gray-600">
                    • {item.nome} <span className="font-semibold text-green-700">x{item.quantidade}</span>
                  </p>
                ))}
              </div>
            </>
          )}

          <div className="mt-3 pt-3 border-t border-green-200 flex justify-between items-end">
            <span className="text-sm font-medium text-gray-600 mb-1">Total:</span>
            <div className="text-right">
              <span className="text-xl font-extrabold text-green-700">
                R$ {total?.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>

        <div className="px-6 py-5">
          <div className="flex items-center gap-2 mb-5">
            <MapPin size={18} className="text-orange-500" />
            <h3 className="font-bold text-gray-800">Endereço de Entrega</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Rua / Avenida
              </label>
              <input
                type="text"
                name="rua"
                value={form.rua}
                onChange={handleChange}
                placeholder="Ex: Rua das Flores"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 text-sm bg-white transition-all outline-none focus:ring-2 focus:ring-green-500/30"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Número
                </label>
                <input
                  type="text"
                  name="numero"
                  value={form.numero}
                  onChange={handleChange}
                  placeholder="Ex: 123"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 text-sm bg-white transition-all outline-none focus:ring-2 focus:ring-green-500/30"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Bairro
                </label>
                <input
                  type="text"
                  name="bairro"
                  value={form.bairro}
                  onChange={handleChange}
                  placeholder="Ex: Centro"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 text-sm bg-white transition-all outline-none focus:ring-2 focus:ring-green-500/30"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Ponto de Referência{" "}
                <span className="text-gray-400 font-normal">(opcional)</span>
              </label>
              <input
                type="text"
                name="referencia"
                value={form.referencia}
                onChange={handleChange}
                placeholder="Ex: Próximo ao mercado São João"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 text-sm bg-white transition-all outline-none focus:ring-2 focus:ring-green-500/30"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-6 w-full flex items-center justify-center gap-3 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            <Send size={18} />
            Enviar pedido pelo WhatsApp
            <ChevronRight size={18} />
          </button>
          <p className="text-center text-xs text-gray-400 mt-3">
            Você será redirecionado para o WhatsApp para confirmar o pedido
          </p>
        </div>
      </div>
    </div>
  );
}