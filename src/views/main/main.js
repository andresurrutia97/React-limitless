import React from "react";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";

import dashboardRoutes from "../../routes/routes";

import { HashRouter, Route, Switch } from "react-router-dom";

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [
        {
          userName: "Admin",
          name: "Super Admin",
          email: "admin@gmail.com",
          department: "0",
          roleRights: "0",
          isSuperAdmin: "true"
        },
        {
          userName: "Andres",
          name: "Andres Admin",
          email: "Andres@gmail.com",
          department: "0",
          roleRights: "0",
          isSuperAdmin: "true"
        },
        {
          userName: "Carlos",
          name: "Carlos Admin",
          email: "Carlos@gmail.com",
          department: "0",
          roleRights: "0",
          isSuperAdmin: "true"
        },
        {
          userName: "Jesus",
          name: "Jesus Admin",
          email: "Jesus@gmail.com",
          department: "0",
          roleRights: "0",
          isSuperAdmin: "true"
        }
      ]
    };

    this.handleNewUser = this.handleNewUser.bind(this);
    this.removePeople = this.removePeople.bind(this);
  }

  handleNewUser(userName, name, email, department, roleRights, isSuperAdmin) {
    let newUser = {
      userName: userName,
      name: name,
      email: email,
      department: department,
      roleRights: roleRights,
      isSuperAdmin: isSuperAdmin
    };
    console.log(newUser);
    this.setState({
      users: this.state.users.concat([newUser])
    });
  }

  removePeople(index) {
    const users = this.state.users;
    users.splice(index, 1);
    this.setState({ users });
  }

  render() {
    return (
      <HashRouter>
        <Header />
        <div className="page-content">
          <Sidebar />
          <div className="content-wrapper">
            <Switch>
              {dashboardRoutes.map((prop, key) => {
                return (
                  <Route
                    key={key}
                    exact
                    path={prop.path}
                    name={prop.name}
                    component={() => {
                      return (
                        <div>
                          {(() => {
                            switch (prop.name) {
                              case "Dashboard":
                                return <prop.component />;
                              case "Sync reports":
                                return <prop.component />;
                              case "Users":
                                return (
                                  <prop.component
                                    users={this.state.users}
                                    handleNewUser={this.handleNewUser}
                                    removePeople={this.removePeople}
                                  />
                                );
                              case "Assign Reports To All":
                                return <prop.component />;
                              case "Assign Reports To Users":
                                return <prop.component />;
                              case "Monthly Statement":
                                return <prop.component />;
                              default:
                                return <prop.component />;
                            }
                          })()}
                        </div>
                      );
                    }}
                  />
                );
              })}
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}
