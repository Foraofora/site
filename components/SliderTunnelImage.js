import React from 'react'
import Image from '~/components/base/Image'
import Link from './base/Link'

export default class SliderTunnelImage extends React.Component {
  state = {
    animation: 'start',
    xOffset: Math.floor(Math.random() * 90 + 5),
    yOffset: Math.floor(Math.random() * 90 + 5),
    hover: false
  }

  componentDidMount() {
    setTimeout(()=>this.setState({animation: 'begin'}), 500)
    setTimeout(()=>this.setState({animation: 'run'}), 1500)
    setTimeout(()=>this.setState({animation: 'end'}), 9000)
  }

  render() {
    const { doc } = this.props
    if (!doc) return null
    const { type, id } = doc
    const photos = doc.data.photos || doc.data.cover
    const photoUrl = photos.length ? photos[0].photo.url : photos.url
    return (
      <div style={this.getCurrentStyle()} onMouseEnter={()=>this.setState({hover: true})} onMouseLeave={()=>this.setState({hover: false})}>
        <Link href={{ pathname: '/acoes/'+type, query: { id: id } }}>
          <Image src={photoUrl} />
        </Link>
      </div>
    )
  }

  getCurrentStyle() {
     const { xOffset, yOffset, hover, animation } = this.state
     const timeOffset = hover ? 45 : 18
     const endPosition = hover ? -20000 : -20001
     switch(animation) {
      case 'start':
        return {
          ...baseStyle,
          left: xOffset+'%',
          top: yOffset+'%',
          transform: `translate3d(-50%, -50%, 10000px)`,
          transition: '0.8s opacity',
          opacity: 0
        }
      case 'begin':
        return {
          ...baseStyle,
          left: xOffset+'%',
          top: yOffset+'%',
          transform: `translate3d(-50%, -50%, ${endPosition}px)`,
          transition: `${timeOffset}s transform linear, 0.8s opacity`
        }
      case 'run':
        return {
          ...baseStyle,
          left: xOffset+'%',
          top: yOffset+'%',
          transform: `translate3d(-50%, -50%, ${endPosition}px)`,
          transition: `${timeOffset}s transform linear, 0.8s opacity`
        }
      case 'end':
        return {
          ...baseStyle,
          left: xOffset+'%',
          top: yOffset+'%',
          transform: `translate3d(-50%, -50%, , ${endPosition}px)`,
          transition: `${timeOffset}s transform linear, 3s opacity ease-in`,
          opacity: 0,
          pointerEvents: 'none'
        }
    }
  }
}

const baseStyle = {
  position: 'absolute',
  width: 300
}
