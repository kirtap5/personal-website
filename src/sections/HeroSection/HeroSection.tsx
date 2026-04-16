import { Container, SectionTitle, Image } from "../../components";
import { cn } from "../../lib/cn";

import personImg from "../../assets/person.png";

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen bg-[var(--color-paper)]">
      <Container className="relative flex min-h-screen flex-col py-10">
        <div className="flex items-start justify-between text-xs tracking-[0.35em] text-[rgba(31,47,40,0.55)]">
          <div className="font-cormorant uppercase">Patrik Gerdelius</div>
          <div className="font-cormorantuppercase">Software Engineer</div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-10">
          <div className="relative flex w-full flex-col items-center">
            <div className="relative z-10">
              <SectionTitle
                title={
                  <span className="grid grid-row-1">
                    <span className="relative">
                      {/* <span className="absolute bottom-0 left-0 mb-3 text-[clamp(2rem,2.2vw,1.4rem)] tracking-[0.25em] mr-3">
                        my
                      </span> */}
                      <span className="">ENGINEER &amp;</span>
                    </span>
                    <span>CONSULTANT</span>
                    {/*<span className="text-[#3d595c]-100">STORIES</span>*/}
                    {/* <span className="text-[rgba(61,89,92,1)]">STORIES</span> */}
                    {/* <span className="text-[rgba(101,109,124,1)]">STORIES</span> */}
                    <span className="text-[var(--color-hero-section-header-accent)]">
                      DEVELOPER
                    </span>
                  </span>
                }
                titleClassName="text-[clamp(4rem,7vw,6.5rem)] leading-[0.96] tracking-[0.08em] text-black-100"
              />
            </div>

            <div className="relative z-0 -mt-6 sm:-mt-10">
              <div className="" />
              <Image
                src={personImg}
                alt="Portrait"
                rounded="none"
                className="h-84 w-64 sm:h-100 sm:w-76 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center justify-center">
          <a
            href="#timeline"
            aria-label="Scroll to next section"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center text-[rgba(31,47,40,0.6)] transition hover:text-[var(--color-ink)]",
            )}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="m7 10 5 5 5-5" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}
