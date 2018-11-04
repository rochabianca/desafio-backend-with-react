import React from "react";
import moment from "moment";

const Message = props => {
  const { message } = props;

  return (
    <div className="clickable unread">
      <p>Bianca</p>
      <div className="message_content">
        <a className="view_message" href={`/messages/${message.id}`}>
          {message.title}
        </a>
      </div>
      <span>
        {moment(message.created_at)
          .locale("pt-br")
          .format("LL")}
      </span>
    </div>
  );
};

export default Message;
