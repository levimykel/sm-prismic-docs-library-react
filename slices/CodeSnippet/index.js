import React from 'react'
import hljs from 'highlight.js'
import { RichText } from 'prismic-reactjs'
import PrismicTypes from '../../types/PrismicTypes'
import CopyButton from './CopyButton'
import styles from './styles.module.scss'

const defaultLanguages = ['plaintext', 'json', 'javascript', 'html', 'css', 'php', 'ruby', 'java', 'cs']

const getCopySnippet = (richtext) => {
  return richtext.map(block => block.text).join('\n')
}

export default function CodeSnippet({ slice }) {
  const unhighlightedCode = RichText.asText(slice.primary.snippet)
  const highlightedCodeData = hljs.highlightAuto(unhighlightedCode, defaultLanguages)
  const highlightedCode = highlightedCodeData.value

  const codeString = getCopySnippet(slice.primary.snippet)

  return (
    <div className={`slice ${styles.codeSnippet}`}>
      <div className={styles.snippetWrapper}>
        <CopyButton codeString={codeString} />
        <pre data-hljs-lang={highlightedCodeData.language}>
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      </div>
    </div>
  )
}

CodeSnippet.propTypes = {
  slice: PrismicTypes.slice({
    primary: {
      snippet: PrismicTypes.richText.isRequired,
    },
  }).isRequired,
}
