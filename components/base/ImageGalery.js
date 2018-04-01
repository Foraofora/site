import React from 'react'
import { withState, withProps, compose } from 'recompose'
import Modal from '~/components/struct/Modal'
import ImageGaleryCover from './ImageGaleryCover'
import ImageGaleryModal from './ImageGaleryModal'

const enhance = compose(
  withState('visible', 'setVisible', false),
)

export const ImageGalery = enhance(
  ({ visible, setVisible, photos }) =>
    <span>
      <ImageGaleryCover
        {...photos[0].photo.cover}
        onOpenImage={() => setVisible(!visible)}
      />
      <Modal visible={visible} onBgClick={() => setVisible(!visible)} style={{zIndex: 100}}>
        <ImageGaleryModal photos={photos} />
      </Modal>
    </span>
)

export default ImageGalery
