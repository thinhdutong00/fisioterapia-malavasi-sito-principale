import SpecialistPage from "@/app/components/new-pages/SpecialistPage";
import { specialistPages } from "@/app/data/specialist-pages";
import { pageMetadata } from "@/app/lib/page-seo";

const page = specialistPages.intestino;

export const metadata = pageMetadata(page.title, page.description, page.path);

export default function Page() {
  return <SpecialistPage page={page} />;
}
