import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE_ORIGIN } from "@/app/lib/page-seo";

export type BreadcrumbItem = { label: string; href: string };

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_ORIGIN}${item.href}`,
    })),
  };
  return (
    <>
      <nav aria-label="Percorso di navigazione" className="mb-10 text-xs md:text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-2">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2 min-w-0">
              {index > 0 && <ChevronRight size={14} className="shrink-0" aria-hidden="true" />}
              {index === items.length - 1 ? (
                <span aria-current="page" className="font-semibold text-[#022166]">{item.label}</span>
              ) : (
                <Link href={item.href} prefetch={false} className="hover:text-[#022166] rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#022166]">{item.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </>
  );
}
