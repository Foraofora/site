import React from 'react'
import LazyLoad from 'react-lazyload'

export const SimpleImage = props => (
  <img {...props} style={{ ...baseStyle, ...props.style }} />
)

export const LazyImage = (props) => {
  const { dimensions, url, style } = props
  let image = null
  return (
    <LazyLoad height={dimensions.height} once >
      <img
        src={url}
        width={dimensions.width}
        height={dimensions.height}
        style={{ ...lazyStyle, ...style }}
        onLoad={() => loadTransform(image)}
        ref={el => { image = el }}
      />
    </LazyLoad>
  )
}

const loadTransform = image => {
  setTimeout(() => { image.style.opacity = 1 }, 1)
  setTimeout(() => { image.style.transform = 'scale(1)' }, 1)
}

export const Image = props => (props.dimensions
  ? <LazyImage {...props} /> : <SimpleImage {...props} />)

const baseStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  flex: 0,
  height: 'auto',
  width: 'auto',
  verticalAlign: 'bottom'
}
const lazyStyle = {
  ...baseStyle,
  opacity: 0,
  transform: 'scale(1.2)',
  transition: '.2s opacity .2s linear, .4s transform .1s ease-out'
}

export default Image
