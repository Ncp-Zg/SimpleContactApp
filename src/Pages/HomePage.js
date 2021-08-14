import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 d-flex flex-row-reverse">
                    <Link to="/add" className="btn btn-outline-dark">Add Contact</Link>
                </div>
                <div className="col-md-6 mx-auto">
                   <h1>Welcome to React Contact App</h1> 
                </div>
            </div>
        </div>
    )
}

export default HomePage
