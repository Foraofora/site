import React from 'react'
import Prismic from 'prismic-javascript'
import ContentWrapper from '~/components/struct/ContentWrapper'
import PageWrapper from '~/components/struct/PageWrapper'
import Image from '~/components/base/Image'
import P from '~/components/base/Paragraph'
import Link from '~/components/base/Link'
import Quote from '~/components/base/Quote'
import LogoWithMenu from '~/components/LogoWithMenu'
import Title from '~/components/Title'
import FloatingTitle from '~/components/FloatingTitle'
import AuthorTeaser from '~/components/AuthorTeaser'

export default class Article extends React.Component {

  static async getInitialProps({ req, query }) {
    const api = await Prismic.api("https://fora.prismic.io/api/v2")
    const document = await api.getByID(query.id, {'fetchLinks': ['author.name', 'author.bio', 'author.photo', 'category.name']})
    return { document }
  }

  render() {
    const { document } = this.props
    const title = document.data.title[0].text
    const { author, category } = document.data
    const authorName = author.data && author.data.name[0].text
    const categoryName = category.data ? category.data.name[0].text : false
    console.log(category)
    return (
      <PageWrapper style={{background: '#DFDFDF'}}>
        <ContentWrapper style={{...coverWrapperStyle, backgroundImage: `url(${document.data.cover.url})`}}>
          <Title>
            <Link href={{pathname: '/acoes'}}>/Ações & Imaginações</Link> /{categoryName}
          </Title>
          <div>
            <h1 style={h1Style}>{ title }</h1>
            { authorName && <div style={h1Style}>-</div> }
            <div style={coverBotStyle}>
              <p style={authorStyle}>{ authorName && 'Por '+authorName }</p>
              <p style={dateStyle}>{ /*document.last_publication_date*/"18.02.18" }</p>
            </div>
          </div>

          <P style={teaserStyle}>{ document.data.teaser }</P>
        </ContentWrapper>

        <ContentWrapper style={{marginTop: 50, position: 'relative'}}>
          <FloatingTitle author={authorName} title={title} />
          {this.renderBody()}
          <AuthorTeaser author={author} style={{marginTop: 80}} />
        </ContentWrapper>
      </PageWrapper>
    )
  }

  renderBody = () => {
    const { document } = this.props
    return document.data.body.map(slice => {
      if (slice.slice_type == 'text') return (
        <P style={bodyStyle}>{ slice.primary.text }</P>
      )
      if (slice.slice_type == 'quote') return (
        <Quote {...slice.primary} />
      )
    })
  }
}

const coverWrapperStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  fontFamily: "'Source Serif Pro', serif"
}

const coverBotStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  maxHeight: 91,
  fontSize: 41,
}

const h1Style = {
  paddingRight: 30,
  alignSelf: 'flex-end',
  marginBottom: 0,
  fontSize: 41,
  fontWeight: 600
}

const authorStyle = {
  margin: 0,
}

const dateStyle = {
  width: 200,
  textAlign: 'right',
  margin: 0
}
const teaserStyle = {
  fontSize: 22,
  fontWeight: 600,
  maxWidth: 780,
  paddingLeft: 160,
  paddingRight: 160
}

const bodyStyle = {
  fontFamily: "'Source Sans Pro', sans-serif",
}
