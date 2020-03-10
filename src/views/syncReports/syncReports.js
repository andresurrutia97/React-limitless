import React from "react";

export default class SyncReports extends React.Component {
  constructor() {
    super();

    this.state = {
      reports: [
        {
          name: "JaverianaReportPowerBI"
        },
        {
          name: "IcesiReportPowerBI"
        },
        {
          name: "UaoReportPowerBI"
        },
        {
          name: "SanbueReportPowerBI"
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
                <span className="font-weight-semibold">Power BI Reports</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="content pt-0">
          {/* <!-- Basic datatable --> */}
          <div className="card">
            <div className="card-header header-elements-inline">
              <h5 className="card-title">Reports List</h5>
              <div className="header-elements">
                <button className="btn bg-indigo-300 legitRipple">
                  <i className="icon-statistics mr-2" /> Sync Reports
                </button>
              </div>
            </div>
            <table className="table datatable-basic table-striped table-hover">
              <thead>
                <tr>
                  <th>Reports</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.reports.map((prop, key) => {
                  return (
                    <tr key={key}>
                      <td>{prop.name}</td>
                      <td className="text-center">
                        <div className="list-icons">
                          <div className="dropdown">
                            <a
                              href="/#/syncReports"
                              className="list-icons-item"
                              data-toggle="dropdown"
                            >
                              <i className="icon-menu9" />
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* <!-- /basic datatable --> */}
        </div>
      </div>
    );
  }
}
