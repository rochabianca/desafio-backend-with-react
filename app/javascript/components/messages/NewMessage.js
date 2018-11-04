import React, { Component } from "react";
import axios from "axios";
import { render } from "react-dom";
import InputGroup from "./InputGroup";
import Secrets from "../Secrets";

export default class NewMessage extends Component {
  state = {
    receiver_email: "",
    title: "",
    content: ""
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    const { receiver_email, title, content } = this.state;
    const { token } = Secrets;
    const currentThis = this;

    if (receiver_email && title && content) {
      console.log("entrou");
      const newMessage = {
        message: {
          receiver_email,
          title,
          content
        }
      };
      axios
        .post(`/api/v1/messages?token=${token}`, newMessage)
        .then(function() {
          currentThis.setState({
            receiver_email: "",
            title: "",
            content: ""
          });
          history.push("/messages");
        });
    }
  };

  render() {
    const { receiver_email, title, content } = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-7 col-md-offset-4">
            <div className="card">
              <div className="header">
                <h4 className="title">AgendaMail</h4>
                <p className="category">Escreva a mensagem.</p>
              </div>
              <div className="content table-responsive table-full-width">
                <form
                  className="new_message"
                  id="new_message"
                  onSubmit={this.onSubmit}
                  acceptCharset="UTF-8"
                  method="post"
                >
                  <input name="utf8" type="hidden" value="✓" />
                  <input
                    type="hidden"
                    name="authenticity_token"
                    value="YqatotcA4jxKjI3u2D02B3dwchzjizX7YvDlfSEoIQhPNl6O7ZtiWJU9bpjB3gf0IP6WENyLq/EH/TxQ0aV1YQ=="
                  />
                  <InputGroup
                    label="Para:"
                    placeholder="Email"
                    name="receiver_email"
                    defaultValue={receiver_email}
                    onChange={this.onChange}
                  />

                  <InputGroup
                    label="Assunto:"
                    placeholder="Assunto"
                    name="title"
                    defaultValue={title}
                    onChange={this.onChange}
                  />

                  <div className="row">
                    <div className="col-md-11">
                      <div className="form-group login_input">
                        <label htmlFor="content">Conteúdo</label>
                        <textarea
                          className="form-control border-input"
                          required="required"
                          name="content"
                          defaultValue={content}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-info btn-fill btn-wd"
                      type="submit"
                    >
                      {" "}
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
