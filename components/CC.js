import React from 'react'

const CC = ({style}) => (
  <span style={{display: 'inline-block', margin: 3, ...style}}>
    <svg viewBox='0 0 980 980' width={42} height={42}>
      <circle
        cx={490}
        cy={490}
        r={440}
        fill='none'
        stroke='#000'
        strokeWidth={100}
      />
      <path d='M219 428h131a150 150 0 1 1 0 125H219a275 275 0 1 0 0-125z' />
    </svg>
  </span>
)

export default CC
