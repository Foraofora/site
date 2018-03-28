import React from 'react'
import Router from 'next/router'
import Menu from '~/components/Menu'
import Logo from '~/components/Logo'
import { withRouter } from 'next/router'

class LogoWithMenu extends React.Component {
  state = {
    menuVisible: false
  }

  componentWillReceiveProps(nextProps) {
    this.setState({menuVisible: false})
  }

  render() {
    return (
      <div>
        <div style={wrapperStyle}>
          <Logo {...this.props} onClick={this.handleLogoClick} />
          {!this.state.menuVisible && <span style={textStyle}>{this.props.slogan}</span>}
        </div>
        <Menu visible={this.state.menuVisible} onBgClick={this.toggleMenu}/>
      </div>
    )
  }

  handleLogoClick = e => {
    if (this.state.menuVisible && Router.pathname !== '/') return Router.push('/')
    this.toggleMenu()
  }
  toggleMenu = () => this.setState({menuVisible: !this.state.menuVisible})
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

export default withRouter(LogoWithMenu)
