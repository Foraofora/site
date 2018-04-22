import React from 'react'
import { withState, withHandlers, lifecycle, compose } from 'recompose'

const enhance = compose(
  withState('selected', 'setSelected', 0),
  withHandlers({
    handleRightClick: ({ items, selected, setSelected, onChange }) => e => {
      const nextItem = selected < items.length - 1 ? selected + 1 : 0
      setSelected(null)
      setTimeout(e => setSelected(nextItem), 1)
      onChange && onChange(nextItem)
    },
    handleLeftClick: ({ items, selected, setSelected, onChange }) => e => {
      const nextItem = selected > 0 ? selected - 1 : items.length - 1
      setSelected(null)
      setTimeout(e => setSelected(nextItem), 1)
      onChange && onChange(nextItem)
    }
  }),
  lifecycle({
    componentDidMount() {
      this.handleKeyDown = e => {
        e.keyCode === 37 && this.props.handleLeftClick()
        e.keyCode === 39 && this.props.handleRightClick()
      }
      document.addEventListener('keydown', this.handleKeyDown)
      if (this.props.initialItem) this.props.setSelected(this.props.initialItem)
    },
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown)
    }
  })
)

const Gallery = ({
  items,
  wrapperProps,
  itemRender,
  selected,
  handleRightClick,
  handleLeftClick
}) => {
  if (!items.length) return null
  return (
    <div {...wrapperProps}>
      {items[selected] &&
        itemRender({
          ...items[selected],
          index: selected + 1,
          length: items.length
        })}
      {selected !== 0 && (
        <span
          style={leftNavStyle}
          className='galleryNav'
          onClick={handleLeftClick}
        >
          ←
        </span>
      )}
      {items.length > 1 && (
        <span
          style={rightNavStyle}
          className='galleryNav'
          onClick={handleRightClick}
        >
          →
        </span>
      )}
    </div>
  )
}

const leftNavStyle = {
  position: 'absolute',
  top: '45%',
  left: -28,
  fontSize: 90,
  fontFamily: 'Arial',
  cursor: 'pointer'
}
const rightNavStyle = {
  ...leftNavStyle,
  left: 'auto',
  right: -28
}

export default enhance(Gallery)
