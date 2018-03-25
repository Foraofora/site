import React from 'react'
import Prismic from 'prismic-javascript'
import LogoWithMenu from '../../components/LogoWithMenu'
import PageWrapper from '../../components/PageWrapper'
import Title from '../../components/Title'
import FloatingTitle from '../../components/FloatingTitle'
import Image from '../../components/Image'
import P from '../../components/Paragraph'
import AuthorTeaser from '../../components/AuthorTeaser'

export default class Index extends React.Component {

  static async getInitialProps({ req, query }) {
    const api = await Prismic.api("https://fora.prismic.io/api/v2")
    const document = await api.getByID(query.id, {'fetchLinks': ['author.name', 'author.bio', 'author.photo']})
    return { document }
  }

  render() {
    const { document } = this.props
    const title = document.data.title[0].text
    const { author } = document.data
    const authorName = document.data.author.data && document.data.author.data.name[0].text
    const bio = document.data.author.data && document.data.author.data.bio[0].text

    return (
      <div style={{background: '#DFDFDF'}}>
        <LogoWithMenu/>

        <PageWrapper style={{...coverWrapperStyle, backgroundImage: `url(${document.data.cover.url})`}}>
          <Title>/Ações & Imaginações /Arte</Title>
          <div>
            <h1 style={h1Style}>{ title }</h1>
            <div style={h1Style}>-</div>
            <div style={coverBotStyle}>
              <p style={authorStyle}>{ 'Por '+authorName }</p>
              <p style={dateStyle}>{ /*document.last_publication_date*/"18.02.18" }</p>
            </div>
          </div>

          <P style={teaserStyle}>{ document.data.teaser }</P>
        </PageWrapper>

        <PageWrapper style={{marginTop: 50, position: 'relative'}}>
          <FloatingTitle author={authorName} title={title} />
          <P style={bodyStyle}>{ document.data.body[0].primary.text }</P>
          <AuthorTeaser author={author} style={{marginTop: 80}} />
        </PageWrapper>

      </div>
    )
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
  fontWeight: 'normal',
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
  fontSize: 16
}
