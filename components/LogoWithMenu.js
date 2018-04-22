import React from 'react'
import Router from 'next/router'
import Menu from '~/components/Menu'
import Logo from '~/components/Logo'
import { withRouter } from 'next/router'

class LogoWithMenu extends React.Component {
  state = {
    menuVisible: false
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ menuVisible: false })
  }

  render () {
    const { menuVisible } = this.state
    const { slogan, animation, invert } = this.props
    const logoProps = {
      animation: menuVisible ? false : animation ? animation : 'fade',
      invert: menuVisible ? false : invert
    }
    return (
      <div>
        <div className='root'>
          <Logo {...logoProps} onClick={this.handleLogoClick} />
          {!menuVisible && <span style={textStyle}>{slogan}</span>}
        </div>
        <Menu visible={menuVisible} onBgClick={this.toggleMenu} />
        <style jsx>{`
          .root {
            position: fixed;
            z-index: 15;
            top: 10px;
            left: 10px;
            max-width: 770px;
          }
          @media only screen and (min-width: 752px) {
            .root {
              top: 18px;
              left: 29px;
            }
          }
        `}</style>
      </div>
    )
  }

  handleLogoClick = (e) => {
    if (this.state.menuVisible && Router.pathname !== '/') return Router.push('/')
    this.toggleMenu()
  }
  toggleMenu = () => this.setState({ menuVisible: !this.state.menuVisible })
}

const textStyle = {
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600,
  fontSize: 40,
  padding: 10
}

export default withRouter(LogoWithMenu)
