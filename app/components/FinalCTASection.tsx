import Image from "next/image";
import SmileBadge from "./SmileBadge";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5575999236229&text=Ol%C3%A1%20venho%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.%20Voc%C3%AA%20pode%20me%20ajudar%3F";

export default function FinalCTASection() {
  return (
    <section id="cta-final" className="relative bg-[#4A558A] py-10 md:py-20">
      <div className="max-w-275 mx-auto px-3 md:px-12">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16 mb-6 md:mb-16">
          <div className="hidden md:block w-1/2 aspect-[139.5/197.25] rounded-3xl overflow-hidden relative">
            <Image
              src="/images/FOTO DRA 02.webp"
              alt="Dra. Verlaine Micali"
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="flex flex-col md:w-1/2 justify-between">
            <div>
              <div className="relative mb-6 md:mb-10 flex items-start justify-between gap-3 w-full lg:block lg:w-fit">
                <h2 className="text-white text-[52px] md:text-[76px] font-extrabold leading-tight tracking-[-1px]">
                  Vamos<br />sorrir<br className="hidden md:block" /> juntos?
                </h2>
                <div className="shrink-0 mt-2 lg:absolute lg:top-0 lg:left-full lg:mt-4" style={{ transform: "rotate(12deg)" }}>
                  <span className="hidden lg:block"><SmileBadge size={220} /></span>
                  <span className="block md:hidden"><SmileBadge size={165} /></span>
                </div>
              </div>

              <div className="block md:hidden w-full h-96 rounded-3xl overflow-hidden relative mb-8">
                <Image
                  src="/images/FOTO DRA 02.webp"
                  alt="Dra. Verlaine Micali"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <p className="text-white/80 text-base md:text-xl font-normal leading-relaxed mb-8">
                Ao longo da minha trajetória, aprendi que implante dentário não é só sobre devolver dentes. É sobre devolver tranquilidade, confiança e a liberdade de viver sem se esconder.
              </p>

              <p className="text-white/80 text-base md:text-xl font-normal leading-relaxed mb-8">
                Minha maior realização é o momento em que o tratamento termina e eu posso sorrir junto com o paciente sabendo que ele se sente seguro, confortável e inteiro novamente.
              </p>

              <p className="text-white/80 text-base md:text-xl font-normal leading-relaxed">
                Cada pessoa que chega aqui carrega uma história, um receio, uma expectativa. E o meu compromisso é cuidar de cada uma delas com respeito, atenção e verdade.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:gap-6 mt-4 md:mt-20">
          <p className="text-white text-[28px] md:text-[42px] font-bold text-center">
            O seu reecontro começa com<br className="hidden md:block" /> um passo simples.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange animate-pulse-glow w-full md:w-96 md:h-14 justify-center text-[16px] md:text-[20px] font-semibold"
          >
            Agendar minha consulta
          </a>

          <p className="text-[#F7F3ED] text-[15px] md:text-[18px] font-medium text-center max-w-117.5 mt-4 md:mt-6">
            Uma conversa. Sem pressa, sem julgamento e sem compromisso. Apenas o primeiro passo para se sentir você de novo.
          </p>
        </div>
      </div>
    </section>
  );
}
