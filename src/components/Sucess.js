import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

class Sucess extends Component {

    continue = e =>{
        e.preventDefault();

        this.props.nextStep();
    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Sucess"/>
                    <h1>Thank for you submission</h1>
                    <p>You get an email with further instructions</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Sucess

