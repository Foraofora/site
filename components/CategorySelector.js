import React from 'react'
import CategorySelectorItem from './CategorySelectorItem'

export default class CategorySelector extends React.Component {
  state = {
    selected: null
  }
  render () {
    return (
      <div style={wrapperStyle}>
        {this.renderItems()}
      </div>
    )
  }

  renderItems = () => {
    const { categories, selected, onClick } = this.props
    return categories.map((category) => {
      const name = category.data.name[0].text
      const isSelected = selected == name
      return (
        <CategorySelectorItem
          name={category.data.name[0].text}
          key={category.data.name[0].text}
          onClick={onClick}
          selected={isSelected}
        />
      )
    })
  }
}

const wrapperStyle = {
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600,
  fontSize: 41
}
