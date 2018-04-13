import React from 'react'
import Image from '~/components/base/Image'
import Video from '~/components/base/Video'
import Link from '~/components/base/Link'

const ImageGaleryCover = ({ onPhotoGaleryClick, onVideoGaleryClick, onImageClick, video, photo }) =>
  <div style={{height: '100%', position: 'relative'}}>
    {photo ? <Image
      {...photo}
      onClick={onPhotoGaleryClick}
      style={onImageClick && {cursor: 'pointer'}}
    /> : null }
    {video ? <Video {...video} /> : null}
    <div style={textStyle}>
      {onPhotoGaleryClick && <Link onClick={onPhotoGaleryClick} style={linkStyle}>Ver Imagens</Link>}
      {onVideoGaleryClick && <Link onClick={onVideoGaleryClick} style={linkStyle}>Ver Vídeos</Link>}
    </div>
  </div>

const textStyle = {
  position: 'absolute',
  top: -40,
  right: 0,
  fontFamily: 'IntervalBook, monospace',
  fontSize: 18
}

const linkStyle = {
  textDecoration: 'underline',
  marginLeft: 20
}

export default ImageGaleryCover
