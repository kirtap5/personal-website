import { useEffect, useState } from "react";
import { Container } from "../Container/Container";
import { cn } from "../../lib/cn";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Timeline", href: "#timeline" },
  { label: "Vision", href: "#vision" },
  // { label: "Situation", href: "#situation" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("top");

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.href.slice(1)),
    ).filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(31,47,40,0.15)] bg-[var(--color-paper)]/90 backdrop-blur-sm">
        <Container className="flex h-20 items-center justify-between text-xs tracking-[0.05em] text-[rgba(31,47,40,0.55)]">
          <ul className="hidden items-center gap-6 font-cormorant uppercase md:flex">
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeId === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setActiveId(id)}
                    className={cn(
                      "transition hover:text-[var(--color-ink)]",
                      isActive && "text-[var(--color-green-background)]",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-6 w-6 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={cn(
                "block h-px w-5 bg-current transition-transform duration-200",
                open && "translate-y-[6.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-current transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-current transition-transform duration-200",
                open && "-translate-y-[6.5px] -rotate-45",
              )}
            />
          </button>

          <a
            href="/cv.pdf"
            download="Patrik-Gerdelius-CV.pdf"
            className="font-cormorant uppercase decoration-[rgba(31,47,40,0.3)] transition hover:text-[var(--color-ink)] hover:decoration-[rgba(31,47,40,0.6)]"
          >
            CV
          </a>
        </Container>
      </nav>

      {open ? (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute inset-x-0 top-0 border-b border-[rgba(31,47,40,0.15)] bg-[var(--color-paper)] pt-20 pb-8 shadow-lg">
            <Container>
              <ul className="flex flex-col gap-6 pt-8 text-sm uppercase text-[rgba(31,47,40,0.7)]">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="transition hover:text-[var(--color-ink)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Container>
          </div>
        </div>
      ) : null}
    </>
  );
}
