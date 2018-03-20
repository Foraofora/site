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
    const document = await api.getByID(query.id, {'fetchLinks': 'author.name'})
    return { document }
  }

  render() {
    const { document } = this.props
    console.log(document)
    return (
      <div style={{background: '#000', color: 'white', fontFamily: "'Source Serif Pro', serif"}}>
        <LogoWithMenu invert />
        <PageWrapper style={coverWrapperStyle}>
          <Title>/Ações & Imaginações /Arte</Title>
            <div style={coverMidStyle}>
              <h1 style={h1Style}>{ document.data.title[0].text }</h1>
              <div style={imageWrapperStyle}>
                <Image src={ document.data.photos[0].photo.url } />
              </div>
            </div>
          <div style={coverBotStyle}>
            <p style={dateStyle} />
            <p style={authorStyle}>{ 'Por '+document.data.author.data.name[0].text }</p>
            <p style={dateStyle}>{ /*document.last_publication_date*/"18.02.18" }</p>
          </div>
        </PageWrapper>
        <PageWrapper style={{marginTop: 50}}>
          <P>{ document.data.corpo[0].text }</P>
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
const coverMidWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}
const coverMidStyle = {
  display: 'flex',
  justifyContent: 'space-between'
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
  fontSize: 48,
  fontWeight: 'normal'
}

const authorStyle = {
  fontSize: 48,
  textAlign: 'center',
  marginBottom: 0,
  maxHeight: 94
}

const dateStyle = {
  width: 200,
  textAlign: 'right',
  fontSize: 48,
  marginBottom: 0
}
