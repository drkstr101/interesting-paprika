# DatoCMS Assets

Asset metadata is preprocessed using DatoCMS API.

## API Query

```graphql
{
  allUploads(first: 64) {
    filename
    width
    height
    url
    alt
    tags
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
```

Group by filename:

```sh
cat result.json | jq '.data.allUploads' | jq 'map({ (.filename): . }) | add'
```
