import React, { Component, Fragment } from "react";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";

class HoveredImg extends Component {
  state = {
    loading: true
  };

  render() {
    let { cardImg, signatureImg, position, visibility } = this.props;
    const { loading } = this.state;
    if (visibility === false) return null;
    return (
      <Fragment>
        {loading && (
          <div
            style={{
              position: "absolute",
              left: `${position.x}px`,
              right: `${position.y}px`,
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
        <div style={{ display: `${loading ? "none" : ""}` }}>
          <img
            style={{
              position: "absolute",
              left: `${position.x}px`,
              top: `${position.y}px`,
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
                position: "absolute",
                left: `${position.x + 200}px`,
                top: `${position.y}px`,
                width: "19vh",
                zIndex: 1000
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
