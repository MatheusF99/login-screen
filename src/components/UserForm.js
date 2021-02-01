import React, { Component } from 'react'

export class UserForm extends Component {

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
        return (
            <div>
                
            </div>
        )
    }
}

export default UserForm
