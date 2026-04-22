import { Target, Building2, User, Leaf, Clock, Star, Users } from "lucide-react";

const beneficiosEmpresa = [
  { icon: Building2, texto: "Pedidos em grande volume com desconto especial" },
  { icon: Clock, texto: "Entrega programada e recorrente para sua empresa" },
  { icon: Star, texto: "Nota fiscal garantida para fins contábeis" },
  { icon: Users, texto: "Atendimento B2B dedicado com gerente de conta" },
];

const beneficiosIndividual = [
  { icon: Leaf, texto: "Produtos frescos e de alta qualidade garantidos" },
  { icon: Clock, texto: "Entrega rápida diretamente na sua porta" },
  { icon: Star, texto: "Cestas personalizadas conforme sua necessidade" },
  { icon: User, texto: "Atendimento humano e suporte via WhatsApp" },
];

const equipe = [
  {
    nome: "Eladio Gomes",
    cargo: "Fundador & CEO",
    imagem: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
  {
    nome: "Manuella Gomes",
    cargo: "Diretora Operacional",
    imagem: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
  },
  {
    nome: "Colaboradores",
    cargo: "Montadores",
    imagem: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
  },
];

const estrutura = [
  {
    imagem: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80",
    legenda: "Nosso centro de distribuição",
  },
  {
    imagem: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&q=80",
    legenda: "Área de seleção e montagem",
  },
  {
    imagem: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=80",
    legenda: "Produtos sempre frescos",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-3">
            Sobre Nós
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Quem somos e nossa missão
          </h2>
        </div>

        <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-3xl p-8 sm:p-12 mb-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-14 h-14 bg-orange-400 rounded-2xl flex items-center justify-center shrink-0">
              <Target size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-2xl mb-4">Nossa Missão</h3>
              <p className="text-green-100 text-lg leading-relaxed max-w-3xl">
                Nascemos com o propósito de levar dignidade e qualidade alimentar
                para cada família e empresa do nosso estado. Acreditamos que uma
                boa alimentação é um direito de todos, por isso trabalhamos dia e
                noite para garantir produtos frescos, preços justos e um serviço
                que trata cada cliente como parte da nossa família.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <Building2 size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-800">Para Empresas</h3>
                <p className="text-gray-500 text-sm">Soluções B2B completas</p>
              </div>
            </div>
            <ul className="space-y-4">
              {beneficiosEmpresa.map(({ icon: Icon, texto }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={16} className="text-blue-600" />
                  </div>
                  <span className="text-gray-600 text-sm leading-relaxed">{texto}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                <User size={24} className="text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-800">Para Famílias</h3>
                <p className="text-gray-500 text-sm">Cuidado personalizado B2C</p>
              </div>
            </div>
            <ul className="space-y-4">
              {beneficiosIndividual.map(({ icon: Icon, texto }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={16} className="text-orange-600" />
                  </div>
                  <span className="text-gray-600 text-sm leading-relaxed">{texto}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

<div className="flex flex-col items-center justify-center mb-14">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Nosso Fundador</h3>
          
          {/* w-80 define uma largura menor e mais controlada, max-w-full garante que não quebre em celulares */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm text-center w-80 max-w-full group">
            
            {/* h-[26rem] reduz a altura, mas continua com aspecto vertical (retrato) */}
            <div className="h-[26rem] overflow-hidden">
              <img
                src="https://res.cloudinary.com/daxnmbaov/image/upload/v1776854381/WhatsApp_Image_2026-04-20_at_17.14.03_wybjwf.jpg" 
                alt="Nome do Dono"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 bg-white relative z-10">
              <p className="font-bold text-gray-800 text-xl">Eladio Gomes</p>
              <p className="text-green-600 text-base font-medium mt-1">Fundador / Proprietário</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
