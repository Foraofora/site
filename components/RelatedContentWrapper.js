import React from 'react'
import ImageGrid from '~/components/ImageGrid'
import ContentWrapper from '~/components/struct/ContentWrapper'

const titleStyle = {
  marginLeft: 60,
  fontFamily: 'IntervalBook, monospace',
  fontSize: 16
}
export const RelatedContentWrapper = ({ related }) => (
  related.length > 0 &&
    <ContentWrapper style={{background: 'white'}}>
      <span style={titleStyle}>/Publicações relacionadas</span>
      <ImageGrid items={related} />
    </ContentWrapper>
)

export default RelatedContentWrapper
