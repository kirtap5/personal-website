import { BackgroundSquares, Container, Navbar } from "../../components";
import { cn } from "../../lib/cn";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[var(--color-paper)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 90% at 100% 0%, rgba(17,33,24,0.35) 0%, rgba(17,33,24,0.18) 35%, rgba(17,33,24,0.10) 60%, transparent 80%)",
          // "radial-gradient(ellipse 90% 90% at 100% 0%, rgba(32,94,64,0.35) 0%, rgba(32,94,64,0.18) 35%, rgba(32,94,64,0.10) 60%, transparent 80%)",
        }}
      />
      {/* 17, 33, 24 */}
      <BackgroundSquares variant="hero" className="z-0" />

      <Navbar />

      <Container className="relative z-10 flex min-h-screen flex-col pb-10 pt-32">
        <div className="flex flex-1 flex-col justify-end gap-12 pb-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="font-didot text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tight text-[var(--color-ink)]">
              Patrik Gerdelius
            </h1>
            <div className="max-w-xs font-cormorant text-sm leading-relaxed tracking-wide text-[rgba(31,47,40,0.65)] lg:text-right">
              Software Engineer, currently based in Seoul, South Korea. I build
              scalable & maintainable web and mobile applications with a focus
              on React, React Native, and TypeScript.
            </div>
          </div>

          <div className="font-didot text-xs uppercase tracking-[0.15em] text-[rgba(31,47,40,0.55)]">
            patrik.gerdelius@hotmail.com
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
