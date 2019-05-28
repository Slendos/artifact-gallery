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
          <div
            style={{
              display: "inline-block",
              width: "12vh",
              height: "28vh",
              border: "2px solid grey",
              zIndex: 4000,
              paddingLeft: "6.5vh"
            }}
          >
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
            style={{
              display: "inline-block",
              width: "22vh",
              zIndex: 1000
            }}
            src={cardImg}
            alt="card"
            onLoad={() => this.setState({ loading: false })}
          />
          {signatureImg && (
            <img
              style={{
                display: "inline-block",
                width: "19vh"
              }}
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
