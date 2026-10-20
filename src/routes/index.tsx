import { createFileRoute } from "@tanstack/react-router";
import { Hero, WeAim } from "@/components/arva/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARVA Investment Holdings | Investing in People" },
      { name: "description", content: "Investing in People. Advancing Responsible Governance. Building Sustainable Prosperity." },
      { property: "og:title", content: "ARVA Investment Holdings | Investing in People" },
      { property: "og:description", content: "Investing in People. Advancing Responsible Governance. Building Sustainable Prosperity." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <WeAim />
    </>
  );
}
