import React from "react";
import Message from "./Message";
import axios from "axios";
import secrets from "../Secrets";
import NothingToShow from "../layouts/NothingToShow";
export default class Messages extends React.Component {
  state = {
    messages: []
  };

  componentDidMount() {
    const { token } = secrets;
    let currentComponent = this;
    axios.get(`/api/v1/messages?token=${token}`).then(function(data) {
      currentComponent.setState({
        messages: data.data
      });
    });
  }

  render() {
    const { messages } = this.state;
    if (messages) {
      return (
        <React.Fragment>
          {messages.length > 0 ? (
            messages.map(message => (
              <div key={message.id}>
                <Message message={message} />
              </div>
            ))
          ) : (
            <NothingToShow what="Mensagens" />
          )}
          {}
        </React.Fragment>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
