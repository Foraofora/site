import React from 'react'
import Link from '~/components/base/Link'
import Image from '~/components/base/Image'
import moment from 'moment'

export default class ImageGridItem extends React.Component {
  render () {
    const { data, type, id, data: { date } } = this.props
    const title = data.title instanceof Array ? data.title[0].text : false
    const author = data.author.data ? data.author.data.name[0].text : false
    const category = this.props.data.category.data ? this.props.data.category.data.name[0].text : false
    const types = { article: 'artigo', story: 'materia', pictures_and_video: 'fotoevideo' }

    return (
      <div style={wrapperStyle} className='image-grid-item'>
        <Link href={{ pathname: `/acoes/${types[type]}/${id}/${this.props.slugs[0]}` }}>
          <div style={imageStackStyle}>
            {this.renderPhotos()}
          </div>
          <h3 style={titleStyle}>
            <span style={headerStyle}>{moment(date).format('DD.MM.YY')} /{category}</span><br />
            <span>{title}</span>
            {author && <span style={{ fontWeight: 400, display: 'block', paddingTop: 3 }}>{author}</span>}
          </h3>
        </Link>
        <style jsx global>{`
          .image-grid-item:hover {
            color: rgb(0,17,254);
          }
          .image-grid-item:hover img {
            -webkit-filter: grayscale(1)
          }
        `}</style>
      </div>
    )
  }

  renderPhotos = () => {
    const photos = this.props.data.photos || [{photo: this.props.data.cover}]
    const photosOrVideo = photos.length < 1 ? [{photo: {thumb: {
      url: this.props.data.videos[0].video.thumbnail_url,
      dimensions: {
        height: this.props.data.videos[0].video.height,
        width: this.props.data.videos[0].video.width,
      }
    }}}] : photos
    return (
      <div>
        {photosOrVideo[2] && <div style={{ ...imageWrapperStyle, transform: 'translate3d(21px, -21px, 0)' }}>
          <Image {...photosOrVideo[2].photo.thumb} style={imageStyle} />
        </div>}
        {photosOrVideo[1] && <div style={{ ...imageWrapperStyle, transform: 'translate3d(7px, -7px, 0)' }}>
          <Image {...photosOrVideo[1].photo.thumb} style={imageStyle} loadDelay={200} />
        </div>}
        <div style={{ ...imageWrapperStyle, transform: photos[1] && 'translate3d(-7px, 7px, 0)' }}>
          <Image {...photosOrVideo[0].photo.thumb} style={imageStyle} loadDelay={400} />
        </div>
      </div>
    )
  }
}

const itemWidth = 280

const wrapperStyle = {
  width: itemWidth,
  margin: '0 1.3% 20px'
}
const headerStyle = {
  fontFamily: 'IntervalBook, monospace',
  fontSize: 13,
  fontWeight: 400,
  lineHeight: '1.3em'
}
const imageStackStyle = {
  width: itemWidth,
  height: itemWidth * 0.85,
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
  fontFamily: "'Source Serif Pro', serif",
  fontSize: 24,
  fontWeight: 700,
  marginTop: 20
}
