import React, { Component } from "react";
import axios from "axios";
import secrets from "../Secrets";

export default class ArchivedMessages extends Component {
  state = {
    messages: []
  };

  componentDidMount() {
    const { token } = secrets;
    let currentComponent = this;
    axios.get(`/api/v1/messages/archived?token=${token}`).then(function(data) {
      currentComponent.setState({
        messages: data.data
      });
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <form
                action="/archive_multiple"
                acceptCharset="UTF-8"
                data-remote="true"
                method="post"
              >
                <input name="utf8" type="hidden" value="✓" />
                <input type="hidden" name="_method" value="patch" />
                <div className="header">
                  <h4 className="title">Caixa de Entrada</h4>
                  <span className="message_date" />
                </div>
                <div className="content table-responsive table-full-width">
                  <table className="table">
                    <thead>
                      <tr>
                        <th />
                        <th />
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="clickable">
                        <td>Admin</td>
                        <td className="message_content">
                          <a className="view_message" href="/messages/1">
                            Teste
                          </a>
                        </td>
                        <td>02/11/2018</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
