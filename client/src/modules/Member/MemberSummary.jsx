//#region IMPORT
import React, {Component} from "react";
import PropTypes from "prop-types";

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


import extendedTablesStyle from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.jsx";
//#endregion

class MemberSummary extends Component {
  constructor(props){
    super(props);
    this.state = {
      members: []
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.members){
      this.setState({
        members: nextProps.members
      })
    }
  }
  render() {
    const { classes } = this.props;
    const { members } = this.props;

    const fillButtons = (memberID) => [
      { color: "info", icon: Person },
      { color: "success", icon: Edit },
      { color: "danger", icon: Close }
    ].map((prop, key) => {
      switch(prop.color){
        case "info":
        return (
          <Button color={prop.color} className={classes.actionButton} key={key}>
            <prop.icon className={classes.icon} />
          </Button>
        );
        case "success":
        return (
          <Button color={prop.color} className={classes.actionButton} key={key} onClick={this.props.onEditClick.bind(this, memberID)}>
            <prop.icon className={classes.icon} />
          </Button>
        );
        case "danger":
        return (
          <Button color={prop.color} className={classes.actionButton} key={key} onClick={this.props.onDeleteClick.bind(this, memberID)}>
            <prop.icon className={classes.icon} />
          </Button>
        );
        default:
        return (
          "No Button"
        );
      }
    });
    
    return (
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}><strong>River Valley 2019 Winter</strong></h4>
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
                    [member.firstName + " " + member.lastName, member.grade, fillButtons(member._id)]
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

MemberSummary.propTypes = {
  members: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired
}

export default (withStyles(extendedTablesStyle)(MemberSummary));
