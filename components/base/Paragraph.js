import React from 'react'

export default class Paragraph extends React.Component {
  render() {
    const { style, children } = this.props
    if (children instanceof Array) return (
      <div>
        {children.map((child, index) =>
          <p style={{...baseStyle, ...style}}>
            {child.text}
          </p>
        )}
      </div>
    )
    return (
      <p style={{...baseStyle, ...style}}>
        {children}
      </p>
    )
  }
}

const baseStyle = {
  fontSize: 20,
  paddingLeft: 200,
  paddingRight: 200,
  maxWidth: 660,
  marginLeft: 'auto',
  marginRight: 'auto'
}
