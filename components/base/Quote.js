import React from 'react'

export default class Paragraph extends React.Component {
  render() {
    const { style, quote, source } = this.props
    return (
      <div style={{...baseStyle, ...style}}>
        <div style={quoteStyle}>"{quote[0].text}"</div>
        <div style={sourceStyle}>― {source[0].text}</div>
      </div>
    )
  }
}

const baseStyle = {
  paddingLeft: '50%',
  paddingRight: '5%',
  margin: '50px 0'
}

const quoteStyle = {
  fontSize: 24,
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600
}

const sourceStyle = {
  fontSize: 12,
  fontFamily: 'IntervalBook, monospace',
}
