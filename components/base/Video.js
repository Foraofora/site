import React from 'react'
import { withProps, withHandlers, compose } from 'recompose'

const enhance = compose(
  withProps(console.log)
)

const handleRef = (node) => {
  if (!node) return
  node.firstChild.src = node.firstChild.src + '&autoplay=1'
  node.firstChild.width = node.firstChild.width * 1.5
  node.firstChild.height = node.firstChild.height * 1.5
}

export const Video = ({ html }) =>
  <div dangerouslySetInnerHTML={{__html: html}} ref={handleRef} />

export default enhance(Video)
