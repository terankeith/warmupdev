//#region IMPORT
import React, {Component} from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

//ICONS
import Contacts from "@material-ui/icons/Contacts";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

import mbi2019 from "assets/img/units/mbi2019.jpg";
import mbi2018 from "assets/img/units/mbi2018.jpg";
import mbi2017 from "assets/img/units/mbi2017.jpg";

//#endregion

class UnitView extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { classes } = this.props;
        return(
            <GridContainer>
                <GridItem xs={12} sm={12} md={6} lg={4}>
                    <Card profile>
                        <CardAvatar profile>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                <img src={mbi2019} alt="..." />
                            </a>
                        </CardAvatar>
                        <CardBody profile>
                            <h6 className={classes.cardCategory}>2019</h6>
                            <h4 className={classes.cardTitle}>Beyond the Cathedral</h4>
                            
                            <Button color="info" round>
                                <strong>13</strong>
                            </Button>
                        </CardBody>
                    </Card>
                    
                </GridItem>
                <GridItem xs={12} sm={12} md={6} lg={4}>
                    <Card profile>
                        <CardAvatar profile>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                <img src={mbi2018} alt="..." />
                            </a>
                        </CardAvatar>
                        <CardBody profile>
                            <h6 className={classes.cardCategory}>2018</h6>
                            <h4 className={classes.cardTitle}>Oh! The Places You'll Really Go!</h4>
                            <Button color="info" round>
                                <strong>21</strong>
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={6} lg={4}>
                    <Card profile>
                        <CardAvatar profile>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                <img src={mbi2017} alt="..." />
                            </a>
                        </CardAvatar>
                        <CardBody profile>
                            <h6 className={classes.cardCategory}>2017</h6>
                            <h4 className={classes.cardTitle}>The Bee</h4>
                            <Button color="info" round>
                                <strong>28</strong>
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        )
    }
}

UnitView.PropTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(UnitView);