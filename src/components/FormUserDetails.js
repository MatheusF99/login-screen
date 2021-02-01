import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
class FormUserDetails extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } =this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter user Details"/>
                    <TextField 
                        hintText="enter you first Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField 
                        hintText="enter you last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.LastName}
                    />
                    <br/>
                    <TextField 
                        hintText="enter you Email"
                        floatingLabelText="email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        styles={
                            styles.button
                        }
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles ={
    button:{
        margin: 15
    }
}

export default FormUserDetails
