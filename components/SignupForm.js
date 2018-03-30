import React from 'react'

export default class SignupForm extends React.Component {
  render () {
    return (
      <div style={wrapperStyle}>
        <div>
          <p style={textStyle}>Digite seu e-mail e pressione Enter para receber o Boletim informativo FORA diretamente em sua caixa de e-emails.</p>
          <input type='text' style={inputStyle} />
        </div>
      </div>
    )
  }
}

const wrapperStyle = {
  fontFamily: "'Source Serif Pro', serif",
  position: 'absolute',
  left: '50%',
  right: 0,
  bottom: '50%',
  width: '80%',
  minWidth: 200,
  maxWidth: 800,
  transform: 'translateX(-50%)',
  color: 'blue'
}

const textStyle = {
  maxWidth: 420,
  fontFamily: 'monospace',
  fontSize: 14,
  paddingLeft: 7
}

const inputStyle = {
  borderWidth: 12,
  borderStyle: 'solid',
  borderColor: 'blue',
  color: 'blue',
  width: '100%',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  padding: 30,
  paddingTop: 22,
  paddingBottom: 22,
  fontSize: 42,
  fontWeight: 600,
  fontFamily: "'Source Serif Pro', serif",
  outline: 'none'
}
