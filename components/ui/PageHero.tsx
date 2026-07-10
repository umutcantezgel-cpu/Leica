import { ImgPlaceholder } from "./ImgPlaceholder";
import { Eyebrow, H1 } from "./Typography";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  imageLabel?: string;
  image?: string;
  height?: string;
}

export function PageHero({ eyebrow, title, subtitle, imageLabel, image, height = "50vh" }: PageHeroProps) {
  return (
    <div
      className="bg-leica-dark relative flex items-end"
      style={{ height, minHeight: "360px", paddingBottom: "64px" }}
    >
      <ImgPlaceholder fill label={imageLabel || title} src={image} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/[0.88] via-black/50 to-black/[0.12]" />
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 w-full">
        <Eyebrow onDark>{eyebrow}</Eyebrow>
        <H1 onDark size="hero">{title}</H1>
        {subtitle && (
          <p className="text-white/65 font-body text-[17px] mt-3.5 max-w-[560px] leading-[1.6]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
