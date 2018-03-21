import React from 'react'
import Link from './Link'

export default class ImageGridItem extends React.Component {
  render() {
    const { data, type, id } = this.props
    const title = data.title instanceof Array ? data.title[0].text : false
    const author = data.author.data ? data.author.data.name[0].text : false
    return (
      <div style={wrapperStyle}>
        <Link href={{ pathname: '/acoes/'+type, query: { id: id } }}>
          <div style={imageStackStyle}>
            {this.renderPhotos()}
          </div>
          <h3 style={titleStyle}>
            {title}<br/>-<br/>{author}
          </h3>
        </Link>
      </div>
    )
  }

  renderPhotos = () => {
    const photos = this.props.data.photos || this.props.data.cover
    if (photos.length) {
      return (
        <div>
          <div style={{...imageWrapperStyle, transform: 'translate3d(7px, -7px, 0)'}}>
            <img src={photos[0].photo.thumb.url} style={imageStyle} />
          </div>
          <div style={{...imageWrapperStyle, transform: 'translate3d(-7px, 7px, 0)'}}>
            <img src={photos[1].photo.thumb.url} style={imageStyle} />
          </div>
        </div>
      )
    }
    return <div style={imageWrapperStyle}><img src={photos.url} style={imageStyle} /></div>
  }
}

const wrapperStyle = {
  margin: 20,
  width: 200
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
  textAlign: 'center',
  fontFamily: "'Source Serif Pro', serif",
  fontSize: 26,
  fontWeight: 600
}
