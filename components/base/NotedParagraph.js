import React from 'react'
import P from '~/components/base/Paragraph'

const NotedParagraph = ({ text, note, style }) => (
  <div style={{ ...baseStyle, ...style }}>
    <P>{ text }</P>
    <P style={noteStyle}>{ note }</P>
  </div>
)

const baseStyle = {
  position: 'relative'
}

const noteStyle = {
  fontSize: 12,
  position: 'absolute',
  right: 0,
  top: 0,
  padding: 0,
  marginTop: '-1em',
  width: 160
}

export default NotedParagraph
