import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h2>404</h2>
      <p>Sorry, that page cannot be found</p>
      <Link to="/">Back to the lobby</Link>
    </div>
  );
};

export default NotFound;
