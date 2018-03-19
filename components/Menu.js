import React from 'react'
import Modal from './Modal'
import Link from 'next/link'
import SignupForm from '../components/SignupForm'

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
          <Link href={{ pathname: '/o-que-e' }}><a style={menuTextStyle}>O que é;</a></Link>
          <Link href={{ pathname: '/acoes' }}><a style={menuTextStyle}>Ações & imaginações;</a></Link>
        </div>
        <div style={secondaryMenuWrapperStyle}>
          <span style={menuTextStyle}>Mapa do site;</span><br />
          <a href='#' onClick={this.toggleSignup} style={menuTextStyle}>Boletim Informativo;</a>
        </div>
        <div style={socialMenuWrapperStyle}>
          <Link href="http://facebook.com"><a style={menuTextStyle}>Fb;</a></Link>
          <Link href="http://facebook.com"><a style={menuTextStyle}>Tw;</a></Link>
          <Link href="http://facebook.com"><a style={menuTextStyle}>Ig;</a></Link>
          <Link href="http://facebook.com"><a style={menuTextStyle}>Yt;</a></Link>
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
