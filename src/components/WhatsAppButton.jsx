import React from 'react';

export default function WhatsAppButton() {
  // Substitua pelo número do seu WhatsApp (com código do país + DDD, sem espaços ou traços)
  const phoneNumber = "5511999999999"; 
  
  // Mensagem opcional que já vem preenchida quando o cliente clica
  const message = "Olá! Gostaria de tirar uma dúvida sobre os produtos."; 

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] hover:-translate-y-1 transition-all duration-300"
      aria-label="Falar conosco no WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M11.996 0C5.372 0 0 5.372 0 11.996c0 2.128.556 4.136 1.536 5.92L.012 24l6.236-1.624A11.88 11.88 0 0011.996 24c6.624 0 11.996-5.372 11.996-11.996S18.62 0 11.996 0zM12 21.824c-1.844 0-3.604-.488-5.18-1.42l-.372-.216-3.844 1.004 1.024-3.76-.236-.376a9.78 9.78 0 01-1.492-5.168c0-5.42 4.412-9.832 9.832-9.832 5.42 0 9.832 4.412 9.832 9.832S17.42 21.824 12 21.824zM17.388 14.5c-.296-.148-1.748-.864-2.02-.964-.268-.096-.464-.148-.66.148-.196.296-.764.964-.936 1.16-.172.196-.348.22-.644.072-1.928-.968-3.32-2.02-4.596-3.84-.132-.192-.016-.296.132-.444.132-.132.296-.348.444-.52.148-.172.196-.296.296-.492.096-.196.048-.368-.024-.516-.072-.148-.66-1.592-.904-2.18-.236-.576-.48-.496-.66-.504-.172-.008-.368-.008-.564-.008-.196 0-.52.072-.792.368-.268.296-1.032 1.008-1.032 2.456s1.056 2.844 1.204 3.04c.148.196 2.068 3.16 5.012 4.428 2.216.952 2.94.864 3.46.72.632-.176 1.748-.716 1.996-1.408.248-.692.248-1.284.172-1.408-.076-.12-.272-.196-.568-.344z" />
      </svg>
    </a>
  );
}