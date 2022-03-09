import classNames from 'classnames';
import NextImage from 'next/image';
import * as React from 'react';
import getImageInfo from '../../../utils/get-media-info';
// const RESPONSIVE_IMAGES = process.env['NODE_ENV'] === 'production';

export default function ImageBlock(props) {
  const { url, altText } = props;
  if (!url) {
    return null;
  }
  const responsive = props.responsive === true;
  const filename = url.split('/').pop();
  const meta = getImageInfo(filename);
  const cssClasses = props.className || null;
  const cssId = props.elementId || null;
  const styles = props.styles?.self || {};
  const imageOpacity = styles.opacity || styles.opacity === 0 ? styles.opacity : 100;
  const annotationPrefix = props['data-sb-field-path'] || '';
  const annotations = [
    `${annotationPrefix}`,
    `${annotationPrefix}.url#@src`,
    `${annotationPrefix}.altText#@alt`,
    `${annotationPrefix}.elementId#@id`
  ];

  if (responsive && meta) {
    const maxWidth = props.maxWidth ?? undefined;
    const opacity = imageOpacity * 0.01;
    console.log('Responsive image enabled for ', filename);
    return (
      <div style={{ maxWidth, opacity }}>
        <NextImage
          id={cssId}
          className={classNames('wa-component', 'wa-component-block', 'wa-component-image-block', cssClasses)}
          src={url}
          data-sb-field-path={annotations.join(' ').trim()}
          width={meta.responsiveImage.width}
          height={meta.responsiveImage.height}
          alt={altText}
          placeholder="blur"
          blurDataURL={meta.blurUpThumb}
          priority={props.priority}
        ></NextImage>
      </div>
    );
  }

  if (responsive && !filename.endsWith('.svg')) {
    console.warn(`${filename} not located in media.json, falling back to native image`);
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      id={cssId}
      className={classNames('wa-component', 'wa-component-block', 'wa-component-image-block', cssClasses)}
      src={url}
      alt={altText ?? 'Graphic'}
      style={{ opacity: imageOpacity * 0.01 }}
      data-sb-field-path={annotations.join(' ').trim()}
    />
  );
}
