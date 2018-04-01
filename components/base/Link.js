import React from 'react'
import Link from 'next/link'

export default class CustomLink extends React.Component {
  state = {
    hover: false
  }

  render () {
    if (this.props.onClick) {
      return (
        <a style={{ ...LinkStyle, ...this.props.style }} {...this.props}>{this.props.children}</a>
      )
    }
    return (
      <Link href={this.props.href}><a style={{ ...LinkStyle, ...this.props.style }}>{this.props.children}</a></Link>
    )
  }
}

const LinkStyle = {
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer'
}
