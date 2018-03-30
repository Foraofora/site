import React from 'react'

export default class Title extends React.Component {
  render () {
    return (
      <h1 style={baseStyle}>
        {this.props.children}
      </h1>
    )
  }
}

const baseStyle = {
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600,
  fontSize: 41,
  margin: 0,
  marginLeft: 145
}
