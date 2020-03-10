import React from "react";
import { Form, Table } from "react-bootstrap";

export default class AssignReportsAll extends React.Component {
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
            <div className="card-header header-elements-inline">
              <h5 className="card-title">Report List</h5>
            </div>
            <div className="table-responsive">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Assign</th>
                    <th>Report Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((prop, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <Form.Check type="checkbox" />
                        </td>
                        <td>{prop.reportName}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
            <div className="card-footer bg-white d-flex justify-content-between align-items-center">
              <button className="btn bg-primary-600 legitRipple">
                <i className="icon-check mr-2" /> Save
              </button>
            </div>
          </div>

          {/* <!-- /basic datatable --> */}
        </div>
      </div>
    );
  }
}
