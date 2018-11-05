import React from "react";
import axios from "axios";
import moment from "moment";
import Secrets from "../Secrets";

export default class ShowMessage extends React.Component {
  state = {
    message: []
  };

  componentDidMount() {
    const { id } = this.props;
    const { token } = Secrets;
    let currentComponent = this;
    axios.get(`/api/v1/messages/${id}?token=${token}`).then(function(data) {
      currentComponent.setState({
        message: data.data
      });
    });
  }

  render() {
    const { message } = this.state;
    if (message) {
      return (
        <div className="showMessage">
          <h1 className="showMessage__subject">{message.title}</h1>

          <div className="showMessage__header">
            <div className="showMessage__info">
              <div className="showMessage__info__sender">
                <b>{message.sender}</b>{" "}
                <span>{"<" + message.sender_email + ">"}</span>
              </div>
              <div className="showMessage__info__receiver">
                Para {message.receiver}{" "}
                <div className="showMessage__info__box">
                  {message.receiver_email}
                </div>
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
