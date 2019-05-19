import React from "react";
import LoadingFunctions from "../loadingFunctions";

class Improvement extends LoadingFunctions {
  render() {
    let { card, data } = this.props;
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
  }
}

export default Improvement;
