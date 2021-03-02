import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from "react";
import {useRouter} from "next/router";


function TopBar({properties}){
    let router= useRouter();
    const pages = [{title:"About Us", path:"/about"},
        {title:"Contact",path: "/contact"},
        {title:"Til udlejere",path:"/tiludlejere"}
    ]
    return  (<Navbar sticky={"top"} expand={"md"} bg={"white"}>
        <Navbar.Brand href={"/"}>
            <img src="/images/boligformidlingen.png" style={{margin:-8}} width={210} height={63} alt="Boligformidlingen" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={"basic-navbar-nav"}/>
        <Navbar.Collapse>
            <Nav >
                <NavDropdown title={"Homes for Rent"}>
                    {properties?.map((property)=> {
                        if (property.visible && !property.rented && property.showsubpage) return (
                            <NavDropdown.Item eventkey={property.id} key={property.id} href={"/home/" + property.id}
                                              active={router.pathname === "/home/" + property.id}>
                                {property.Title}
                            </NavDropdown.Item>
                        )
                    }
                    )}

                </NavDropdown>
                {pages.map(page=>
                    <Nav.Link key={page.path} href={page.path} active={router.pathname===page.path}>
                        {page.title}
                    </Nav.Link>
                )}
            </Nav>
        </Navbar.Collapse>



    </Navbar>)

}

export default TopBar;