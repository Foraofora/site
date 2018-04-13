import React from 'react'
import ContentWrapper from '~/components/struct/ContentWrapper'
import Title from '~/components/Title'
import MenuLink from '~/components/MenuLink'
import ImageGalery from '~/components/base/ImageGalery'

export default class PhotosAndVideosCover extends React.Component {
  render () {
    const { doc } = this.props
    const { author, photos, category, videos } = doc.data
    const authorName = author.data && author.data.name[0].text
    const categoryName = category.data && category.data.name[0].text

    return (
      <ContentWrapper style={coverWrapperStyle}>
        <Title>
          <MenuLink href={{ pathname: '/acoes' }}>/Ações & imaginações</MenuLink>{' '}
          <MenuLink href={{ pathname: '/acoes', query: {initialCategory: categoryName} }}>{`/${categoryName}`}</MenuLink>
        </Title>
        <ImageGalery media={{videos, photos}} />
        <br />
        <div style={{display: 'flex', marginTop: 40}}>
          <h1 style={h1Style}>{ doc.data.title[0].text }</h1>
          <p style={dateStyle}>18.02.18</p>
        </div>
        <p style={authorStyle}>{ authorName && `Por ${authorName}` }</p>
      </ContentWrapper>
    )
  }
}

const coverWrapperStyle = {
  background: '#000',
  color: 'white',
  fontFamily: "'Source Serif Pro', serif",
  paddingBottom: 10
}

const h1Style = {
  fontSize: 33,
  fontWeight: 600,
  margin: 0
}

const dateStyle = {
  fontSize: 33,
  textAlign: 'right',
  width: 120,
  margin: '0 0 0 20px',
  alignSelf: 'flex-end'
}

const authorStyle = {
  fontSize: 28,
  textAlign: 'center',
  padding: '0 20px',
  marginTop: 40
}
