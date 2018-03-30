import React from 'react'

export default class Logo extends React.Component {
  state = {
    hover: false,
    flashing: false
  }

  componentDidMount () {
    const { flash } = this.props
    setInterval(() => {
      if (flash) { this.setState({ flashing: !this.state.flashing }) }
    }, 200)
  }

  render () {
    const { hover, flashing } = this.state
    return (
      <a
        href='#'
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        {...this.props}
      >
        <LogoSvg
          color={this.getLogoColor()}
        />
      </a>
    )
  }

  getLogoColor = () => {
    const { hover, flashing } = this.state
    const { invert } = this.props
    if (hover || flashing) return 'rgb(0,17,254)'
    if (invert) return 'white'
    return 'black'
  }
}

class LogoSvg extends React.Component {
  render () {
    return (
      <svg width='111' height='43' style={{ marginBottom: -2 }}><g fill={this.props.color || '#000'} fillRule='evenodd'><path d='M43.21956 11.0573c-8.95471 0-15.78548 7.48077-15.78548 15.60885 0 8.18678 6.83077 15.66754 15.78548 15.66754 8.95204 0 15.7257-7.48076 15.7257-15.66754 0-8.12808-6.77366-15.60884-15.7257-15.60884zm0 24.32608c-4.654 0-8.30632-3.59309-8.30632-8.71723 0-5.06598 3.65232-8.71724 8.30632-8.71724 4.6524 0 8.18625 3.65126 8.18625 8.71724 0 5.12414-3.53386 8.71723-8.18625 8.71723zM2.85185 0H0v41.09135h8.0048V24.54808h14.94232v-6.9375H8.0048V7.47115h18.14423V0H2.85184M88.58654 11.74038v6.9375h8.58169c-7.30626 4.26924-12.2479 8.2076-12.2479 14.53727 0 5.59536 3.82844 8.6105 9.30586 8.6105 3.78734 0 6.75713-1.26796 8.4819-3.93623h.2871v3.20193H111V11.74038H88.58654zm8.0507 24.4088c-2.886 0-3.85885-2.00334-3.85885-3.71103 0-2.86145 2.74565-5.25436 10.2168-9.84004v8.92963c-1.60096 2.95804-3.70302 4.62144-6.35795 4.62144zM72.78612 14.40865h.32446v-2.66827h-8.00481v29.35097h8.0048V25.84112c0-4.88827 1.20767-7.16324 6.2731-7.16324h1.73171v-7.62057c-3.73557 0-6.61997 1.21673-8.32926 3.35134' /></g></svg>
    )
  }
}
