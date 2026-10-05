"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative flex h-[calc(100svh-5rem)] min-h-[560px] w-full items-start overflow-hidden bg-ink">
      <Image
        src="/images/hero/IMG_4746.JPG.jpeg"
        alt="A newlywed couple sharing a quiet moment beside a sunlit window"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/30 to-transparent"
      />

      <Container className="relative z-10 pt-4 md:pt-5">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs tracking-widest2 text-gold-light"
        >
          WELCOME TO HB STUDIO WEDDINGS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 max-w-2xl font-display text-4xl italic leading-[1.05] text-ivory sm:text-5xl md:text-6xl"
        >
          Stories Worth
          <br />
          Reliving.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg"
        >
          Wedding photography and cinematic films crafted with a quiet,
          editorial eye for the moments that matter most.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex flex-col gap-4 sm:flex-row"
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
