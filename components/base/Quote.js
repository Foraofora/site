import React from 'react';

export default class Paragraph extends React.Component {
  render() {
    const { style, quote, source } = this.props;
    const sourceText = source[0].text;
    return (
      <div style={{ ...baseStyle, ...style }}>
        <div style={quoteStyle}>"{quote[0].text}"</div>
        {sourceText && <div style={sourceStyle}>― {sourceText}</div>}
      </div>
    );
  }
}

const baseStyle = {
  paddingLeft: '50%',
  paddingRight: '5%',
  margin: '50px 0',
};

const quoteStyle = {
  fontSize: 24,
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600,
};

const sourceStyle = {
  fontSize: 12,
  fontFamily: 'IntervalBook, monospace',
  maxWidth: '55%',
  marginTop: 26,
};
