"use client";

import { useState } from "react";
import Image from "next/image";

interface ClientImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  unoptimized?: boolean;
  fallbackText?: string;
}

export function ClientImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  sizes,
  priority,
  unoptimized,
  fallbackText = "Image",
}: ClientImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={
          "flex items-center justify-center bg-cream-200 text-ink-muted " +
          className
        }
      >
        <span className="text-sm">{fallbackText}</span>
      </div>
    );
  }

  const commonProps = {
    src,
    alt,
    className,
    sizes,
    priority,
    unoptimized,
    onError: () => setError(true),
  };

  if (fill) {
    return <Image fill {...commonProps} />;
  }

  return (
    <Image
      width={width ?? 400}
      height={height ?? 225}
      {...commonProps}
    />
  );
}
