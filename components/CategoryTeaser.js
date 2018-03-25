import React from 'react'

export default class CategoryTeaser extends React.Component {
  render() {
    const { category } = this.props
    if (!category.data) return false
    return (
      <div style={wrapperStyle}>
        <p>/{category.data.name[0].text}</p>
        <p>{category.data.description[0].text}</p>
      </div>
    )
  }
}

const wrapperStyle = {
  textAlign: 'right',
  fontFamily: 'IntervalBook, monospace',
  fontSize: 12
}
