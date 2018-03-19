import React from 'react'

import SliderTunnelImage from './SliderTunnelImage'

export default class SliderTunnel extends React.Component {
  state = {
    slides: [<SliderTunnelImage />],
    currentSlide: 0
  }

  componentWillMount() {
    setInterval(()=>this.setState({slides: [...this.state.slides, <SliderTunnelImage />]}), 2000)
  }

  render() {
    return (
      <div style={wrapperStyle}>
        {this.state.slides}
      </div>
    )
  }
}

const wrapperStyle = {
  perspective: 1000,
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
}
