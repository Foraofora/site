import React from 'react';
import Router from 'next/router';
import Link from '~/components/base/Link';

export default class MenuLink extends React.Component {
  state = {
    hover: false,
  }

  handleMouseEnter = () => {
    this.props.onMouseEnter && this.props.onMouseEnter(this.props.menuKey);
    this.setState({ hover: true });
  }
  handleMouseLeave = () => {
    this.props.onMouseLeave && this.props.onMouseLeave(this.props.menuKey);
    this.setState({ hover: false });
  }

  render() {
    return (
      <span
        style={wrapperStyle}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <span style={this.state.hover ? underlineStyle : {}} />
        <Link {...this.props} style={{ ...menuTextStyle, ...this.props.style }} />
      </span>
    );
  }
}
const wrapperStyle = {
  position: 'relative',
  marginRight: 15,
  display: 'inline-block'
}
const menuTextStyle = {
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600,
  fontSize: 40,
  color: 'inherit',
  textDecoration: 'none',
  position: 'relative',
  height: '1em',
};

const underlineStyle = {
  borderBottom: '10px solid rgb(0,17,254)',
  position: 'absolute',
  bottom: '7%',
  left: '0',
  right: '-1%',
};
