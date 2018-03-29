import React from 'react';
import Prismic from 'prismic-javascript';
import PageWrapper from '~/components/struct/PageWrapper';
import ContentWrapper from '~/components/struct/ContentWrapper';
import Title from '~/components/Title';
import AuthorTeaser from '~/components/AuthorTeaser';
import Sidebars from '~/components/Sidebars';
import Image from '~/components/base/Image';
import P from '~/components/base/Paragraph';
import Link from '~/components/base/Link';
import RelatedContentWrapper from '~/components/RelatedContentWrapper';

export default class Index extends React.Component {
  static async getInitialProps({ query }) {
    const api = await Prismic.api('https://fora.prismic.io/api/v2');
    const doc = await api.getByID(query.id, { fetchLinks: ['author.name', 'author.bio', 'author.photo', 'category.name', 'category.description'] });
    const related = await api.getByIDs(doc.data.related.map(item => item.related_item.id), { fetchLinks: ['author.name', 'category.name'] });
    return { doc, related: related.results };
  }

  render() {
    const { doc, related } = this.props;
    const { author, photos, category } = doc.data;
    const authorName = author.data && author.data.name[0].text;
    const categoryName = category.data && category.data.name[0].text;
    const coverPhoto = photos[0].photo.cover ? photos[0].photo.cover : photos[0].photo;

    return (
      <PageWrapper invert style={{background: '#dfdfdf'}}>
        <ContentWrapper style={coverWrapperStyle}>
          <Title>
            <Link href={{ pathname: '/acoes' }}>/Ações & Imaginações</Link> /{categoryName}
          </Title>
          <div style={coverMidStyle}>
            <h1 style={h1Style}>{ doc.data.title[0].text }</h1>
            <div style={imageWrapperStyle}>
              <Image {...coverPhoto} />
            </div>
          </div>
          <div style={coverBotStyle}>
            <p style={dateStyle} />
            <p style={authorStyle}>{ authorName && `Por ${authorName}` }</p>
            <p style={dateStyle}>18.02.18</p>
          </div>
        </ContentWrapper>

        <ContentWrapper style={{ paddingTop: '70px', paddingBottom: '70px', position: 'relative', ...invertStyle }}>
          <Sidebars doc={doc} />
          <P style={bodyStyle}>{ doc.data.corpo }</P>
          <AuthorTeaser author={author} style={{ marginTop: 80 }} />
        </ContentWrapper>

        <RelatedContentWrapper related={related} />
      </PageWrapper>
    );
  }
}

const invertStyle = {
  background: '#000',
  color: 'white',
  fontFamily: "'Source Serif Pro', serif"
};
const coverWrapperStyle = {
  ...invertStyle,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};
const coverMidStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  maxHeight: '80%',
};
const coverBotStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  maxHeight: 91,
};
const imageWrapperStyle = {
  display: 'flex',
  marginTop: 50,
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
};

const h1Style = {
  paddingRight: 30,
  alignSelf: 'flex-end',
  fontSize: 41,
  marginBottom: -8,
  maxWidth: 480,
  fontWeight: 600,
};

const authorStyle = {
  fontSize: 41,
  textAlign: 'center',
  marginBottom: 0,
  maxHeight: 85,
};

const dateStyle = {
  width: 200,
  textAlign: 'right',
  fontSize: 41,
  marginBottom: 0,
};

const bodyStyle = {
  fontFamily: "'Source Sans Pro', sans-serif",
};
