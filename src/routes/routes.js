import Dashboard from "../views/dashboard/dashboard";
import SyncReports from "../views/syncReports/syncReports";
import Users from "../views/users/users";
import AssignReportsAll from "../views/assignReportsAll/assignReportsAll";
import AssignReportsUsers from "../views/assignReportsUsers/assignReportsUsers";
import MonsthlyStatement from "../views/monthlyStatement/monthlyStatement";

const dashboardRoutes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "icon-home4",
    component: Dashboard
  },
  {
    path: "/syncReports",
    name: "Sync reports",
    icon: "icon-sync",
    component: SyncReports
  },
  {
    path: "/Users",
    name: "Users",
    icon: "icon-user",
    component: Users
  },
  {
    path: "/assignReportsAll",
    name: "Assign Reports To All",
    icon: "icon-users",
    component: AssignReportsAll
  },
  {
    path: "/assignReportsUsers",
    name: "Assign Reports To Users",
    icon: "icon-user-check",
    component: AssignReportsUsers
  },
  {
    path: "/monsthlyStatement",
    name: "Monthly Statement",
    icon: "icon-stats-bars3",
    component: MonsthlyStatement
  }
];
export default dashboardRoutes;
