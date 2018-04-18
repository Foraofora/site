import React from 'react'
import axios from 'axios'

export default class SignupForm extends React.Component {
  state = {
    success: false,
    error: false
  }

  render () {
    return (
      <div style={wrapperStyle}>
        <div>
          <p style={textStyle}>Digite aqui seu e-mail e aperte ENTER para ficar por dentro do Fora:</p>
          <input type='text' style={inputStyle} onKeyDown={this.handleKeyDown} />
          {this.state.success && <p style={textStyle}>Seu e-mail foi adicionado com sucesso.</p>}
          {this.state.error && <p style={{...textStyle, color: 'red'}}>O e-mail inserido não é valido.</p>}
        </div>
      </div>
    )
  }

  handleKeyDown = (e) => {
    const self = this
    if (e.keyCode !== 13) return
    if (!validateEmail(e.target.value)) return self.setState({
      success: false,
      error: true
    })

    axios.post('/signup/' + e.target.value, {
    })
      .then(function (response) {
        self.setState({
          success: true,
          error: false
        })
      })
      .catch(function (error) {
        if (error) {
          self.setState({
            error: true,
            success: false
          })
        }
      })
  }
}

const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
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
