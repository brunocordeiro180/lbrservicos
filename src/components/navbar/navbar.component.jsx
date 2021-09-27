import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './navbar.styles.scss';

const Menu = () => {
    return (
        <Navbar className="d-flex mynav" bg="dark" variant="dark" expand="lg">
            <Container className="myNav__container">
                <Navbar.Brand className="mynav__link" href="#home">Grupo LBR Serviços</Navbar.Brand>
                <Navbar.Toggle  />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className=" justify-content-end me-auto">
                        <Nav.Link className="mynav__link" href="#root">HOME</Nav.Link>
                        <Nav.Link className="mynav__link" href="#servicos">SERVIÇOS</Nav.Link>
                        <Nav.Link className="mynav__link" href="#diferenciais">DIFERENCIAIS</Nav.Link>
                        <Nav.Link className="mynav__link" href="#contato">CONTATO</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu;