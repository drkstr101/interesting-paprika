import classNames from 'classnames';
import * as React from 'react';
import { Image } from 'react-datocms';
import getImageInfo from '../../../utils/get-media-info';

export default function ImageBlock(props) {
  const { url, altText } = props;
  if (!url) {
    return null;
  }
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

  if (meta) {
    return (
      <div id={cssId} style={{ opacity: imageOpacity * 0.01 }}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          className={classNames('sb-component', 'sb-component-block', 'sb-component-image-block', cssClasses)}
          data={meta.responsiveImage}
        ></Image>
      </div>
    );
  }

  if (!filename.endsWith('.svg')) {
    console.warn(`${filename} not located in media.json, falling back to native image`);
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      id={cssId}
      className={classNames('sb-component', 'sb-component-block', 'sb-component-image-block', cssClasses)}
      src={url}
      alt={altText ?? 'Graphic'}
      style={{ opacity: imageOpacity * 0.01 }}
      data-sb-field-path={annotations.join(' ').trim()}
    />
  );
}
