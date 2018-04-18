import React from 'react'
import { withState, withHandlers, compose, withProps } from 'recompose'
import Image from '~/components/base/Image'
import GalleryModal from './GalleryModal'
import Gallery from './Gallery'

export const ImageGalery = ({
  toggleVideoModal,
  togglePhotoModal,
  videoGaleryVisible,
  photoGaleryVisible,
  media: { photos, videos }
}) =>
  <div>
    <Gallery
      items={photos}
      itemRender={item => <Image {...item.photo} onClick={togglePhotoModal} />}
      wrapperProps={{style: { height: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}}
    />
    <GalleryModal items={photos} visible={photoGaleryVisible} onBgClick={togglePhotoModal} />
  </div>

const enhance = compose(
  withState('photoGaleryVisible', 'setPhotoGaleryVisible', false),
  withState('videoGaleryVisible', 'setVideoGaleryVisible', false),
  withHandlers({
    toggleVideoModal: ({ setVideoGaleryVisible, videoGaleryVisible }) => e => setVideoGaleryVisible(!videoGaleryVisible),
    togglePhotoModal: ({ setPhotoGaleryVisible, photoGaleryVisible }) => e => setPhotoGaleryVisible(!photoGaleryVisible)
  })
)

export default enhance(ImageGalery)
