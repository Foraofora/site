import React from 'react'
import Modal from '~/components/struct/Modal'
import MenuLink from './MenuLink'
import SignupForm from './SignupForm'

export default class Menu extends React.Component {
  state = {
    showSignup: false,
    background: false
  }

  render() {
    const { props, state, handleMenuMouseEnter, handleMenuMouseLeave, toggleSignup } = this
    const { showSignup, background } = state
    const { visible, onBgClick } = props
    return (
      <Modal visible={visible} style={{...menuModalStyle, backgroundImage: background}} onBgClick={onBgClick}>
        <div style={mainMenuWrapperStyle}>
          <MenuLink href={{ pathname: '/o-que-e' }} onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} menuKey='oque'>O que é;</MenuLink>
          <MenuLink href={{ pathname: '/acoes' }} onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} menuKey='acoes'>Ações & imaginações;</MenuLink>
        </div>
        <div style={secondaryMenuWrapperStyle}>
          <span style={menuTextStyle}>Mapa do site;</span><br />
          <MenuLink onClick={toggleSignup} onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave}>Boletim Informativo;</MenuLink>
        </div>
        <div style={socialMenuWrapperStyle}>
          <MenuLink href={{ pathname: 'http://facebook.com' }} onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} menuKey='fb'>Fb;</MenuLink>
          <MenuLink href={{ pathname: 'http://facebook.com' }} onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} menuKey='tw'>Tw;</MenuLink>
          <MenuLink href={{ pathname: 'http://facebook.com' }} onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} menuKey='ig'>Ig;</MenuLink>
          <MenuLink href={{ pathname: 'http://facebook.com' }} onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} menuKey='yt'>Yt;</MenuLink>
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

  handleMenuMouseEnter = (key) => {
    this.setState({background: `url("/static/menu-${key}.png")`})
  }
  handleMenuMouseLeave = () => {
    this.setState({background: false})
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
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600,
  fontSize: 40,
  padding: 10
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
