//#region IMPORT
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//ACTIONS
import { getSeason, removeMemberFromSeason } from "actions/seasonAction.js";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
//import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import extendedTablesStyle from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.jsx";

//ICONS
import Assignment from "@material-ui/icons/Assignment";

//CORE COMPONENTS
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import MemberSummary from "views/Member/Sections/MemberSummary.jsx";
import MemberAddModal from "views/Member/Sections/MemberAddModal.jsx";
import Spinner from "components/Spinner/Spinner.jsx";
import { isObject } from "util";
//#endregion

class SeasonDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alert: null
        };

        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    // #region EVENTS
    onDeleteClick(memberId) {
        this.props.removeMemberFromSeason(this.props.match.params.id, memberId);
    }
    // #endregion

    //#region LIFECYCLE
    componentDidMount() {
        this.props.getSeason(this.props.match.params.id);
    }
    //#endregion

    render() {
        const { season, loading } = this.props.model;
        const { classes } = this.props;
        const { membership } = season;

        let members;
        let membersContent;

        if (membership === null || !isObject(membership) || loading) {
            membersContent = <Spinner />;
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
                <GridItem xs={12} lg={8}>
                    <Card>
                        <CardHeader color="rose" icon>
                            <CardIcon color="rose">
                                <Assignment />
                            </CardIcon>
                            <h4 className={classes.cardIconTitle}>
                                <strong>Member Roster</strong>
                                <MemberAddModal />
                            </h4>
                        </CardHeader>
                        <CardBody>{membersContent}</CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

SeasonDetail.propTypes = {
    getSeason: PropTypes.func.isRequired,
    removeMemberFromSeason: PropTypes.func.isRequired,
    model: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    model: state.seasonModel
});

export default connect(
    mapStateToProps,
    { getSeason, removeMemberFromSeason }
)(withStyles(extendedTablesStyle)(SeasonDetail));
