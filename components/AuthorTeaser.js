import React from 'react'
import P from '~/components/base/Paragraph'
import Image from '~/components/base/Image'
import {RichText} from 'prismic-reactjs'

export default class AuthorTeaser extends React.Component {
  render () {
    const { author, style } = this.props

    if (!author.data) return false
    const bio = author.data.bio
    return (
      <P style={style}>
        <span style={wrapperStyle}>
          <Image {...author.data.photo} style={imageStyle} />
          {RichText.render(bio)}
        </span>
      </P>
    )
  }
}

const wrapperStyle = {
  display: 'flex',
  fontFamily: 'IntervalBook, monospace',
  fontSize: 12,
  alignItems: 'flex-start'
}

const imageStyle = {
  minWidth: 130,
  width: 130,
  marginRight: 20
}
