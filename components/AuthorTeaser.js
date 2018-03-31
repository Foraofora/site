import React from 'react'
import P from '~/components/base/Paragraph'
import Img from '~/components/base/Image'
import {RichText} from 'prismic-reactjs'

export default class AuthorTeaser extends React.Component {
  render () {
    const { author, style } = this.props

    if (!author.data) return false
    const photo = author.data.photo ? author.data.photo.url : false
    const bio = author.data.bio
    return (
      <P style={style}>
        <span style={wrapperStyle}>
          <Img style={imageStyle} src={photo} />
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
  alignItems: 'flex-start',
  marginLeft: -20
}

const imageStyle = {
  width: 130,
  marginRight: 20
}
