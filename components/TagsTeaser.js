import React from 'react';
import Link from '~/components/base/Link';

export default class CategoryTeaser extends React.Component {
  render() {
    const { tags } = this.props;
    if (!tags.length) return false;
    return (
      <div style={wrapperStyle}>
        <div>Tags</div>
        {tags.map(tag => (
          <div><Link href={{ pathname: '/acoes/tag', query: { tag } }}>
            {tag}
          </Link>
          </div>
        ))}
      </div>
    );
  }
}

const wrapperStyle = {
  textAlign: 'right',
  fontFamily: 'IntervalBook, monospace',
  fontSize: 12,
};
