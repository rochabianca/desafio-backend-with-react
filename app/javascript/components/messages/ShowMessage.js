import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import secrets from "../secrets";

export default class ShowMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: []
    };
  }

  componentDidMount() {
    const { id } = this.props;
    const { token } = secrets;
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
          <p>From: {message.from}</p>
          <p>On: {message.created_at}</p>
          <p>{message.content}</p>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

document.addEventListener("turbolinks:load", () => {
  ReactDOM.render(<ShowMessage />, document.getElementById("app").innerHTML);
});
