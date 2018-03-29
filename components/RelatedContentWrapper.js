import React from 'react';
import ImageGrid from '~/components/ImageGrid';
import ContentWrapper from '~/components/struct/ContentWrapper';

const titleStyle = {
  marginLeft: 60,
  fontFamily: 'IntervalBook, monospace',
  fontSize: 14,
};
export const RelatedContentWrapper = ({ related }) => (
  related.length > 0 &&
    <ContentWrapper>
      <span style={titleStyle}>/Trabalhos Relacionados</span>
      <ImageGrid items={related} />
    </ContentWrapper>
);

export default RelatedContentWrapper;
