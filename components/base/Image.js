import React from 'react'

export const SimpleImage = props => (
  <img {...props} style={{ ...baseStyle, ...props.style }} />
)

export const LazyImage = (props) => {
  const { dimensions, url, style } = props
  return (
    <img
      {...props}
      src={url}
      width={dimensions.width}
      height={dimensions.height}
      style={{ ...baseStyle, ...style }}
    />
  )
}

export const Image = props => (props.dimensions
  ? <LazyImage {...props} /> : <SimpleImage {...props} />)

const baseStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  flex: 0,
  height: 'auto'
}

export default Image
