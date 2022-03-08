import imagesByName from './media.json';

export interface ResponsiveImage {
  srcSet: string;
  webpSrcSet: string;
  sizes: string;
  src: string;
  width: number;
  height: number;
  aspectRatio: number;
  alt: string | null;
  title: string | null;
  base64: string;
}

export interface ImageMeta {
  filename: string;
  blurUpThumb: string;
  responsiveImage: ResponsiveImage;
}

export default function getImageInfo(name: string): ImageMeta | null {
  return imagesByName[name] ?? null;
}
