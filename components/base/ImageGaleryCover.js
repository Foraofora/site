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
      .root:hover > span {
        opacity: 0.8;
      }
      .root > span {
        position: absolute;
        left: 0; right: 0; bottom: 0;
        opacity: 0;
        background-color: rgb(0,17,254);
        display: block;
      }
    `}</style>
  </span>

export default ImageGaleryCover
