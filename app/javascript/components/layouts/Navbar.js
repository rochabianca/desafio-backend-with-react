import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    const { id, user, route } = this.props;
    return (
      <nav className="navbar">
        <div className="container-fluid navbar__line">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar bar1" />
              <span className="icon-bar bar2" />
              <span className="icon-bar bar3" />
            </button>
            <a href="#" className="navbar-brand navbar__title">
              {route}
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle navbar__margin"
                >
                  <p className="navbar__title">{user}</p>
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
