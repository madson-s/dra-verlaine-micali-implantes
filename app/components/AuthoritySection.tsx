import Image from "next/image";
import Reveal from "./Reveal";

export default function AuthoritySection() {
  return (
    <section id="sobre" className="relative bg-[#354263] py-24">
      <div className="max-w-275 mx-auto px-3 md:px-12">
        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-12 lg:gap-20">

          {/* Tablet: foto vertical, cortada nas laterais, centralizada */}
          <div className="hidden md:block lg:hidden w-1/2 aspect-[3/4] self-start rounded-3xl overflow-hidden relative">
            <Image
              src="/images/DRA FOTO 01.webp"
              alt="Dra. Verlaine Micali"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Desktop: foto vertical original */}
          <div className="hidden lg:block shrink-0 w-110 h-155 rounded-3xl overflow-hidden relative">
            <Image
              src="/images/DRA FOTO 01.webp"
              alt="Dra. Verlaine Micali"
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="flex flex-col flex-1 md:w-1/2 lg:w-auto py-2">
            <Reveal>
              <p className="text-white text-sm font-semibold tracking-[0.18em] uppercase mb-4">
                Quem cuida de você
              </p>

              <h2 className="text-white text-[40px] md:text-[48px] lg:text-[64px] font-extrabold leading-[1.05] tracking-[-1px] mb-5">
                Dra. Verlaine<br />Micali
              </h2>

              <p className="text-white/80 text-lg md:text-[22px] lg:text-[28px] font-normal leading-snug mb-6">
                O cuidado da Ortodontia aliada<br />à harmonia do seu rosto.
              </p>
            </Reveal>

            <div className="block md:hidden w-full h-85.5 rounded-3xl overflow-hidden relative mb-6">
              <Image
                src="/images/authority-section.webp"
                alt="Dra. Verlaine Micali"
                fill
                className="object-cover object-center"
              />
            </div>

            <Reveal>
              <p className="text-white/70 text-base md:text-lg lg:text-[22px] leading-relaxed text-justify md:text-left">
                A <strong className="text-white font-bold">Dra. Verlaine Micali</strong> une conhecimento
                técnico de excelência com uma visão global da sua estética. Formada pela{" "}
                <strong className="text-white font-bold">Universidade Santa Cecília</strong> e{" "}
                <strong className="text-white font-bold">Especialista em Ortodontia</strong>, ela conduz
                cada tratamento com foco não apenas no alinhamento perfeito dos dentes, mas na
                harmonização completa e natural do seu sorriso com a sua face.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 mt-5 md:mt-10">
          <a href="#tratamentos" className="btn-glass w-full md:w-80 justify-center">
            Entenda mais
          </a>
          <p className="text-white/45 text-sm">
            Conheça histórias reais de transformações.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
        <a href="#tratamentos" aria-label="Próxima seção">
          <div className="w-14 h-14 bg-[#F7F3ED] rounded-full flex items-center justify-center">
            <Image
              className="animate-bounce-arrow"
              src="/images/seta-bola-branca.svg"
              alt="Próxima seção"
              width={18}
              height={21}
            />
          </div>
        </a>
      </div>
    </section>
  );
}
