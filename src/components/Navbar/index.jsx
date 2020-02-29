import React, { Component } from 'react'

import NavbarBrand from './NavbarBrand'
import NavbarToggler from './NavbarToggler'
import NavbarCollapse from './NavbarCollapse'
import { render } from '@testing-library/react'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  toogleNavbar() {
    this.setState({ active: !this.state.active })
  }

  render() {
    return (
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <NavbarBrand />
        <NavbarToggler onClick={this.toogleNavbar.bind(this)} />
        <NavbarCollapse onClick={this.state.active} />
      </nav>
    )
  }
}

export default Navbar

