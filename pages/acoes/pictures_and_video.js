import React from 'react'
import Prismic from 'prismic-javascript'
import PageWrapper from '~/components/struct/PageWrapper'
import ContentWrapper from '~/components/struct/ContentWrapper'
import Title from '~/components/Title'
import FloatingTitle from '~/components/FloatingTitle'
import CategoryTeaser from '~/components/CategoryTeaser'
import AuthorTeaser from '~/components/AuthorTeaser'
import TagsTeaser from '~/components/TagsTeaser'
import Image from '~/components/base/Image'
import P from '~/components/base/Paragraph'
import Link from '~/components/base/Link'

export default class Index extends React.Component {

  static async getInitialProps({ req, query }) {
    const api = await Prismic.api("https://fora.prismic.io/api/v2")
    const document = await api.getByID(query.id, {'fetchLinks': ['author.name', 'author.bio', 'author.photo', 'category.name', 'category.description']})
    return { document }
  }

  render() {
    const { document } = this.props
    const { author } = document.data
    const authorName = author.data && author.data.name[0].text
    const title = document.data.title[0].text
    const category = document.data.category.data ? document.data.category.data.name[0].text : false

    return (
      <PageWrapper invert style={{background: '#000', color: 'white', fontFamily: "'Source Serif Pro', serif"}}>
        <ContentWrapper style={coverWrapperStyle}>
          <Title>
            <Link href={{pathname: '/acoes'}}>/Ações & Imaginações</Link> /{category}
          </Title>
          <div style={coverMidStyle}>
            <h1 style={h1Style}>{ document.data.title[0].text }</h1>
            <div style={imageWrapperStyle}>
              <Image src={ document.data.photos[0].photo.url } />
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
          {this.renderRightSidebar()}
          <P style={bodyStyle}>{ document.data.corpo }</P>
          <AuthorTeaser author={author} style={{marginTop: 80}} />
        </ContentWrapper>
      </PageWrapper>
    )
  }

  renderRightSidebar = () => {
    const { category } = this.props.document.data
    const { tags } = this.props.document
    return (
      <div style={{position: 'relative'}}>
        <div style={{position: 'absolute', right: 0, width: 160}}>
          <CategoryTeaser category={category} />
          <TagsTeaser tags={tags} />
        </div>
      </div>
    )
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
  marginTop: 50,
  alignItems: 'flex-end',
  justifyContent: 'flex-end'
}

const h1Style = {
  paddingRight: 30,
  alignSelf: 'flex-end',
  fontSize: 41,
  fontWeight: 'normal',
  marginBottom: -8,
  maxWidth: 480,
  fontWeight: 600
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
