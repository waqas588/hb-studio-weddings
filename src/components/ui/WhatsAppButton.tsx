import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * WhatsApp CTA. Renders nothing if no number has been configured yet
 * (NEXT_PUBLIC_WHATSAPP_NUMBER), so the site never links to a fake or
 * placeholder number in production.
 */
export default function WhatsAppButton({
  className,
  label = "Message on WhatsApp",
}: {
  className?: string;
  label?: string;
}) {
  if (!siteConfig.contact.whatsAppUrl) return null;

  return (
    <a
      href={siteConfig.contact.whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 border border-ink/20 px-6 py-3 text-sm text-ink transition-colors duration-300 ease-editorial hover:border-ink hover:bg-ink hover:text-ivory",
        className
      )}
    >
      <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
      {label}
    </a>
  );
}
