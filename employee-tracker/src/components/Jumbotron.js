import React from 'react'
import { Link } from 'react-router-dom'

function Jumbotron() {
    return (
    <div className="jumbotron" style={{textAlign: 'center'}}>
        <h1 className="display-4">Employee Tracker</h1>
            <p className="lead">This employee directory was created using React.js</p>
            <hr className="my-4" />
            <p>Now management can view employee information with the click of a button!</p>
    </div>
    )
}

export default Jumbotron