import React, { Component } from 'react'
import FormPersonalDetails from './FormPersonalDetails'

import FormUSerDetails from './FormUserDetails'
import Confirm from './Confirm'
import Sucess from './Sucess'

class UserForm extends Component {

    state={
        step: 1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:'',

    }

    //procede to next step
    nextStep = () =>{
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }
    //procede to back step
    prevStep = () =>{
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }


    //handle field change
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {
        const { step } = this.state
        const { firstName, lastName, email, occupation, city, bio } = this.state

        const values = {
            firstName, 
            lastName, 
            email, 
            occupation, 
            city, 
            bio
        }
        
        switch(step){
            case 1:
                return(
                    <FormUSerDetails 
                        nextStep = {this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Confirm
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Sucess
                    
                    />
                )
            default:
                return <h1>hello world</h1>
        }
    }
}

export default UserForm
