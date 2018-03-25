import React from 'react'

import ImageGridItem from './ImageGridItem'

export default class ImageGrid extends React.Component {
  render() {
    return (
      <div style={wrapperStyle}>
        {this.renderItems()}
      </div>
    )
  }

  renderItems = () => {
    return this.props.items.map((item) => {
      if (!this.props.category) {
        return <ImageGridItem {...item} />
      }
      if (!item.data.category.data) return false
      if (this.props.category == item.data.category.data.name[0].text) {
        return <ImageGridItem {...item} />
      }
    })
  }
}

const wrapperStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap'
}
