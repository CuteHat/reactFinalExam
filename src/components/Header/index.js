import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/auth";
import { Link } from "react-router-dom";

function Header() {
  const categories = ["Jobs"];

  const auth = useContext(AuthContext);
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        {categories.map((category, i) => {
          return (
            <Link
              style={{ color: "white" }}
              to={category}
              key={category}
              className="nav-item nav-link"
            >
              {category}
            </Link>
          );
        })}
        {auth.isAuthenticated !== "false" && (
          <button
            onClick={() => auth.logOut()}
            type="button"
            className="btn btn-danger ml-auto"
          >
            გასვლა
          </button>
        )}
        <div className="navbar-nav"></div>
      </div>
    </nav>
  );
}

export default Header;
