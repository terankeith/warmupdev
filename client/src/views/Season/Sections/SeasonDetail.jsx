//#region IMPORT
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//ACTIONS
import { getSeason } from "actions/seasonAction.js";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

//ICONS
import Assignment from "@material-ui/icons/Assignment";

//CORE COMPONENTS
import MemberSummary from "views/Member/Sections/MemberSummary.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
//#endregion

class SeasonDetail extends Component {
    constructor(props) {
        super(props);

        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    // #region EVENTS
    onDeleteClick(e) {
        e.preventDefault();
    }
    // #endregion

    //#region LIFECYCLE
    componentDidMount() {
        const { match } = this.props;
        this.props.getSeason(match.params.id);
    }
    //#endregion

    render() {
        const { season } = this.props.model;
        const { classes } = this.props;
        const { membership } = season;

        let members;
        let membersContent;

        if (membership === null || typeof membership === "undefined") {
            membersContent = "No members";
        } else {
            members = membership.map((member, i) => {
                return member.member;
            });
            membersContent = (
                <MemberSummary
                    members={members}
                    onDeleteClick={this.onDeleteClick}
                />
            );
        }
        return (
            <GridContainer>
                <GridItem xs={12}>
                    <h1>{season.showTitle}</h1>
                </GridItem>
                <Card>
                    <CardHeader color="rose" icon>
                        <CardIcon color="rose">
                            <Assignment />
                        </CardIcon>
                        <h4 className={classes.cardIconTitle}>
                            <strong>Member Roster</strong>
                        </h4>
                    </CardHeader>
                    <CardBody>{membersContent}</CardBody>
                </Card>
            </GridContainer>
        );
    }
}

SeasonDetail.propTypes = {
    getSeason: PropTypes.func.isRequired,
    model: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    model: state.seasonModel
});

export default connect(
    mapStateToProps,
    { getSeason }
)(withStyles(dashboardStyle)(SeasonDetail));
