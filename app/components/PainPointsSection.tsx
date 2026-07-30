import Image from "next/image";
import Reveal from "./Reveal";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5575999236229&text=Ol%C3%A1%20venho%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.%20Voc%C3%AA%20pode%20me%20ajudar%3F";

const group1 = [
  {
    src: "/images/Conter o sorriso.svg",
    alt: "Conter o sorriso",
    title: "Conter o sorriso",
    desc: "Tentar esconder a boca o tempo todo ao conversar com as pessoas.",
  },
  {
    src: "/images/Evitar fotos.svg",
    alt: "Evitar fotos",
    title: "Evitar fotos",
    desc: "Fugir de câmeras em momentos especiais para não registrar o sorriso.",
  },
  {
    src: "/images/Evitar encontros.svg",
    alt: "Evitar encontros",
    title: "Evitar Encontros",
    desc: "A insegurança faz com que você evite sair e conhecer novas pessoas.",
  },
];

const group2 = [
  {
    src: "/images/A confiança.svg",
    alt: "A confiança",
    title: "A confiança",
    desc: "A autoestima diminui, afetando diretamente a forma como você se enxerga.",
  },
  {
    src: "/images/O convivio social.svg",
    alt: "O convívio social",
    title: "O convívio social",
    desc: "O medo constante do julgamento faz com que você se afaste.",
  },
  {
    src: "/images/Como se expressa.svg",
    alt: "Como se expressa",
    title: "Como se expressa",
    desc: "Você passa a limitar sua verdadeira personalidade.",
  },
];

type Card = { src: string; alt: string; title: string; desc: string };

function CardGroup({ label, cards }: { label: React.ReactNode; cards: Card[] }) {
  return (
    <div className="mb-12">
      <p className="text-white/85 text-[28px] md:text-[42px] font-normal text-center mb-6">{label}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="card-hover bg-[#D0DEED] rounded-[18px] p-7 flex flex-col items-center text-center gap-3.5"
          >
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0">
              <Image src={card.src} alt={card.alt} width={28} height={28} />
            </div>
            <h3 className="text-[#354263] text-base font-extrabold leading-4.5 m-0">{card.title}</h3>
            <p className="text-[#354263] text-sm leading-5 m-0">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PainPointsSection() {
  return (
    <section id="dores" className="relative bg-[#3C4878] py-20">
      <div className="hidden md:block absolute top-0 left-0 w-full pointer-events-none">
        <Image
          src="/images/background-smile.svg"
          alt=""
          width={1920}
          height={1000}
          className="w-full h-auto"
        />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <a href="#dores" aria-label="Seção atual">
          <div className="w-14 h-14 rounded-full bg-[#3c4878] md:bg-[#354263] flex items-center justify-center">
            <Image
              className="animate-bounce-arrow"
              src="/images/seta-pra-baixo.svg"
              alt="Rolar para baixo"
              width={18}
              height={21}
            />
          </div>
        </a>
      </div>

      <div className="relative max-w-275 mx-auto px-3 md:px-12">
        <Reveal>
          <h2 className="text-white text-[40px] md:text-[40px] font-extrabold leading-tight text-left md:text-center mb-14 tracking-[-0.5px]">
            Suprimir esse instinto pode impactar
          </h2>
        </Reveal>

        <Reveal>
          <CardGroup
            label={
              <>
                No seu <strong className="font-extrabold">dia a dia:</strong>
              </>
            }
            cards={group1}
          />
        </Reveal>

        <Reveal>
          <CardGroup
            label={
              <>
                Seu <strong className="font-extrabold">emocional:</strong>
              </>
            }
            cards={group2}
          />
        </Reveal>
      </div>

      <div className="relative text-center mt-4 px-3 md:px-12">
        <Reveal>
          <p className="text-[#F7F3ED] text-[20px] md:text-[28px] font-normal leading-snug mb-8">
            <strong className="font-extrabold">Aqui, você não precisa explicar o que sente.</strong>
            <br className="hidden md:block" />
            A gente já sabe. E o primeiro passo é te ouvir.
          </p>
        </Reveal>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-orange animate-pulse-glow text-base"
        >
          Quero ser ouvido(a)
        </a>

        <p className="text-white/45 text-[13px] mt-3.5">
          Avaliação humana e sem julgamentos.
        </p>
      </div>
    </section>
  );
}
