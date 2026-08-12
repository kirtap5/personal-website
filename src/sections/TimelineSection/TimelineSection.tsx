import {
  AnimatedCircleLink,
  BackgroundSquares,
  Container,
  SectionTitle,
  Timeline,
  type TimelineItemModel,
} from "../../components";

export function TimelineSection() {
  const items: TimelineItemModel[] = [
    {
      id: "netcompany",
      side: "left",
      title: "IT Consultant",
      subtitle: "Netcompany A/S",
      meta: "Copenhagen, Denmark",
      dateRange: "April 2024 – Ongoing",
      description:
        "Senior-track consultancy at one of the Nordic region's largest IT firms. Took on both a delivery leadership role and hands-on engineering across mobile and web, working with the full stack.",
      bullets: [
        {
          text: "Lead Developer on two nation-wide React Native apps built from scratch for a Danish government body. One of which is only distributed internally. Preview of the public app can be found here:",
          href: "https://apps.apple.com/us/app/jordbrugsfoto/id6740770543",
          linkLabel: "Jordbrugsfoto on the App Store",
        },
        "Team Lead across developers and testers — PI planning, workload ownership, scope alignment with client",
        "Maintained a complex national agricultural map system in .NET/C# and Angular",
        "Set up and owned the team's Azure DevOps environment — pipelines, branch strategy, and workflows",
      ],
    },
    {
      id: "swace",
      side: "right",
      title: "Software Engineer",
      subtitle: "Swace Digital",
      meta: "Uppsala, Sweden",
      dateRange: "Mar 2023 – Feb 2024",
      description:
        "Consultancy work with a clear focus on modern frontend architecture and backend integrations. Operated within a real CI/CD workflow, collaborating closely with clients to ship production-quality work.",
      bullets: [
        {
          text: "Built a headless React frontend against WordPress CMS with GraphQL as the data layer",
          href: "https://funasfjallen.se",
          linkLabel: "Funasfjällen.se",
        },
        "Implemented backend cron jobs for live weather and housing data via external API endpoints",
        "Maintained high code quality through direct client collaboration in CI/CD processes",
      ],
    },
    {
      id: "plick",
      side: "left",
      title: "Master's Thesis",
      subtitle: "Plick AB",
      meta: "Stockholm, Sweden",
      dateRange: "Sep 2023 – Jan 2024",
      description:
        "Applied research embedded inside a product company with over a million active users — not a sandbox exercise. The thesis tackled real fraud at scale using machine learning on live data.",
      bullets: [
        "Designed a fraud detection system using outlier analysis on a 1M+ user platform",
        "Trained a neural network for large-scale pattern recognition using PyTorch and Scikit-learn",
        "Processed and queried production-scale datasets through BigQuery and Pandas",
      ],
    },
    {
      id: "yonsei",
      side: "right",
      title: "Studies Abroad",
      subtitle: "Yonsei University",
      meta: "Seoul, South Korea",
      dateRange: "Aug 2021 – Jun 2022",
      description:
        "A year embedded in one of Asia's top technical universities. Took on challenging CS coursework while adapting to a completely different academic and cultural environment — a strong signal of initiative and adaptability.",
      bullets: [
        "Coursework in Computer Vision and Data Mining",
        "Korean language studies alongside a full technical curriculum",
      ],
    },
    {
      id: "techover",
      side: "left",
      title: "Front End Developer",
      subtitle: "Techover",
      meta: "Stockholm, Sweden",
      dateRange: "Feb 2020 – May 2021",
      description:
        "First professional role straight into end-to-end delivery — not just UI work, but full project ownership from design through release. Solid grounding in the React ecosystem early in the career.",
      bullets: [
        "Delivered full-cycle projects in React and React Native from prototype to production",
        "Redux state management and third-party API integration",
        "Worked across the stack with a focus on scalable, maintainable frontend architecture",
      ],
    },
    {
      id: "msc",
      side: "right",
      title: "M.Sc. Sociotechnical Systems Engineering",
      subtitle: "Uppsala University",
      meta: "Uppsala, Sweden",
      dateRange: "Aug 2018 – Jan 2024",
      description:
        "A genuinely interdisciplinary degree that goes beyond pure computer science — covering how technology integrates with organisations and people. Strong technical foundation in Java, Python, React, and SQL, with a systems-thinking lens baked in.",
      bullets: [
        "Interdisciplinary program combining software engineering with organisational and human factors",
        "Core technical grounding in Java, Python, React, and SQL",
        "Thesis research in applied machine learning and fraud detection",
      ],
    },
  ];

  return (
    <section
      id="timeline"
      className="bg-[var(--color-paper)] py-16 sm:py-24 relative lg:mb-10"
    >
      <BackgroundSquares className="z-0" />

      <Container className="relative z-10">
        <SectionTitle
          eyebrow="Professional"
          title="Timeline"
          stacked
          className="mb-10 sm:mb-14"
        />

        <div className="mt-14">
          <Timeline items={items} />
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        <div className="absolute right-8 top-40 pointer-events-auto">
          <AnimatedCircleLink
            href="/cv.pdf"
            download="Patrik-Gerdelius-CV.pdf"
            ariaLabel="Download my CV"
            direction="right"
            delayMs={120}
          >
            Check out my CV
          </AnimatedCircleLink>
        </div>
        <div className="absolute bottom-0 left-8 pointer-events-auto">
          <AnimatedCircleLink
            href="#contact"
            ariaLabel="Jump to contact section"
            direction="left"
            delayMs={220}
          >
            Reach out to me
          </AnimatedCircleLink>
        </div>
      </div>
    </section>
  );
}
