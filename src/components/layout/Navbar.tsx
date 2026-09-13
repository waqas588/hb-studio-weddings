"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 bg-ink py-4 shadow-[0_1px_0_0_rgba(27,24,21,0.28)]"
    >
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "font-display text-lg font-medium tracking-widest2 text-ivory transition-colors duration-300 hover:text-gold-light"
          )}
        >
          HB STUDIO WEDDINGS
        </Link>

        <nav
          className="hidden items-center gap-9 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative text-sm font-medium tracking-wide text-ivory/80 transition-colors duration-300 hover:text-gold-light after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-editorial hover:after:scale-x-100",
                  "text-ivory/80",
                  active && "after:scale-x-100"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            href="/contact"
            variant="secondary"
            className="px-6 py-2.5 text-xs tracking-widest2"
          >
            Book Now
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "-mr-2 flex h-10 w-10 items-center justify-center lg:hidden",
            "text-ivory"
          )}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-ivory/10 bg-ink lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-ivory/10 py-4 text-lg font-medium text-ivory transition-colors duration-300 hover:border-gold-light hover:text-gold-light"
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" variant="primary" className="mt-6 w-full">
                Book Now
              </Button>
              {siteConfig.contact.whatsAppUrl && (
                <a
                  href={siteConfig.contact.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-center text-sm text-ivory/60"
                >
                  Message on WhatsApp
                </a>
              )}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
