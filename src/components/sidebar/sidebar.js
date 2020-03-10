import React from "react";

import dashboardRoutes from "../../routes/routes";
import { NavLink } from "react-router-dom";

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar sidebar-light sidebar-main sidebar-fixed sidebar-expand-md custom-sidebar">
        <div className="sidebar-content custom-sidebar-content">
          <div className="sidebar-user-material">
            <div className="sidebar-user-material-body">
              <div className="card-body text-center">
                <img
                  src="assets/img/placeholder.jpg"
                  className="img-fluid rounded-circle shadow-1 mb-3"
                  width="70"
                  height="70"
                  alt=""
                />

                <h6 className="mb-0 text-white text-shadow-dark">Admin</h6>
                <span className="font-size-sm text-white text-shadow-dark">
                  Cali, CO
                </span>
              </div>

              <div className="sidebar-user-material-footer">
                <a
                  href="#"
                  className="d-flex justify-content-between align-items-center text-shadow-dark"
                >
                  <span>My account</span>
                </a>
              </div>
            </div>
          </div>

          <div className="card card-sidebar-mobile">
            <ul className="nav nav-sidebar" data-nav-type="accordion">
              <li className="nav-item-header">
                <div className="text-uppercase font-size-xs line-height-xs">
                  Main
                </div>
              </li>

              {dashboardRoutes.map((prop, key) => {
                return (
                  <li className="nav-item" key={key}>
                    <NavLink to={prop.path} className="nav-link">
                      <i className={prop.icon} />
                      <span>{prop.name}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
