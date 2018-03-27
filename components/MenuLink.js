import React from 'react'
import Link from 'next/link'

export default class MenuLink extends React.Component {
  state = {
    hover: false
  }

  renderLink = () => {
    if (this.props.onClick) return (
      <a href='#'  style={menuTextStyle} {...this.props}>{this.props.children}</a>
    )
    return (
      <Link {...this.props} prefetch><a style={{...menuTextStyle, ...this.props.style}}>{this.props.children}</a></Link>
    )
  }

  render() {
    return (
      <span
        style={{position: 'relative', zIndex: 1, marginRight: 20}}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <span style={this.state.hover ? underlineStyle : {}} />
        {this.renderLink()}
      </span>
    )
  }

  handleMouseEnter = (event) => {
    this.props.onMouseEnter && this.props.onMouseEnter(this.props.menuKey)
    this.setState({hover: true})
  }
  handleMouseLeave = (event) => {
    this.props.onMouseLeave && this.props.onMouseLeave(this.props.menuKey)
    this.setState({hover: false})
  }
}

const menuTextStyle = {
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600,
  fontSize: 40,
  color: 'inherit',
  textDecoration: 'none'
}

const underlineStyle = {
  borderBottom: '10px solid rgb(0,17,254)',
  position: 'absolute',
  bottom: '5%',
  left: '0',
  right: '1%',
  zIndex: -1
}
