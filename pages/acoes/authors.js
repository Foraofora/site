import React from 'react'
import { getAuthors } from '~/lib/backend'
import PageWrapper from '~/components/struct/PageWrapper'
import ContentWrapper from '~/components/struct/ContentWrapper'
import Title from '~/components/Title'
import MenuLink from '~/components/MenuLink'

export default class pageAuthors extends React.Component {
  static async getInitialProps () {
    return getAuthors()
  }

  render () {
    const { authors } = this.props
    return (
      <PageWrapper style={{ background: '#DFDFDF' }}>
        <ContentWrapper>
          <Title>
            <MenuLink href={{ pathname: '/acoes' }}>/Ações & Imaginações</MenuLink> /Participantes
          </Title>
          <div style={textStyle}>Quem faz — uma lista crescente de gente de Fora:</div>
          <div style={authorsWrapperStyle}>
            {authors.map(author => <div style={authorsStyle}><MenuLink href={{ pathname: '/acoes/author', query: { authorID: author.id } }}>{author.data.name[0].text};</MenuLink></div>)}
          </div>
        </ContentWrapper>
      </PageWrapper>
    )
  }
}

const textStyle = {
  fontFamily: "'Source Serif Pro', serif",
  fontSize: 24,
  fontWeight: 600,
  margin: '10px 0'
}
const authorsWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600,
  fontSize: 41,
  flexWrap: 'wrap',
  margin: '50px 60px'
}

const authorsStyle = {
  width: '50%'
}
