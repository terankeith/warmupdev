import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

//ACTIONS
import { getMembers, deleteMember, getMember } from "actions/actionMember.js";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import MemberDetail from "modules/Member/MemberDetail.jsx";
import MemberSummary from "modules/Member/MemberSummary.jsx";
import Spinner from "components/Spinner/Spinner.jsx";


import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class MemberView extends Component {
    constructor(props){
        super(props);

        //this.onSubmit = this.onSubmit.bind(this);
        //this.updateMemberState = this.updateMemberState.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    //#region LIFECYCLE
    componentDidMount(){
        this.props.getMembers();
      }
      
    //#endregion

    //#region EVENTS

    onDeleteClick(id){
        this.props.deleteMember(id);
      }
    
      onEditClick(id){
        this.props.getMember(id);
      }
    //#endregion
    

  render() {
    //const { classes } = this.props;
    const {member, members, loading} = this.props.model;
    const { errors } = this.props;
    const { alert } = this.props;
    let membersContent;

    if (members === null || loading){
        membersContent = <Spinner/>
    } else {
        membersContent = <MemberSummary 
                            members={members}
                            onDeleteClick={this.onDeleteClick}
                            onEditClick={this.onEditClick}
                        />
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
                {membersContent}
            </GridItem>
        </GridContainer>
      </div>
    );
  }
}

MemberView.propTypes = {
    deleteMember: PropTypes.func.isRequired,
    getMembers: PropTypes.func.isRequired,
    getMember: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    model: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    alert: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    model: state.modelMember,
    errors: state.errors,
    alert: state.alert
})

export default connect(mapStateToProps, {getMembers, deleteMember, getMember})(withStyles(dashboardStyle)(MemberView));
