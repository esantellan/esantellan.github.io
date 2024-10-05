import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function Unfound() {
  return (
    <>
      <h1 className="errorTitle">404</h1>

      <p className="errorMessage">Looks like you're lost.</p>

      <Link className="returnLink" to="/">
        Go Back Home
      </Link>
    </>
  );
}

export default Unfound;
