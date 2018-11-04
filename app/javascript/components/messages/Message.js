import React from "react";
import moment from "moment";
import classnames from "classnames";

const Message = props => {
  const { message, showReceiver } = props;
  console.log(message);
  return (
    <a href={`/messages/${message.id}`}>
      <div
        className={classnames({
          Message: message.status === "read",
          "Message unread": message.status !== "read"
        })}
      >
        <div className="Message__intro">
          {showReceiver ? (
            <h3 className="Message__header">To: {message.to}</h3>
          ) : (
            <h3 className="Message__header">{message.from}</h3>
          )}

          <div>
            {message.title}{" "}
            <span className="Message__preview">
              {" "}
              - {message.content.substring(0, 10)}
            </span>
          </div>
        </div>
        <span>
          {moment(message.created_at)
            .locale("pt-br")
            .format("LL")}
        </span>
      </div>
    </a>
  );
};

export default Message;
