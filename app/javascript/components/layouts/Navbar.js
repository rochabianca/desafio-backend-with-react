import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    const { id } = this.props;
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar bar1" />
              <span className="icon-bar bar2" />
              <span className="icon-bar bar3" />
            </button>
            <a href="#" className="navbar-brand">
              Mensagens
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" data-toggle="dropdown" className="dropdown-toggle">
                  <i className="fa fa-gear" />
                  <p>Opções</p>
                  <b className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href={`/users/${id}/edit`}>Perfil</a>
                  </li>
                  <li>
                    <a
                      rel="nofollow"
                      data-method="delete"
                      href="/users/sign_out"
                    >
                      Sair
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
