import React from 'react'
import Image from '~/components/base/Image'
import Link from '~/components/base/Link'

const ImageGaleryCover = (props) =>
  <span className='root'>
    <Image {...props} />
    <span><Link onClick={props.onOpenImage}>Abrir Galeria</Link></span>
    <style jsx>{`
      .root {
        position: relative;
      }
      .root > span {
        position: absolute;
        top: -1em;
      }
    `}</style>
  </span>

export default ImageGaleryCover
