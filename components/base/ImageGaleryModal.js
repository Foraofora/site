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

  const handleGaleryRClick = () => {
    if (position - 800 < -slider.getBoundingClientRect().width) return
    setPosition(position - 600)
  }
  const handleGaleryLClick = () => {
    setPosition(position < 0 ? position + 600 : position)
  }
  const handleImageRClick = () => {
    setSelected(false);
    setTimeout(() => setSelected(selected < photos.length - 1 ? selected + 1 : selected), 1)
  }
  const handleImageLClick = () => {
    setSelected(false);
    setTimeout(() => setSelected(selected > 0 ? selected - 1 : selected), 1)
  }
  return (
    <div>
      <div style={{...sliderStyle, transform: `translate3d(calc(-50% - ${position}px), -50%, 0)`}} ref={(div) => { slider = div }}>
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
      <span style={leftNavStyle} onClick={handleGaleryLClick}>L</span>
      <span style={rightNavStyle} onClick={handleGaleryRClick}>R</span>
      <Modal visible={selected !== false} onBgClick={() => setSelected(false)} style={imageStyle}>
        {photos[selected] && <Image {...photos[selected].photo} />}
        <span style={leftNavStyle} onClick={handleImageLClick}>L</span>
        <span style={rightNavStyle} onClick={handleImageRClick}>R</span>
      </Modal>
    </div>
  )
}

const sliderStyle = {
  height: 540,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transition: '1s transform'
}
const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  height: 540 / 2,
  justifyContent: 'center'
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
  justifyContent: 'center',
  padding: 50,
  backgroundImage: 'url(https://media1.tenor.com/images/582d284f5d27f8d71a4097db21dd5bfd/tenor.gif?itemid=4904442)',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat'
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
