import Image from "next/image";
import Reveal from "./Reveal";

const treatments = [
  {
    src: "/images/Implante Unitário copiar.webp",
    alt: "Implante Unitário",
    tag: "Reposição Individual",
    title: "Implante Unitário",
    desc: "Para quem perdeu um dente e quer recuperar a naturalidade do sorriso e a segurança ao mastigar. Uma solução definitiva que se integra à sua arcada como se sempre estivesse ali.",
  },
  {
    src: "/images/Protese protocolo copiar.webp",
    alt: "Prótese Protocolo",
    tag: "Reabilitação Completa",
    title: "Prótese Protocolo",
    desc: "Para quem perdeu todos os dentes e deseja reencontrar a estabilidade, o conforto e a liberdade no dia a dia. Uma solução completa que transforma a relação com a própria imagem.",
  },
  {
    src: "/images/Carga imediata copiar.webp",
    alt: "Carga Imediata",
    tag: "Quando Indicada",
    title: "Carga Imediata",
    desc: "Em situações clínicas específicas, é possível sair com dentes fixos em um período reduzido. A indicação depende de uma avaliação criteriosa e individualizada.",
  },
  {
    src: "/images/Implantes multiplos copiar.webp",
    alt: "Implantes Múltiplos",
    tag: "Reabilitação Parcial",
    title: "Implantes Múltiplos",
    desc: "Para quem perdeu dois ou mais dentes e busca uma reabilitação segura, planejada e com resultado natural. Cada etapa é pensada para devolver função e confiança.",
  },
];

export default function TreatmentsSection() {
  return (
    <section id="tratamentos" className="relative bg-[#F7F3ED] py-24">
      <div className="max-w-275 mx-auto px-3 md:px-12">
        <Reveal className="text-center mb-16">
          <p className="text-[#3A4666] text-sm font-normal tracking-[0.18em] uppercase mb-5">
            Tratamentos
          </p>

          <h2 className="text-[#3A4666] text-[30px] md:text-[50px] lg:text-[76px] font-normal leading-[1.1] mb-6">
            O <strong className="font-extrabold text-[#4E68A7]">reencontro</strong> com<br />
            o <strong className="font-extrabold text-[#4E68A7]">seu sorriso</strong> começa<br />
            com o <strong className="font-extrabold text-[#4E68A7]">plano certo.</strong>
          </h2>

          <p
            className="text-[16px] md:text-[20px] lg:text-[26px] font-normal leading-relaxed max-w-4xl mx-auto md:opacity-70 text-center"
            style={{ color: "#3D507B" }}
          >
            A experiência clínica da <strong className="md:font-bold font-normal">Dra. Verlaine Micali</strong> e o planejamento
            individualizado permitem oferecer diferentes caminhos em implantes dentários.{" "}
            <strong className="md:font-bold font-normal">
              Cada um é pensado para a sua realidade, e só é indicado após uma avaliação cuidadosa.
            </strong>
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          {treatments.map((t) => (
            <div key={t.title} className="w-full max-w-97.5 bg-[#D9E4F2] rounded-3xl overflow-hidden card-hover flex flex-col">
              <div className="relative w-full h-56 shrink-0">
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-7 flex flex-col flex-1">
                <p className="text-[#E36130] text-[11px] font-bold tracking-[0.16em] uppercase mb-3">
                  {t.tag}
                </p>
                <h3 className="text-[#3A4666] text-xl font-bold mb-3">{t.title}</h3>
                <p className="text-[#3A4666]/60 text-sm font-normal leading-relaxed mb-5 flex-1">{t.desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-[#3D507B] font-semibold bg-white/30 backdrop-blur-md border border-white/60 rounded-full px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] hover:bg-white/50 transition-all self-start"
                >
                  Saiba mais
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7H11M8 4L11 7L8 10" stroke="#3D507B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <Reveal>
          <p className="text-[#3A4666]/50 text-[16px] md:text-[20px] font-normal leading-relaxed max-w-3xl mx-auto mt-12 text-left md:text-center">
            Cada organismo é único. A indicação do tratamento ideal depende de fatores clínicos,
            biológicos e das necessidades individuais de cada paciente, sempre definidos em avaliação presencial.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
