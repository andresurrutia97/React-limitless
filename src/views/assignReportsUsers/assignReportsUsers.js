import React from "react";
import { Form } from "react-bootstrap";

export default class AssignReportsUsers extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [
        {
          reportName: "JaverianaReportPowerBI"
        },
        {
          reportName: "IcesiReportPowerBI"
        },
        {
          reportName: "AutonomaReportPowerBI"
        },
        {
          reportName: "SanbueReportPowerBI"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="page-header-content header-elements-md-inline">
            <div className="page-title d-flex">
              <h4>
                <span className="font-weight-semibold">Power BI Reports</span> -
                Assign Reports to Users
              </h4>
            </div>
          </div>
        </div>
        <div className="content pt-0">
          {/* <!-- Basic datatable --> */}

          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Search by User Name</h5>
            </div>

            <div className="card-body d-sm-flex justify-content-sm-between align-items-sm-center">
              <form className="mt-3 mt-sm-0" action="#">
                <div className="form-group-feedback form-group-feedback-right">
                  <input
                    type="search"
                    className="form-control wmin-sm-200"
                    placeholder="Search..."
                  />
                  <div className="form-control-feedback">
                    <i className="icon-search4 font-size-base text-muted" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card">
            <div className="card-header header-elements-inline">
              <h5 className="card-title">User Report List</h5>
            </div>
            <div className="table-responsive">
              <table className="table datatable-basic table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>Full Name</th>
                    <th>Report Name</th>
                    <th>
                      <div className="d-flex justify-content-center">
                        Assign
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((prop, key) => {
                    return (
                      <tr key={key}>
                        <td>{prop.reportName}</td>
                        <td>{prop.reportName}</td>
                        <td>{prop.reportName}</td>
                        <td>
                          <div className="d-flex justify-content-center pl-3">
                            <Form.Check type="checkbox" />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="card-footer bg-white d-flex justify-content-between align-items-center">
              <button className="btn bg-primary-600 legitRipple">
                <i className="icon-user-check mr-2" /> Save
              </button>
            </div>
          </div>

          {/* <!-- /basic datatable --> */}
        </div>
      </div>
    );
  }
}
