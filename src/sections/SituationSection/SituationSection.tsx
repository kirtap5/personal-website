import { Container, RevealOnScroll } from "../../components";

const CARDS = [
  {
    title: "Career ambitions",
    body: "Moving into a senior engineering or tech lead role — preferably at a company building products with real user scale and modern technical investment.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
  {
    title: "Why South Korea?",
    body: "I studied at Yonsei University in 2021–2022, started learning Korean, and have wanted to come back since to integrate more in the culture. I'm exploring work opportunities remote or based in Seoul for the time being.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M12 21s-7-6.2-7-11.2a7 7 0 1 1 14 0C19 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.8" r="2.4" />
      </svg>
    ),
  },
  {
    title: "What I can offer",
    body: "Production-scale React Native and TypeScript expertise, plus team-lead experience on government-level projects. I ramp up fast, communicate clearly with clients, and have a track record of delivering on time in complex environments.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M12 3.5l2.47 5.4 5.78.58-4.36 3.98 1.24 5.74L12 16.8l-5.13 2.4 1.24-5.74-4.36-3.98 5.78-.58z" />
      </svg>
    ),
  },
];

export function SituationSection() {
  return (
    <section
      id="situation"
      className="relative overflow-hidden bg-[var(--color-slate)] py-16 sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 100% 0%, rgba(32,94,64,0.08), transparent 70%), #f4f4f4",
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-2xl space-y-4">
          <RevealOnScroll delayMs={100}>
            <h2 className="font-didot text-4xl italic tracking-wide text-[var(--color-ink)] sm:text-5xl">
              Current Position
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delayMs={200}>
            <p className="text-sm leading-relaxed text-[rgba(31,47,40,0.65)]">
              In February 2026 I decided to quit my job in Copenhagen, Denmark
              and move to Seoul, South Korea. As a result, I am actively
              looking for work opportunities.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <RevealOnScroll key={card.title} delayMs={300 + i * 150}>
              <div className="group relative h-full space-y-4 rounded-xl border border-[rgba(31,47,40,0.1)] bg-[var(--color-paper)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-ink)] hover:shadow-[0_16px_36px_-18px_rgba(32,94,64,0.45)]">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-ink)] text-[var(--color-paper)]">
                    {card.icon}
                  </div>
                </div>
                <h3 className="font-didot text-xl italic tracking-wide text-[var(--color-ink)]">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-[rgba(31,47,40,0.65)]">
                  {card.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
