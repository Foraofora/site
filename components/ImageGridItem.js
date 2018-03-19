import React from 'react'
import Link from 'next/link'

export default class ImageGridItem extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div style={wrapperStyle}>
        <Link href={{ pathname: '/acoes/'+this.props.type, query: { id: this.props.id } }}>
          <a>
            <div style={imageStackStyle}>
              {this.renderPhotos()}
            </div>
            <h3 style={titleStyle}>
              {this.props.data.title[0].text}<br/>-<br/>{this.props.data.author.data.name[0].text}
            </h3>
          </a>
        </Link>
      </div>
    )
  }

  renderPhotos = () => {
    const photos = this.props.data.photos || this.props.data.cover
    if (photos.length) {
      return (
        <div>
          <div style={imageWrapperStyle}><img src={photos[0].photo.url} style={imageStyle} /></div>
          <div style={imageWrapperStyle}><img src={photos[1].photo.url} style={imageStyle} /></div>
        </div>
      )
    }
    return <div style={imageWrapperStyle}><img src={photos.url} style={imageStyle} /></div>
  }
}

const wrapperStyle = {
  margin: 20
}
const imageStackStyle = {
  width: 200,
  height: 200,
  position: 'relative'
}
const imageWrapperStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
const imageStyle = {
  maxWidth: '100%',
  maxHeight: '100%'
}
const titleStyle = {
  textAlign: 'center'
}
