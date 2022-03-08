import React from 'react';
import './Layout.css'
import { Route, Routes} from "react-router-dom";
import {Homepage} from "../Pages/Homepage";
import {About} from "../Pages/About";
import {Navbar, Container, Nav} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavLink from "react-bootstrap/NavLink";
import Contacts from "../Pages/Contacts";


const Layout = () => {
    return (
    <>
       <Navbar  expand="md" bg="dark" variant="dark">
           <Container>
               <Navbar.Brand href="/">
                   <img height={60}
                        width={60}
                        src="https://cdn.dribbble.com/users/3421553/screenshots/9713127/anon2_4x.jpg" alt="logo"
                   className="d-inline-block align-top"/>
               </Navbar.Brand>

               <NavbarToggle aria-controls="responsive-navbar-nav"/>
               <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav>
               <NavLink href="/">Home</NavLink>
               <NavLink href="/about">About us</NavLink>
               <NavLink href="/contacts">Contacts</NavLink>
                 </Nav>
               </Navbar.Collapse>
           </Container>
       </Navbar>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
    </>


    );
};

export default Layout;