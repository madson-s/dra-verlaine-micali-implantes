"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5575999236229&text=Ol%C3%A1%20venho%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.%20Voc%C3%AA%20pode%20me%20ajudar%3F";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty("--x", `${e.clientX - rect.left}px`);
      btn.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };
    btn.addEventListener("mousemove", onMouseMove);
    return () => btn.removeEventListener("mousemove", onMouseMove);
  }, []);

  // h-6 (24px) por link × 4 + gap-5 (20px) × 3 + mb-6 (24px) + h-12 btn (48px) + py (48px)
  const MOBILE_MENU_H = 276;

  const navLinks = [
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "Sua jornada", href: "#jornada" },
    { label: "Sobre", href: "#sobre" },
    { label: "Dúvidas", href: "#faq" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ ...(scrolled ? {} : {}) }}
    >
      <nav className="relative" style={{ width: "100%" }}>
        {/* Layer 1: container do header com transparência */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: scrolled ? "rgba(15, 32, 64, 0.7)" : "transparent",
            backdropFilter: scrolled ? "blur(18px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
            borderBottom: "1px solid rgba(255,255,255,0.18)",
            transition: "background 0.4s ease, backdrop-filter 0.4s ease",
          }}
        />
        {/* Layer 3 (topo): itens do header */}
        <div
          className="relative z-30 max-w-275 mx-auto px-3 md:px-12 flex items-center justify-between"
          style={{ paddingTop: "14px", paddingBottom: "14px" }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/Logo Navbar.svg"
              alt="Dra. Verlaine Micali"
              width={180}
              height={48}
              priority
              style={{ objectFit: "contain" }}
            />
          </Link>

          <div
            className="hidden md:flex items-center"
            style={{ marginLeft: "auto", gap: "32px" }}
          >
            <ul style={{ display: "flex", alignItems: "center", gap: "28px", listStyle: "none", margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      color: "#F7F3ED",
                      fontSize: "15px",
                      fontWeight: 400,
                      opacity: 0.85,
                      textDecoration: "none",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.opacity = "1")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.opacity = "0.85")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              ref={btnRef}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
              style={{ fontSize: "14px", padding: "10px 24px" }}
            >
              Agendar avaliação
            </a>
          </div>

          <div className="md:hidden ml-auto">
            <button
              className="btn-orange w-22 text-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              style={{ fontSize: "14px", padding: "8px 0", height: "auto" }}
            >
              {menuOpen ? "Fechar" : "Menu"}
            </button>
          </div>
        </div>

        {/* Mobile menu — animated wrapper */}
        <div
          className="absolute inset-x-0 top-0 z-20 md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out"
          style={{ maxHeight: menuOpen ? `${MOBILE_MENU_H + 65}px` : "0px" }}
        >
          {/* Layer 2: div animada (background) */}
          <div
            className="absolute inset-0 z-20"
            style={{
              background: "rgba(15, 32, 64)",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          />

          {/* Layer 3: itens do menu (topo) */}
          <div className="relative z-30" style={{ padding: "20px 24px 28px", paddingTop: "89px" }}>
            <ul className="flex flex-col gap-5 mb-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white block h-6 leading-6"
                    style={{ fontSize: "16px", opacity: 0.9, textDecoration: "none" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange w-full justify-center h-12"
            >
              Agendar avaliação
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
