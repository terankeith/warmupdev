//#region IMPORT
import React, { Component } from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

//ICONS
import Assignment from "@material-ui/icons/Assignment";

//Challenges
//import Factorial from "views/Challenges/Sections/Factorial.jsx";
import FizzBuzz from "views/Challenges/Sections/FizzBuzz.jsx";

//COMPONENTS
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

//#endregion

class ChallengeView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        const challengeHeader = "FizzBuzz";
        return (
            <GridContainer>
                <GridItem xs={8}>
                    <Card>
                        <CardHeader color="rose" icon>
                            <CardIcon color="primary">
                                <Assignment />
                            </CardIcon>
                            <h4 className={classes.cardIconTitle}>
                                <strong>{challengeHeader}</strong>
                            </h4>
                        </CardHeader>
                        <CardBody>
                            <FizzBuzz />
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

ChallengeView.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(ChallengeView);
