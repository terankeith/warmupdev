//#region IMPORT
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//ACTIONS
import { getSeason } from "actions/seasonAction.js";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
//#endregion

class SeasonDetail extends Component {
    constructor(props) {
        super(props);
    }

    //#region LIFECYCLE
    componentDidMount() {
        //getSeason();
    }
    //#endregion

    render() {
        const { match } = this.props;
        return (
            <div>
                <h1>{match.params.id}</h1>
            </div>
        );
    }
}

SeasonDetail.propTypes = {
    getSeason: PropTypes.func.isRequired,
    season: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    model: state.seasonModel
});

export default connect(
    mapStateToProps,
    { getSeason }
)(withStyles(dashboardStyle)(SeasonDetail));
