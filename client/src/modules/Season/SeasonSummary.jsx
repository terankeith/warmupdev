//#region IMPORT
import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

//ACTIONS
import { getSeasons } from "actions/seasonAction.js";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";


import mbi2019 from "assets/img/units/mbi2019.jpg";
import mbi2018 from "assets/img/units/mbi2018.jpg";
import mbi2017 from "assets/img/units/mbi2017.jpg";

//#endregion

class SeasonView extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        //hard coded for now
        this.props.getSeasons("5c64a1e090e2b554952869aa");
    }

    render(){
        const { classes } = this.props;
        const { seasons } = this.props.model;

        const seasonList = seasons.map(season =>{
            return(
                <GridItem xs={12} sm={12} md={6} lg={4} key={season._id}>
                    <Card profile>
                        <CardAvatar profile>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                <img src={require(`assets/img/units/${season.icon || "avatar.jpg"}`)} alt="..." />
                            </a>
                        </CardAvatar>
                        <CardBody profile>
                            <h6 className={classes.cardCategory}>{season.year + " | " + season.season}</h6>
                            <h4 className={classes.cardTitle}>{season.showTitle}</h4>
                            
                            <Button color="info" round>
                                <strong>{season.membership.length}</strong>
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>
            )
        })
        return(
            <GridContainer>
                {seasonList}
            </GridContainer>
        )
    }
}

SeasonView.propTypes = {
    getSeasons: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    model: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    model: state.seasonModel,
    errors: state.errors
})

export default connect(mapStateToProps, {getSeasons})(SeasonView);