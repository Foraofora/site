import React from 'react'
import { MobileOnly, DesktopOnly } from '~/components/struct/Media'

export default class ResponsiveParagraph extends React.Component {
  render () {
    const { style, children } = this.props
    return (
      <div>
        <MobileOnly>
          <Paragraph {...this.props}>{children}</Paragraph>
        </MobileOnly>
        <DesktopOnly>
          <Paragraph {...this.props} style={{ ...style, ...desktopStyle }}>{children}</Paragraph>
        </DesktopOnly>
      </div>
    )
  }
}

class Paragraph extends React.Component {
  render () {
    const { style, children } = this.props
    if (children instanceof Array) {
      return children.map((child, index) =>
        <p style={{ ...baseStyle, ...style }}>{child.text}</p>)
    }

    return (
      <p style={{ ...baseStyle, ...style }}>
        {children}
      </p>
    )
  }
}

const baseStyle = {
  fontSize: 18
}

const desktopStyle = {
  paddingLeft: 200,
  paddingRight: 200,
  maxWidth: 660,
  marginLeft: 'auto',
  marginRight: 'auto'
}
