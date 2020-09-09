import React from "react";
import "./Card.css"
class Card extends React.Component {
  render() {
    return (
      <div className="bgDark stature">{this.props.children}</div>
    );
  }
}
export default Card;
