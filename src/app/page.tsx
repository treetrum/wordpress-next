import { PageLayout } from "@/layouts/page";
import { getPage, getSiteSettings } from "@/server/actions";

interface Params {
  slug: string;
}

export const generateMetadata = async () => {
  const meta = await getSiteSettings();
  return { title: meta.title };
};

export default async function Home({ params }: { params: Params }) {
  const page = await getPage(params.slug);
  return <PageLayout page={page} />;
}
