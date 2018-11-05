import React, { Component } from "react";
import Secrets from "../Secrets";
import axios from "axios";
import User from "./User";
import NothingToShow from "../layouts/NothingToShow";

export default class Users extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    const { token } = Secrets;
    let currentComponent = this;
    axios.get(`/api/v1/users?token=${token}`).then(function(data) {
      currentComponent.setState({
        users: data.data
      });
    });
  }
  render() {
    const { users } = this.state;

    if (users) {
      return (
        <div className="container-fluid no-margin">
          <div className="row">
            <div className="col-md-12">
              {users.length > 0 ? (
                users.map(user => (
                  <div key={user.id}>
                    <User user={user} />
                  </div>
                ))
              ) : (
                <NothingToShow what="Usuários" />
              )}
              {}
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
