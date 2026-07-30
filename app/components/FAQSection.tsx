"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5575999236229&text=Ol%C3%A1%20venho%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.%20Voc%C3%AA%20pode%20me%20ajudar%3F";

const faqs = [
  {
    q: "O implante dentário dói?",
    a: "O procedimento é feito com anestesia local. Pode haver leve desconforto após, normalmente controlado com medicação.",
  },
  {
    q: "Quem pode fazer implante dentário?",
    a: "Pessoas que perderam um ou mais dentes e buscam uma solução segura e definitiva, mediante avaliação.",
  },
  {
    q: "Quanto tempo dura o tratamento?",
    a: "O tempo varia conforme o caso. Alguns tratamentos são mais rápidos, outros exigem mais etapas.",
  },
  {
    q: "Vou ficar sem dentes durante o tratamento?",
    a: "Não. Em muitos casos, é possível usar uma prótese provisória durante o processo.",
  },
  {
    q: "Existe acompanhamento após o implante?",
    a: "Sim. O acompanhamento faz parte do tratamento, garantindo segurança e bons resultados.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-[#D9E4F2] rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between px-5 md:px-7 py-5 text-left cursor-pointer bg-transparent border-none"
      >
        <span className="text-[#354263] text-[16px] md:text-[22px] font-semibold">{faq.q}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={`shrink-0 ml-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M5 8L10 13L15 8"
            stroke="#354263"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className={`faq-answer ${isOpen ? "open" : ""} px-5 md:px-7`}>
        <p className="text-[#354263]/70 text-sm font-normal leading-relaxed pb-5">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-[#F7F3ED] pt-2 md:pt-8 pb-16">
      <div className="max-w-3xl mx-auto px-3 md:px-12 flex flex-col items-center">
        <Reveal className="w-full flex flex-col items-center">
          <h2 className="text-[#4E68A7] text-[36px] md:text-[64px] font-extrabold leading-tight text-center mb-5 tracking-[-0.5px]">
            Dúvidas que quase<br />todo mundo tem
          </h2>

          <p className="text-[#3A4666]/50 text-base md:text-lg font-normal text-center mb-12">
            E que merecem respostas claras, sem termos complicados.
          </p>
        </Reveal>

        <div className="w-full flex flex-col gap-3 mb-6 md:mb-14">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <p className="text-[#3A4666] text-[16px] md:text-[22px] font-normal text-center mb-6">
          Ainda tem dúvidas? A melhor resposta é uma conversa.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-96 md:h-14 flex items-center justify-center rounded-full border border-[#3D507B] md:border-[3px] text-[#3D507B] text-[15px] md:text-[20px] font-semibold hover:bg-[#3D507B]/5 transition-colors mb-4 py-3 md:py-0"
        >
          Falar com a Drª. Verlaine
        </a>

        <p className="text-[#3A4666]/40 text-sm font-normal">
          Sem compromisso · Atendimento humanizado
        </p>
      </div>
    </section>
  );
}
