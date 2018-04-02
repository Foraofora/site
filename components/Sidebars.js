import React from 'react'
import CategoryTeaser from '~/components/CategoryTeaser'
import FloatingTitle from '~/components/FloatingTitle'
import TagsTeaser from '~/components/TagsTeaser'

export const Sidebars = (props) => {
  const { tags, data } = props.doc
  const { category, author } = data
  const title = data.title[0].text
  const authorName = author.data && author.data.name[0].text
  return (
    <div>
      <FloatingTitle author={authorName} title={title} />
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', right: 0, width: 190 }}>
          <CategoryTeaser category={category} style={{marginBottom: 30}} />
          <TagsTeaser tags={tags} />
        </div>
      </div>
    </div>
  )
}

export default Sidebars
