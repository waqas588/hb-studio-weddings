"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink">
      <Image
        src="/images/about/IMG_3905.jpeg"
        alt="A wedding couple walking beside a pool in a tropical garden"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10"
      />

      <Container className="relative z-10 pb-20 pt-40 sm:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs tracking-widest2 text-gold-light"
        >
          HB STUDIO / VISUAL PRODUCTION
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-3xl font-display text-5xl italic leading-[1.1] text-ivory sm:text-6xl md:text-7xl"
        >
          Make the Work
          <br />
          Impossible to Ignore.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg"
        >
          Photography and cinematic films for brands, corporate events,
          products and fashion with a point of view.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="/portfolio" variant="secondary">
            View Portfolio
          </Button>
          <Button href="/contact" variant="primary" className="bg-gold-dark hover:bg-gold">
            Book Now
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
