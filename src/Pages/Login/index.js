import React, {Component} from 'react';
import Input from '../../Controls/Input'
import Button from '../../Controls/Button'

export default class extends Component {
  render() {
    return (
      <section className="cr-login-page">
        <form action="/" method='post' className="cr-form">
          <h3>Acceso al sistema</h3>
          <Input type="text" placeholder="Usuario"/>
          <Input type="password" placeholder="Contraseña"/>
          <Button color="primary" type="button">ENVIAR</Button>
        </form>
      </section>
    )
  }
}