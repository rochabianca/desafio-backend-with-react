import React from "react";
import moment from "moment";
import classnames from "classnames";

const Message = props => {
  const { message, showReceiver } = props;
  return (
    <a href={`/messages/${message.id}`}>
      <div
        className={classnames({
          Message: message.status !== "read",
          "Message read": message.status === "read"
        })}
      >
        <div className="Message__intro">
          {showReceiver ? (
            <h3 className="Message__header">To: {message.to}</h3>
          ) : (
            <h3 className="Message__header">{message.from}</h3>
          )}

          <div className="Message__preview">
            {message.title} <span> - {message.content.substring(0, 20)}</span>
          </div>
        </div>
        <span className="Message__date">
          {moment(message.created_at)
            .locale("pt-br")
            .format("L")}
        </span>
      </div>
    </a>
  );
};

export default Message;
