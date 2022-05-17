import React from 'react'
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Add from './Add'
import Edit from './Edit'
import View from './View'


const Navbar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">

                <div class='container-fluid'>
                    <Link class="navbar-brand" to="/">React </Link>


                    <div class="collapse navbar-collapse" >
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/home">Home </Link>
                            </li>
                            <li class="nav-item active">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item active">
                                <Link class="nav-link" to="/contact">Contact</Link>
                            </li>


                        </ul>

                    </div>
                    <Link className='btn btn-outline-light' to="/add"> Add User</Link>
                </div>


            </nav>








        </div>
    )
}

export default Navbar