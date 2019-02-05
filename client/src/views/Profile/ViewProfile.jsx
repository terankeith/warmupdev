import React, {Component} from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
//import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
//import { VectorMap } from "react-jvectormap";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import FormAddMember from "modules/Admin/FormAddMember.jsx";


import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class ViewProfile extends Component {
  render() {
    //const { classes } = this.props;
    return (
      <div>
        <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
                <FormAddMember/>
            </GridItem>
        </GridContainer>
      </div>
    );
  }
}

ViewProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(ViewProfile);
