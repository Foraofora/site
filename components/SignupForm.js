import React from 'react'
import axios from 'axios'

export default class SignupForm extends React.Component {
  state = {
    success: false,
  }

  render () {
    return (
      <div style={wrapperStyle}>
        <div>
          <p style={textStyle}>Digite seu e-mail e pressione Enter para receber o Boletim informativo FORA diretamente em sua caixa de e-emails.</p>
          <input type='text' style={inputStyle} onKeyDown={this.handleKeyDown} />
          {this.state.success && <p style={textStyle}>Seu email foi adicionado com sucesso.</p>}
        </div>
      </div>
    )
  }

  handleKeyDown = (e) => {
    const self = this;
    if (e.keyCode !== 13) return
    axios.post('/signup/' + e.target.value, {
    })
    .then(function (response) {
      self.setState({
        success: true
      })
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
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
  fontFamily: 'IntervalBook, monospace',
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
