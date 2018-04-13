import React from 'react'
import P from '~/components/base/Paragraph'
export default class Quote extends React.Component {
  render () {
    const { style, quote, source } = this.props
    const sourceText = source.length && source[0].text
    return (
      <P style={{...style, ...wrapperStyle}}>
        <div style={{paddingLeft: '20%'}}>
          <div style={quoteStyle}>{quote[0].text}</div>
          {sourceText ? <div style={sourceStyle}>{sourceText}</div> : null}
        </div>
      </P>
    )
  }
}

const wrapperStyle = {
  margin: '60px auto'
}
const quoteStyle = {
  fontSize: 24,
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600
}

const sourceStyle = {
  fontSize: 12,
  fontFamily: 'IntervalBook, monospace',
  maxWidth: '55%',
  marginTop: 26,
  lineHeight: '1.3em'
}
