import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import Input from "../../Controls/Input";
import Button from "../../Controls/Button";
import Layout from "../../Components/Layout";

class LoginPage extends Component {
  submit = e => {
    e.preventDefault();
    this.props.history.push("/indicators");
  };

  render() {
    return (
      <Layout hideMenu>
        <section className="cr-login-page">
          <form
            action="/"
            method="post"
            className="cr-form"
            onSubmit={this.submit}
          >
            <h3>Acceso al sistema</h3>
            <Input type="text" placeholder="Usuario" />
            <Input type="password" placeholder="Contraseña" />
            <Button color="primary" type="submit">
              ENVIAR
            </Button>
          </form>
        </section>
      </Layout>
    );
  }
}

export default withRouter(LoginPage);
