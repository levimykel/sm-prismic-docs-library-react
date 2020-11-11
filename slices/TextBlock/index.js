import React from 'react'
import { RichText } from 'prismic-reactjs'
import PrismicTypes, { PropTypes } from '../../types/PrismicTypes'
import styles from './styles.module.scss'

export default function Text({ slice }) {
  return (
    <div className={`slice ${styles.richText}`}>
      <RichText render={slice.primary.content} />
    </div>
  )
}

Text.propTypes = {
  slice: PrismicTypes.slice({
    primary: {
      content: PrismicTypes.richText.isRequired,
    },
  }).isRequired,
}
