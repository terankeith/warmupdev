//#region IMPORT
import React, {Component} from "react";

//ACTIONS
//import { getSeasons, getSeason } from "actions/seasonAction.js";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
//#endregion

class SeasonDetail extends Component {
    constructor(props){
        super(props);
    }

    //#region LIFECYCLE
    render(){
        return(
            <div>
                <h1>This is the Season Detail Page</h1>
            </div>
        )
    }
    //#endregion
}


export default withStyles(dashboardStyle)(SeasonDetail);