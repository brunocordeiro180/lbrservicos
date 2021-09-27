import { Row, Col, Form, Button } from 'react-bootstrap'
import React from 'react';
import emailjs from 'emailjs-com';
import './contato.styles.scss';
import { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Contato = () => {

    const [name, setName] = useState("");
    const [emailFrom, setEmailFrom] = useState("");
    const [message, setMessage] = useState("");
    const MySwal = withReactContent(Swal)

    const submit = async (e) => {
        e.preventDefault();
        console.log(process.env);
        if (name && emailFrom && message) {
            const serviceId = process.env.REACT_APP_SERVICE_ID;
            const templateId = process.env.REACT_APP_TEMPLATE_ID;
            const userId = process.env.REACT_APP_USER_ID;
            const templateParams = {
                name,
                emailFrom,
                email: process.env.REACT_APP_CONTACT_EMAIL,
                message
            };

            await emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmailFrom('');
            setMessage('');
            fireSwal();
        } else {
            MySwal.fire({
                icon: 'error',
                title: 'Preencha todos os campos!',
            })
        }
    }

    const fireSwal = () => {
        MySwal.fire({
            icon: 'success',
            title: 'E-mail enviado com sucesso',
        })
    }

    return (
        <div id="contato" className="contato-card">
            <h4 className="nossos-servicos__title">
                <strong>FALE CONOSCO</strong>
            </h4>
            <div className="contato">
                <div className="contato__form">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Nome completo</Form.Label>
                                <Form.Control type="text" placeholder="Digite seu nome" value={name} onChange={e => setName(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" placeholder="E-mail" value={emailFrom} onChange={e => setEmailFrom(e.target.value)} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Serviço</Form.Label>
                                <Form.Select defaultValue="Serviço...">
                                    <option value={null}></option>
                                    <option>Segurança</option>
                                    <option>Portaria</option>
                                    <option>Jardinagem</option>
                                    <option>Limpeza</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Mensagem</Form.Label>
                                <Form.Control as="textarea" rows={6} value={message} onChange={e => setMessage(e.target.value)} />
                            </Form.Group>
                        </Row>
                        <Button type="submit" variant="success" onClick={submit}  >Enviar</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Contato;