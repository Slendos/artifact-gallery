import React, { Component } from "react";

class HoveredImg extends Component {
  render() {
    let {
      cardImg,
      signatureImg,
      position,
      visibility,
      passive,
      card
    } = this.props;
    if (visibility === false) return null;
    let hero_true = false;
    if (card.card_type === "Hero") hero_true = true;
    return (
      <div>
        <img
          style={{
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: "200px",
            zIndex: 1000
          }}
          src={cardImg}
          alt="card"
        />
        {signatureImg && (
          <img
            style={{
              position: "absolute",
              left: `${position.x + 200}px`,
              top: `${position.y}px`,
              width: "190px",
              zIndex: 1000
            }}
            src={signatureImg}
            alt="card"
          />
        )}
        {passive && hero_true && (
          <div
            style={{
              position: "absolute",
              left: `${position.x + 5}px`,
              top: `${position.y + 195}px`,
              width: "190px",
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
                paddingLeft: "70px"
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: passive }} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default HoveredImg;
