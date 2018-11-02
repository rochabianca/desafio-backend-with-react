// javascripts/components

// import React, { Component } from "react"
// import ReactDOM from "react-dom"

// e

import React from "react";
import ReactDOM from "react-dom";

export default class Messages extends React.Component {
  render() {
    const { messages } = this.props;
    console.log(messages);

    if (messages) {
      return (
        <div>
          {messages.map(message => (
            <div key={message.id}>
              <h3>{message.title}</h3>
              <p>{message.content}</p>
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
  ReactDOM.render(<Messages />, document.getElementById("app"));
});
