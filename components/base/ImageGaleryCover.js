import React from 'react'
import Image from '~/components/base/Image'
import Link from '~/components/base/Link'

const ImageGaleryCover = ({ onPhotoGaleryClick, onVideoGaleryClick, onImageClick, ...props }) =>
  <div style={{height: '100%', position: 'relative'}}>
    <Image
      {...props}
      onClick={onImageClick}
      style={onImageClick && {cursor: 'pointer'}}
    />
    <div style={textStyle}>
      {onPhotoGaleryClick && <Link onClick={onPhotoGaleryClick} style={linkStyle}>Ver Imagens</Link>}
      {onVideoGaleryClick && <Link onClick={onVideoGaleryClick} style={linkStyle}>Ver Vídeos</Link>}
    </div>
  </div>

const textStyle = {
  position: 'absolute',
  top: -20,
  right: 0,
  fontFamily: 'IntervalBook, monospace',
  fontSize: 13
}

const linkStyle = {
  textDecoration: 'underline',
  marginLeft: 20
}
export default ImageGaleryCover
