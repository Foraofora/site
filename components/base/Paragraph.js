import React from 'react'
import { MobileOnly, DesktopOnly } from '~/components/struct/Media'
import { RichText } from 'prismic-reactjs'

export default class ResponsiveParagraph extends React.Component {
  render () {
    const { style, children } = this.props
    return (
      <div>
        <MobileOnly>
          <Paragraph {...this.props}>{children}</Paragraph>
        </MobileOnly>
        <DesktopOnly>
          <Paragraph {...this.props} style={{ ...desktopStyle, ...style }}>{children}</Paragraph>
        </DesktopOnly>
      </div>
    )
  }
}

class Paragraph extends React.Component {
  render () {
    const { style, children } = this.props
    if (children instanceof Array) {
      return <div style={{ ...baseStyle, ...style }}>{RichText.render(children)}</div>
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
  maxWidth: 600,
  marginLeft: 'auto',
  marginRight: 'auto'
}
