import MusculoskeletalPage from "@/app/components/new-pages/MusculoskeletalPage";
import { musculoskeletalTreatments } from "@/app/data/musculoskeletal";
import { pageMetadata } from "@/app/lib/page-seo";

const treatment = musculoskeletalTreatments["dito-a-scatto"];

export const metadata = pageMetadata(treatment.label, treatment.description, treatment.path);

export default function Page() {
  return <MusculoskeletalPage treatment={treatment} />;
}
