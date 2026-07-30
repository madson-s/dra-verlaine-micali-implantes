"use client";

import { useState } from "react";
import Image from "next/image";
import SmileBadge from "./SmileBadge";
import Reveal from "./Reveal";

export default function EmpathySection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="empatia" className="relative overflow-hidden bg-[#485080]">
      <div className="absolute top-0 left-0 w-full pointer-events-none hidden md:block">
        <Image
          src="/images/background-smile.svg"
          alt=""
          width={1920}
          height={1000}
          className="w-full h-auto"
        />
      </div>

      <div className="max-w-275 mx-auto px-3 md:px-12 py-16 pb-18 relative">

        <Reveal>
          <p
            className="text-white/92 font-normal leading-[1.4] max-w-2xl mb-6 md:mb-2"
            style={{ fontSize: "clamp(1.375rem, calc(3vw + 11px), 2.625rem)" }}
          >
            Quando alguém sorri para você,<br />
            <strong className="font-extrabold">sorrir de volta</strong> por vezes é uma<br />
            resposta natural.
          </p>
        </Reveal>

        <div className="group relative mb-8 md:mb-11">
          <div
            className="absolute z-20"
            style={{
              top: 0,
              right: "clamp(-12px, calc(3.75vw - 24px), 24px)",
              transform: "translateY(-65%) rotate(18deg)",
            }}
          >
            <div
              className="[&>div]:!w-full [&>div]:!h-full [&_svg]:!w-full [&_svg]:!h-full"
              style={{
                width: "clamp(80px, 25vw, 320px)",
                height: "clamp(80px, 25vw, 320px)",
              }}
            >
              <SmileBadge size={320} />
            </div>
          </div>

          <div
            className={`play-btn-wrap rounded-[20px] overflow-hidden w-full relative bg-[#1E2A4A] aspect-336/429 md:aspect-3/2 ${playing ? "cursor-default" : "cursor-pointer"}`}
            onClick={() => !playing && setPlaying(true)}
          >
            {!playing && (
              <>
                <Image
                  src="/images/imagem-inicial-video.svg"
                  alt="Assistir vídeo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="play-btn-circle w-18 h-18 rounded-full bg-[rgba(255,255,255,0.18)] backdrop-blur-sm [border:1.5px_solid_rgba(255,255,255,0.5)] flex items-center justify-center transition-transform duration-200">
                    <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
                      <path d="M2 1.5L20 13L2 24.5V1.5Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </>
            )}

            {playing && (
              <video
                src="/images/Vídeo Sessão 02.webm"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover block"
              />
            )}
          </div>
        </div>

        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-16 items-center">
          <h2 className="text-white m-0 text-[clamp(30px,5vw,68px)] font-extrabold leading-[1.05] tracking-[-1.5px]">
            Um gesto de conexão.
          </h2>

          <p className="text-white/80 m-0 text-[26px] md:text-[24px] leading-normal">
            Até o momento em que algo faz você{" "}
            <s className="opacity-55">segurar esse sorriso.</s>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
