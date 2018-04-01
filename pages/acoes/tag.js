import React from 'react'
import { getByTag } from '~/lib/backend'
import PageWrapper from '~/components/struct/PageWrapper'
import ContentWrapper from '~/components/struct/ContentWrapper'
import Title from '~/components/Title'
import ImageGrid from '~/components/ImageGrid'
import Link from '~/components/base/Link'

export default class pageAcoes extends React.Component {
  static async getInitialProps ({ req, query }) {
    const { tag } = query
    const { documents } = await getByTag(tag)
    return { documents, tag }
  }

  render () {
    const { documents, tag } = this.props
    return (
      <PageWrapper style={{ background: '#DFDFDF' }}>
        <ContentWrapper>
          <div style={filtersWrapperStyle}>
            <Title><Link href={{ pathname: '/acoes/tags' }}>/Palavras-chave</Link> /{tag}</Title>
          </div>
          <div style={textStyle}>{documents.length === 1 ? `1 trabalho:` : `${documents.length} trabalhos:`}</div>
          <ImageGrid items={documents} />
        </ContentWrapper>
      </PageWrapper>
    )
  }

  handleCategorySelection = (category) => {
    this.setState({ selectedCategory: category })
  }
}

const textStyle = {
  fontFamily: "'Source Serif Pro', serif",
  fontSize: 24,
  fontWeight: 600,
  margin: '10px 0'
}
const filtersWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600,
  fontSize: 41
}
