import { cn } from "@/lib/utils";

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {kicker && <p className="kicker mb-3">{kicker}</p>}
      <h2 className="text-3xl font-medium leading-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          {description}
        </p>
      )}
    </div>
  );
}
