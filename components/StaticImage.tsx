"use client";

/**
 * Imagine servită direct din public/ – nu folosește Vercel Image Optimization.
 * Folosim <img> pentru src care începe cu /images/ ca să nu consumăm transformations.
 */
export function StaticImage({
  src,
  alt,
  className,
  width,
  height,
  fill,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
}) {
  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        sizes={sizes}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width ?? 400}
      height={height ?? 400}
    />
  );
}
