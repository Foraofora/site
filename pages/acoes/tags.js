import React from 'react'
import { getTags } from '~/lib/backend'
import PageWrapper from '~/components/struct/PageWrapper'
import ContentWrapper from '~/components/struct/ContentWrapper'
import Title from '~/components/Title'
import MenuLink from '~/components/MenuLink'

export default class pageTags extends React.Component {
  static async getInitialProps () {
    return getTags()
  }

  render () {
    const { tags } = this.props
    return (
      <PageWrapper style={{ background: '#DFDFDF' }}>
        <ContentWrapper>
          <Title>
            <MenuLink href={{ pathname: '/acoes' }}>/Ações & Imaginações</MenuLink> /Palavras-chave
          </Title>
          <div style={tagsWrapperStyle}>
            {tags.map(tag => <div style={tagsStyle}><MenuLink href={{ pathname: '/acoes/tag', query: { tag } }}>{tag};</MenuLink></div>)}
          </div>
        </ContentWrapper>
      </PageWrapper>
    )
  }
}

const tagsWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600,
  fontSize: 41,
  flexWrap: 'wrap',
  margin: '50px 60px'
}

const tagsStyle = {
  width: '50%'
}
