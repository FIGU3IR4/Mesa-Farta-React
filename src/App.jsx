import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import CustomBasket from "./components/CustomBasket";
import About from "./components/About";
import CheckoutModal from "./components/CheckoutModal";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton"; // <-- Importe o botão

export default function App() {
  return (
    <CartProvider>
      <div className="font-sans antialiased">
        <Header />
        <main>
          <Hero />
          <Catalog />
          <CustomBasket />
          <About />
        </main>
        <Footer />
        <CheckoutModal />
        <WhatsAppButton />
      </div>
    </CartProvider>
  );
}
