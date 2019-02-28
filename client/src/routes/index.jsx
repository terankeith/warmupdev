import Pages from "layouts/Pages.jsx";
import Profile from "layouts/Profile.jsx";

var indexRoutes = [
    { path: "/pages", name: "Pages", component: Pages },
    { path: "/", name: "Home", component: Profile }
];

export default indexRoutes;
