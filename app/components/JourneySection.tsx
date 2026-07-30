import Reveal from "./Reveal";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5575999236229&text=Ol%C3%A1%20venho%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.%20Voc%C3%AA%20pode%20me%20ajudar%3F";

const steps = [
  {
    n: "01",
    title: "Avaliação personalizada",
    desc: "Uma conversa cuidadosa para entender a sua saúde bucal, as suas necessidades e as suas expectativas. Sem pressa. Sem julgamentos. Sem respostas prontas.",
  },
  {
    n: "02",
    title: "Planejamento seguro",
    desc: "Com base em exames detalhados, criamos um plano claro, seguro e transparente — feito para o seu caso, não para um caso genérico.",
  },
  {
    n: "03",
    title: "Procedimento com precisão e conforto",
    desc: "Técnicas modernas, ambiente preparado e foco total na sua segurança e no seu bem-estar durante todo o processo.",
  },
  {
    n: "04",
    title: "Acompanhamento contínuo",
    desc: "O cuidado não termina com o procedimento. Você recebe orientações claras e acompanhamento próximo em cada fase da recuperação.",
  },
];

export default function JourneySection() {
  return (
    <section id="jornada" className="relative bg-[#4A558A] py-20">
      <div className="max-w-275 mx-auto px-3 md:px-12">
        <div className="flex flex-col items-center">
          <Reveal className="w-full flex flex-col items-center">
            <p className="text-[#F7F3ED] text-[18px] md:text-[24px] font-normal tracking-[0.18em] uppercase mb-5">
              Sua jornada
            </p>

            <h2 className="text-[#F7F3ED] text-[28px] md:text-[62px] font-extrabold leading-tight text-center mb-6 tracking-[-0.5px]">
              Cada história é única.<br className="hidden md:block" /> O cuidado também.
            </h2>

            <p className="text-[#F7F3ED]/75 text-[16px] md:text-[20px] font-normal text-center leading-relaxed mb-12 max-w-3xl">
              O tratamento começa muito antes do procedimento: começa com escuta. Cada decisão é tomada com base na sua saúde, na sua realidade e no seu tempo.
            </p>
          </Reveal>

          <div className="w-full max-w-3xl flex flex-col gap-4 mb-16">
            {steps.map((step) => (
              <div key={step.n} className="relative bg-[#D9E4F2] rounded-2xl px-8 py-6 overflow-hidden w-full min-h-30 md:h-[168.75px] flex flex-col justify-center">
                <span className="absolute top-2 left-4 text-[80px] font-extrabold text-[#354263]/15 leading-none select-none">
                  {step.n}
                </span>
                <h3 className="text-[#354263] text-[18px] md:text-[20px] font-bold mb-2 relative z-10">{step.title}</h3>
                <p className="text-[#354263]/70 text-[14px] md:text-[15px] font-normal leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>

          <Reveal className="w-full flex flex-col items-center">
            <p className="text-[#F7F3ED] text-[18px] md:text-[48px] font-normal text-center leading-tight mb-1">
              O primeiro passo é simples:
            </p>
            <p className="text-[#F7F3ED] text-[18px] md:text-[48px] font-extrabold text-center leading-tight mb-8 md:mb-10">
              Uma conversa.
            </p>
          </Reveal>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange animate-pulse-glow w-full md:w-96 md:h-14 justify-center text-[16px] md:text-[20px] font-semibold mb-5"
          >
            Agendar minha avaliação
          </a>

          <p className="text-[#F7F3ED]/45 text-[15px] md:text-[18px] font-normal text-center">
            Sem compromisso · Atendimento humanizado
          </p>
        </div>
      </div>
    </section>
  );
}
