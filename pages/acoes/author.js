import React from 'react'
import { getByAuthor } from '~/lib/backend'
import PageWrapper from '~/components/struct/PageWrapper'
import ContentWrapper from '~/components/struct/ContentWrapper'
import Title from '~/components/Title'
import ImageGrid from '~/components/ImageGrid'
import MenuLink from '~/components/MenuLink'

export default class pageAuthor extends React.Component {
  static async getInitialProps ({ req, query }) {
    const { authorID } = query
    const { documents, author } = await getByAuthor(authorID)
    return { documents, author }
  }

  render () {
    const { documents, author } = this.props
    return (
      <PageWrapper title={author.data.name[0].text} style={{ background: '#DFDFDF' }}>
        <ContentWrapper>
          <div style={filtersWrapperStyle}>
            <Title><MenuLink href={{ pathname: '/acoes/authors' }}>/Participantes</MenuLink> /{author.data.name[0].text}</Title>
          </div>
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
