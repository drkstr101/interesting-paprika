#!/usr/bin/env node

import fetch from 'node-fetch';

const { DATOCMS_API_TOKEN } = process.env;

const query = `
  {
    allUploads(first: 100, filter: { format: { neq: "svg" } }) {
      filename
      responsiveImage {
        ...responsiveImageFragment
      }
    }
  }

  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`;

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${DATOCMS_API_TOKEN}`
};

fetch('https://graphql.datocms.com/', {
  method: 'POST',
  headers,
  body: JSON.stringify({ query })
})
  .then((res) => res.json())
  .then((res) => {
    console.log(JSON.stringify(res.data));
  })
  .catch(console.error);
