import React from 'react'
import Prismic from 'prismic-javascript'
import Head from '~/components/struct/Head'
import LogoWithMenu from '~/components/LogoWithMenu'
import SliderTunnel from '~/components/SliderTunnel'

export default class Index extends React.Component {
  static async getInitialProps ({ req }) {
    const api = await Prismic.api('https://fora.prismic.io/api/v2')
    const homeDocument = await api.getSingle('home')
    const title = homeDocument.data.title[0].text
    const query = await api.query(Prismic.Predicates.any('document.type', ['article', 'pictures_and_video', 'story']))
    const documents = query.results
    return { title, documents }
  }

  render () {
    const { title, documents } = this.props
    return (
      <div>
        <LogoWithMenu animation='pulse' slogan={title} />
        <Head />
        <SliderTunnel documents={documents} />
      </div>
    )
  }
}
