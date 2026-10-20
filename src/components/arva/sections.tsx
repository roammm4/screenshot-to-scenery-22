import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Logo, NAV } from "./SiteHeader";
import building from "@/assets/hero-building.jpg.asset.json";
import capHuman from "@/assets/cap-human.jpg.asset.json";
import capGov from "@/assets/cap-governance.jpg.asset.json";
import capProp from "@/assets/cap-property.jpg.asset.json";
import type { ReactNode } from "react";

export function PageIntro({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <section className="container-arva pt-16 pb-4 md:pt-24">
      <p className="eyebrow mb-4">ARVA Investment Holdings</p>
      <h1 className="text-4xl md:text-6xl text-foreground">{title}</h1>
      {children}
    </section>
  );
}

export function Hero() {
  return (
    <section className="container-arva grid gap-10 py-14 md:grid-cols-[1.2fr_1fr] md:items-center md:py-20">
      <div>
        <p className="eyebrow mb-8">ARVA Investment Holdings</p>
        <h1 className="text-4xl leading-[1.1] sm:text-5xl lg:text-6xl text-foreground">
          Investing in People.
          <br />
          Advancing Responsible Governance.
          <br />
          <span className="text-burgundy">Building Sustainable Prosperity.</span>
        </h1>
        <a href="#we-aim" className="mt-10 inline-flex items-center gap-2 text-xs hover:text-burgundy">
          We Aim &amp; Our Commitment <span className="text-burgundy">↓</span>
        </a>
      </div>
      <figure>
        <img src={building.url} alt="ARVA green architecture building" className="aspect-[4/5] w-full object-cover" />
        <figcaption className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
          ARVA Investment Holdings <ArrowUpRight className="h-3 w-3 text-burgundy" />
        </figcaption>
      </figure>
    </section>
  );
}

export function WeAim() {
  return (
    <section id="we-aim" className="relative overflow-hidden">
      <img src={building.url} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover blur-[2px] scale-110" />
      <div className="absolute inset-0 aim-overlay" />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
        <Logo className="mx-auto h-10 md:h-12" />
        <p className="eyebrow mt-6 !text-foreground">We Aim</p>
        <p className="mt-4 font-serif text-xl leading-snug md:text-[1.6rem] text-foreground">
          We aim to be a leading platform connecting people, academia, businesses, industry, NGOs, government, media,
          and other stakeholders to advance responsible governance, sustainable value creation, and shared prosperity,
          enhancing human well-being across generations.
        </p>
        <div className="mx-auto my-8 h-px w-10 bg-foreground" />
        <p className="eyebrow">Our Commitment</p>
        <p className="mt-4 font-serif text-base leading-relaxed md:text-lg text-burgundy">
          Our Commitment to foster a dynamic and collaborative platform for innovation, knowledge exchange, and
          strategic partnerships, transforming shared challenges into opportunities for sustainable growth,
          resilience, and lasting impact; advancing through three core strategic initiatives: Sustainable Human
          Capital Development, Responsible and and Sustainable Governance, and Property/Real Estate Investment,
          creating long-term value and shared prosperity for present and future generations.
        </p>
      </div>
    </section>
  );
}

