import React from "react";
import classnames from "classnames";

const SidebarItem = props => {
  const { route, currentRoute, icon, name, unread } = props;
  return (
    <li
      className={classnames({
        menu__item: route !== currentRoute,
        "active menu__item": route === currentRoute
      })}
    >
      <a className="menu__item__text" href={route}>
        <i className={icon} />
        <p>
          {name} {unread ? "(" + unread + ")" : null}
        </p>
      </a>
    </li>
  );
};

export default SidebarItem;
