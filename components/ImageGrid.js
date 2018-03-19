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
    return this.props.items.map((item) =>
      <ImageGridItem {...item} />
    )
  }
}

const wrapperStyle = {
  display: 'flex',
  justifyContent: 'space-around'
}
