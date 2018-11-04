import React, { Component } from "react";
import SidebarItem from "./SidebarItem";
import logo from "../../images/logo.png";

export default class Sidebar extends Component {
  render() {
    const { user, unread_messages, master, route } = this.props;

    return (
      <div className="sidebar menu" data-background-color="#7f7fd5">
        <div className="sidebar-wrapper menu__bg">
          <div className="logo">
            <a className="menu__logo" href="/messages">
              <div>
                <img src={logo} alt="" /> AgendaMail
              </div>
            </a>
          </div>
          <ul className="nav">
            <SidebarItem
              route="/messages/new"
              currentRoute={route}
              icon="ion-ios-compose-outline"
              name="Escrever"
            />
            <SidebarItem
              route="/messages/sent"
              currentRoute={route}
              icon="ion-ios-paperplane-outline"
              name="Enviadas"
            />
            <SidebarItem
              route="/messages"
              currentRoute={route}
              icon="ion-ios-email-outline"
              name="Mensagens"
              unread={unread_messages}
            />
            {master ? (
              <React.Fragment>
                <SidebarItem
                  route="/archived"
                  currentRoute={route}
                  icon="ion-ios-filing-outline"
                  name="Arquivadas"
                />
                <SidebarItem
                  route="/users"
                  currentRoute={route}
                  icon="ion-ios-people-outline"
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
