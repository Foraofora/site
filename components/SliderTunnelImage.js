import React from 'react'

export default class SliderTunnelImage extends React.Component {
  state = {
    animation: 'start',
    xOffset: Math.floor(Math.random() * 101),
    yOffset: Math.floor(Math.random() * 101)
  }

  componentWillMount() {
    setTimeout(()=>this.setState({animation: 'run'}), 2000)
    setTimeout(()=>this.setState({animation: 'end'}), 6000)
  }

  render() {
    return (
      <div style={this.getCurrentStyle()}>
        <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/landscape-photography/landscape-photography-15.jpg" />
      </div>
    )
  }

  getCurrentStyle() {
     const { xOffset, yOffset } = this.state
     switch(this.state.animation) {
      case 'start':
        return {
          position: 'absolute',
          left: xOffset+'%',
          top: yOffset+'%',
          transform: `translate3d(-50%, -50%, 600px)`,
          transition: '0.8s opacity',
          opacity: 0
        }
      case 'run':
        return {
          position: 'absolute',
          left: xOffset+'%',
          top: yOffset+'%',
          transform: `translate3d(-50%, -50%, -4000px)`,
          transition: '15s transform linear, 0.8s opacity'
        }
      case 'end':
        return {
          position: 'absolute',
          left: xOffset+'%',
          top: yOffset+'%',
          transform: `translate3d(-50%, -50%, -4000px)`,
          transition: '16s transform, 3s opacity ease-in',
          opacity: 0
        }

    }
  }
}
