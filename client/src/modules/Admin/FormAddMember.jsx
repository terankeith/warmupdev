import React, {Component} from "react";
import PropTypes from "prop-types";
//COMPONENTS MATERIAL UI
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

//ICONS
import Contacts from "@material-ui/icons/Contacts";

//COMPONENTS
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";

//REDUX
import {connect} from "react-redux";
import {saveMember} from "actions/memberAction.js";

import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";

class FormAddMember extends Component{
    constructor(){
        super();
        this.state = {
            txtFirstName: "",
            txtLastName: "",
            ddlGrade: ""
        };
    }

    //#region EVENTS
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit = e => {
          e.preventDefault();

          const newMember = {
              firstName: this.state.txtFirstName,
              lastName: this.state.txtLastName,
              grade: this.state.ddlGrade
          }

          this.props.saveMember(newMember);
      }
    //#endregion

    //#region HELPERS
    resetForm(){
        this.setState({
            txtFirstName: "",
            txtLastName: "",
            ddlGrade: ""
        })
    }
    //#endregion
    
    render(){
        const { classes } = this.props;
        const { member } = this.props.memberAdded;
        return <div>
            <Card>
                <CardHeader color="rose" icon>
                    <CardIcon color="rose">
                        <Contacts />
                    </CardIcon>
                    <h4 className={classes.cardIconTitle}>{member.firstName ? member.firstName: "Add a Member" }</h4>
                </CardHeader>
                <CardBody>
                    <form onSubmit={this.onSubmit}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={3}>
                                <FormLabel className={classes.labelHorizontal}>
                                First Name
                                </FormLabel>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={8}>
                                <CustomInput
                                id="txtFirstName"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    type: "text",
                                    value: this.state.txtFirstName,
                                    onChange: this.onChange,
                                    name: "txtFirstName"
                                }}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={3}>
                                <FormLabel className={classes.labelHorizontal}>
                                Last Name
                                </FormLabel>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={8}>
                                <CustomInput
                                id="txtLastName"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    type: "text",
                                    value: this.state.txtLastName,
                                    onChange: this.onChange,
                                    name: "txtLastName"
                                }}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={3}>
                                <FormLabel className={classes.labelHorizontal}>
                                Grade
                                </FormLabel>
                            </GridItem>
                            <GridItem xs={12} sm={4} md={4} lg={8}>
                                <FormControl fullWidth className={classes.selectFormControl}>
                                    <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                        Grade
                                    </InputLabel>
                                    <Select MenuProps={{
                                                    className: classes.selectMenu
                                                }}
                                        classes={{
                                                    select: classes.select
                                                }}
                                        value={this.state.ddlGrade} onChange={this.onChange} inputProps={{
                                                    name: "ddlGrade", //should equal the state value???
                                                    id: "simple-select"
                                                }}>
                                        <MenuItem disabled classes={{
                                                    root: classes.selectMenuItem
                                                    }}>
                                        Grade Levels
                                        </MenuItem>
                                        <MenuItem classes={{
                                                    root: classes.selectMenuItem,
                                                    selected: classes.selectMenuItemSelected
                                                    }}
                                            value="9">
                                        Freshman
                                        </MenuItem>
                                        <MenuItem classes={{
                                                    root: classes.selectMenuItem,
                                                    selected: classes.selectMenuItemSelected
                                                    }}
                                            value="10">
                                        Sophomore
                                        </MenuItem>
                                        <MenuItem classes={{
                                                    root: classes.selectMenuItem,
                                                    selected: classes.selectMenuItemSelected
                                                    }}
                                            value="11">
                                        Junior
                                        </MenuItem>
                                        <MenuItem classes={{
                                                    root: classes.selectMenuItem,
                                                    selected: classes.selectMenuItemSelected
                                                    }}
                                            value="12">
                                        Senior
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify="flex-end">
                            <GridItem xs={12} sm={12} md={9}>
                                <Button color="rose" type="submit">Submit</Button>
                            </GridItem>
                        </GridContainer>
                    </form>
                </CardBody>
            </Card>
        </div>
    }
}

FormAddMember.propTypes = {
    saveMember: PropTypes.func.isRequired,
    memberAdded: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    memberAdded: state.memberAdded
})

export default connect(mapStateToProps, {saveMember})(withStyles(regularFormsStyle)(FormAddMember));