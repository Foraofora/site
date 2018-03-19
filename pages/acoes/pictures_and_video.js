import React from 'react'
import Prismic from 'prismic-javascript'
import LogoWithMenu from '../../components/LogoWithMenu'
import PageWrapper from '../../components/PageWrapper'
import Title from '../../components/Title'

export default class Index extends React.Component {

  static async getInitialProps({ req, query }) {
    const api = await Prismic.api("https://fora.prismic.io/api/v2")
    const document = await api.getByID(query.id)
    return { document }
  }

  render() {
    const { document } = this.props
    console.log(document.data.title)
    return (
      <div style={{background: '#000', color: 'white'}}>
        <LogoWithMenu invert />
        <PageWrapper>
          <Title>/Ações & Imaginações /Arte</Title>
          <h1>{ document.data.title[0].text }</h1>
          <p>{ document.data.body }</p>
        </PageWrapper>
      </div>
    )
  }
}
