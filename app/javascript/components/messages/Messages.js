import React from "react";
import ReactDOM from "react-dom";
import Message from "./Message";
import axios from "axios";
import secrets from "../secrets";

export default class Messages extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: []
    };
  }

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
        <div>
          {messages.map(message => (
            <div key={message.id}>
              <Message message={message} />
            </div>
          ))}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

document.addEventListener("turbolinks:load", () => {
  ReactDOM.render(<Messages />, document.getElementById("app").innerHTML);
});
