import { Container, RevealOnScroll, SectionTitle } from "../../components";

export function VisionSection() {
  return (
    <section id="vision" className="bg-[var(--color-paper)] py-16 sm:py-24">
      <Container>
        <RevealOnScroll delayMs={20}>
          <div className="mb-16 text-center">
            <SectionTitle
              eyebrow="Perspective & Ideology"
              title="About Me"
              stacked
              stackedAllCaps={false}
            />
          </div>
        </RevealOnScroll>

        <div className="space-y-16">
          {/* Row 1: big title left, body right */}
          <div className="grid gap-10 md:grid-cols-2 md:items-start mb-30">
            <RevealOnScroll delayMs={120}>
              <div>
                <div className="text-xs tracking-[0.35em] text-[rgba(31,47,40,0.55)]">
                  (01)
                </div>
                <div className="mt-3 inline-block w-fit border-b border-[var(--color-ink)] pb-2">
                  <div className="font-didot text-4xl leading-tight tracking-[0.12em] text-[var(--color-ink)] sm:text-5xl">
                    Patrik
                    <br />
                    Gerdelius
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={220}>
              <div className="space-y-3 md:text-right lg:pt-16">
                <div className="text-sm font-serif italic tracking-wide text-[rgba(31,47,40,0.85)]">
                  Who am I
                </div>
                <p className="text-sm leading-relaxed text-[rgba(31,47,40,0.6)] md:ml-auto md:max-w-md">
                  I'm a software engineer with 4+ years of professional
                  experience, currently based in Seoul. My background spans
                  full-stack consulting, mobile development, and a master's in
                  engineering — with a running thread of actually shipping
                  things people use. I've led teams, owned codebases, and sat in
                  enough client meetings to know that good software is only half
                  the job. The other half is communication, crucial to build within scope & requirements.
                </p>
                <div className="text-xs italic tracking-wide text-[rgba(31,47,40,0.55)]">
                  — Me
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Row 2: body left, big title right */}
          <div className="grid gap-10 md:grid-cols-2 md:items-start mb-30">
            <RevealOnScroll delayMs={320}>
              <div className="space-y-3 lg:pt-16">
                <div className="text-sm font-serif italic tracking-wide text-[rgba(31,47,40,0.85)]">
                  What makes an interessting workplace
                </div>
                <p className="text-sm leading-relaxed text-[rgba(31,47,40,0.6)] md:max-w-md">
                  I want to work on products that matter, with teams that take
                  craft seriously. That means clean architecture, honest
                  estimates, and the kind of feedback culture where problems get
                  caught early — not blamed later. I'm drawn to roles where I
                  can contribute both technically and strategically. I've done
                  both, and I find the overlap is where the interesting work
                  lives.
                </p>
                <div className="text-xs italic tracking-wide text-[rgba(31,47,40,0.55)]">
                  — Me
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={420}>
              <div className="space-y-3 md:text-right">
                <div className="text-xs tracking-[0.35em] text-[rgba(31,47,40,0.55)]">
                  (02)
                </div>
                <div className="mt-3 ml-auto inline-block w-fit border-b border-[var(--color-ink)] pb-2 text-right">
                  <div className="font-didot text-4xl leading-tight tracking-[0.12em] text-[var(--color-ink)] sm:text-5xl">
                    Meaningful Work
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          {/* Row 3: big title left, body right */}
          <div className="grid gap-10 md:grid-cols-2 md:items-start mb-30">
            <RevealOnScroll delayMs={120}>
              <div>
                <div className="text-xs tracking-[0.35em] text-[rgba(31,47,40,0.55)]">
                  (03)
                </div>
                <div className="mt-3 inline-block w-fit border-b border-[var(--color-ink)] pb-2">
                  <div className="font-didot text-4xl leading-tight tracking-[0.12em] text-[var(--color-ink)] sm:text-5xl">
                    What drives me
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={220}>
              <div className="space-y-3 md:text-right lg:pt-16">
                <div className="text-sm font-serif italic tracking-wide text-[rgba(31,47,40,0.85)]">
                  Learning by doing
                </div>
                <p className="text-sm leading-relaxed text-[rgba(31,47,40,0.6)] md:ml-auto md:max-w-md">
                  I studied abroad in South Korea, co-founded a small web
                  company at 20, wrote a machine learning thesis, and have since
                  led delivery on government-scale apps. Not a straight line —
                  but a consistent one. I stay motivated by complexity that's
                  worth solving, and colleagues who push the work forward.
                </p>
                <div className="text-xs italic tracking-wide text-[rgba(31,47,40,0.55)]">
                  — Me
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}
