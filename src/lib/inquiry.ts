const inquiryServiceAliases: Record<string, string> = {
  "Website Design and Development": "Website Design & Development",
  "Mobile App Solutions": "Mobile App Development",
  "Mobile Business Applications": "Mobile App Development",
  "UI and UX Design": "Branding or Graphic Design",
  "Custom Digital Solution": "Other / Not Sure Yet",
  "Custom Digital Solutions": "Other / Not Sure Yet",
  "Not Sure Yet": "Other / Not Sure Yet",
};

export const inquiryServiceOptions = [
  "Website Design & Development",
  "Business Starter",
  "Growth Website",
  "Business Platform",
  "E-Commerce",
  "Presentation Design",
  "Essential Presentation",
  "Interactive Presentation",
  "Custom Presentation System",
  "Mobile App Development",
  "Workflow Starter",
  "Operational App",
  "Custom App System",
  "Branding or Graphic Design",
  "Multiple Services",
  "Other / Not Sure Yet",
] as const;

const packageInquiryOptions = new Set<string>([
  "Business Starter",
  "Growth Website",
  "Business Platform",
  "E-Commerce",
  "Essential Presentation",
  "Interactive Presentation",
  "Custom Presentation System",
  "Workflow Starter",
  "Operational App",
  "Custom App System",
]);

export function buildInquiryHref(service?: string, enhancement?: string) {
  const searchParams = new URLSearchParams();

  if (service) {
    searchParams.set("service", service);
  }

  if (enhancement) {
    searchParams.set("enhancement", enhancement);
  }

  const query = searchParams.toString();
  return query ? `/?${query}#start-project` : "/#start-project";
}

export function normalizeInquiryService(service: string | null) {
  if (!service) {
    return null;
  }

  const normalizedService = inquiryServiceAliases[service] ?? service;
  return inquiryServiceOptions.includes(normalizedService as (typeof inquiryServiceOptions)[number])
    ? normalizedService
    : null;
}

export function getInquiryDescriptionPrefill(service: string | null, enhancement: string | null) {
  if (service === "Multiple Services") {
    return "";
  }

  if (service && packageInquiryOptions.has(service)) {
    return `I'm interested in the ${service} package. Here are some additional details about my project:`;
  }

  if (enhancement) {
    return `I'm interested in the ${enhancement} add-on. Here are some additional details about my project:`;
  }

  return "";
}
