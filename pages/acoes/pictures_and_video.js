import React from 'react'
import Prismic from 'prismic-javascript'
import PageWrapper from '~/components/struct/PageWrapper'
import ContentWrapper from '~/components/struct/ContentWrapper'
import Title from '~/components/Title'
import AuthorTeaser from '~/components/AuthorTeaser'
import Sidebars from '~/components/Sidebars'
import ImageGalery from '~/components/base/ImageGalery'
import P from '~/components/base/Paragraph'
import MenuLink from '~/components/MenuLink'
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
    const authorName = author.data && author.data.name[0].text
    const categoryName = category.data && category.data.name[0].text

    return (
      <PageWrapper invert title={doc.data.title[0].text} style={{background: '#dfdfdf'}}>
        <ContentWrapper style={coverWrapperStyle}>
          <Title>
            <MenuLink href={{ pathname: '/acoes' }}>/Ações & imaginações</MenuLink> <MenuLink href={{ pathname: '/acoes' }}>{`/${categoryName}`}</MenuLink>
          </Title>
          <div style={coverMidStyle}>
            <h1 style={h1Style}>{ doc.data.title[0].text }</h1>
            <div style={imageWrapperStyle}>
              <ImageGalery media={{videos, photos}} />
            </div>
          </div>
          <div style={coverBotStyle}>
            <p style={dateStyle} />
            <p style={authorStyle}>{ authorName && `Por ${authorName}` }</p>
            <p style={dateStyle}>18.02.18</p>
          </div>
        </ContentWrapper>

        <ContentWrapper style={{ paddingTop: '70px', paddingBottom: '70px', position: 'relative', ...invertStyle }}>
          <Sidebars doc={doc} />
          <P style={bodyStyle}>{ doc.data.corpo }</P>
          <AuthorTeaser author={author} style={{ marginTop: 80 }} />
        </ContentWrapper>

        <RelatedContentWrapper related={related} />
      </PageWrapper>
    )
  }
}

const invertStyle = {
  background: '#000',
  color: 'white',
  fontFamily: "'Source Serif Pro', serif"
}
const coverWrapperStyle = {
  ...invertStyle,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}
const coverMidStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}
const coverBotStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: 10,
  maxHeight: 52
}
const imageWrapperStyle = {
  marginTop: 30,
  marginBottom: 12,
  textAlign: 'right',
  flex: 1
}

const h1Style = {
  paddingRight: 30,
  fontSize: 41,
  fontWeight: 600,
  alignSelf: 'flex-end',
  margin: 0,
  minWidth: '30%'
}

const authorStyle = {
  fontSize: 41,
  textAlign: 'center',
  margin: 0,
  maxHeight: 85,
  maxWidth: '40%',
  zIndex: 1
}

const dateStyle = {
  width: 200,
  textAlign: 'right',
  fontSize: 41,
  margin: 0
}

const bodyStyle = {
  fontFamily: "'Source Sans Pro', sans-serif",
  marginTop: '-1em'
}
