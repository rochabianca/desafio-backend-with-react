import React from "react";

const User = props => {
  const { user } = props;
  return (
    <div className=" User" data-href="/users/2/messages">
      <div className="User__name">
        <a href={`/users/${user.id}/messages`}>{user.name}</a>
      </div>
      <div className="User__email">{user.email}</div>
    </div>
  );
};

export default User;
