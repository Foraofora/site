import React from 'react'

export default class CategoryTeaser extends React.Component {
  render() {
    const { tags } = this.props
    if (!tags.lenght) return false
    return (
      <div style={wrapperStyle}>
        <div>Tags{tags.lenght}</div>
        {tags.map((tag) => <div>{tag}</div>)}
      </div>
    )
  }
}

const wrapperStyle = {
  textAlign: 'right',
  fontFamily: 'IntervalBook, monospace',
  fontSize: 12
}
