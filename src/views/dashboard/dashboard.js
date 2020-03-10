import React from "react";

import DoughnutChart from "../../components/Doughnut/Doughnut";
import LineDemo from "../../components/line2/line2";
import RadarChart from "../../components/radar/radar";
import PolarChart from "../../components/polar/polar"

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="page-header-content header-elements-md-inline">
            <div className="page-title d-flex">
              <h4>
                <span className="font-weight-semibold">Home</span> - Report List
              </h4>
            </div>
          </div>
        </div>
        <div className="content pt-0">
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header header-elements-inline">
                  <h5 className="card-title">Budget Report</h5>
                  <div className="header-elements">
                    <span className="badge badge-pill badge-success">
                      Status
                    </span>
                    <a
                      href="http://javeriana.printerbi.com/Report?IsReport=True&UniqueId=957fb2c3-f213-49c8-b8ca-921101089ece"
                      target="_blank"
                    >
                      <span className="badge badge-flat badge-pill border-secondary text-secondary m-1">
                        More info
                      </span>
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <LineDemo />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header header-elements-inline">
                  <h5 className="card-title">Printing Report</h5>

                  <div className="header-elements">
                    <span className="badge badge-pill badge-danger">
                      Status
                    </span>
                    <a
                      href="http://javeriana.printerbi.com/Report?IsReport=True&UniqueId=548c6260-751c-48a4-a9a6-79a688d04580"
                      target="_blank"
                    >
                      <span className="badge badge-flat badge-pill border-secondary text-secondary m-1">
                        More info
                      </span>
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <RadarChart />
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header header-elements-inline">
                  <h5 className="card-title">Consume Report</h5>
                  <div className="header-elements">
                    <span className="badge badge-pill badge-primary">
                      Status
                    </span>
                    <a
                      href="http://javeriana.printerbi.com/Report?IsReport=True&UniqueId=f93c10e4-1a8a-4eae-8713-98befc6b27c1"
                      target="_blank"
                    >
                      <span className="badge badge-flat badge-pill border-secondary text-secondary m-1">
                        More info
                      </span>
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm">
                      <DoughnutChart />
                    </div>
                    <div className="col-sm">
                      <PolarChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
