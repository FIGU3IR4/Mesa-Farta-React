import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cestaSelecionada, setCestaSelecionada] = useState(null);
  const [itensPersonalizados, setItensPersonalizados] = useState({});
  const [modalAberto, setModalAberto] = useState(false);
  const [tipoCheckout, setTipoCheckout] = useState(null);

  function abrirCheckoutCestaPronta(cesta) {
    setCestaSelecionada(cesta);
    setTipoCheckout("pronta");
    setModalAberto(true);
  }

  function abrirCheckoutPersonalizada() {
    setTipoCheckout("personalizada");
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
    setCestaSelecionada(null);
    setTipoCheckout(null);
  }

  function atualizarQuantidade(itemId, quantidade, preco, nome) {
    setItensPersonalizados((prev) => {
      if (quantidade <= 0) {
        const novo = { ...prev };
        delete novo[itemId];
        return novo;
      }
      return { ...prev, [itemId]: { quantidade, preco, nome } };
    });
  }

  function calcularTotalPersonalizado() {
    return Object.values(itensPersonalizados).reduce(
      (acc, item) => acc + item.preco * item.quantidade,
      0
    );
  }

  function limparCestaPersonalizada() {
    setItensPersonalizados({});
  }

  return (
    <CartContext.Provider
      value={{
        cestaSelecionada,
        itensPersonalizados,
        modalAberto,
        tipoCheckout,
        abrirCheckoutCestaPronta,
        abrirCheckoutPersonalizada,
        fecharModal,
        atualizarQuantidade,
        calcularTotalPersonalizado,
        limparCestaPersonalizada,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
