import React from "react";

const ItemPrize = props => {
  const divStyle = {
    position: "relative",
    textDecoration: "none",
    color: "white",
    float: "left",
    width: 20,
    marginRight: 5,
    size: "16px",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    verticalAlign: "middle",
    height: "10px"
  };
  return (
    <div style={divStyle} className="span-img">
      <span className="padding-left">{props.price}</span>
    </div>
  );
};

export default ItemPrize;
