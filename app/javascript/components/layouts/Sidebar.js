import React, { Component } from "react";
import SidebarItem from "./SidebarItem";

export default class Sidebar extends Component {
  render() {
    const { user, unread_messages, master, route } = this.props;

    return (
      <div
        className="sidebar"
        data-active-color="danger"
        data-background-color="white"
      >
        <div className="sidebar-wrapper">
          <div className="logo">
            <a className="simple-text" href="/messages">
              AgendaMail
            </a>
            <span>{user}</span>
          </div>
          <ul className="nav">
            <SidebarItem
              route="/messages/new"
              currentRoute={route}
              icon="fa fa-pencil"
              name="Escrever"
            />
            <SidebarItem
              route="/messages/sent"
              currentRoute={route}
              icon="fa fa-envelope-open"
              name="Enviadas"
            />
            <SidebarItem
              route="/messages"
              currentRoute={route}
              icon="fa fa-envelope-o"
              name="Mensagens"
              unread={unread_messages}
            />
            {master ? (
              <React.Fragment>
                <SidebarItem
                  route="/archived"
                  currentRoute={route}
                  icon="fa fa-archive"
                  name="Arquivadas"
                />
                <SidebarItem
                  route="/users"
                  currentRoute={route}
                  icon="fa fa-user"
                  name="Usuarios"
                />
              </React.Fragment>
            ) : null}
          </ul>
        </div>
      </div>
    );
  }
}
