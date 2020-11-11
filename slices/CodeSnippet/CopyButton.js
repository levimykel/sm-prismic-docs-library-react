import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styles from './styles.module.scss'

export default function CopyButton({ codeString }) {
  const [copyText, setCopyText] = useState('Copy')

  const flashCopiedText = () => {
    setCopyText('Copied!')
    window.setTimeout(() => {
      setCopyText('Copy')
    }, 1000)
  }

  return (
    <CopyToClipboard
      text={codeString}
      onCopy={() => flashCopiedText()}
    >
      <span className={styles.copyButton}>{copyText}</span>
    </CopyToClipboard>
  )
}

CopyButton.propTypes = {
  codeString: PropTypes.string.isRequired,
}
