import Link from "next/link";
import { Facebook, Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { legalLinks, navLinks, siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hairline bg-ink text-ivory">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-display text-xl tracking-widest2">HB STUDIO WEDDINGS</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">
            {siteConfig.description}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-xs tracking-widest2 text-ivory/50">Explore</h2>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ivory/80 transition-colors hover:text-gold-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs tracking-widest2 text-ivory/50">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-ivory/80">
            <li>
              {siteConfig.contact.email ? (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold-light"
                >
                  <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-ivory/40">
                  <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  Email to be added
                </span>
              )}
            </li>
            <li>
              {siteConfig.contact.facebookUrl ? (
                <a
                  href={siteConfig.contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold-light"
                >
                  <Facebook className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  Facebook
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-ivory/40">
                  <Facebook className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  Facebook to be added
                </span>
              )}
            </li>
            <li>
              {siteConfig.contact.phone ? (
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold-light"
                >
                  <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  {siteConfig.contact.phone}
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-ivory/40">
                  <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  Phone to be added
                </span>
              )}
            </li>
            <li>
              {siteConfig.contact.whatsAppUrl ? (
                <a
                  href={siteConfig.contact.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold-light"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  WhatsApp
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-ivory/40">
                  <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  WhatsApp to be added
                </span>
              )}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs tracking-widest2 text-ivory/50">Follow</h2>
          <ul className="mt-4 space-y-3 text-sm text-ivory/80">
            <li>
              {siteConfig.contact.instagramUrl ? (
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold-light"
                >
                  <Instagram className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  Instagram
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-ivory/40">
                  <Instagram className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  Instagram to be added
                </span>
              )}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-ivory/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-ivory/50 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex gap-6">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gold-light">
                {link.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </footer>
  );
}
