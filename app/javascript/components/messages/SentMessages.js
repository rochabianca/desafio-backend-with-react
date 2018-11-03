import React, { Component } from "react";
import axios from "axios";
import secrets from "../secrets";
import Message from "./Message";

export default class SentMessages extends Component {
  state = {
    messages: []
  };
  componentDidMount() {
    const { token } = secrets;
    let currentComponent = this;
    axios.get(`/api/v1/messages/sent?token=${token}`).then(function(data) {
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
            <div className="col-md-12">
              <div className="card">
                <div className="header">
                  <h4 className="title">Caixa de Entrada</h4>
                  <span className="message_date" />
                </div>
                <div className="content table-responsive table-full-width">
                  {messages.map(message => (
                    <div key={message.id}>
                      <Message message={message} showReceiver={true} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
