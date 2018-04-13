import React from 'react'
import CategorySelectorItem from './CategorySelectorItem'

export default class CategorySelector extends React.Component {
  state = {
    selected: null
  }
  render () {
    return (
      <div>
        {this.renderItems()}
        <style jsx>{`
          div {
            font-family: 'Source Serif Pro', serif;
            font-weight: 600;
            font-size: 33px;
          }
          @media only screen and (min-width: 752px) {
            div {
              font-size: 41px;
            }
          }
        `}</style>
      </div>
    )
  }

  renderItems = () => {
    const { categories, selected, onClick } = this.props
    return categories.map((category) => {
      const name = category.data.name[0].text
      const isSelected = selected === name
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
