import React from 'react'
import Head from './Head'
import Menu from './Menu'
import Logo from './Logo'

export default class LogoWithMenu extends React.Component {
  state = {
    menuVisible: false
  }

  render() {
    return (
      <div>
        <Head />
        <div style={wrapperStyle}>
          <Logo {...this.props} onClick={this.toggleMenu} />
          {!this.state.menuVisible && <span style={textStyle}>{this.props.slogan}</span> }
        </div>
        <Menu visible={this.state.menuVisible} onBgClick={this.toggleMenu}/>
      </div>
    )
  }

  toggleMenu = () => {
    this.setState({menuVisible: !this.state.menuVisible})
  }
}

const wrapperStyle = {
  position: 'fixed',
  zIndex: 2,
  top: 17,
  left: 29,
  maxWidth: 750
}

const textStyle = {
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600,
  fontSize: 40,
  padding: 10
}
