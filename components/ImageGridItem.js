import React from 'react'
import Link from '~/components/base/Link'
import Image from '~/components/base/Image'

export default class ImageGridItem extends React.Component {
  render () {
    const { data, type, id } = this.props
    const title = data.title instanceof Array ? data.title[0].text : false
    const author = data.author.data ? data.author.data.name[0].text : false
    const category = this.props.data.category.data ? this.props.data.category.data.name[0].text : false
    const date = this.props.last_publication_date

    return (
      <div style={wrapperStyle}>
        <Link href={{ pathname: `/acoes/${type}`, query: { id } }}>
          <p style={headerStyle}>{/* date */}18.2.18 {category}</p>
          <div style={imageStackStyle}>
            {this.renderPhotos()}
          </div>
          <h3 style={titleStyle}>
            {title}{author && <span style={{ fontWeight: 400 }}><br />-<br />{author}</span>}
          </h3>
        </Link>
        <style jsx>{`
          div:hover {
            color: rgb(0,17,254);
          }
        `}</style>
      </div>
    )
  }

  renderPhotos = () => {
    const photos = this.props.data.photos || this.props.data.cover

    if (photos.length) {
      return (
        <div>
          <div style={{ ...imageWrapperStyle, transform: 'translate3d(7px, -7px, 0)' }}>
            <Image {...photos[0].photo.thumb} style={imageStyle} />
          </div>
          {photos[1] && <div style={{ ...imageWrapperStyle, transform: 'translate3d(-7px, 7px, 0)' }}>
            <Image {...photos[1].photo.thumb} style={imageStyle} loadDelay={150} />
          </div>}
        </div>
      )
    }
    return <div style={imageWrapperStyle}><Image {...photos.thumb} style={imageStyle} /></div>
  }
}

const wrapperStyle = {
  width: 250,
  margin: '0 2%'
}
const headerStyle = {
  fontFamily: 'IntervalBook, monospace',
  fontSize: 12
}
const imageStackStyle = {
  width: 250,
  height: 250,
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
  fontSize: 24,
  fontWeight: 600,
  marginTop: 20
}
