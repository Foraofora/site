import React from 'react'
import Link from 'next/link'

export default class FloatingTitle extends React.Component {
  state = {
    topOffset: 0
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { topOffset } = this.state
    return (
      <div ref="Wrapper" style={{position: 'relative'}}>
        <div style={{...wrapperStyle, transform: `rotateZ(-90deg) translate3d(-${topOffset}px, 0, 0)`}}>
          <div style={titleStyle}>{ this.props.title }</div>
          <div>{ this.props.author }</div>
        </div>
      </div>
    )
  }

  handleScroll = () => {
    const viewportOffset = this.refs.Wrapper.getBoundingClientRect()
    const spaceBelow = window.innerHeight - viewportOffset.bottom
    const distanceBottom = window.innerHeight/2+130
    if (spaceBelow < distanceBottom) return
    this.setState({topOffset: spaceBelow-distanceBottom})

  }
}

const wrapperStyle = {
  textAlign: 'center',
  fontFamily: 'IntervalBook, monospace',
  fontSize: 16,
  maxWidth: 260,
  top: 130,
  position: 'absolute',
}

const titleStyle = {
  marginBottom: 5,
  fontFamily: 'IntervalSlanted, monospace',
}
