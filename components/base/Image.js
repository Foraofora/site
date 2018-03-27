import React from 'react'

export default class Image extends React.Component {
  render() {
    return (
      <img {...this.props} style={{ ...baseStyle, ...this.props.style }} />
    )
  }
}

const baseStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  flex: 0
}
