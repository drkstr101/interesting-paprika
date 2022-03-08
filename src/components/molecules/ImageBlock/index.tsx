import classNames from 'classnames';
import Image from 'next/image';
import * as React from 'react';
import { Image as ResponsiveImage } from 'react-datocms';
import getImageInfo from '../../../utils/get-media-info';

const datoLoader = ({ src, width, quality = 75 }: { src: string; width: number; quality: number }) => {
  return `https://www.datocms-assets.com/${src}?w=${width}&q=${quality}`;
};

export default function ImageBlock(props) {
  const { url, altText } = props;
  if (!url) {
    return null;
  }
  const cssClasses = props.className;
  const cssId = props.elementId;
  const styles = props.styles?.self ?? {};
  const imageOpacity = styles.opacity ?? styles.opacity === 0 ? styles.opacity : 100;
  const annotationPrefix = props['data-sb-field-path'] ?? '';
  const annotations = [
    `${annotationPrefix}`,
    `${annotationPrefix}.url#@src`,
    `${annotationPrefix}.altText#@alt`,
    `${annotationPrefix}.elementId#@id`
  ];

  // Locate existing image metadata for responsive image processing
  const filename = url.split('/').pop();
  const meta = getImageInfo(filename);
  if (meta?.responsiveImage) {
    return (
      <div id={cssId} style={{ opacity: imageOpacity * 0.01 }} data-sb-field-path={annotations.join(' ').trim()}>
        <ResponsiveImage
          data={meta.responsiveImage}
          className={classNames('sb-component', 'sb-component-block', 'sb-component-image-block', cssClasses)}
        />
      </div>
    );
  } else if (meta) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <div style={{ opacity: imageOpacity * 0.01 }}>
        <Image
          id={cssId}
          loader={datoLoader}
          className={classNames('sb-component', 'sb-component-block', 'sb-component-image-block', cssClasses)}
          src={filename}
          alt={altText ?? meta.alt ?? ''}
          width={props.width ?? meta.width}
          height={props.height ?? meta.height}
          layout={props.layout ?? 'intrinsic'}
          data-sb-field-path={annotations.join(' ').trim()}
        />
      </div>
    );
  }

  console.error(`No entry for ${filename} in media.json, using fallback`);
  return (
    <img
      id={cssId}
      className={classNames('sb-component', 'sb-component-block', 'sb-component-image-block', cssClasses)}
      src={url}
      alt={altText || ''}
      style={{ opacity: imageOpacity * 0.01 }}
      data-sb-field-path={annotations.join(' ').trim()}
    />
  );
}
