import React from 'react'
import { withState, lifecycle, compose } from 'recompose'
import Modal from '~/components/struct/Modal'
import Image from '~/components/base/Image'
import Video from '~/components/base/Video'

const enhance = compose(
  withState('position', 'setPosition', 0),
  withState('selected', 'setSelected', false),
  lifecycle({
    componentDidMount () {
      window.addEventListener('resize', () => {
        this.setState({
          windowWidth: window.innerWidth,
          sliderWidth: document.getElementById('slider').getBoundingClientRect().width
        })
      })
      setInterval(() => window.dispatchEvent(new Event('resize')), 1000)
    }
  })
)

const ImageGaleryModal = ({ photos, videos, position, setPosition, selected, setSelected, windowWidth, sliderWidth }) => {
  const media = photos || videos

  const isGaleryStart = () => {
    if (position > 0) return false
    if (-(sliderWidth / 2 - windowWidth / 2) < position) return false
    return true
  }

  const isGaleryEnd = () => {
    if (position < 0) return false
    if ((sliderWidth / 2 - windowWidth / 2) > position) return false
    return true
  }

  const handleGaleryRClick = () => {
    if (window.innerWidth/2 > sliderWidth / 2) return false
    if (sliderWidth / 2 - window.innerWidth / 2 - position > 600) return setPosition(position + 600)
    if (sliderWidth / 2 - window.innerWidth / 2 - position > 0) return setPosition(position + (sliderWidth / 2 - window.innerWidth / 2 - position))
  }
  const handleGaleryLClick = () => {
    if (position > 600) return setPosition(position - 600)
    if (position < 600 && position > 0) return setPosition(0)
    if (window.innerWidth/2 > sliderWidth / 2) return false
    if (-(sliderWidth / 2 - window.innerWidth / 2) < position - 600) return setPosition(position - 600)
    if (-(sliderWidth / 2 - window.innerWidth / 2) < position) return setPosition(-(sliderWidth / 2 - window.innerWidth / 2) + position)
    setPosition(position > 0 ? position - 600 : position)
  }
  const handleImageRClick = () => {
    setSelected(false)
    setTimeout(() => setSelected(selected < media.length - 1 ? selected + 1 : selected), 1)
  }
  const handleImageLClick = () => {
    setSelected(false)
    setTimeout(() => setSelected(selected > 0 ? selected - 1 : selected), 1)
  }

  return (
    <div>
      <div style={{...sliderStyle, transform: `translate3d(calc(-50% - ${position}px), -50%, 0)`}} id='slider'>
        <div style={rowStyle}>
          {media.map((item, i) => i % 2 === 0 &&
            <div onClick={() => setSelected(i)}>
              {item.photo && <Image style={itemStyle} {...item.photo.thumb} />}
              {item.video && <Image style={itemStyle} url={item.video.thumbnail_url} dimensions={{ width: item.thumbnail_width, height: item.thumbnail_height }} />}
            </div>
          )}
        </div>
        <div style={rowStyle}>
          {media.map((item, i) => i % 2 === 1 &&
            <div onClick={() => setSelected(i)}>
              {item.photo && <Image style={itemStyle} {...item.photo.thumb} />}
              {item.video && <Image style={itemStyle} url={item.video.thumbnail_url} dimensions={{ width: item.thumbnail_width, height: item.thumbnail_height }} />}
            </div>
          )}
        </div>
      </div>
      {!isGaleryStart() && <span style={leftNavStyle} onClick={handleGaleryLClick}>←</span>}
      {!isGaleryEnd() && <span style={rightNavStyle} onClick={handleGaleryRClick}>→</span>}
      <Modal visible={selected !== false} onBgClick={() => setSelected(false)} style={imageStyle}>
        {selected !== false && media[selected].photo && <Image {...media[selected].photo} />}
        {selected !== false && media[selected].video && <Video {...media[selected].video} />}
        {selected !== false && media[selected].subtitle && <a>{media[selected].subtitle}</a>}
        {selected > 0 && <span style={leftNavStyle} onClick={handleImageLClick}>←</span>}
        {selected !== media.length-1 && <span style={rightNavStyle} onClick={handleImageRClick}>→</span>}
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
  backgroundImage: 'url(/static/loading.gif)',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'black',
  flexDirection: 'column',
  backgroundSize: '120px 80px'
}
const leftNavStyle = {
  position: 'absolute',
  top: '46%',
  left: 10,
  fontSize: 90,
  fontFamily: 'Arial',
  cursor: 'pointer'
}
const rightNavStyle = {
  ...leftNavStyle,
  left: 'auto',
  right: 10
}
export default enhance(ImageGaleryModal)
