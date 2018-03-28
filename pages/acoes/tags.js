import React from 'react'
import { getTags } from '~/lib/backend'
import PageWrapper from '~/components/struct/PageWrapper'
import ContentWrapper from '~/components/struct/ContentWrapper'
import Title from '~/components/Title'
import Link from '~/components/base/Link'

export default class pageTags extends React.Component {

  static async getInitialProps({ req }) {
    return await getTags()
  }

  state = {
    selectedCategory: false
  }

  render() {
    const { tags } = this.props
    const { selectedCategory } = this.state
    return (
      <PageWrapper style={{background: '#DFDFDF'}}>
        <ContentWrapper>
          <Title>
            <Link href={{pathname: '/acoes'}}>/Ações & Imaginações</Link> /Palavras-chave
          </Title>
          <div style={tagsWrapperStyle}>
            {tags.map(tag => <span style={tagsStyle}>{tag};</span>)}
          </div>
        </ContentWrapper>
      </PageWrapper>
    )
  }

  handleCategorySelection = (category) => {
    this.setState({selectedCategory: category})
  }
}

const tagsWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600,
  fontSize: 41,
  flexWrap: 'wrap',
  marginTop: 50
}

const tagsStyle = {
  width: '50%',
}
