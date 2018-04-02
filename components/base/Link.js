import React from 'react'
import Link from 'next/link'

export default class CustomLink extends React.Component {
  render () {
    const { style, href } = this.props
    if (this.props.onClick) {
      return (
        <a  {...this.props} style={{ ...linkStyle, ...style }}>{this.props.children}</a>
      )
    }
    return (
      <Link href={href}><a style={{ ...linkStyle, ...this.props.style }}>{this.props.children}</a></Link>
    )
  }
}

const linkStyle = {
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer'
}
