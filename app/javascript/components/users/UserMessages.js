import React, { Component } from "react";
import Secrets from "../Secrets";
import axios from "axios";
import Message from "../messages/Message";

export default class UserMessages extends Component {
  state = {
    received: [],
    sent: []
  };
  componentDidMount() {
    const { id } = this.props;
    const { token } = Secrets;
    let currentComponent = this;
    axios
      .get(`/api/v1/users/${id}/messages?token=${token}`)
      .then(function(data) {
        currentComponent.setState({
          received: data.data.received,
          sent: data.data.sent
        });
      });
  }
  render() {
    const { sent, received } = this.state;

    if (sent && received) {
      return (
        <div className="container-fluid card__space">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="card card__size">
                <div className="header card__header">
                  <h4 className="title">Recebidas</h4>
                </div>
                {received.map(message => (
                  <div key={message.id}>
                    <Message message={message} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card card__size">
                <div className="header card__header">
                  <h4 className="title">Enviadas</h4>
                </div>
                {sent.map(message => (
                  <div key={message.id}>
                    <Message message={message} showReceiver={true} />
                  </div>
                ))}
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
