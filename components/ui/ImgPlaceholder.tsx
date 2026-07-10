import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImgPlaceholderProps {
  aspect?: string;
  label?: string;
  className?: string;
  fill?: boolean;
  src?: string;
}

export function ImgPlaceholder({ aspect = "16/9", label = "", className, fill = false, src }: ImgPlaceholderProps) {
  return (
    <div
      className={cn(
        "bg-leica-border flex items-center justify-center overflow-hidden relative w-full",
        fill && "absolute inset-0 h-full",
        className
      )}
      style={fill ? undefined : { aspectRatio: aspect }}
    >
      {src ? (
        <Image
          src={src}
          alt={label || "Leica Welt Image"}
          fill
          className="object-cover transition-opacity duration-500"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#EBEBEB] to-[#D8D8D8]" />
          {label && (
            <span className="relative z-10 text-black/20 text-[11px] tracking-[0.15em] uppercase font-body text-center px-4">
              {label}
            </span>
          )}
        </>
      )}
    </div>
  );
}
