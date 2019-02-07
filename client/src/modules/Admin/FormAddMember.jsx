import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

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

import {saveMember} from "actions/actionMember.js";

import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";

class FormAddMember extends Component{
    constructor(){
        super();
        this.state = {
            txtFirstName: "",
            txtLastName: "",
            ddlGrade: "",
            errors: {}
        };
    }

    //#region LIFECYCLE
    componentWillReceiveProps(nextProps){
        if (nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }
    //#endregion

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

          //allowing user to redirect from within memberAction
          //this method takes me to the memberAction
          this.props.saveMember(newMember, this.props.history);
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
        const { errors } = this.state;
        return <div>
            <Card>
                <CardHeader color="rose" icon>
                    <CardIcon color="rose">
                        <Contacts />
                    </CardIcon>
                    <h4 className={classes.cardIconTitle}><strong>Add A Member</strong></h4>
                </CardHeader>
                <CardBody>
                    <form onSubmit={this.onSubmit}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={3}>
                                <FormLabel className={classes.labelHorizontal}
                                error={errors.firstName ? true : false}>
                                First Name
                                </FormLabel>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={8}>
                                <CustomInput
                                id="txtFirstName"
                                error={errors.firstName ? true : false}
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
                                <FormLabel className={classes.labelHorizontal}
                                error={errors.lastName ? true : false}>
                                Last Name
                                </FormLabel>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={8}>
                                <CustomInput
                                id="txtLastName"
                                error={errors.lastName ? true : false}
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
    model: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    model: state.member,
    errors: state.errors
})

export default connect(mapStateToProps, {saveMember})(withStyles(regularFormsStyle)(withRouter(FormAddMember)));