import React from 'react'
import Router from 'next/router'
import Link from '~/components/base/Link'

export default class MenuLink extends React.Component {
  state = {
    hover: false
  }

  render() {
    const style = {
      position: 'relative',
      marginRight: 15
    }
    return (
      <span
        style={style}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <span style={this.state.hover ? underlineStyle : {}} />
        <Link {...this.props} style={{...menuTextStyle, ...this.props.style}} />
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
  textDecoration: 'none',
  position: 'relative'
}

const underlineStyle = {
  borderBottom: '10px solid rgb(0,17,254)',
  position: 'absolute',
  bottom: '5%',
  left: '0',
  right: '1%',
}
