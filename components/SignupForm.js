import React from 'react'

export default class SignupForm extends React.Component {
  render () {
    return (
      <div style={wrapperStyle}>
        <div>
          <p style={textStyle}>Digite aqui seu e-mail e aperte ENTER para ficar por dentro do Fora:</p>
          <input type='text' style={inputStyle} onKeyDown={this.handleKeyDown} />
        </div>
      </div>
    )
  }

  handleKeyDown = (e) => {
    if (e.keyCode !== 13) return
    console.log('enter')
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
  color: 'rgb(0,17,254)'
}

const textStyle = {
  maxWidth: 360,
  fontFamily: 'IntervalBook, monospace',
  fontSize: 16,
  paddingLeft: 7,
  lineHeight: '1.3em'
}

const inputStyle = {
  borderWidth: 12,
  borderStyle: 'solid',
  borderColor: 'rgb(0,17,254)',
  color: 'rgb(0,17,254)',
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
