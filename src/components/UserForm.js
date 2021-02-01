import React, { Component } from 'react'

import FormUSerDetails from './FormUserDetails'

class UserForm extends Component {

    state={
        step: 1,
        firstName:'',
        lastName:'',
        email:'',
        ocupation:'',
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
    handleChange = input = e => {
        this.setState({[input]: e.target.value})
    }

    render() {
        const { step } = this.state
        const { firstName, lastName, email, ocupation, city, bio } = this.state

        const values = {
            firstName, 
            lastName, 
            email, 
            ocupation, 
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
                return <h1>FormPersonalDetails</h1>
            case 3:
                return <h1>Confirm</h1>
            case 4:
                return <h1>Sucess</h1>
        }
    }
}

export default UserForm