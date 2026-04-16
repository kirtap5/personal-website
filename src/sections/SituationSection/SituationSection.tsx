import { Container, RevealOnScroll } from "../../components";

export function SituationSection() {
  return (
    <section
      id="situation"
      className="bg-[var(--color-green-background)] py-16 text-[rgba(255, 255, 255, 0.9)] sm:py-24"
    >
      <Container>
        <div className="grid items-start gap-5 md:grid-cols-3">
          <div className="space-y-4 md:col-span-1">
            <RevealOnScroll delayMs={100}>
              <h2 className="font-didot text-4xl italic tracking-wide text-[rgba(251,249,244,0.92)] sm:text-5xl">
                Current Position
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delayMs={100}>
              <p className="text-sm leading-relaxed text-[rgba(251,249,244,0.75)]">
                In February 2026 I decided to quit my job in Copenhagen, Denmark
                and move to Seoul, South Korea. As a result, I am actively
                looking for work opportunities.
              </p>
            </RevealOnScroll>
          </div>
          <div className="hidden md:block" />
          <div className="hidden md:block" />
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <RevealOnScroll delayMs={300}>
            <div className="space-y-3">
              <h3 className="font-didot text-xl italic tracking-wide text-[rgba(251,249,244,0.9)]">
                Career ambitions
              </h3>
              <p className="text-sm leading-relaxed text-[rgba(251,249,244,0.72)]">
                Moving into a senior engineering or tech lead role — preferably
                at a company building products with real user scale and modern
                technical investment.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={600}>
            <div className="space-y-3">
              <h3 className="font-didot text-xl italic tracking-wide text-[rgba(251,249,244,0.9)]">
                Why South Korea?
              </h3>
              <p className="text-sm leading-relaxed text-[rgba(251,249,244,0.72)]">
                I studied at Yonsei University in 2021–2022, started learning
                Korean, and have wanted to come back since to integrate more in
                the culture. Therefore, I am exporling work opportunities remote
                or based in Seoul for the time being.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={900}>
            <div className="space-y-3">
              <h3 className="font-didot text-xl italic tracking-wide text-[rgba(251,249,244,0.9)]">
                What I can offer
              </h3>
              <p className="text-sm leading-relaxed text-[rgba(251,249,244,0.72)]">
                What I can offer Production-scale React Native and TypeScript.
                Team lead experience on government-level projects. I ramp up
                fast, communicate clearly with clients, and have a track record
                of delivering on time in complex environments.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
