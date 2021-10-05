import { NavLink } from "react-router-dom";
import React from "react";
import { useHistory } from "react-router-dom";

export interface NavBarProps {
  hideLinks: boolean;
  user: any;
}

export function Navbar(props: NavBarProps) {
  const history = useHistory();
  const { hideLinks, user = {} } = props;
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <div className="d-flex align-items-center justify-content-between flex-grow w-100">
          <NavLink
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span className="fs-4">Crypto WebApp </span>
          </NavLink>
        </div>
        <ul className="nav nav-pills">
          {!hideLinks && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/cryptocurrencies"
                >
                  Cryptocurrencies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/cryptocurrencies/:id"
                >
                  Cryptocurrencies/:id
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/watchlists"
                >
                  Watchlist
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/watchlists/new"
                >
                  Watchlist/new
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/watchlists/:id/edit"
                >
                  Watchlist /:id/edit
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/watchlists/:id"
                >
                  Watchlist/:id
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="reset-password"
                >
                  Reset Password
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  href="#logout"
                  onClick={(e) => {
                    e.preventDefault();
                    delete localStorage.user_fullname;
                    delete localStorage.user_phonenumber;
                    history.push("/login");
                    window.location.reload();
                  }}
                  className="nav-link"
                >
                  Logout
                </a>
              </li>
            </React.Fragment>
          )}
          {hideLinks === true && (
            <React.Fragment>
              <li className="nav-item">
                {/* <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/login"
                >
                  Login
                </NavLink> */}
              </li>
            </React.Fragment>
          )}
        </ul>
      </header>
    </div>
  );
}