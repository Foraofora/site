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
      <PageWrapper style={{ background: '#DFDFDF', fontFamily: "'Source Serif Pro', serif" }}>
        <ContentWrapper style={coverWrapperStyle}>
          <Title>
            <MenuLink href={{ pathname: '/acoes' }}>/Ações & Imaginações</MenuLink> /{category}
          </Title>
          <div style={coverMidStyle}>
            <h1 style={h1Style}>{ title }</h1>
            <div style={imageWrapperStyle}>
              <Image src={doc.data.cover.url} />
            </div>
          </div>
          <div style={coverBotStyle}>
            <p style={dateStyle} />
            <p style={authorStyle}>{ authorName && `Por ${authorName}` }</p>
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
  justifyContent: 'space-between',
  maxHeight: 91
}
const imageWrapperStyle = {
  display: 'flex',
  marginTop: 30,
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  maxWidth: '70%',
  flex: 1
}

const h1Style = {
  paddingRight: 30,
  alignSelf: 'flex-end',
  fontSize: 41,
  marginBottom: -8,
  maxWidth: '30%',
  fontWeight: 600,
  flex: 1
}

const authorStyle = {
  fontSize: 41,
  textAlign: 'center',
  marginBottom: 0,
  maxHeight: 85,
  maxWidth: '35%'
}

const dateStyle = {
  width: 200,
  textAlign: 'right',
  fontSize: 41,
  marginBottom: 0
}

const bodyStyle = {
  fontFamily: "'Source Sans Pro', sans-serif"
}
