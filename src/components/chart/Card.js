import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card text-white bg-secondary ">{this.props.children}</div>
    );
  }
}
export default Card;
