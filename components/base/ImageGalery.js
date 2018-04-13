import React from 'react'
import { withState, withHandlers, compose, withProps } from 'recompose'
import Modal from '~/components/struct/Modal'
import ImageGaleryCover from './ImageGaleryCover'
import ImageGaleryModal from './ImageGaleryModal'

export const ImageGalery = ({
  toggleVideoModal,
  togglePhotoModal,
  videoGaleryVisible,
  photoGaleryVisible,
  media: { photos, videos }
}) =>
  <div style={{height: '100%', maxHeight: '100%'}}>
    <ImageGaleryCover
      photo={photos.length && photos[0].photo}
      video={!photos.length && videos[0].video}
      onImageClick={togglePhotoModal}
      onPhotoGaleryClick={ photos.length ? togglePhotoModal : false}
      onVideoGaleryClick={ videos.length > 1 ? toggleVideoModal : false }
    />
    <Modal
      visible={photoGaleryVisible}
      onBgClick={togglePhotoModal}
      style={{zIndex: 100, background: 'rgba(0,0,0,0.9)'}}
    >
      <ImageGaleryModal photos={photos} />
    </Modal>
    <Modal
      visible={videoGaleryVisible}
      onBgClick={toggleVideoModal}
      style={{zIndex: 100, background: 'rgba(0,0,0,0.9)'}}
    >
      <ImageGaleryModal videos={videos} />
    </Modal>
  </div>

const enhance = compose(
  withState('photoGaleryVisible', 'setPhotoGaleryVisible', false),
  withState('videoGaleryVisible', 'setVideoGaleryVisible', false),
  withHandlers({
    toggleVideoModal: ({ setVideoGaleryVisible, videoGaleryVisible }) => setVideoGaleryVisible(!videoGaleryVisible),
    togglePhotoModal: ({ setPhotoGaleryVisible, photoGaleryVisible }) => setPhotoGaleryVisible(!photoGaleryVisible)
  })
)

export default enhance(ImageGalery)
