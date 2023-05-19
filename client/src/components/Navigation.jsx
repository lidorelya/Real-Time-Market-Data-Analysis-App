import React from "react";
import { NavLink } from "react-router-dom";

import DashboardIcon from '@mui/icons-material/Dashboard';

export function Navigation() {
  
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark" style={{ 'justifyContent': 'center', height: "37px" }} >
       
          <NavLink className="navbar-brand" to="/">
          <DashboardIcon color="secondary" /> Home
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/AllTypes">
                  All Types
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Equity">
                  Equity
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Index">
                  Index
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Derivative">
                  Derivative
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/userDashboard">
                  Dashboard
                </NavLink>
              </li>

            </ul>

        </div>
      </nav>
    </div>
  );
}

//export default Navigation;