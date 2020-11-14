import React from 'react'
import { RichText } from 'prismic-reactjs'
import PrismicTypes from '../../types/PrismicTypes'
import styles from './styles.module.scss'

export default function InfoTable({ slice }) {
  return (
    <div className={`slice ${styles.tableWrapper}`}>
      <div className={styles.table}>
        {slice.items.map((row, index) => (
          <div className={styles.row} key={`table-row-${index}`}>
            <div className={`${styles.column} ${styles.column1}`}>
              <RichText render={row.column1} />
            </div>
            <div className={`${styles.column} ${styles.column2}`}>
              <RichText render={row.column2} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

InfoTable.propTypes = {
  slice: PrismicTypes.slice({
    items: {
      column1: PrismicTypes.richText.isRequired,
      column2: PrismicTypes.richText.isRequired,
    },
  }).isRequired,
}
