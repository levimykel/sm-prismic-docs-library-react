import React from 'react'
import PrismicTypes, { PropTypes } from '../../types/PrismicTypes'
import { RichText } from 'prismic-reactjs'
import styles from './styles.module.scss'

const styleOptions = {
  Highlight: styles.highlight,
  Warning: styles.warning,
  Danger: styles.danger,
}

export default function HighlightedText({ slice }) {
  return (
    <div className={`slice ${styles.highlightedText} ${styleOptions[slice.primary.highlightStyle]}`}>
      <RichText render={slice.primary.content} />
    </div>
  )
}

HighlightedText.propTypes = {
  slice: PrismicTypes.slice({
    primary: {
      highlightStyle: PropTypes.oneOf(Object.keys(styleOptions)).isRequired,
      content: PrismicTypes.richText.isRequired,
    },
  }).isRequired,
}
