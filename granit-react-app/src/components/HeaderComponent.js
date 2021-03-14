import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Header = ()=>  {

    return(  
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand to="/">Granit</NavbarBrand>
                <Nav className="me-auto ">
                    <NavItem>
                        <Link to="/rooms" className="nav nav-link">Rooms</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/" className="nav nav-link">Journals</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/todo" className="nav nav-link">ToDoList</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;