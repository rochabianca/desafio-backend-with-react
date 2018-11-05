import React, { Component } from "react";
import Secrets from "../Secrets";
import axios from "axios";
import Message from "../messages/Message";
import NothingToShow from "../layouts/NothingToShow";

export default class UserMessages extends Component {
  state = {
    received: [],
    sent: [],
    user: {}
  };
  componentDidMount() {
    const { id } = this.props;
    const { token } = Secrets;
    let currentComponent = this;
    axios.get(`/api/v1/users/${id}/show?token=${token}`).then(function(data) {
      currentComponent.setState({
        user: data.data
      });
    });
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
    const { sent, received, user } = this.state;
    if (sent && received && user) {
      return (
        <div className="container-fluid card__space">
          <h1 className="card__title">
            Mensagens de {user.name} <p>{user.email}</p>
          </h1>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="card card__size">
                <div className="header card__header">
                  <h4 className="title">Recebidas</h4>
                </div>
                {received.length > 0 ? (
                  received.map(message => (
                    <div key={message.id}>
                      <Message message={message} />
                    </div>
                  ))
                ) : (
                  <NothingToShow what="Mensagens" />
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card card__size">
                <div className="header card__header">
                  <h4 className="title">Enviadas</h4>
                </div>
                {sent.length > 0 ? (
                  sent.map(message => (
                    <div key={message.id}>
                      <Message message={message} showReceiver={true} />
                    </div>
                  ))
                ) : (
                  <NothingToShow what="Mensagens" />
                )}
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
