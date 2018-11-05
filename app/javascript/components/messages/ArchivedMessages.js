import React, { Component } from "react";
import axios from "axios";
import secrets from "../Secrets";
import Message from "./Message";

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
    const { messages } = this.state;

    if (messages) {
      return (
        <div className="container-fluid">
          <div className="row">
            {messages.map(message => (
              <div key={message.id}>
                <Message message={message} />
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
