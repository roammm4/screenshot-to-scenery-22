import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, PillarGrid } from "@/components/arva/sections";

export const Route = createFileRoute("/contribution")({
  head: () => ({
    meta: [
      { title: "Our Contribution | ARVA Investment Holdings" },
      { name: "description", content: "Enhancing Industry and Destination Competitiveness, Marketing Development and Big Data Platform, Ecosystem and Institutional Development." },
      { property: "og:title", content: "Our Contribution | ARVA Investment Holdings" },
      { property: "og:description", content: "Enhancing Industry and Destination Competitiveness, Marketing Development and Big Data Platform, Ecosystem and Institutional Development." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContributionPage,
});

function ContributionPage() {
  return (
    <>
      <PageIntro title="Our Contribution" />
      <section className="container-arva py-16 md:py-20"><PillarGrid /></section>
    </>
  );
}
