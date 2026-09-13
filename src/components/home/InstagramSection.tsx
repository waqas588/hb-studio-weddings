import Image from "next/image";
import { Instagram } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { galleryImages } from "@/data/gallery";

export default function InstagramSection() {
  const gridImages = galleryImages.slice(0, 6);

  return (
    <section className="section bg-ivory">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <SectionHeading title="Follow Our Stories" align="center" />
          <div className="mt-6">
            {siteConfig.contact.instagramUrl ? (
              <Button href={siteConfig.contact.instagramUrl} variant="ghost">
                <Instagram className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                Follow on Instagram
              </Button>
            ) : (
              <p className="text-sm text-charcoal/50">
                Instagram link to be added
              </p>
            )}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-6">
          {gridImages.map((img) => (
            <div key={img.id} className="relative aspect-square overflow-hidden bg-charcoal/5">
              <Image
                src={img.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 ease-editorial hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
