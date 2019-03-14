// #region IMPORT
import React, { Component } from "react";
import PropTypes from "prop-types";

//MATERIAL UI
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";

//COMPONENTS
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";
// #endregion
class Factorial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtNum: "",
            output: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // #region METHODS
    factorial(num) {
        for (var i = num - 1; i > num - num; i--) {
            num = num * i;
        }

        this.setState({
            output: num
        });
    }
    // #endregion

    // #region EVENTS
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        this.factorial(this.state.txtNum);
    }
    // #endregion

    render() {
        const { classes } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={3}>
                            <FormLabel className={classes.labelHorizontal}>
                                Enter Number
                            </FormLabel>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <CustomInput
                                id="txtNum"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    type: "text",
                                    value: this.state.txtNum,
                                    onChange: this.onChange,
                                    name: "txtNum"
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1>{this.state.output ? this.state.output : 0}</h1>
                        </GridItem>
                    </GridContainer>
                    <GridContainer justify="flex-end">
                        <GridItem xs={12} sm={12} md={9}>
                            <Button color="rose" type="submit">
                                Factorialize!
                            </Button>
                        </GridItem>
                    </GridContainer>
                </form>
            </div>
        );
    }
}

Factorial.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(regularFormsStyle)(Factorial);
