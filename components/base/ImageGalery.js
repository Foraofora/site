import React from 'react'
import { withState, withHandlers, compose, withProps } from 'recompose'
import Image from '~/components/base/Image'
import Video from '~/components/base/Video'
import MenuLink from '~/components/MenuLink'
import GalleryModal from './GalleryModal'
import Gallery from './Gallery'

export const ImageGalery = ({
  toggleVideoModal,
  togglePhotoModal,
  videoGaleryVisible,
  photoGaleryVisible,
  media: { photos, videos },
  currentCoverItem,
  setCurrentCoverItem,
  ...props
}) =>
  <div {...props} className='galeryCover'>
    {photos.length > 1 ?
      <Gallery
        items={photos}
        itemRender={item => <Image {...item.photo} onClick={togglePhotoModal} />}
        wrapperProps={{style: { height: '100%', cursor: 'pointer' }}}
        onChange={i => setCurrentCoverItem(i)}
      /> :
      <Gallery
        items={videos}
        itemRender={item => <Video {...item.video} />}
        wrapperProps={{style: { height: '100%', cursor: 'pointer' }}}
        onChange={i => setCurrentCoverItem(i)}
      />
    }
    <div style={{position: 'absolute', top: 0, right: 0}}>
      {photos.length > 1 && <MenuLink onClick={togglePhotoModal} style={{marginRight: 20}}>Ver imagens</MenuLink>}
      {videos.length > 1 || (videos.length === 1 && photos.length > 0) ? <MenuLink onClick={toggleVideoModal}>Ver vídeos</MenuLink> : null}
    </div>
    <GalleryModal
      items={photos}
      visible={photoGaleryVisible}
      onBgClick={togglePhotoModal}
      initialItem={currentCoverItem}
    />
    <GalleryModal
      items={videos}
      visible={videoGaleryVisible}
      onBgClick={toggleVideoModal}
      initialItem={currentCoverItem}
    />
    <style jsx global>{`
      .galeryCover {
        padding-top: 1.3em;
        font-size: 24px;
      }
      .galeryCover .galleryNav {
        opacity: 0;
      }
      .galeryCover > div:hover .galleryNav {
        opacity: 1;
      }
    `}</style>
  </div>

const enhance = compose(
  withState('photoGaleryVisible', 'setPhotoGaleryVisible', false),
  withState('videoGaleryVisible', 'setVideoGaleryVisible', false),
  withState('currentCoverItem', 'setCurrentCoverItem', 0),
  withHandlers({
    toggleVideoModal: ({ setVideoGaleryVisible, videoGaleryVisible }) => e => setVideoGaleryVisible(!videoGaleryVisible),
    togglePhotoModal: ({ setPhotoGaleryVisible, photoGaleryVisible }) => e => setPhotoGaleryVisible(!photoGaleryVisible)
  })
)

export default enhance(ImageGalery)
