import React from 'react'
import Prismic from 'prismic-javascript'
import LogoWithMenu from '../components/LogoWithMenu'
import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'
import ImageGrid from '../components/ImageGrid'

export default class Index extends React.Component {

  static async getInitialProps({ req }) {
    const api = await Prismic.api("https://fora.prismic.io/api/v2")
    const apiQuery = await api.query(
      Prismic.Predicates.any("document.type", ["article", "pictures_and_video"]),
      {'fetchLinks': 'author.name'}
    )
    const documents = apiQuery.results
    return { documents }
  }

  render() {
    return (
      <div style={{background: '#DFDFDF'}}>
        <LogoWithMenu />
        <PageWrapper>
          <Title>/Ações & Imaginações</Title>
          <ImageGrid items={this.props.documents} />
        </PageWrapper>
      </div>
    )
  }
}
