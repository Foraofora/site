import React from 'react';
import P from '~/components/base/Paragraph';
import Img from '~/components/base/Image';

export default class AuthorTeaser extends React.Component {
  render() {
    const { author } = this.props;
    if (!author.data) return false;
    const photo = author.data.photo ? author.data.photo.url : false,
      bio = author.data.bio && author.data.bio[0].text;
    return (
      <P style={this.props.style}>
        <span style={wrapperStyle}>
          <Img style={imageStyle} src={photo} />
          {bio}
        </span>
      </P>
    );
  }
}

const wrapperStyle = {
  display: 'flex',
  fontFamily: 'IntervalBook, monospace',
  fontSize: 12,
  alignItems: 'flex-start',
  marginLeft: -20,
};

const imageStyle = {
  width: 130,
  marginRight: 20,
};
