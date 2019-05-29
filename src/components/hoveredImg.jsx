import React, { Component, Fragment } from "react";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";

class HoveredImg extends Component {
  state = {
    loading: true
  };

  render() {
    let { cardImg, signatureImg, visibility } = this.props;
    const { loading } = this.state;
    if (visibility === false) return null;
    return (
      <Fragment>
        {loading && (
          <div className="hover-spinner-wrapper">
            <LoadingSpinner />
          </div>
        )}
        <div
          style={{
            display: `${loading ? "none" : "inline-block"}`,
            zIndex: 1000
          }}
        >
          <img
            className="hover-img-main"
            src={cardImg}
            alt="card"
            onLoad={() => this.setState({ loading: false })}
          />
          {signatureImg && (
            <img
              className="hover-img-signature"
              src={signatureImg}
              alt="card"
            />
          )}
        </div>
      </Fragment>
    );
  }
}

export default HoveredImg;
