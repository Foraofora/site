import React from 'react'
import { getAcoes, getTags } from '~/lib/backend'
import PageWrapper from '~/components/struct/PageWrapper'
import ContentWrapper from '~/components/struct/ContentWrapper'
import Title from '~/components/Title'
import CategorySelector from '~/components/CategorySelector'
import ImageGrid from '~/components/ImageGrid'
import Link from '~/components/base/Link'

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
          <div style={filtersWrapperStyle}>
            <Title>/Ações & Imaginações</Title>
            <Link href={{pathname: '/acoes/tags'}}>Palavras-chave;</Link>
          </div>
          <div style={filtersWrapperStyle}>
            <CategorySelector
              categories={categories}
              selected={selectedCategory}
              onClick={this.handleCategorySelection}
            />
            <span>Participante;</span>
          </div>


          <ImageGrid items={documents} category={selectedCategory} />
        </ContentWrapper>
      </PageWrapper>
    )
  }

  handleCategorySelection = (category) => {
    this.setState({selectedCategory: category})
  }
}

const filtersWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600,
  fontSize: 41
}
