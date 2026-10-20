import { createFileRoute } from "@tanstack/react-router";
import { BackgroundSection, BridgingSection, AcceleratorSection } from "@/components/arva/sections";

export const Route = createFileRoute("/background")({
  head: () => ({
    meta: [
      { title: "Background | ARVA Investment Holdings" },
      { name: "description", content: "Resources and assets exist, but fragmented stakeholders, services, data, standards, and governance prevent an integrated ecosystem." },
      { property: "og:title", content: "Background | ARVA Investment Holdings" },
      { property: "og:description", content: "Resources and assets exist, but fragmented stakeholders, services, data, standards, and governance prevent an integrated ecosystem." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BackgroundPage,
});

function BackgroundPage() {
  return (
    <>
      <BackgroundSection />
      <BridgingSection />
      <AcceleratorSection />
    </>
  );
}
