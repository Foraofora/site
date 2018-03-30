import React from 'react'
import Modal from '~/components/struct/Modal'
import MenuLink from './MenuLink'
import SignupForm from './SignupForm'

export default class Menu extends React.Component {
  state = {
    showSignup: false,
    background: false
  }

  render () {
    const {
      props, state, handleMenuMouseEnter, handleMenuMouseLeave, toggleSignup
    } = this
    const { showSignup, background } = state
    const { visible, onBgClick } = props
    return (
      <Modal visible={visible} style={{ ...menuModalStyle, backgroundImage: background }} onBgClick={onBgClick}>
        <div style={mainMenuWrapperStyle}>
          <MenuLink href={{ pathname: '/o-que-e' }} onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} menuKey='oque' style={menuTextStyle}>O que é;</MenuLink>
          <MenuLink href={{ pathname: '/acoes' }} onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} menuKey='acoes' style={menuTextStyle}>Ações & imaginações;</MenuLink>
        </div>
        <div style={secondaryMenuWrapperStyle}>
          <span style={menuTextStyle} style={menuTextStyle}>Mapa do site;</span><br />
          <MenuLink onClick={toggleSignup} onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} style={menuTextStyle}>Boletim Informativo;</MenuLink>
        </div>
        <div style={socialMenuWrapperStyle}>
          <MenuLink href={{ pathname: 'http://facebook.com' }} onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} menuKey='fb' style={menuTextStyle}>Fb;</MenuLink>
          <MenuLink href={{ pathname: 'http://facebook.com' }} onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} menuKey='tw' style={menuTextStyle}>Tw;</MenuLink>
          <MenuLink href={{ pathname: 'http://facebook.com' }} onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} menuKey='ig' style={menuTextStyle}>Ig;</MenuLink>
          <MenuLink href={{ pathname: 'http://facebook.com' }} onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} menuKey='yt' style={menuTextStyle}>Yt;</MenuLink>
        </div>
        <Modal visible={showSignup} onBgClick={this.toggleSignup}>
          <SignupForm />
        </Modal>
      </Modal>
    )
  }

  toggleSignup = (event) => {
    this.setState({ showSignup: !this.state.showSignup })
  }

  handleMenuMouseEnter = (key) => {
    this.setState({ background: `url("/static/menu-${key}.png")` })
  }
  handleMenuMouseLeave = () => {
    this.setState({ background: false })
  }
}

const menuModalStyle = {
  background: 'rgba(255,255,255,0.95)',
  backgroundSize: '80%',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  color: 'black'
}

const menuTextStyle = {
  fontSize: 40
}

const mainMenuWrapperStyle = {
  position: 'fixed',
  left: 175,
  top: 21
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
