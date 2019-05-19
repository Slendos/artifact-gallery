import React from "react";

const ItemPrize = props => {
  const divStyle = {
    position: "relative",
    textDecoration: "none",
    color: "white",
    float: "left",
    width: "2vh",
    marginRight: 5,
    size: "1.7vh",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    verticalAlign: "middle",
    height: "1.2vh"
  };
  return (
    <div style={divStyle} className="span-img">
      <span className="padding-left">{props.price}</span>
    </div>
  );
};

export default ItemPrize;
