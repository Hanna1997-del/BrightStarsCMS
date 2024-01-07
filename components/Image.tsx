"use client";
import { cva } from "class-variance-authority";
import $Image, { ImageProps } from "next/image";
import { HTMLAttributes, useState } from "react";
import { ElementState } from "@/types";

type Props = Omit<ImageProps, "alt"> &
  HTMLAttributes<HTMLImageElement> & {
    alt?: string;
    noLayout?: boolean;
    disableSrcHeader?: boolean;
    afterLoaded?: () => void;
  };

const classes = cva("object-center transition duration-500", {
  variants: {
    state: {
      error: "",
      loading: "opacity-0 blur-lg scale-90",
      success: "opacity-100 blur-none scale-100",
    },
  },
});

export default function Image({
  src = "",
  alt = "",
  className,
  noLayout,
  quality = 85,
  disableSrcHeader = false,
  afterLoaded,
  ...rest
}: Props) {

  const [state, setState] =
    useState<Exclude<ElementState, "disable">>("loading");


  return (
    <$Image
      alt={alt}
      src={src}
      fill
      quality={quality}
      className={`!bg-cover !bg-center ${classes({ state, className })}`}
      onLoadingComplete={() => {
        afterLoaded && afterLoaded();
        setState("success");
      }}
      onError={() => {
        setState("error")
      }}
      {...rest}
    />
  );
}

// Note: Image component prefix `/images` src for relative path. So `src="$name.png"` will fetch image under /public/images/$name.png
// Note: By prefixing we lose the ability to use static import images.
