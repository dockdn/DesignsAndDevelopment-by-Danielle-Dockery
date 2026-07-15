import { BackToHomeLink } from "@/components/BackToHomeLink";
import { ComingSoonPage } from "@/components/ComingSoonPage";

export default function ServicesPage() {
  return (
    <>
      <BackToHomeLink />
      <ComingSoonPage
        eyebrow="Services"
        title="Services"
        description="Expanded service details, engagement examples, and future service-specific content will be added here soon."
      />
    </>
  );
}
