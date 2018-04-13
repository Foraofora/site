import React from 'react'
import Prismic from 'prismic-javascript'
import ContentWrapper from '~/components/struct/ContentWrapper'
import PageWrapper from '~/components/struct/PageWrapper'
import P from '~/components/base/Paragraph'
import Quote from '~/components/base/Quote'
import ArticleCover from '~/components/ArticleCover'
import ArticleCoverMobile from '~/components/ArticleCoverMobile'
import Sidebars from '~/components/Sidebars'
import AuthorTeaser from '~/components/AuthorTeaser'
import RelatedContentWrapper from '~/components/RelatedContentWrapper'
import NotedParagraph from '~/components/base/NotedParagraph'

export default class Article extends React.Component {
  static async getInitialProps ({ query }) {
    const api = await Prismic.api('https://fora.prismic.io/api/v2')
    const doc = await api.getByID(query.id, { fetchLinks: ['author.name', 'author.bio', 'author.photo', 'category.name', 'category.description'] })
    const related = await api.getByIDs(doc.data.related.map(item => item.related_item.id), { fetchLinks: ['author.name', 'category.name'] })
    return { doc, related: related.results }
  }

  renderBody = () => {
    const { doc } = this.props
    return doc.data.body.map((slice) => {
      if (slice.slice_type == 'text') {
        return (
          <P style={bodyStyle}>{ slice.primary.text }</P>
        )
      }
      if (slice.slice_type == 'quote') {
        return (
          <Quote {...slice.primary} />
        )
      }
      if (slice.slice_type === 'texto_e_nota') {
        return <NotedParagraph {...slice.primary} />
      }
    })
  }

  render () {
    const { doc, related } = this.props
    const title = doc.data.title[0].text
    const { author } = doc.data

    return (
      <PageWrapper title={title} cover={doc.data.cover.url} style={{ background: '#DFDFDF' }}>
        <div className='desktop-only'><ArticleCover {...this.props} /></div>
        <div className='mobile-only'><ArticleCoverMobile {...this.props} /></div>
        <ContentWrapper style={{ ...bodyStyle, position: 'relative' }}>
          <div style={doc.data.teaser[0].text !== '' ? {} : { marginTop: '-26vh' }}>
            <Sidebars doc={doc} />
            <div>
              {this.renderBody()}
            </div>
            <AuthorTeaser author={author} style={{ marginTop: 80, paddingLeft: 0 }} />
          </div>
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

const bodyStyle = {
  fontFamily: "'Source Sans Pro', sans-serif"
}
