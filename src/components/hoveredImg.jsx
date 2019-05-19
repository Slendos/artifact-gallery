import React, { Component, Fragment } from "react";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";

class HoveredImg extends Component {
  state = {
    loading: true
  };

  render() {
    let {
      cardImg,
      signatureImg,
      position,
      visibility,
      passive,
      card
    } = this.props;
    const { loading } = this.state;
    if (visibility === false) return null;
    let hero_true = false;
    if (card.card_type === "Hero") hero_true = true;
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
              // opacity: `${loading && 0}`
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
          {/* {passive && hero_true && (
            <div
              style={{
                position: "absolute",
                left: `${position.x + 70}px`,
                top: `${position.y + 195}px`,
                width: "130px",
                height: "80px",
                zIndex: 10000,
                backgroundColor: "rgba(0, 0, 0, 0.6)"
              }}
            >
              <div
                style={{
                  zIndex: 100000,
                  width: "130px",
                  height: "40px",
                  fontSize: "12px",
                  padding: "0 5px"
                }}
              >
                <span dangerouslySetInnerHTML={{ __html: passive }} />
              </div>
            </div>
          )} */}
        </div>
      </Fragment>
    );
  }
}

export default HoveredImg;
