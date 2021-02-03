import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from "react";


function TopBar({properties}){
    return  (<Navbar sticky={"top"} expand={"md"} bg={"white"}>
            <Navbar.Brand href={"/"}>
                <img src="/images/boligformidlingen.png" style={{margin:-8}} width={210} height={63} alt="Boligformidlingen" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={"basic-navbar-nav"}/>
            <Navbar.Collapse>
                <Nav>
                    <NavDropdown title={"Homes for Rent"}>
                        {properties?.map((property)=>
                            <NavDropdown.Item key={property.id} href={"/home/" + property.id}>
                                {property.Title}
                            </NavDropdown.Item>
                        )}

                    </NavDropdown>
                    <Nav.Link href={"/about"}>
                        About Us
                    </Nav.Link>
                    <Nav.Link href={"/contact"}>
                        Contact
                    </Nav.Link>
                    <Nav.Link href={"/tiludlejere"}>
                        Til Udlejere
                    </Nav.Link>

                </Nav>
            </Navbar.Collapse>



        </Navbar>)

}

export default TopBar;