import React, { Component } from 'react';
import axios from "axios"

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            ererrorText: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        axios.post('https://api.devcamp.space/sessions', 
        {
            client: {
                email: this.state.email,
                password: this.state.password
            }
        },
        { withCredentials: true }
        ).then(response => {
            if (response.data.status === 'created') {
                console.log('you can come in...')
                this.props.handleSuccessfulAuth()
            } else {
                this.setState({
                    errorText: "Wrong email or password"
                })
                this.props.handleUnSuccessfulAuth()
            }
        }).catch(error => {
            console.log('some error occured', error)
            this.setState({
                errorText: "an error occured"
            })
        })
        
        event.preventDefault()
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ''
        })
    }

    render() {
        return (
            <div>
                <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>
                <h2>{this.state.errorText}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Your email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Your Password"
                        value={this.state.password}
                        onChange={this.handleChange}/>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
                
            </div>
        )
    }
}