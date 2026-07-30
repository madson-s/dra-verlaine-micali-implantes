import Image from "next/image";

export default function FaceSection() {
  return (
    <section id="face" className="bg-white py-20">
      <div className="max-w-275 mx-auto px-3 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-[clamp(12px,3vw,48px)] mb-6">
          <div className="w-full md:flex-[47] md:min-w-0">
            <div className="flex flex-row items-end justify-between md:block">
              <h2 className="m-0 text-[clamp(30px,5vw,68px)] font-normal leading-[1.05] tracking-[-0.5px] text-[#3A4666]">
                Muito além
                <br />
                da estética:
                <br />
                <strong className="font-extrabold text-[#4E68A7]">
                  é&nbsp; a liberdade
                  <br />
                  de ser você.
                </strong>
              </h2>

              <div className="block md:hidden shrink-0 ml-4 pb-3">
                <Image
                  src="/images/Olhos sorriso - Sessão 03.svg"
                  alt="Olhos sorrindo"
                  width={96}
                  height={23}
                />
              </div>
            </div>
          </div>

          <div className="w-full md:flex-[53] md:min-w-0 flex flex-col items-end gap-1 md:gap-[clamp(6px,1.5vw,24px)]">
            <Image
              src="/images/Olhos sorriso - Sessão 03.svg"
              alt="Olhos sorrindo"
              width={192}
              height={46}
              className="hidden md:block md:w-1/3 md:h-auto"
            />

            <Image
              src="/images/Square hand mouth copiar.webp"
              alt="Idosa sorrindo"
              className="w-full max-w-145 h-auto rounded-xl md:rounded-none"
              width={594}
              height={294}
            />
          </div>
        </div>

        <p className="m-0 text-[26px] md:text-[clamp(26px,3.2vw,44px)] font-normal leading-snug md:leading-none text-[#3A4666]">
          É sobre a sua segurança para{" "}
          <strong className="font-extrabold text-[#4E68A7]">
            sorrir de volta!
          </strong>
        </p>
      </div>
    </section>
  );
}
