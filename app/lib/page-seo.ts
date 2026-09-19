import type { Metadata } from "next";

export const SITE_ORIGIN = "https://www.fisioterapiamalavasi.it";

/** Used only by the new pages; inherited metadata on existing routes is untouched. */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | Fisioterapia Malavasi`;
  const url = `${SITE_ORIGIN}${path}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Fisioterapia Malavasi",
      locale: "it_IT",
      type: "website",
    },
    twitter: { card: "summary", title: fullTitle, description },
  };
}
