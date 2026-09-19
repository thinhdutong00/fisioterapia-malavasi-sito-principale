import LocationPage from "@/app/components/new-pages/LocationPage";
import { locations } from "@/app/data/locations";
import { pageMetadata } from "@/app/lib/page-seo";

const location = locations["rovereto-sulla-secchia"];
export const metadata = pageMetadata(`Fisioterapia a ${location.name}`, location.description, location.path);

export default function Page() {
  return <LocationPage locationKey="rovereto-sulla-secchia" />;
}
