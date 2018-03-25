import React from 'react'
import Prismic from 'prismic-javascript'
import LogoWithMenu from '../components/LogoWithMenu'
import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'
import CategorySelector from '../components/CategorySelector'
import ImageGrid from '../components/ImageGrid'
import Footer from '../components/Footer'

export default class Index extends React.Component {

  static async getInitialProps({ req }) {
    const api = await Prismic.api("https://fora.prismic.io/api/v2")
    const docQuery = await api.query(
      Prismic.Predicates.any("document.type", ["article", "pictures_and_video"]),
      {'fetchLinks': ['author.name', 'category.name']}
    )
    const catQuery = await api.query(
      Prismic.Predicates.any("document.type", ["category"])
    )
    return { documents: docQuery.results, categories: catQuery.results }
  }

  state = {
    selectedCategory: false
  }

  render() {
    const { documents, categories } = this.props
    const { selectedCategory } = this.state
    return (
      <div style={{background: '#DFDFDF'}}>
        <LogoWithMenu />
        <PageWrapper>
          <Title>/Ações & Imaginações</Title>
          <CategorySelector
            categories={categories}
            selected={selectedCategory}
            onClick={this.handleCategorySelection}
          />
          <ImageGrid items={documents} category={selectedCategory} />
        </PageWrapper>
        <PageWrapper>
          <Footer />
        </PageWrapper>
      </div>
    )
  }

  handleCategorySelection = (category) => {
    this.setState({selectedCategory: category})
  }
}
