import React, { Component } from "react";
import axios from "axios";
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
    const { receiver_email, title, content } = this.state;
    const { token } = Secrets;
    const currentThis = this;

    if (receiver_email && title && content) {
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
          window.location = "/messages";
        });
    }
  };

  render() {
    const { receiver_email, title, content } = this.state;

    return (
      <div className="container-fluid NewMessage">
        <div className="row">
          <div className="col-lg-12 col-md-7">
            <form
              className="NewMessage__form"
              id="new_message"
              onSubmit={this.onSubmit}
              acceptCharset="UTF-8"
              method="post"
            >
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

              <div className="login__form__field">
                <label htmlFor="content">Mensagem</label>
                <textarea
                  className="newMessage__textarea"
                  required="required"
                  rows="5"
                  name="content"
                  defaultValue={content}
                  onChange={this.onChange}
                />
              </div>

              <div className="text-center">
                <button className="button button__success" type="submit">
                  {" "}
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
