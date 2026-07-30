import Image from "next/image";
import Reveal from "./Reveal";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5575999236229&text=Ol%C3%A1%20venho%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.%20Voc%C3%AA%20pode%20me%20ajudar%3F";

const faces = [
  "/images/Mask group.webp",
  "/images/Mask group-1.webp",
  "/images/Mask group-2.webp",
  "/images/Mask group-3.webp",
  "/images/Mask group-4.webp",
  "/images/Mask group-5.webp",
  "/images/Mask group-6.webp",
  "/images/Mask group-7.webp",
  "/images/Mask group-8.webp",
];

const columns = [
  [faces[0], faces[3], faces[6], faces[1], faces[8]],
  [faces[4], faces[7], faces[2], faces[5], faces[0]],
  [faces[8], faces[1], faces[5], faces[3], faces[6]],
];

const durations = [18, 24, 14];

function FaceColumn({ images, duration }: { images: string[]; duration: number }) {
  const doubled = [...images, ...images];
  return (
    <div className="flex flex-col gap-3 md:gap-5 will-change-transform" style={{ animation: `scroll-up ${duration}s linear infinite` }}>
      {doubled.map((src, i) => (
        <div
          key={i}
          className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden shrink-0 mx-auto transition-transform duration-300 hover:scale-110 cursor-pointer"
        >
          <Image
            src={src}
            alt="Paciente sorrindo"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function SocialProofSection() {
  return (
    <section id="depoimentos" className="relative bg-[#F7F3ED] py-24">
      <div className="max-w-275 mx-auto px-3 md:px-12">
        <div className="flex flex-col items-center">
          <Reveal className="w-full flex flex-col items-center">
            <p className="text-[#4E68A7] text-[18px] md:text-[24px] font-semibold tracking-[0.18em] uppercase mb-5">
              Histórias Reais
            </p>

            <h2 className="text-[#3A4666] text-[28px] md:text-[58px] font-normal leading-tight text-center mb-6">
              <strong className="font-extrabold text-[#4E68A7]">Todo sorriso</strong> aqui tem<br className="hidden md:block" /> uma <strong className="font-extrabold text-[#4E68A7]">história por trás.</strong>
            </h2>

            <p className="text-[#3A4666]/60 text-base md:text-lg font-normal text-center leading-relaxed mb-10 max-w-xl">
              Cada pessoa que você vê aqui chegou com uma insegurança, muitas dúvidas e um desejo em comum: se sentir bem novamente.
            </p>
          </Reveal>

          <div
            className="w-full max-w-sm md:max-w-2xl overflow-hidden mb-10"
            style={{
              height: "320px",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
            }}
          >
            <div className="grid grid-cols-3 gap-3 md:gap-5">
              {columns.map((col, i) => (
                <FaceColumn key={i} images={col} duration={durations[i]} />
              ))}
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange animate-pulse-glow w-full md:w-96 md:h-14 justify-center text-[16px] md:text-[20px] font-semibold mb-4"
          >
            Entenda o tratamento
          </a>

          <p className="text-[#3A4666]/40 text-sm font-normal">
            Cada história é única, cada cuidado também.
          </p>
        </div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <a href="#depoimentos" aria-label="Seção atual">
          <div className="w-14 h-14 bg-[#F7F3ED] rounded-full flex items-center justify-center">
            <Image
              className="animate-bounce-arrow"
              src="/images/seta-bola-branca.svg"
              alt="Seção atual"
              width={18}
              height={21}
            />
          </div>
        </a>
      </div>
    </section>
  );
}
