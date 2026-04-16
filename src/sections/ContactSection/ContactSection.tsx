import { Container, Image } from "../../components";
import personImg from "../../assets/person.png";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-paper)] py-16 sm:py-24 min-h-screen"
    >
      <Container>
        <div className="grid items-middle gap-12 lg:grid-cols-12 mt-10 lg:mt-20">
          <div className="space-y-2 lg:col-span-6">
            <div className="text-xs tracking-[0.35em] text-[rgba(31,47,40,0.55)]">
              Patrik Gerdelius
            </div>
            <h2 className="font-didot text-5xl leading-tight tracking-wide text-[var(--color-ink)] sm:text-6xl">
              LET'S CONNECT
              <br />
              FURTHER
            </h2>
            <h2 className="text-sm leading-relaxed text-[rgba(31,47,40,0.6)] md:mr-auto md:ml-0">
              I'm currently open to opportunities from remote or based in Seoul,
              South Korea.
            </h2>
          </div>

          <div className="lg:col-span-6 lg:flex lg:justify-end">
            <div className="w-full max-w-sm">
              <Image
                src={personImg}
                alt="Portrait"
                rounded="md"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 lg:mt-20 grid gap-10 border-t border-[rgba(31,47,40,0.15)] pt-10 sm:grid-cols-2 lg:grid-cols-4 justify-content:space-around">
          <div className="space-y-1">
            <div className="w-fit m-auto">

            <div className="text-xs tracking-[0.35em] text-[rgba(31,47,40,0.55)]">
              Email
            </div>
            <a
              href="mailto:patrik@example.com"
              className="inline-flex font-serif text-sm tracking-wide text-[var(--color-ink)] underline decoration-[rgba(31,47,40,0.25)] underline-offset-4 hover:decoration-[rgba(31,47,40,0.5)]"
              >
              patrik.gerdelius@hotmail.com
            </a>
              </div>
          </div>
          <div className="space-y-1">
            <div className="w-fit m-auto">

            <div className="text-xs tracking-[0.35em] text-[rgba(31,47,40,0.55)]">
              Phone
            </div>
            <div className="font-serif text-sm tracking-wide text-[var(--color-ink)]">
              +46 72 527 48 61
            </div>
            </div>

          </div>
          <div className="space-y-1">
            <div className="w-fit m-auto">

            <div className="text-xs tracking-[0.35em] text-[rgba(31,47,40,0.55)]">
              LinkedIn
            </div>
            <a
              href="https://www.linkedin.com/in/patrikgerdelius/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex font-serif text-sm tracking-wide text-[var(--color-ink)] underline decoration-[rgba(31,47,40,0.25)] underline-offset-4 hover:decoration-[rgba(31,47,40,0.5)]"
            >
              Patrik Gerdelius
            </a>
            </div>

          </div>
          <div className="space-y-1">
            <div className="w-fit m-auto">

            <div className="text-xs tracking-[0.35em] text-[rgba(31,47,40,0.55)]">
              CV
            </div>
            <a
              href="#"
              className="inline-flex font-serif text-sm tracking-wide text-[var(--color-ink)] underline decoration-[rgba(31,47,40,0.25)] underline-offset-4 hover:decoration-[rgba(31,47,40,0.5)]"
            >
              Download PDF
            </a>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
