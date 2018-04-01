import React from 'react'
import { withState, withProps, compose } from 'recompose'
import Modal from '~/components/struct/Modal'
import Image from '~/components/base/Image'

const enhance = compose(
  withState('position', 'setPosition', 0),
  withState('selected', 'setSelected', false)
)

const ImageGaleryModal = ({ photos, position, setPosition, selected, setSelected }) => {
  let slider = null

  const handleRClick = () => {
    if (position - 800 < -slider.getBoundingClientRect().width) return
    setPosition(position - 600)
  }
  return (
    <div>
      <div style={{...sliderStyle, transform: `translate3d(${position}px, -50%, 0)`}} ref={(div) => { slider = div }}>
        <div style={rowStyle}>
          {photos.map((photo, i) => i % 2 === 0 &&
            <div onClick={() => setSelected(i)}>
              <Image style={itemStyle} {...photo.photo.thumb} />
            </div>
          )}
        </div>
        <div style={rowStyle}>
          {photos.map((photo, i) => i % 2 === 1 &&
            <div onClick={() => setSelected(i)}>
              <Image style={itemStyle} {...photo.photo.thumb} />
            </div>
          )}
        </div>
      </div>
      <span style={leftNavStyle} onClick={() => setPosition(position < 0 ? position + 600 : position)}>L</span>
      <span style={rightNavStyle} onClick={handleRClick}>R</span>
      <Modal visible={selected !== false} onBgClick={() => setSelected(false)} style={imageStyle}>
        {selected !== false && <Image {...photos[selected].photo} />}
        <span style={leftNavStyle} onClick={() => setSelected(selected > 0 ? selected - 1 : selected)}>L</span>
        <span style={rightNavStyle} onClick={() => setSelected(selected < photos.length-1 ? selected + 1 : selected)}>R</span>
      </Modal>
    </div>
  )
}

const sliderStyle = {
  height: 540,
  position: 'absolute',
  top: '50%',
  transition: '1s transform'
}
const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  height: 540 / 2
}
const itemStyle = {
  maxWidth: 250,
  maxHeight: 250,
  margin: 10,
  cursor: 'pointer',
  zIndex: 100
}
const imageStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
const leftNavStyle = {
  position: 'absolute',
  top: '50%',
  left: 0,
  fontSize: 40
}
const rightNavStyle = {
  ...leftNavStyle,
  left: 'auto',
  right: 0
}
export default enhance(ImageGaleryModal)
