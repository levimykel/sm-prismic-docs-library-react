import React from 'react'
import { RichText } from 'prismic-reactjs'
import PrismicTypes from '../../types/PrismicTypes'
import styles from './styles.module.scss'

export default function Image({ slice }) {
  const { url = '', alt = '' } = slice.primary.image || {}

  return (
    <figure className={`slice ${styles.imageWithCaption}`}>
      <img
        src={url}
        alt={alt}
        title={RichText.asText(slice.primary.imageTitle)}
      />
      <figcaption>{RichText.asText(slice.primary.caption)}</figcaption>
    </figure>
  )
}

Image.propTypes = {
  slice: PrismicTypes.slice({
    primary: {
      image: PrismicTypes.image.isRequired,
      imageTitle: PrismicTypes.richText,
      caption: PrismicTypes.richText,
    },
  }).isRequired,
}
