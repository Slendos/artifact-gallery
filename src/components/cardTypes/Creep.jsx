import React from "react";

const Creep = ({ card }) => {
  // let { card } = this.props;
  return (
    <div className="card-detail-main">
      <div className="card-detail-large-image">
        <img
          src={card.large_image.default}
          alt=""
          className="card-detail-large-image"
        />
      </div>
    </div>
  );
};

export default Creep;
