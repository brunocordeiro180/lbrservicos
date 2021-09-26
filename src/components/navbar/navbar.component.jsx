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
                        <Nav.Link className="mynav__link" href="/">Home</Nav.Link>
                        <Nav.Link className="mynav__link" href="#servicos">Serviços</Nav.Link>
                        <Nav.Link className="mynav__link" href="#diferenciais">Diferenciais</Nav.Link>
                        <Nav.Link className="mynav__link" href="#contato">Contato</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu;