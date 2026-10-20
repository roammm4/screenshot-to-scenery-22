import { createFileRoute } from "@tanstack/react-router";
import { NetworkSection, PageIntro } from "@/components/arva/sections";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Our Network | ARVA Investment Holdings" },
      { name: "description", content: "ARVA's network: SofyanCorp and GOArva." },
      { property: "og:title", content: "Our Network | ARVA Investment Holdings" },
      { property: "og:description", content: "ARVA's network: SofyanCorp and GOArva." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NetworkPage,
});

function NetworkPage() {
  return (
    <>
      <PageIntro title="Our Network" />
      <NetworkSection />
    </>
  );
}
