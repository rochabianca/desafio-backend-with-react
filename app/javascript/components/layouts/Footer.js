import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <nav className="pull-left">
            <ul>
              <li>
                <a
                  className="footer__link"
                  href="http://github.com/rochabianca/"
                >
                  Made with <i className="ion-ios-heart-outline" /> by Bianca
                  Rocha
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright pull-right" />
        </div>
      </footer>
    );
  }
}
