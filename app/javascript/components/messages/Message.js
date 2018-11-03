import React from "react";

const Message = props => {
  const { message } = props;

  return (
    <a href={`/messages/${message.id}`}>
      <div>
        <h3>{message.from}</h3>
        <h3>{message.title}</h3>
        <p>{message.content}</p>
      </div>
    </a>
  );
};

export default Message;
