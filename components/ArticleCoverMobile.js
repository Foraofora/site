import React from 'react'
import ContentWrapper from '~/components/struct/ContentWrapper'
import Title from '~/components/Title'
import MenuLink from '~/components/MenuLink'
import P from '~/components/base/Paragraph'

export default class PhotosAndVideosCover extends React.Component {
  render () {
    const { doc } = this.props
    const { author, category } = doc.data
    const title = doc.data.title[0].text
    const authorName = author.data && author.data.name[0].text
    const categoryName = category.data && category.data.name[0].text

    return (
      <ContentWrapper style={{ ...coverWrapperStyle, backgroundImage: `url(${doc.data.cover.url})` }}>
        <Title>
          <MenuLink href={{ pathname: '/acoes' }}>/Ações & imaginações</MenuLink>
          <MenuLink href={{ pathname: '/acoes', query: {initialCategory: categoryName} }}>{`/${categoryName}`}</MenuLink>
        </Title>
        <div>
          <h1 style={h1Style}>{ title }</h1>
          { authorName && <div style={h1Style}>-</div> }
          <div style={coverBotStyle}>
            <p style={authorStyle}>{ authorName && `Por ${authorName}` }</p>
            <p style={dateStyle}>18.02.18</p>
          </div>
        </div>

        <P style={teaserStyle}>{ doc.data.teaser }</P>
      </ContentWrapper>
    )
  }
}

const coverWrapperStyle = {
  backgroundSize: '60% auto',
  backgroundPosition: '100% 120px',
  backgroundRepeat: 'no-repeat',
  fontFamily: "'Source Serif Pro', serif"
}

const coverBotStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 33,
  marginBottom: 50
}

const h1Style = {
  paddingRight: 30,
  alignSelf: 'flex-end',
  marginBottom: 0,
  fontSize: 33,
  fontWeight: 600,
  maxWidth: '40%'
}

const authorStyle = {
  margin: 0
}

const dateStyle = {
  width: 200,
  textAlign: 'right',
  margin: 0
}
const teaserStyle = {
  fontSize: 24,
  fontWeight: 600,
  maxWidth: 600,
  paddingLeft: 0,
  marginBottom: '-1em'
}
