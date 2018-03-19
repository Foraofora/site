import React from 'react'

export default class Paragraph extends React.Component {
  render() {
    return (
      <p style={{...baseStyle, ...this.props.style}}>
        {this.props.children}
      </p>
    )
  }
}

const baseStyle = {
  fontSize: 20,
  paddingLeft: 170,
  paddingRight: 170
}
