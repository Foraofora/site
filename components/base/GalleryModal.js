import React from 'react'
import Video from '~/components/base/Video'
import Image from '~/components/base/Image'
import Modal from '~/components/struct/Modal'
import Gallery from '~/components/base/Gallery'

const GalleryModal = ({ items, onBgClick, visible, wrapperProps, ...props }) =>
  <Modal
    visible={visible}
    style={{zIndex: 100, background: 'rgba(0,0,0,1)', padding: 30}}
    onBgClick={onBgClick}
  >
    <Gallery
      {...props}
      items={items}
      itemRender={ItemRender}
      wrapperProps={{ ...wrapperProps, style: galleryStyle }}
    />
  </Modal>

const ItemRender = ({subtitle, photo, video, index, length}) =>
  <div style={wrapperStyle} className='modal'>
    <div style={sidebarStyle}>
      <div style={{fontFamily: 'IntervalBold, monospace', marginBottom: 20}}>
        {index}/{length}
      </div>
      {subtitle && <div>subtitle</div>}
    </div>
    <div style={{...photoStyle, display: video ? 'block' : 'flex'}}>
      {photo && <Image {...photo} />}
      {video && <Video {...video} />}
    </div>
    <div style={{ ...sidebarStyle, textAlign: 'right' }}>
      <svg width={25} height={25} style={{cursor: 'pointer', pointerEvents: 'all'}} className='modal'>
        <g>
          <line
            strokeLinecap='undefined'
            strokeLinejoin='undefined'
            y2={25}
            x2={25}
            y1={0}
            x1={0}
            stroke='#FFF'
            fill='none'
            strokeWidth={2}
          />
          <line
            strokeLinecap='undefined'
            strokeLinejoin='undefined'
            y2={25}
            x2={0}
            y1={0}
            x1={25}
            stroke='#FFF'
            fill='none'
            strokeWidth={2}
          />
        </g>
      </svg>
    </div>
  </div>

const galleryStyle = {
  display: 'flex',
  height: '100%',
  position: 'relative'
}
const wrapperStyle = {
  maxHeight: '100%',
  display: 'flex',
  width: '100%'
}
const photoStyle = {
  margin: 20,
  textAlign: 'center',
  maxHeight: '90%',
  alignSelf: 'center',
  flex: 1
}
const sidebarStyle = {
  maxWidth: 200,
  minWidth: 200,
  fontSize: 13,
  fontFamily: 'IntervalBook, monospace',
  pointerEvents: 'none',
  textAlign: 'left'
}
export default GalleryModal
