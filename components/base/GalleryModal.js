import React from 'react'
import Video from '~/components/base/Video'
import Image from '~/components/base/Image'
import Modal from '~/components/struct/Modal'
import Gallery from '~/components/base/Gallery'

const GalleryModal = ({ items, onBgClick, visible, wrapperProps }) =>
  <Modal
    visible={visible}
    style={{zIndex: 100, background: 'rgba(0,0,0,0.9)'}}
    onBgClick={onBgClick}
  >
    <Gallery
      items={items}
      itemRender={ItemRender}
      wrapperProps={{ ...wrapperProps, style: galleryStyle }}
    />
  </Modal>

const ItemRender = ({subtitle, photo, video, index, length}) =>
  <div style={wrapperStyle} className='modal'>
    <div style={sidebarStyle}>{index}/{length} {subtitle && <a>{subtitle}</a>}</div>
    <div style={photoStyle}>
      {photo && <Image {...photo} />}
      {video && <Video {...video} />}
    </div>
    <div style={{ ...sidebarStyle, textAlign: 'right' }}>X</div>
  </div>

const galleryStyle = {
  display: 'flex',
  height: '100%'
}
const wrapperStyle = {
  maxHeight: '100%',
  display: 'flex'
}
const photoStyle = {
  margin: 20,
  textAlign: 'center',
  maxHeight: '90%',
  alignSelf: 'center',
  display: 'flex'
}
const sidebarStyle = {
  margin: 20,
  maxWidth: 200,
  minWidth: 200,
  fontSize: 12,
  fontFamily: "'Source Sans Pro', sans-serif",
  pointerEvents: 'none',
  textAlign: 'left'
}
export default GalleryModal
