import React from "react";
import ReactDOM from "react-dom";
import Message from "./Message";
import axios from "axios";

export default class Messages extends React.Component {
  constructor() {
    super();

    this.state = {
      message: []
    };
  }

  componentDidMount() {
    const { token, id } = this.props;
    let currentComponent = this;
    axios.get(`/api/v1/messages/${id}?token=${token}`).then(function(data) {
      currentComponent.setState({
        message: data.data
      });
    });
  }

  render() {
    const { message } = this.state;
    console.log(message);
    if (message) {
      return (
        <div>
          <h1>{message.title}</h1>
          <span>From: {message.from}</span>
          <p>{message.content}</p>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

document.addEventListener("turbolinks:load", () => {
  ReactDOM.render(<Messages />, document.getElementById("app"));
});
