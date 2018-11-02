import React, { Component } from "react";

const Message = props => {
  const { message } = props;

  return (
    <div>
      <h3>{message.title}</h3>
      <p>{message.content}</p>
    </div>
  );
};

export default Message;
