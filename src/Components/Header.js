import React, {Component} from "react";
import {Link} from 'react-router-dom';
class Header extends React.Component {
    render(){
        return (
            <div>
                <header id="mainhead">
        <div class="container">
            <Link to='/' id="logo">Shavkat Metekov</Link>
            <nav> 
                <Link to='/' >About</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/contact'>Contact</Link>
            </nav> 
        </div>
    </header>
            </div>
        )
    }
    };
    export default Header