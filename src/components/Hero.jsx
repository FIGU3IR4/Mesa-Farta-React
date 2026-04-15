import { ArrowDown, Truck, ShieldCheck, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-green-600">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/30">
              <Heart size={14} className="fill-orange-300 text-orange-300" />
              Alimentação de qualidade para sua família
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Cestas Básicas
              <span className="block text-orange-300 mt-1">com Amor & Qualidade</span>
            </h1>

            <p className="text-green-100 text-lg leading-relaxed mb-8 max-w-lg">
              Montamos a cesta ideal para sua família ou empresa. Produtos
              frescos, preços justos e entrega rápida na sua porta.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 text-base"
              >
                Ver Catálogo Completo
                <ArrowDown size={18} />
              </a>
              <a
                href="#monte-sua-cesta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl border border-white/40 transition-all text-base"
              >
                Monte sua Cesta
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Truck, label: "Entrega Rápida" },
                { icon: ShieldCheck, label: "Produtos Garantidos" },
                { icon: Heart, label: "Feito com Carinho" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 bg-white/10 rounded-xl p-3 border border-white/20"
                >
                  <Icon size={22} className="text-orange-300" />
                  <span className="text-white text-xs font-medium text-center leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
                alt="Cesta básica repleta de alimentos"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                  <p className="text-xs text-gray-500 font-medium mb-1">
                    Cesta mais popular
                  </p>
                  <p className="text-green-800 font-bold text-lg">
                    Cesta Família
                  </p>
                  <p className="text-orange-600 font-extrabold text-2xl">
                    R$ 159,90
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-orange-500 text-white font-bold text-sm px-4 py-2 rounded-full shadow-lg rotate-6">
              Frete grátis acima de R$150
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
