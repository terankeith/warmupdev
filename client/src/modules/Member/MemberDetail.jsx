//#region IMPORT
import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

//ACTIONS
import {saveMember} from "actions/actionMember.js";

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

import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";
//#endregion

class MemberDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            grade: "",
            errors: {}
        };
    }

    //#region LIFECYCLE
    componentWillReceiveProps(nextProps){
        if (nextProps.errors){
            this.setState({errors: nextProps.errors});
        }

        if (nextProps.model.member){
            const editMember = nextProps.model.member;

            this.setState({
                firstName: editMember.firstName, 
                lastName: editMember.lastName,
                grade: editMember.grade
            })
        }
    }
    //#endregion

    //#region EVENTS
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit = e => {
          e.preventDefault();
        
          const { member } = this.props.model;

          member.firstName = this.state.firstName;
          member.lastName = this.state.lastName;
          member.grade = this.state.grade;
          var isNew = member._id ? false : true;

          //allowing user to redirect from within memberAction
          //this method takes me to the memberAction
          this.props.saveMember(member, this.props.history, isNew);

          //this.resetForm();
      }
    //#endregion

    //#region HELPERS
    resetForm(){
        this.setState({
            firstName: "",
            lastName: "",
            grade: ""
        })
    }
    //#endregion
    
    render(){
        const { classes } = this.props;
        const { errors } = this.state;
        const { member } = this.props.model;
        const ddlGrades = [
            {value: "9", text: "Freshman"},
            {value: "10", text: "Sophomore"},
            {value: "11", text: "Junior"},
            {value: "12", text: "Senior"},
            {value: "13", text: "Collegiate"}
        ].map((prop, i) => {
            return (<MenuItem key={i} classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
                }}
                value={prop.value}>
            {prop.text}
            </MenuItem>);
        })

        return <div>
            <Card>
                <CardHeader color="rose" icon>
                    <CardIcon color="rose">
                        <Contacts />
                    </CardIcon>
                    <h4 className={classes.cardIconTitle}><strong>{member._id ? "Edit Member":"Add a Member"}</strong></h4>
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
                                id="firstName"
                                error={errors.firstName ? true : false}
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    type: "text",
                                    value: this.state.firstName,
                                    onChange: this.onChange,
                                    name: "firstName"
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
                                id="lastName"
                                error={errors.lastName ? true : false}
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    type: "text",
                                    value: this.state.lastName,
                                    onChange: this.onChange,
                                    name: "lastName"
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
                                    <InputLabel htmlFor="grade" className={classes.selectLabel}>
                                        Grade Levels
                                    </InputLabel>
                                    <Select MenuProps={{
                                                    className: classes.selectMenu
                                                }}
                                        classes={{
                                                    select: classes.select
                                                }}
                                        value={this.state.grade} onChange={this.onChange} inputProps={{
                                                    name: "grade", 
                                                    id: "grade"
                                                }}>
                                        {ddlGrades}
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

MemberDetail.propTypes = {
    saveMember: PropTypes.func.isRequired,
    model: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    model: state.modelMember,
    errors: state.errors
})

export default connect(mapStateToProps, {saveMember})(withStyles(regularFormsStyle)(withRouter(MemberDetail)));