import { createFileRoute } from "@tanstack/react-router";
import { AcknowledgementSection, PageIntro } from "@/components/arva/sections";

export const Route = createFileRoute("/acknowledgement")({
  head: () => ({
    meta: [
      { title: "Our Acknowledgement | ARVA Investment Holdings" },
      { name: "description", content: "Awards and recognition including ISLAMICA 500 2019 and the Satyalancana Tourism Medal of Honor." },
      { property: "og:title", content: "Our Acknowledgement | ARVA Investment Holdings" },
      { property: "og:description", content: "Awards and recognition including ISLAMICA 500 2019 and the Satyalancana Tourism Medal of Honor." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AcknowledgementPage,
});

function AcknowledgementPage() {
  return (
    <>
      <PageIntro title="Our Acknowledgement" />
      <AcknowledgementSection />
    </>
  );
}
