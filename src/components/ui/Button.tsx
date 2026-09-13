import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap px-7 py-3.5 text-sm tracking-wide transition-colors duration-300 ease-editorial focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-ivory hover:bg-charcoal",
  secondary: "border border-ivory/70 text-ivory hover:bg-ivory hover:text-ink",
  ghost: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
}

/**
 * Renders a Next.js <Link> when `href` is provided, otherwise a
 * native <button>. Keeps one visual API for CTAs across the site.
 */
export default function Button({
  variant = "primary",
  className,
  children,
  href,
  type,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes} {...props}>
      {children}
    </button>
  );
}
