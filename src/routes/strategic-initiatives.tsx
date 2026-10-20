import { createFileRoute } from "@tanstack/react-router";
import { StrategicInitiativesSection } from "@/components/arva/sections";

export const Route = createFileRoute("/strategic-initiatives")({
  head: () => ({
    meta: [
      { title: "Strategic Initiatives | ARVA Investment Holdings" },
      { name: "description", content: "Strategic Initiatives to Accelerate Sustainable Muslim-Friendly Tourism Industry and Destination Development. Strategic Roadmap 2026–2045." },
      { property: "og:title", content: "Strategic Initiatives | ARVA Investment Holdings" },
      { property: "og:description", content: "Strategic Initiatives to Accelerate Sustainable Muslim-Friendly Tourism Industry and Destination Development. Strategic Roadmap 2026–2045." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InitiativesPage,
});

function InitiativesPage() {
  return (
    <>
      <StrategicInitiativesSection />
    </>
  );
}
