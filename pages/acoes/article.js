import React from 'react'
import Prismic from 'prismic-javascript'
import LogoWithMenu from '../../components/LogoWithMenu'
import PageWrapper from '../../components/PageWrapper'
import Title from '../../components/Title'
import Image from '../../components/Image'
import P from '../../components/Paragraph'
export default class Index extends React.Component {

  static async getInitialProps({ req, query }) {
    const api = await Prismic.api("https://fora.prismic.io/api/v2")
    const document = await api.getByID(query.id, {'fetchLinks': ['author.name', 'author.bio']})
    return { document }
  }

  render() {
    const { document } = this.props
    const author = document.data.author.data && document.data.author.data.name[0].text
    const bio = document.data.author.data && document.data.author.data.bio[0].text
    return (
      <div style={{background: '#000', color: 'white', fontFamily: "'Source Serif Pro', serif"}}>
        <LogoWithMenu invert />

        <PageWrapper style={coverWrapperStyle}>
          <Title>/Ações & Imaginações /Arte</Title>
          <div style={coverMidStyle}>
            <h1 style={h1Style}>{ document.data.title[0].text }</h1>
            <div style={imageWrapperStyle}>
              <Image src={ document.data.cover.url } />
            </div>
          </div>
          <div style={coverBotStyle}>
            <p style={dateStyle} />
            <p style={authorStyle}>{ 'Por '+author }</p>
            <p style={dateStyle}>{ /*document.last_publication_date*/"18.02.18" }</p>
          </div>
        </PageWrapper>

        <PageWrapper style={{marginTop: 50, position: 'relative'}}>
          <div style={bodyTitleStyle}>
            <div>{ document.data.title[0].text }</div>
            <div>{ author }</div>
          </div>
          <P style={bodyStyle}>{ document.data.corpo }</P>
          <P style={bioStyle}>{ bio }</P>
        </PageWrapper>

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
  marginBottom: 0,
  fontSize: 41,
  fontWeight: 'normal',
  marginBottom: -8
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

const bodyTitleStyle = {
  position: 'absolute',
  transform: 'rotateZ(-90deg)',
  textAlign: 'center',
  top: 150,
  fontFamily: 'IntervalBook, monospace',
  fontSize: 16,
  maxWidth: 260
}
const bodyStyle = {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontSize: 16
}
const bioStyle = {
  fontFamily: 'IntervalBook, monospace',
  fontSize: 12,
  marginTop: 50
}
