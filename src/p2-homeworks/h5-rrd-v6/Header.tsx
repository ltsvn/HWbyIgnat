import React, {FC, useState} from 'react'
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import s from './Header.module.css'
import {Link} from "react-router-dom";
import {Nav, Navbar, NavLink} from "react-bootstrap";


const Header = () => {

    return (
        <Navbar collapseOnSelect expand="" bg='dark' variant='dark'>
            <Navbar.Toggle aria-controls='navbarScroll' data-bs-target='#navbarScroll' />
            <Navbar.Collapse id='navbarScroll'>
            <Nav>
                <NavLink eventKey='1' as={Link} to='/pre-junior' className={`${s.navWord} ${s.active}`}>PreJunior</NavLink>---
                <NavLink eventKey='2' as={Link} to='/junior' className={`${s.navWord} ${s.active}`}>Junior</NavLink>---
                <NavLink eventKey='3' as={Link} to='/junior-plus' className={`${s.navWord} ${s.active}`}>JuniorPlus</NavLink>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
