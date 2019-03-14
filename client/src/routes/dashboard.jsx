//#region IMPORT
import Members from "views/Member/MemberView.jsx";
import Seasons from "views/Season/SeasonView.jsx";
import SeasonDetail from "views/Season/Sections/SeasonDetail.jsx";
import Challenges from "views/Challenges/ChallengeView.jsx";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Apps from "@material-ui/icons/Apps";
//#endregion

var dashboardRoutes = [
    {
        path: "/seasons",
        name: "MBI Winter Guard",
        icon: Apps,
        exact: true,
        component: Seasons
    },
    {
        path: "/seasons/:id",
        name: "Season",
        component: SeasonDetail,
        invisible: true
    },
    {
        path: "/members",
        name: "Members",
        icon: DashboardIcon,
        component: Members
    },
    {
        path: "/challenges",
        name: "Challenges",
        icon: DashboardIcon,
        component: Challenges
    },
    { redirect: true, path: "/", pathTo: "/seasons", name: "Seasons" }
];
export default dashboardRoutes;
