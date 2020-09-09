import React from "react";

function TextColor(props) {
  const { textColor } = props;
  return (
    <div className="row">
      <div className="col-2">
        <p>{textColor.color[0].text}</p>
      </div>
      <div className="col-10">
        {textColor.map((item) => {
          return (
            <p className={`text-${item.color[0].color}`}>{item.colorText}</p>
          );
        })}
      </div>
    </div>
  );
}
export default TextColor;
