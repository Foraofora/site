import React from 'react'
import Prismic from 'prismic-javascript'
import PageWrapper from '~/components/struct/PageWrapper'
import ContentWrapper from '~/components/struct/ContentWrapper'
import PhotosAndVideosCover from '~/components/PhotosAndVideosCover'
import PhotosAndVideosCoverMobile from '~/components/PhotosAndVideosCoverMobile'
import AuthorTeaser from '~/components/AuthorTeaser'
import Sidebars from '~/components/Sidebars'
import P from '~/components/base/Paragraph'
import RelatedContentWrapper from '~/components/RelatedContentWrapper'

export default class Index extends React.Component {
  static async getInitialProps ({ query }) {
    const api = await Prismic.api('https://fora.prismic.io/api/v2')
    const doc = await api.getByID(query.id, { fetchLinks: ['author.name', 'author.bio', 'author.photo', 'category.name', 'category.description'] })
    const related = await api.getByIDs(doc.data.related.map(item => item.related_item.id), { fetchLinks: ['author.name', 'category.name'] })
    return { doc, related: related.results }
  }

  render () {
    const { doc, related } = this.props
    const { author, photos, category, videos } = doc.data
    const coverPhoto = photos.length ? photos[0].photo.url : videos[0].video.thumbnail_url
    return (
      <PageWrapper invert title={doc.data.title[0].text} cover={coverPhoto} style={{background: '#dfdfdf'}}>
        <div className='desktop-only'><PhotosAndVideosCover {...this.props} /></div>
        <div className='mobile-only'><PhotosAndVideosCoverMobile {...this.props} /></div>

        <ContentWrapper style={{ paddingBottom: '70px', paddingTop: '50px', position: 'relative', ...invertStyle }}>
          <Sidebars doc={doc} />
          <P style={bodyStyle}>{ doc.data.corpo }</P>
          <AuthorTeaser author={author} style={{ marginTop: 80, paddingLeft: 0 }} />
        </ContentWrapper>
        <RelatedContentWrapper related={related} />
        <style jsx>{`
          @media only screen and (max-width: 752px) {
            div.desktop-only { display: none; }
          }
          @media only screen and (min-width: 752px) {
            div.mobile-only { display: none; }
          }
        `}</style>
      </PageWrapper>
    )
  }
}

const invertStyle = {
  background: '#000',
  color: 'white',
  fontFamily: "'Source Serif Pro', serif"
}

const bodyStyle = {
  fontFamily: "'Source Sans Pro', sans-serif",
  marginTop: '-1em'
}
