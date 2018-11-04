import React from "react";

const User = props => {
  const { user } = props;
  return (
    <div className="clickable_user" data-href="/users/2/messages">
      <div>
        <a href={`/users/${user.id}/messages`}>{user.name}</a>
      </div>
      <div>{user.email}</div>
    </div>
  );
};

export default User;
