import React, { Component } from 'react'
import AppInput from '../AppInput'
import AppButton from '../AppButton'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  onChange(event) {
    const { id, value } = event.target

    this.setState({ [id]: value })
  }

  onSubmit(event) {
    event.preventDefault()
    if (this.props.onSubmit) {
      this.props.onSubmit({
        ...this.state
      })
    }
    this.setState({
      email: '',
      password: ''
    })
  }
  render() {
    return (
      <div className='row post-form'>
        <form
          onSubmit={this.onSubmit.bind(this)}
          className='col-6'>
          <h1>Iniciar Sesion</h1>

          <AppInput
            id='email'
            label='email@example.com'
            type='text'
            value={this.state.email}
            onChange={this.onChange.bind(this)}
          />

          <AppInput
            id='password'
            label='Password'
            type='password'
            value={this.state.password}
            onChange={this.onChange.bind(this)}
          />
          <AppButton
            type='submit'
            text='Guardar'
            className='btn-primary'
          />
        </form>
      </div>
    )
  }
}


export default LoginForm
