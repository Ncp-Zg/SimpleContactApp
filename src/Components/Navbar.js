import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-2 navbar-dark bg-dark">
            <Link to="/" className="navbar-brand ml-5">
                React Redux Contact App
            </Link>
        </nav>
    )
}

export default Navbar
