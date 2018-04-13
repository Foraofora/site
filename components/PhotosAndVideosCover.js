import React from 'react'
import ContentWrapper from '~/components/struct/ContentWrapper'
import Title from '~/components/Title'
import MenuLink from '~/components/MenuLink'
import ImageGalery from '~/components/base/ImageGalery'
import moment from 'moment'
import { Date } from 'prismic-reactjs'

export default class PhotosAndVideosCover extends React.Component {
  render () {
    const doc = this.props.doc
    const { author, photos, category, videos, date } = doc.data
    const authorName = author.data && author.data.name[0].text
    const categoryName = category.data && category.data.name[0].text

    return (
      <ContentWrapper style={coverWrapperStyle}>
        <Title>
          <MenuLink href={{ pathname: '/acoes' }}>/Ações & imaginações</MenuLink>{' '}
          <MenuLink href={{ pathname: '/acoes', query: {initialCategory: categoryName} }}>{`/${categoryName}`}</MenuLink>
        </Title>
        <div style={coverMidStyle}>
          <h1 style={h1Style}>{ doc.data.title[0].text }</h1>
          <div style={imageWrapperStyle}>
            <ImageGalery media={{videos, photos}} />
          </div>
        </div>
        <div style={coverBotStyle}>
          <p style={dateStyle} />
          <p style={authorStyle}>{ authorName && `Por ${authorName}` }</p>
          <p style={dateStyle}>{moment(Date(date)).format('DD.MM.YY')}</p>
        </div>
      </ContentWrapper>
    )
  }
}

const invertStyle = {
  background: '#000',
  color: 'white',
  fontFamily: "'Source Serif Pro', serif"
}
const coverWrapperStyle = {
  ...invertStyle,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}
const coverMidStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}
const coverBotStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: 10,
  maxHeight: 52
}
const imageWrapperStyle = {
  marginTop: 30,
  marginBottom: 12,
  textAlign: 'right',
  flex: 1,
  maxWidth: '60%'
}

const h1Style = {
  paddingRight: 30,
  fontSize: 41,
  fontWeight: 600,
  alignSelf: 'flex-end',
  margin: 0,
  maxWidth: '40%',
  minWidth: '30%'
}

const authorStyle = {
  fontSize: 41,
  textAlign: 'center',
  margin: 0,
  maxHeight: 85,
  maxWidth: '40%',
  zIndex: 1
}

const dateStyle = {
  width: 200,
  textAlign: 'right',
  fontSize: 41,
  margin: 0
}
