import React from "react";

const NavBar = () => {
  return (
    <div style={{ backgroundImage: "linear-gradient(#120e1f, #0b1423)" }}>
      <div
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "30px"
        }}
      >
        <img
          style={{
            width: "200px",
            padding: "10px",
            borderRadius: "10px"
          }}
          src="https://playartifact.com/public/images/artifact_logo_top.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default NavBar;
