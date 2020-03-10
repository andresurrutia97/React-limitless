import React from "react";

import { Dropdown } from "react-bootstrap";
import CustomMenu from "./customMenu";
import CustomToggle from "./customToggle";

export default class Header extends React.Component {
  render() {
    return (
      <div className="navbar navbar-expand-md bg-indigo navbar-dark fixed-top">
        <div className="navbar-header navbar-dark d-none d-md-flex align-items-md-center bg-indigo">
          <div className="navbar-brand navbar-brand-md">
            <a href="index.html" className="d-inline-block">
              <img src="assets/img/logo_light.png" alt="" />
            </a>
          </div>
        </div>

        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbar-mobile"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                href=""
                className="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block"
              >
                <i className="icon-paragraph-justify3" />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-custom-components"
                >
                  Admin
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                  <Dropdown.Item eventKey="1">
                    <i className="icon-user" />
                    My profile
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="2">
                    <i className="icon-cog" />
                    Account settings
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    <i className="icon-switch2" />
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
