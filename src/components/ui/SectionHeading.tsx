import { FadeIn } from "./FadeIn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <FadeIn className={`max-w-2xl mb-14 md:mb-20 ${alignClass}`}>
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? "text-white/80" : "text-subheading"
          }`}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
