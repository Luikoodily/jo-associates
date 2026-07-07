import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";
import { GalleryGrid } from "@/components/gallery-grid";
import { CTA } from "@/components/cta";
import { galleryItems } from "@/data/projects";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse Jo Associates project gallery featuring panel rooms, HT works, cable dressing, architectural lighting and site execution across Kerala.",
};

const categories = Array.from(
  new Set(galleryItems.map((item) => item.category)),
).sort();

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Craftsmanship in every frame."
        description="A visual record of the panels we dress, the yards we energise and the teams that make it all happen on site."
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Our work"
            title="From substation yards to dressed server rooms"
            description={`${galleryItems.length} curated images across ${categories.length} categories of electrical excellence.`}
          />
          <div className="mt-14">
            <GalleryGrid items={galleryItems} />
          </div>
        </Container>
      </section>

      <CTA
        title="See something that matches your vision?"
        description="Walk us through your project and we will show you how we bring the same discipline to your site."
      />
    </>
  );
}
