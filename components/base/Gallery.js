import React from 'react'
import { withState, withHandlers, lifecycle, compose } from 'recompose'

const enhance = compose(
  withState('selected', 'setSelected', 0),
  withHandlers({
    handleRightClick: ({ items, selected, setSelected }) => e => {
      setSelected(null)
      setTimeout(e => setSelected(selected < items.length - 1 ? selected + 1 : 0), 1)
    },
    handleLeftClick: ({ items, selected, setSelected }) => e => {
      setSelected(null)
      setTimeout(e => setSelected(selected > 0 ? selected - 1 : items.length - 1), 1)
    }
  }),
  lifecycle({
    componentDidMount () {
      this.handleKeyDown = e => {
        e.keyCode === 37 && this.props.handleLeftClick()
        e.keyCode === 39 && this.props.handleRightClick()
      }
      document.addEventListener('keydown', this.handleKeyDown)
    },
    componentWillUnmount () {
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
      {items[selected] && itemRender({ ...items[selected], index: selected + 1, length: items.length })}
      <span style={leftNavStyle} onClick={handleLeftClick}>←</span>
      <span style={rightNavStyle} onClick={handleRightClick}>→</span>
    </div>
  )
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
export default enhance(Gallery)
