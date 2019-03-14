// #region IMPORT
import React, { Component } from "react";
import PropTypes from "prop-types";

//MATERIAL UI
import withStyles from "@material-ui/core/styles/withStyles";

//COMPONENTS
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";
// #endregion
class FizzBuzz extends Component {
    constructor(props) {
        super(props);
    }

    fizzBuzz() {
        let fizzlebizzle = [];
        for (var i = 1; i <= 100; i++) {
            fizzlebizzle.push(i);
        }

        return fizzlebizzle;
    }

    render() {
        const output = this.fizzBuzz().map((prop, i) => {
            var fizzlebizzle = "";
            fizzlebizzle += !(prop % 3) ? "Fizz" : "";
            fizzlebizzle += !(prop % 5) ? "Buzz" : "";
            return <GridItem key={i}>{fizzlebizzle || prop}</GridItem>;
        });

        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <h1>{output}</h1>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

FizzBuzz.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(regularFormsStyle)(FizzBuzz);
