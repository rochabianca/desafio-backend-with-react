import React, { Component } from "react";

export default class FlashMessages extends Component {
  render() {
    const { flash } = this.props;
    console.log(flash);

    if (flash.length > 0) {
      return (
        <div className="flashMessages">
          <div className={"flashMessages__box " + flash[0][0]}>
            <p>{flash[0][1]}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
