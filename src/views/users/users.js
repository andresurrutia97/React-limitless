import React from "react";
import MyVerticallyCenteredModal from "./addUserModal";

import { Dropdown } from "react-bootstrap";
import CustomMenu from "./customMenu";
import CustomToggle from "./customToggle";

export default class Users extends React.Component {
  constructor() {
    super();

    this.state = {
      modalShow: false
    };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div>
        <div className="page-header">
          <div className="page-header-content header-elements-md-inline">
            <div className="page-title d-flex">
              <h4>
                <span className="font-weight-semibold">Users</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="content pt-0">
          {/* <!-- Basic datatable --> */}
          <div className="card">
            <div className="card-header header-elements-inline">
              <h5 className="card-title">User List</h5>
              <div className="header-elements">
                <button
                  className="btn bg-primary-600 legitRipple"
                  onClick={() => this.setState({ modalShow: true })}
                >
                  <i className="icon-user-plus mr-2" /> Add User
                </button>
                <MyVerticallyCenteredModal
                  show={this.state.modalShow}
                  onHide={modalClose}
                  handlenewuser={this.props.handleNewUser}
                />
              </div>
            </div>
            <div className="table-responsive">
              <table className="table datatable-basic table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Role Rights</th>
                    <th>Is Super Admin</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.users.map((prop, key) => {
                    return (
                      <tr key={key}>
                        <td>{prop.userName}</td>
                        <td>{prop.name}</td>
                        <td>{prop.email}</td>
                        <td>{prop.department}</td>
                        <td>{prop.roleRights}</td>
                        <td>
                          {(() => {
                            if (prop.isSuperAdmin) {
                              return "true";
                            } else {
                              return "false";
                            }
                          })()}
                        </td>
                        <td className="text-center">
                          <div className="list-icons">
                            <Dropdown>
                              <Dropdown.Toggle
                                as={CustomToggle}
                                id="dropdown-custom-components"
                              >
                                <i className="icon-menu9" />
                              </Dropdown.Toggle>
                              <Dropdown.Menu as={CustomMenu}>
                                <Dropdown.Item eventKey="1">
                                  <i className="icon-pencil" />
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item
                                  eventKey="2"
                                  onClick={() => this.props.removePeople(key)}
                                >
                                  <i className="icon-trash-alt" />
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {/* <!-- /basic datatable --> */}
        </div>
      </div>
    );
  }
}
