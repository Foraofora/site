import React from 'react'

import SliderTunnelImage from './SliderTunnelImage'

export default class SliderTunnel extends React.Component {
  state = {
    slides: [<SliderTunnelImage />],
    currentSlide: 0
  }

  componentDidMount() {
    this.renderNextImage()
    setInterval(this.renderNextImage, 2000)
  }

  render() {
    return (
      <div style={wrapperStyle}>
        {this.state.slides}
      </div>
    )
  }

  renderNextImage = () => {
    const { documents } = this.props
    const document = documents[Math.floor(Math.random()*documents.length)];
    const nextSlide = <SliderTunnelImage doc={document} />
    this.setState({slides: [...this.state.slides, nextSlide]})
  }
}

const wrapperStyle = {
  perspective: 12000,
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
}
