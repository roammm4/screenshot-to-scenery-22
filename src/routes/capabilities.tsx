import { createFileRoute } from "@tanstack/react-router";
import { CapabilitiesSection, PageIntro } from "@/components/arva/sections";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Our Capabilities | ARVA Investment Holdings" },
      { name: "description", content: "Sustainable Human Capital Development, Responsible & Sustainable Governance, and Property / Real Estate Investment." },
      { property: "og:title", content: "Our Capabilities | ARVA Investment Holdings" },
      { property: "og:description", content: "Sustainable Human Capital Development, Responsible & Sustainable Governance, and Property / Real Estate Investment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CapabilitiesPage,
});

function CapabilitiesPage() {
  return (
    <>
      <PageIntro title="Our Capabilities" />
      <CapabilitiesSection />
    </>
  );
}
