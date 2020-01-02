import React, { Component } from 'react'


export default class NavigationContainer extends Component { 
    constructor() {
        super();

        
    }

    

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <button>Home</button>
                <button>About</button>
                <button>Contact</button>
                <button>Bog</button>
                {false ? <button>Add Blog</button> : null}
            </div>
        )
    }

}