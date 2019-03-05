import React from "react";
// react component used to create sweet alerts
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// ICONS
import AddBox from "@material-ui/icons/AddBox";

// core components
import Button from "components/CustomButtons/Button.jsx";

import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";

class MemberAddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alert: null
        };

        this.hideAlert = this.hideAlert.bind(this);
        this.inputConfirmAlert = this.inputConfirmAlert.bind(this);
        this.inputConfirmAlertNext = this.inputConfirmAlertNext.bind(this);
    }

    // #region EVENTS
    inputAlert() {
        this.setState({
            alert: (
                <SweetAlert
                    input
                    showCancel
                    style={{ display: "block", marginTop: "-100px" }}
                    title="Input something"
                    onConfirm={e => this.inputConfirmAlert(e)}
                    onCancel={() => this.hideAlert()}
                    confirmBtnCssClass={
                        this.props.classes.button +
                        " " +
                        this.props.classes.info
                    }
                    cancelBtnCssClass={
                        this.props.classes.button +
                        " " +
                        this.props.classes.danger
                    }
                />
            )
        });
    }

    inputConfirmAlert(e) {
        this.setState({ alert: e });
        setTimeout(this.inputConfirmAlertNext, 200);
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    inputConfirmAlertNext() {
        const inputValue = this.state.alert;
        this.setState({
            alert: (
                <SweetAlert
                    style={{ display: "block", marginTop: "-100px" }}
                    onConfirm={() => this.hideAlert()}
                    onCancel={() => this.hideAlert()}
                    confirmBtnCssClass={
                        this.props.classes.button +
                        " " +
                        this.props.classes.info
                    }
                    title={
                        <p>
                            You entered: <b>{inputValue}</b>
                        </p>
                    }
                />
            )
        });
    }

    // #endregion

    render() {
        const { classes } = this.props;
        var divStyle = {
            display: "inline-block"
        };
        return (
            <div style={divStyle}>
                {this.state.alert}
                <Button
                    color="success"
                    simple
                    onClick={this.inputAlert.bind(this)}
                >
                    <AddBox />
                </Button>
            </div>
        );
    }
}

export default withStyles(sweetAlertStyle)(MemberAddModal);
