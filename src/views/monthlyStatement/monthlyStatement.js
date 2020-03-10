import React from "react";

export default class MonthlyStatement extends React.Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="page-header-content header-elements-md-inline">
            <div className="page-title d-flex">
              <h4>
                <span className="font-weight-semibold">
                  Monthly Report Functionlity
                </span>{" "}
                - Enable/Disable
              </h4>
            </div>
          </div>
        </div>
        <div className="content pt-0">
          <div className="card">
            <div className="card-header header-elements-inline">
              <h5 className="card-title">Monthly Statement Functionlity</h5>
            </div>
            <div className="card-body">Switch</div>
            <div className="card-footer bg-white d-flex justify-content-between align-items-center">
              <button className="btn bg-primary-600 legitRipple">
                <i className="icon-check mr-2" /> Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
