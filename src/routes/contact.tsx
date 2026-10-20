import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/arva/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | ARVA Investment Holdings" },
      { name: "description", content: "Contact ARVA Investment Holdings by telephone, mobile, or email." },
      { property: "og:title", content: "Contact | ARVA Investment Holdings" },
      { property: "og:description", content: "Contact ARVA Investment Holdings by telephone, mobile, or email." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <ContactSection />
    </>
  );
}
