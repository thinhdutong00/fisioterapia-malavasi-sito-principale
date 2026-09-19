import type { MetadataRoute } from "next";
import { publicPagePaths } from "./data/site-routes";
import { SITE_ORIGIN } from "./lib/page-seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPagePaths.map((path) => ({ url: `${SITE_ORIGIN}${path}` }));
}
