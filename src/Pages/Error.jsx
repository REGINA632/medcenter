import React from "react";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 600,
      }}
    >
      <img
        width="20%"
        src="https://www.titanium.lv/wp-content/uploads/2022/01/disney_logo.jpeg"
        // src={errorLogo}
        alt=""
      />
      <h2>Sorry, Disney+ is not available in your region.</h2>
    </div>
  );
};

export default Error;
