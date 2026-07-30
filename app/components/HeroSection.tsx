"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5575999236229&text=Ol%C3%A1%20venho%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.%20Voc%C3%AA%20pode%20me%20ajudar%3F";

export default function HeroSection() {
  const glassBtnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const btn = glassBtnRef.current;
    if (!btn) return;
    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty("--x", `${e.clientX - rect.left}px`);
      btn.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };
    btn.addEventListener("mousemove", onMouseMove);
    return () => btn.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-visible"
      style={{ minHeight: "100vh", display: "flex", alignItems: "flex-end" }}
    >
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        <Image
          src="/images/HERO-IMAGEM.webp"
          alt="Duas mulheres sorindo"
          fill
          priority
          className="object-cover object-top md:object-[center_top] hero-bg-scale"
        />
      </div>

      <div
        className="block md:hidden"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(10,22,50,0.95) 0%, rgba(10,22,50,0.70) 50%, rgba(10,22,50,0.15) 100%)",
          zIndex: 1,
        }}
      />

      <div
        className="hidden md:block"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(10,22,50,0.88) 0%, rgba(10,22,50,0.60) 38%, rgba(10,22,50,0.05) 100%)",
          zIndex: 1,
        }}
      />

      <div
        className="relative z-10 w-full max-w-275 mx-auto px-3 md:px-12 md:self-auto"
        style={{ paddingTop: "100px", paddingBottom: "80px" }}
      >
        <h1
          className="text-center md:text-left"
          style={{
            color: "#F7F3ED",
            fontSize: "clamp(48px, 4.8vw, 92px)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "clamp(16px, 1.2vw, 28px)",
            letterSpacing: "-2px",
          }}
        >
          Sorrir é<br className="block md:hidden" />{" "}um<br className="hidden md:block" />{" "}instinto<br />{" "}humano.
        </h1>

        <p
          className="text-center md:text-left mx-auto md:mx-0"
          style={{
            color: "rgba(247,243,237,0.82)",
            fontSize: "clamp(15px, 2vw, 32px)",
            fontWeight: 400,
            lineHeight: "clamp(22px, 2.4vw, 39px)",
            marginBottom: "clamp(32px, 3vw, 48px)",
            maxWidth: "clamp(280px, 36vw, 520px)",
          }}
        >
          Descubra a segurança de voltar a se sentir você com o acolhimento
          real feito para a sua história.
        </p>

        <div className="flex flex-col items-center md:flex-row md:items-center gap-3 md:gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange animate-pulse-glow justify-center w-full max-w-104.5"
            style={{
              fontSize: "clamp(15px, 1.7vw, 27px)",
              height: "clamp(48px, 4.2vw, 66px)",
              padding: "0 clamp(20px, 2.5vw, 36px)",
            }}
          >
            Quero uma avaliação
          </a>

          <a
            ref={glassBtnRef}
            href="#empatia"
            className="btn-glass justify-center w-full max-w-104.5"
            style={{
              fontSize: "clamp(14px, 1.4vw, 22px)",
              height: "clamp(48px, 4.2vw, 66px)",
              padding: "0 clamp(20px, 2.5vw, 36px)",
            }}
          >
            Entenda o tratamento
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
        <a href="#empatia" aria-label="Próxima seção">
          <div className="w-14 h-14 rounded-full bg-[#354263] flex items-center justify-center">
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
    </section>
  );
}
