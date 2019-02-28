import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//ACTIONS
import { getMembers, deleteMember, getMember } from "actions/memberAction.js";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Assignment from "@material-ui/icons/Assignment";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import MemberDetail from "views/Member/Sections/MemberDetail.jsx";
import MemberSummary from "views/Member/Sections/MemberSummary.jsx";
import Spinner from "components/Spinner/Spinner.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class MemberView extends Component {
    constructor(props) {
        super(props);

        //this.onSubmit = this.onSubmit.bind(this);
        //this.updateMemberState = this.updateMemberState.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    //#region EVENTS
    onDeleteClick(id) {
        this.props.deleteMember(id);
    }

    onEditClick(id) {
        this.props.getMember(id);
    }
    //#endregion

    //#region LIFECYCLE
    componentDidMount() {
        this.props.getMembers();
    }

    render() {
        //const { classes } = this.props;
        const { member, members, loading, alert } = this.props.model;
        const { errors, classes } = this.props;
        let membersContent;

        if (members === null || loading) {
            membersContent = <Spinner />;
        } else {
            membersContent = (
                <MemberSummary
                    members={members}
                    onDeleteClick={this.onDeleteClick}
                    onEditClick={this.onEditClick}
                />
            );
        }

        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <MemberDetail
                            member={member}
                            errors={errors}
                            alert={alert}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Card>
                            <CardHeader color="rose" icon>
                                <CardIcon color="rose">
                                    <Assignment />
                                </CardIcon>
                                <h4 className={classes.cardIconTitle}>
                                    <strong>River Valley 2019 Winter</strong>
                                </h4>
                            </CardHeader>
                            <CardBody>{membersContent}</CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
    //#endregion
}

MemberView.propTypes = {
    deleteMember: PropTypes.func.isRequired,
    getMembers: PropTypes.func.isRequired,
    getMember: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    model: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    model: state.memberModel,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { getMembers, deleteMember, getMember }
)(withStyles(dashboardStyle)(MemberView));
