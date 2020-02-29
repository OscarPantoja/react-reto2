import React from 'react'

function NavbarToggler(props) {
  return (
    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarsExampleDefault'
      aria-controls='navbarsExampleDefault'
      aria-expanded='false'
      aria-label='Toggle navigation'
      onClick={props.onClick}
    >
      <span className='navbar-toggler-icon' />
    </button>
  )
}

export default NavbarToggler
