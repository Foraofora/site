import React from 'react'

export default class PageWrapper extends React.Component {
  render() {
    return (
      <div style={{...wrapperStyle, ...this.props.style}}>
        {this.props.children}
      </div>
    )
  }
}

const wrapperStyle = {
  paddingTop: 21,
  paddingLeft: 29,
  paddingRight: 29,
  paddingBottom: 21,
  boxSizing: 'border-box'
}
