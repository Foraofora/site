import React from 'react'
import Prismic from 'prismic-javascript'
import LogoWithMenu from '~/components/LogoWithMenu'
import PageWrapper from '~/components/struct/PageWrapper'
import ContentWrapper from '~/components/struct/ContentWrapper'
import Title from '~/components/Title'
import Quote from '~/components/base/Quote'
import FloatingTitle from '~/components/FloatingTitle'
import AuthorTeaser from '~/components/AuthorTeaser'
import Image from '~/components/base/Image'
import P from '~/components/base/Paragraph'
import Link from '~/components/base/Link'

export default class Story extends React.Component {

  static async getInitialProps({ req, query }) {
    const api = await Prismic.api("https://fora.prismic.io/api/v2")
    console.log(api.tags);
    const document = await api.getByID(query.id, {'fetchLinks': ['author.name', 'author.bio', 'author.photo', 'category.name']})
    return { document }
  }

  render() {
    const { document } = this.props
    const title = document.data.title[0].text
    const { author } = document.data
    const authorName = document.data.author.data && document.data.author.data.name[0].text
    const bio = document.data.author.data && document.data.author.data.bio && document.data.author.data.bio[0].text
    const category = document.data.category.data ? document.data.category.data.name[0].text : false

    return (
      <PageWrapper style={{background: '#DFDFDF', fontFamily: "'Source Serif Pro', serif"}}>
        <ContentWrapper style={coverWrapperStyle}>
          <Title>
            <Link href={{pathname: '/acoes'}}>/Ações & Imaginações</Link> /{category}
          </Title>
          <div style={coverMidStyle}>
            <h1 style={h1Style}>{ document.data.title[0].text }</h1>
            <div style={imageWrapperStyle}>
              <Image src={ document.data.cover.url } />
            </div>
          </div>
          <div style={coverBotStyle}>
            <p style={dateStyle} />
            <p style={authorStyle}>{ authorName && 'Por '+authorName }</p>
            <p style={dateStyle}>{ /*document.last_publication_date*/"18.02.18" }</p>
          </div>
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
  justifyContent: 'flex-end'
}

const h1Style = {
  paddingRight: 30,
  alignSelf: 'flex-end',
  marginBottom: 0,
  fontSize: 41,
  fontWeight: 600,
  maxWidth: '34%'
}

const authorStyle = {
  fontSize: 41,
  textAlign: 'center',
  marginBottom: 0,
  maxHeight: 85
}

const dateStyle = {
  width: 200,
  textAlign: 'right',
  fontSize: 41,
  marginBottom: 0
}

const bodyStyle = {
  fontFamily: "'Source Sans Pro', sans-serif",
}
