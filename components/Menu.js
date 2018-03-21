import React from 'react'
import Modal from './Modal'
import MenuLink from './MenuLink'
import SignupForm from './SignupForm'

export default class Menu extends React.Component {
  state = {
    showSignup: false
  }

  render() {
    const { showSignup } = this.state
    const { visible, onBgClick } = this.props
    return (
      <Modal visible={visible} style={menuModalStyle} onBgClick={onBgClick}>
        <div style={mainMenuWrapperStyle}>
          <MenuLink href={{ pathname: '/o-que-e' }}>O que é;</MenuLink>
          <MenuLink href={{ pathname: '/acoes' }}>Ações & imaginações;</MenuLink>
        </div>
        <div style={secondaryMenuWrapperStyle}>
          <span style={menuTextStyle}>Mapa do site;</span><br />
          <MenuLink onClick={this.toggleSignup}>Boletim Informativo;</MenuLink>
        </div>
        <div style={socialMenuWrapperStyle}>
          <MenuLink href="http://facebook.com">Fb;</MenuLink>
          <MenuLink href="http://facebook.com">Tw;</MenuLink>
          <MenuLink href="http://facebook.com">Ig;</MenuLink>
          <MenuLink href="http://facebook.com">Yt;</MenuLink>
        </div>
        <Modal visible={showSignup} onBgClick={this.toggleSignup}>
          <SignupForm />
        </Modal>
      </Modal>
    )
  }

  toggleSignup = (event) => {
    this.setState({showSignup: !this.state.showSignup})
  }
}

const menuModalStyle = {
  background: 'rgba(255,255,255,0.93)'
}

const menuTextStyle = {
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600,
  fontSize: 40,
  padding: 10
}

const mainMenuWrapperStyle = {
  position: 'fixed',
  left: 190,
  top: 24
}

const secondaryMenuWrapperStyle = {
  position: 'fixed',
  right: 20,
  top: '50%',
  transform: 'translateY(-50%)',
  textAlign: 'right'
}

const socialMenuWrapperStyle = {
  position: 'fixed',
  right: 20,
  bottom: 20
}
