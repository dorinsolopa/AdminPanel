import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Maps from "../components/maps/Maps";
import UserProfile from "../pages/user_profile/UserProfile";
import Notifications from "../pages/notifications/Notifications";
import TableCard from "../pages/TableCard/TableCard";
import Typography from "../pages/typography/Typography";
import FontAwesome from "../pages/fontawesone/FontAwesome";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Dashboard,
    name: " Dashboard",
    menu: true,
    icon: "fas fa-chart-pie ",
  },

  {
    path: "/fontawesome",
    exact: true,
    component: FontAwesome,
    name: " Icons ",
    menu: true,
    icon: "fab fa-react",
  },

  {
    path: "/google_map",
    exact: true,
    component: Maps,
    name: " Map",
    menu: true,
    icon: "fas fa-thumbtack",
  },

  {
    path: "/notifications-style",
    exact: true,
    component: Notifications,
    name: " Notifications",
    menu: true,
    icon: "fas fa-bell",
  },

  {
    path: "/user-profile",
    exact: true,
    component: UserProfile,
    name: " UserProfile",
    menu: true,
    icon: "far fa-user",
  },

  {
    path: "/table-list",
    exact: true,
    component: TableCard,
    name: " Table List",
    menu: true,
    icon: "fas fa-puzzle-piece",
  },
  {
    path: "/typography",
    exact: true,
    component: Typography,
    name: " Typography ",
    menu: true,
    icon: "fas fa-align-center",
  },
];

export const publicRoutes = [{}];
