import React from "react";
import classnames from "classnames";

const SidebarItem = props => {
  const { route, currentRoute, icon, name, unread } = props;
  return (
    <li
      className={classnames({
        hide_sidebar: route !== currentRoute,
        "active hide_sidebar": route === currentRoute
      })}
    >
      <a href={route}>
        <i className={icon} />
        <p>
          {name} {unread ? "(" + unread + ")" : null}
        </p>
      </a>
    </li>
  );
};

export default SidebarItem;
