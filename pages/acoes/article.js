import React from 'react'
import Prismic from 'prismic-javascript'
import ContentWrapper from '~/components/struct/ContentWrapper'
import PageWrapper from '~/components/struct/PageWrapper'
import P from '~/components/base/Paragraph'
import MenuLink from '~/components/MenuLink'
import Quote from '~/components/base/Quote'
import Title from '~/components/Title'
import Sidebars from '~/components/Sidebars'
import AuthorTeaser from '~/components/AuthorTeaser'
import RelatedContentWrapper from '~/components/RelatedContentWrapper'

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
    })
  }

  render () {
    const { doc, related } = this.props
    const title = doc.data.title[0].text
    const { author, category } = doc.data
    const authorName = author.data && author.data.name[0].text
    const categoryName = category.data ? category.data.name[0].text : false
    return (
      <PageWrapper title={title} style={{ background: '#DFDFDF' }}>
        <ContentWrapper style={{ ...coverWrapperStyle, backgroundImage: `url(${doc.data.cover.url})` }}>
          <Title>
            <MenuLink href={{ pathname: '/acoes' }}>/Ações & Imaginações</MenuLink> /{categoryName}
          </Title>
          <div>
            <h1 style={h1Style}>{ title }</h1>
            { authorName && <div style={h1Style}>-</div> }
            <div style={coverBotStyle}>
              <p style={authorStyle}>{ authorName && `Por ${authorName}` }</p>
              <p style={dateStyle}>18.02.18</p>
            </div>
          </div>

          <P style={teaserStyle}>{ doc.data.teaser }</P>
        </ContentWrapper>

        <ContentWrapper style={{ position: 'relative' }}>
          <div style={doc.data.teaser[0].text !== '' ? {} : { marginTop: '-26vh' }}>
            <Sidebars doc={doc} />
            <div>
              {this.renderBody()}
            </div>
            <AuthorTeaser author={author} style={{ marginTop: 80, paddingLeft: 0 }} />
          </div>
        </ContentWrapper>
        <RelatedContentWrapper related={related} />
      </PageWrapper>
    )
  }
}

const coverWrapperStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundSize: 'auto 65%',
  backgroundPosition: '89% 44px',
  backgroundRepeat: 'no-repeat',
  fontFamily: "'Source Serif Pro', serif"
}

const coverBotStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  maxHeight: 91,
  fontSize: 41
}

const h1Style = {
  paddingRight: 30,
  alignSelf: 'flex-end',
  marginBottom: 0,
  fontSize: 41,
  fontWeight: 600,
  maxWidth: '40%'
}

const authorStyle = {
  margin: 0
}

const dateStyle = {
  width: 200,
  textAlign: 'right',
  margin: 0
}
const teaserStyle = {
  fontSize: 24,
  fontWeight: 600,
  maxWidth: 600,
  paddingLeft: 0,
  marginBottom: '-1em'
}

const bodyStyle = {
  fontFamily: "'Source Sans Pro', sans-serif"
}
