import React from 'react'

export default class Image extends React.Component {
  render() {
    return (
      <img {...this.props} style={baseStyle} />
    )
  }
}

const baseStyle = {
  maxWidth: '100%'
}
