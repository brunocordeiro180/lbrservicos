import React from 'react';
import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';
import './navbar.styles.scss';

const Menu = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      
        <div>

        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>GRUPO LBR SERVIÇOS</Modal.Title>
                </Modal.Header>
                <Modal.Body>Olá, Prezado/a Candidato/a! 
                    <p/> Envie seu currículo para contato@grupolbrservicos.com.br 
                    <p/> Agradecemos o seu interesse em fazer parte do Grupo LBR Serviços.</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose} bg="dark" >
                    Fechar
                    </Button>
                </Modal.Footer>
                </Modal>
      
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
                        <Nav.Link className="mynav__link" onClick={handleShow}>TRABALHE CONOSCO</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default Menu;