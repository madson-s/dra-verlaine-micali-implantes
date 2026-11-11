import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#354263] pt-16 pb-8">
      <div className="max-w-275 mx-auto px-3 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-10">
          <div>
            <div className="mb-5">
              <Image
                src="/images/Logo Navbar.svg"
                alt="Dra. Verlaine Micali"
                width={160}
                height={44}
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Implantes dentários com cuidado, precisão e acolhimento. Devolvendo sorrisos e liberdade.
            </p>
          </div>

          <div>
            <p className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-6">
              Contato
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="rgba(255,255,255,0.55)"/>
                </svg>
                <span className="text-white/55 text-sm leading-relaxed">
                  R. Jacob Guanaes, n 33 Seabra – BA<br />
                  Referência: Próximo à Biblioteca Municipal
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="rgba(255,255,255,0.55)"/>
                </svg>
                <span className="text-white/55 text-sm">(75) 9 9923-6229</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="rgba(255,255,255,0.55)"/>
                </svg>
                <span className="text-white/55 text-sm">contato@draverlaine.com.br</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-6">
              Redes Sociais
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/draverlainemicali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Image
                  src="/images/Instagram.svg"
                  alt="Instagram"
                  width={15}
                  height={15}
                />
              </a>
              <a
                href="https://www.facebook.com/draverlainemicali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg width="8" height="15" viewBox="0 0 9 18" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.13916 18V9.9H8.59831L9 6.3H6.13916V4.54658C6.13916 3.61958 6.16284 2.7 7.45821 2.7H8.77022V0.126123C8.77022 0.087423 7.64324 0 6.50311 0C4.122 0 2.63106 1.49148 2.63106 4.23018V6.3H0V9.9H2.63106V18H6.13916Z" fill="rgba(255,255,255,0.7)"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-white/20 mb-8" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 pb-2">
          <p className="text-white/60 text-xs font-medium">
            CNPJ 50.737.421/0001-78 · CRO-BA 9468 — Responsável Técnica: Dra. Verlaine Micali
          </p>
          <p className="text-white/50 text-xs md:text-right max-w-sm leading-relaxed">
            As informações contidas neste site têm caráter informativo e não substituem uma consulta presencial. Todo tratamento depende de avaliação clínica individual.
          </p>
        </div>
      </div>
    </footer>
  );
}
