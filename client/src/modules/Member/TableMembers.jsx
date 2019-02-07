import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

//ACTIONS
import {getMembers} from "actions/actionMember.js";

import extendedTablesStyle from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.jsx";

class TableMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  //#region LIFECYCLE
  componentDidMount(){
    this.props.getMembers();
  }

  //#region EVENTS
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }

  //#endregion
  
  render() {
    const { classes } = this.props;
    const { members } = this.props.model;

    const fillButtons = [
      { color: "info", icon: Person },
      { color: "success", icon: Edit },
      { color: "danger", icon: Close }
    ].map((prop, key) => {
      return (
        <Button color={prop.color} className={classes.actionButton} key={key}>
          <prop.icon className={classes.icon} />
        </Button>
      );
    });
    return (
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}><strong>River Valley 2019</strong></h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHead={[
                  "Name",
                  "Grade",
                  "Actions"
                ]}
                tableData={
                  members.map(member =>{
                    return (
                      [member.firstName + " " + member.lastName, member.grade, fillButtons]
                    );
                  })
                }
                customCellClasses={[
                  classes.center,
                  classes.right,
                  classes.right
                ]}
                customClassesForCells={[0, 4, 5]}
                customHeadCellClasses={[
                  classes.center,
                  classes.right,
                  classes.right
                ]}
                customHeadClassesForCells={[0, 4, 5]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

TableMembers.propTypes = {
  getMembers: PropTypes.func.isRequired,
  model: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  model: state.member
})

export default connect(mapStateToProps, {getMembers})(withStyles(extendedTablesStyle)(TableMembers));
