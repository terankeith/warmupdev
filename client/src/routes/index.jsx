import Pages from "layouts/Pages.jsx";
import RTL from "layouts/RTL.jsx";
import Dashboard from "layouts/Dashboard.jsx";
import Profile from "layouts/Profile.jsx";

var indexRoutes = [
  { path: "/rtl", name: "RTL", component: RTL },
  { path: "/pages", name: "Pages", component: Pages },
  { path: "/", name: "Home", component: Profile },
  { path: "/dashboard", name: "Dashboard", component: Dashboard}
];

export default indexRoutes;
