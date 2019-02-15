//#region IMPORT
import React, {Component} from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

//modules
import SeasonSummary from "modules/Season/SeasonSummary.jsx";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";


//#endregion

class SeasonView extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { classes } = this.props;
        return(
            <SeasonSummary classes={classes}/>
        )
    }
}

SeasonView.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(SeasonView);