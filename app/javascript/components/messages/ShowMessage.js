import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import moment from "moment";
import Secrets from "../Secrets";

export default class ShowMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: [],
      sender: {},
      receiver: {}
    };
  }

  componentDidMount() {
    const {
      id,
      sender_name,
      sender_email,
      receiver_name,
      receiver_email
    } = this.props;
    const { token } = Secrets;
    let currentComponent = this;
    axios.get(`/api/v1/messages/${id}?token=${token}`).then(function(data) {
      currentComponent.setState({
        message: data.data,
        sender: {
          name: sender_name,
          email: sender_email
        },
        receiver: {
          name: receiver_name,
          email: receiver_email
        }
      });
    });
  }

  render() {
    const { message, sender, receiver } = this.state;
    if (message && sender && receiver) {
      return (
        <div className="showMessage">
          <h1 className="showMessage__subject">{message.title}</h1>

          <div className="showMessage__header">
            <div className="showMessage__info">
              <div className="showMessage__info__sender">
                <b>{sender.name}</b> <span>{"<" + sender.email + ">"}</span>
              </div>
              <div className="showMessage__info__receiver">
                To {receiver.name}{" "}
                <div className="showMessage__info__box">{receiver.email}</div>
              </div>
            </div>

            <p>
              {moment(message.created_at)
                .locale("pt-br")
                .format("LL")}
            </p>
          </div>

          <div className="showMessage__content">{message.content}</div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