export function BackgroundSection() {
  const challenges = [
    "Lack of unified platform for collaboration",
    "Incompatible data formats and systems",
    "Unclear governance and accountability",
    "Limited interoperability between sectors",
  ];
  const gaps = [
    "Need for frameworks on ecosystem orchestration",
    "Limited studies on cross-sector value creation models",
    "Lack of metrics for measuring ecosystem performance",
    "Research needed on sustainable governance mechanisms",
  ];
  return (
    <section className="container-arva py-16 md:py-24">
      <div className="grid gap-6 md:grid-cols-[1fr_1.4fr]">
        <h2 className="text-3xl md:text-4xl">Background</h2>
        <p className="font-serif text-lg md:text-xl leading-snug">
          Resources and assets exist, but fragmented stakeholders, services, data, standards, and governance prevent an
          integrated ecosystem.
        </p>
      </div>
      <div className="mt-10 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-6">
        <div className="bg-cream p-6 md:p-8 min-h-32">
          <h3 className="text-lg">Distributed Resources</h3>
          <p className="mt-3 text-xs">Fragmented assets, inconsistent standards, and siloed data.</p>
        </div>
        <div className="self-center text-center font-serif text-2xl text-burgundy" aria-label="is not equal to">≠</div>
        <div className="bg-navy p-6 md:p-8 text-navy-foreground min-h-32">
          <h3 className="text-lg">Ecosystem Capability</h3>
          <p className="mt-3 text-xs leading-relaxed">
            Strategic alignment, data sharing, service assurance standards, and cross-sector value creation.
          </p>
        </div>
      </div>
      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
        {[["Practical Challenges", challenges], ["Scientific Research Gap", gaps]].map(([t, items]) => (
          <div key={t as string} className="border-t pt-6">
            <h3 className="text-lg">{t as string}</h3>
            <ul className="dash-list mt-5 space-y-3 text-xs">
              {(items as string[]).map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function BridgingSection() {
  const rows = [
    ["Tourism & Hospitality", "Services, Transactions, Customer Journeys"],
    ["Religion & Heritage", "Religious Tourism, Education, Experiences"],
    ["Institutions & Human Capital", "Research, Talent, Innovation"],
    ["Social Capital & Networks", "Collaboration, Distribution, Market Referrals"],
    ["Creativity & Identity", "Differentiation, Creative Products, Branding"],
  ];
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container-arva">
        <h2 className="max-w-xl text-3xl md:text-4xl leading-tight">Bridging Resources to Ecosystem Functions</h2>
        <div className="mt-10 hidden grid-cols-[1fr_2rem_1.4fr] gap-4 pb-4 md:grid">
          <p className="eyebrow">Resource Base</p><span />
          <p className="eyebrow">Potential Ecosystem Functions</p>
        </div>
        <ul className="mt-6 md:mt-0">
          {rows.map(([a, b]) => (
            <li key={a} className="grid gap-2 border-t py-5 md:grid-cols-[1fr_2rem_1.4fr] md:items-center md:gap-4">
              <span className="font-serif text-lg">{a}</span>
              <ArrowRight className="hidden h-4 w-4 text-burgundy md:block" />
              <span className="text-xs text-muted-foreground md:text-foreground">{b}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-xl border-l-2 border-burgundy pl-4 text-xs leading-relaxed">
          High-value assets and resources do not, by themselves, create an ecosystem without governance mechanisms and
          capability transformation.
        </p>
      </div>
    </section>
  );
}

export function AcceleratorSection() {
  const rows = [
    ["The Opportunity", "Capitalizing on the global Muslim market opportunity."],
    ["The Paradigm", "Moving beyond compliance to exceptional Halal-friendly experiences."],
    ["The Blueprint", "Designing immersive experiences using the 5A Framework."],
    ["The Engine", "Driving ecosystem transformation through Business, Digital & AI Integration."],
    ["The Vision", "Indonesia: A Global Leader in the Sustainable Halal Industry."],
  ];
  return (
    <section className="bg-navy py-16 text-navy-foreground md:py-24">
      <div className="container-arva">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-3xl md:text-4xl leading-tight">Key Strategic<br />Accelerator</h2>
            <ArrowUpRight className="mt-8 h-6 w-6 opacity-70" />
          </div>
          <ul>
            {rows.map(([a, b]) => (
              <li key={a} className="grid gap-2 border-t border-navy-line py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <span className="font-serif text-lg">{a}</span>
                <span className="text-xs leading-relaxed opacity-90">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-12 border-t border-navy-line pt-8 font-serif text-xl md:text-2xl">
          Strategic Roadmap: Collaborative Efforts, Decisive Actions, Clear Timelines, and Measurable KPIs.
        </p>
      </div>
    </section>
  );
}

export const PILLARS = [
  { title: "Enhancing Industry and Destination Competitiveness", items: ["Ratings, Rankings & Awards", "Research & Reports"] },
  {
    title: "Marketing Development and Big Data Platform",
    items: ["International Halal in Tourism Summit", "Familiarization Trips, Sales Missions, and B2B & B2C Travel Fairs", "Muslim-Friendly Tourism Guide"],
  },
  { title: "Ecosystem and Institutional Development", items: ["Capacity Building", "Technical Assistance and Training", "Advocacy"] },
];

export function PillarGrid() {
  return (
    <div className="grid gap-10 md:grid-cols-3 md:gap-8">
      {PILLARS.map((p) => (
        <div key={p.title} className="border-t pt-5">
          <h3 className="font-sans text-xs font-semibold uppercase leading-relaxed">{p.title}</h3>
          <ul className="dash-list mt-5 space-y-3 text-xs">
            {p.items.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function StrategicInitiativesSection() {
  return (
    <section className="container-arva py-16 md:py-24">
      <h2 className="max-w-3xl text-2xl uppercase leading-tight md:text-4xl">
        Strategic Initiatives to Accelerate Sustainable Muslim-Friendly Tourism Industry and Destination Development
      </h2>
      <div className="mt-10 bg-cream p-6 md:p-8">
        <h3 className="text-2xl text-burgundy md:text-3xl">Strategic Roadmap 2026–2045</h3>
        <div className="mt-6 grid grid-cols-2 gap-4 border-t pt-6 text-xs font-medium md:grid-cols-4">
          {["Collaborative Efforts", "Decisive Actions", "Clear Timelines", "Measurable KPIs"].map((t) => <span key={t}>{t}</span>)}
        </div>
      </div>
      <div className="mt-12"><PillarGrid /></div>
    </section>
  );
}

const CAPS = [
  {
    n: "01", title: "Sustainable Human Capital Development",
    items: [
      "Professional Development Program For Halal Industry Professionals And Business Players",
      "Halal Industry Management Training Consultant",
      "Mutual Recognition Training Certification Among ASEAN Countries For Halal Industry Professionals And Business Players",
    ],
  },
  {
    n: "02", title: "Responsible & Sustainable Governance",
    items: ["Responsible & Sustainable Governance Consultant", "Integrated Ethical Governance & Management Consultant For Business Entities Hub"],
  },
  {
    n: "03", title: "Property / Real Estate Investment",
    items: ["Property Consultant & Management For Integrated Global Halal Industry Value Supply Chain For Business Entities Hub"],
  },
];

const CAP_DETAILS = [
  {
    label: "Capability 01", title: "Sustainable Human Capital Development", img: capHuman.url,
    paras: [
      "ARVA supports sustainable human capital development through Professional Development Programs for Halal Industry Professionals and Business Players, Halal Industry Management Training Consultancy, and Mutual Recognition Training Certification among ASEAN Countries for Halal Industry Professionals and Business Players.",
      "Through these initiatives, ARVA focuses on professional development, industry management training, and mutual recognition of training certification across ASEAN countries for professionals and business players in the halal industry.",
    ],
  },
  {
    label: "Capability 02", title: "Responsible & Sustainable Governance", img: capGov.url,
    paras: [
      "Responsible & Sustainable Governance Consultancy integrates ethical governance and management consulting to help organizations strengthen accountability, promote ethical decision-making, implement responsible business practices, and improve organizational effectiveness, fostering sustainable and wellgoverned institutions and business entities.",
    ],
  },
  {
    label: "Capability 03", title: "Property & Real Estate Investment", img: capProp.url,
    paras: [
      "ARVA provides Property Consultancy & Management for Integrated Global Halal Industry Value Supply Chain for Business Entities Hub.",
      "This capability focuses on property consultancy and management in support of an integrated global halal industry value supply chain, serving the property-related needs of business entities within the hub.",
    ],
  },
];

export function CapabilitiesSection() {
  return (
    <section className="container-arva py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {CAPS.map((c) => (
          <div key={c.n}>
            <p className="font-serif text-4xl text-burgundy">{c.n}</p>
            <h3 className="mt-4 min-h-10 border-b pb-6 font-sans text-xs font-semibold uppercase leading-relaxed">{c.title}</h3>
            <ul className="dash-list mt-5 space-y-3 text-xs leading-relaxed">
              {c.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-16">
        {CAP_DETAILS.map((d, i) => (
          <article key={d.label} className="grid gap-8 border-t py-12 md:grid-cols-2 md:items-center md:gap-12">
            <img src={d.img} alt={d.title} loading="lazy" className={`aspect-[16/15] w-full object-cover ${i % 2 ? "md:order-2" : ""}`} />
            <div>
              <p className="eyebrow">{d.label}</p>
              <h3 className="mt-4 text-3xl leading-tight">{d.title}</h3>
              {d.paras.map((p) => <p key={p.slice(0, 20)} className="mt-5 text-sm leading-relaxed">{p}</p>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AcknowledgementSection() {
  const items = [
    ["The 500 Who Make the Islamic Economy", "ISLAMICA 500 2019."],
    ["Satyalancana Tourism Medal of Honor", "From President of the Republic of Indonesia, 2018."],
    ["Halal Hotel Pioneers", "In Halal in Travel Awards 2022, Singapore."],
    ["World's Best Family Friendly Hotel", "In World Halal Travel Awards 2015, Abu Dhabi, UAE."],
    ["Certificate of Excellence", "From the Minister of Tourism, Republic of Indonesia in developing Halal Tourism Industry, 2019."],
    ["Letter of Appreciation", "From the Vice Minister of Land, Infrastructure, Transport, and Tourism, Japan, 2014."],
  ];
  return (
    <section className="container-arva py-16 md:py-20">
      <ul className="grid gap-x-12 md:grid-cols-2">
        {items.map(([t, d]) => (
          <li key={t} className="border-t py-6">
            <h3 className="text-xl">{t}</h3>
            <p className="mt-3 text-xs leading-relaxed">{d}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function NetworkSection() {
  return (
    <section className="container-arva py-16 md:py-20">
      <div className="grid gap-5 md:grid-cols-2">
        <a href="https://sofyancorp.com" target="_blank" rel="noreferrer" className="group flex min-h-64 flex-col justify-between bg-cream p-6 md:p-8">
          <span className="block h-px w-8 bg-foreground" />
          <span className="font-serif text-4xl text-burgundy md:text-5xl">SofyanCorp</span>
          <span className="flex items-center justify-between text-xs text-burgundy underline underline-offset-4">
            sofyancorp.com <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </a>
        <a href="https://goarva.id" target="_blank" rel="noreferrer" className="group flex min-h-64 flex-col justify-between bg-navy p-6 text-navy-foreground md:p-8">
          <span className="flex items-center justify-between text-xs underline underline-offset-4">
            goarva.id <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
          <span className="border-t border-navy-line pt-6 text-right font-sans text-4xl md:text-5xl">GOArva</span>
        </a>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="container-arva py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr_1.4fr]">
        <h2 className="text-3xl md:text-4xl">Contact</h2>
        <div className="space-y-4 text-xs">
          <h3 className="text-xl">Office</h3>
          <p>Telephone. <a href="tel:0213905971" className="hover:text-burgundy">021-3905971</a> / <a href="tel:0218905972" className="hover:text-burgundy">021-8905972</a></p>
          <p>Mobile. <a href="tel:085215251984" className="hover:text-burgundy">085215251984</a> / <a href="tel:08121922121" className="hover:text-burgundy">0812-1922-121</a></p>
        </div>
        <div className="space-y-4 text-xs">
          <a href="https://arva.website" target="_blank" rel="noreferrer" className="block font-serif text-xl text-burgundy underline underline-offset-4">arva.website</a>
          <p>Email. <a href="mailto:riyanto.Sofyan@sofyancorp.com" className="hover:text-burgundy">riyanto.Sofyan@sofyancorp.com</a></p>
          <p>Mobile. <a href="tel:0811903505" className="hover:text-burgundy">0811-903-505</a> / <a href="tel:0816808708" className="hover:text-burgundy">0816-808-708</a></p>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-cream">
      <div className="container-arva py-10">
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 border-b pb-8 text-xs">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="hover:text-burgundy data-[status=active]:text-burgundy">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-between pt-8">
          <Logo className="h-8" />
          <span className="text-[10px] text-muted-foreground">ARVA Investment Holdings</span>
        </div>
      </div>
    </footer>
  );
}
