import React from 'react'
import Link from 'next/link'
import { DesktopOnly } from '~/components/struct/Media'

export default class FloatingTitle extends React.Component {
  state = {
    topOffset: 0
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render () {
    const { topOffset } = this.state
    return (
      <div ref='Wrapper' style={{ position: 'relative' }}>
        <div style={{ ...wrapperStyle, transform: `rotateZ(-90deg) translate3d(-${topOffset}px, 0, 0)` }}>
          <DesktopOnly>
            <div style={titleStyle}>{ this.props.title }</div>
            <div>{ this.props.author }</div>
          </DesktopOnly>
        </div>
      </div>
    )
  }

  handleScroll = () => {
    const { wrapperEl } = this.refs
    const viewportOffset = wrapperEl.getBoundingClientRect()
    const spaceBelow = window.innerHeight - viewportOffset.bottom
    const distanceBottom = window.innerHeight / 2 + 130
    if (spaceBelow < distanceBottom) return
    this.setState({ topOffset: spaceBelow - distanceBottom })
  }
}

const wrapperStyle = {
  textAlign: 'center',
  fontFamily: 'IntervalBook, monospace',
  fontSize: 16,
  width: 260,
  top: 130,
  left: -60,
  position: 'absolute',
  pointerEvents: 'none'
}

const titleStyle = {
  marginBottom: 5,
  fontFamily: 'IntervalSlanted, monospace'
}
