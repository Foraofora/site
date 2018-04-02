import React from 'react'
import Prismic from 'prismic-javascript'
import PageWrapper from '~/components/struct/PageWrapper'
import ContentWrapper from '~/components/struct/ContentWrapper'
import Title from '~/components/Title'
import Quote from '~/components/base/Quote'
import NotedParagraph from '~/components/base/NotedParagraph'
import Sidebars from '~/components/Sidebars'
import AuthorTeaser from '~/components/AuthorTeaser'
import Image from '~/components/base/Image'
import P from '~/components/base/Paragraph'
import MenuLink from '~/components/MenuLink'
import RelatedContentWrapper from '~/components/RelatedContentWrapper'

export default class Story extends React.Component {
  static async getInitialProps ({ query }) {
    const api = await Prismic.api('https://fora.prismic.io/api/v2')
    const doc = await api.getByID(query.id, { fetchLinks: ['author.name', 'author.bio', 'author.photo', 'category.name', 'category.description'] })
    const related = await api.getByIDs(doc.data.related.map(item => item.related_item.id), { fetchLinks: ['author.name', 'category.name'] })
    return { doc, related: related.results }
  }

  render () {
    const { doc, related } = this.props
    const title = doc.data.title[0].text
    const { author } = doc.data
    const authorName = doc.data.author.data && doc.data.author.data.name[0].text
    const category = doc.data.category.data ? doc.data.category.data.name[0].text : false

    return (
      <PageWrapper
        style={{ background: '#DFDFDF', fontFamily: "'Source Serif Pro', serif" }}
        title={title}
      >
        <ContentWrapper style={coverWrapperStyle}>
          <Title>
            <MenuLink href={{ pathname: '/acoes' }}>/Ações & Imaginações</MenuLink> /{category}
          </Title>
          <div style={coverMidStyle}>
            <h1 style={h1Style}>
              { title }
              <br />-<br />
              <span style={{ fontWeight: 400 }}>
                { authorName && `Por ${authorName}` }
              </span>
            </h1>
            <div style={imageWrapperStyle}>
              <Image {...doc.data.cover} />
            </div>
          </div>
          <div style={coverBotStyle}>
            <p style={{width: 0}} />
            <P style={authorStyle}>{doc.data.teaser}</P>
            <p style={dateStyle}>18.02.18</p>
          </div>
        </ContentWrapper>

        <ContentWrapper style={{ marginTop: 50, position: 'relative' }}>
          <Sidebars doc={doc} />
          {this.renderBody()}
          <AuthorTeaser author={author} style={{ marginTop: 80 }} />
        </ContentWrapper>

        <RelatedContentWrapper related={related} />
      </PageWrapper>
    )
  }

  renderBody = () => {
    const { doc } = this.props
    return doc.data.body.map((slice) => {
      if (slice.slice_type === 'text') {
        return <P style={bodyStyle}>{slice.primary.text}</P>
      }
      if (slice.slice_type === 'quote') {
        return <Quote {...slice.primary} />
      }
      if (slice.slice_type === 'texto_e_nota') {
        return <NotedParagraph {...slice.primary} />
      }
    })
  }
}

const coverWrapperStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

const coverMidStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  maxHeight: '80%'
}
const coverBotStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}
const imageWrapperStyle = {
  marginTop: 30,
  maxWidth: '70%',
  flex: 1,
  textAlign: 'right'
}

const h1Style = {
  paddingRight: 30,
  alignSelf: 'flex-end',
  fontSize: 41,
  marginBottom: -8,
  maxWidth: '40%',
  fontWeight: 600,
  flex: 1
}

const authorStyle = {
  fontSize: 24,
  padding: 0,
  marginTop: 50,
  fontWeight: 600,
  marginBottom: '-1em'
}

const dateStyle = {
  width: 200,
  textAlign: 'right',
  fontSize: 41,
  marginBottom: 0,
  alignSelf: 'flex-end',
  lineHeight: '1em'
}

const bodyStyle = {
  fontFamily: "'Source Sans Pro', sans-serif"
}
