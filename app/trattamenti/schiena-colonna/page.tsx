import HubPage from "@/app/components/new-pages/HubPage";
import { treatmentHubs } from "@/app/data/treatment-hubs";
import { pageMetadata } from "@/app/lib/page-seo";

const hub = treatmentHubs.find((item) => item.id === "schiena-colonna")!;
export const metadata = pageMetadata(hub.title, hub.description, hub.path);

export default function Page() {
  return <HubPage hub={hub} />;
}
