import React from 'react'
import { getAcoes } from '../lib/backend'
import PageWrapper from '../components/struct/PageWrapper'
import ContentWrapper from '../components/struct/ContentWrapper'
import Title from '../components/Title'
import CategorySelector from '../components/CategorySelector'
import ImageGrid from '../components/ImageGrid'

export default class pageAcoes extends React.Component {

  static async getInitialProps({ req }) {
    const { documents, categories } = await getAcoes()
    return { documents, categories }
  }

  state = {
    selectedCategory: false
  }

  render() {
    const { documents, categories } = this.props
    const { selectedCategory } = this.state
    return (
      <PageWrapper style={{background: '#DFDFDF'}}>
        <ContentWrapper>
          <Title>/Ações & Imaginações</Title>
          <CategorySelector
            categories={categories}
            selected={selectedCategory}
            onClick={this.handleCategorySelection}
          />
          <ImageGrid items={documents} category={selectedCategory} />
        </ContentWrapper>
      </PageWrapper>
    )
  }

  handleCategorySelection = (category) => {
    this.setState({selectedCategory: category})
  }
}
