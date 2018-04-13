import React from 'react'
import ContentWrapper from '~/components/struct/ContentWrapper'
import Title from '~/components/Title'
import MenuLink from '~/components/MenuLink'
import P from '~/components/base/Paragraph'
import moment from 'moment'
import { Date } from 'prismic-reactjs'

export default class PhotosAndVideosCover extends React.Component {
  render () {
    const {
      data: {author, category, cover, date}, data
    } = this.props.doc
    const title = data.title[0].text
    const authorName = author.data && author.data.name[0].text
    const categoryName = category.data && category.data.name[0].text

    return (
      <ContentWrapper style={{ ...coverWrapperStyle, backgroundImage: `url(${cover.url})` }}>
        <Title>
          <MenuLink href={{ pathname: '/acoes' }}>/Ações & imaginações</MenuLink>{' '}
          <MenuLink href={{ pathname: '/acoes', query: {initialCategory: categoryName} }}>{`/${categoryName}`}</MenuLink>
        </Title>
        <div>
          <h1 style={h1Style}>{ title }</h1>
          { authorName && <div style={h1Style}><br /></div> }
          <div style={coverBotStyle}>
            <p style={authorStyle}>{ authorName && <span><span style={{fontSize: 24, fontWeight: 600}}>Por</span><br />{`${authorName}`}</span> }</p>
            <p style={dateStyle}>{moment(date).format('DD.MM.YY')}</p>
          </div>
        </div>

        <P style={teaserStyle}>{ data.teaser }</P>
      </ContentWrapper>
    )
  }
}

const coverWrapperStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundSize: 'auto 62.5%',
  backgroundPosition: '83% 50px',
  backgroundRepeat: 'no-repeat',
  fontFamily: "'Source Serif Pro', serif"
}

const coverBotStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  maxHeight: 91,
  fontSize: 41,
  alignItems: 'flex-end'
}

const h1Style = {
  paddingRight: 30,
  alignSelf: 'flex-end',
  marginBottom: 0,
  fontSize: 41,
  fontWeight: 600,
  maxWidth: '40%',
  minWidth: '30%'
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
