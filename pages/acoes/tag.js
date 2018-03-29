import React from 'react';
import { getByTag } from '~/lib/backend';
import PageWrapper from '~/components/struct/PageWrapper';
import ContentWrapper from '~/components/struct/ContentWrapper';
import Title from '~/components/Title';
import CategorySelector from '~/components/CategorySelector';
import ImageGrid from '~/components/ImageGrid';
import Link from '~/components/base/Link';

export default class pageAcoes extends React.Component {
  static async getInitialProps({ req, query }) {
    const { tag } = query;
    const { documents } = await getByTag(tag);
    return { documents, tag };
  }

  render() {
    const { documents, tag } = this.props;
    return (
      <PageWrapper style={{ background: '#DFDFDF' }}>
        <ContentWrapper>
          <div style={filtersWrapperStyle}>
            <Title><Link href={{ pathname: '/acoes/tags' }}>/Palavras-chave</Link> /{tag}</Title>
          </div>
          <ImageGrid items={documents} />
        </ContentWrapper>
      </PageWrapper>
    );
  }

  handleCategorySelection = (category) => {
    this.setState({ selectedCategory: category });
  }
}

const filtersWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600,
  fontSize: 41,
};
