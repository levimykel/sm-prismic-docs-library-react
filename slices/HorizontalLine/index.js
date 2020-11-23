import React from 'react'
import PrismicTypes from '../../types/PrismicTypes'
import styles from './styles.module.scss'

export default function HorizontalLine({ slice }) {
  const halfWidthClass = slice.primary.isHalfWidth ? styles.halfWidth : ''
  return (
    <hr className={`slice ${styles.horizontalLine} ${halfWidthClass}`.trim()} />
  )
}

HorizontalLine.propTypes = {
  slice: PrismicTypes.slice({
    primary: {
      isHalfWidth: PrismicTypes.boolean.isRequired,
    },
  }).isRequired,
}
