import React from "react";
import logoBig from "../assets/images/react-logo.png";
const Header = () => {
  return (
    <header className="app-header">
      <img src={logoBig} alt="React logo" />
      <h1>The React Quiz</h1>
    </header>
  );
};

export default Header;
