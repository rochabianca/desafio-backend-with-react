import React from "react";

const Message = props => {
  const { message, showReceiver } = props;

  return (
    <a href={`/messages/${message.id}`}>
      <div>
        {showReceiver ? <h3>To: {message.to}</h3> : <h3>{message.from}</h3>}

        <h3>{message.title}</h3>
        <p>{message.content}</p>
      </div>
    </a>
  );
};

export default Message;
