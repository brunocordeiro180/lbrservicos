import { Row, Col } from 'react-bootstrap'
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
        <div id="contato">
            <h4 className="nossos-servicos__title">
                <strong>FALE CONOSCO</strong>
            </h4>
            <Row className="contato">
                <Col lg={6} md={6} sm={12} xs={12}>
                    <div className="contato__text">
                        O Grupo LBR oferece uma consultoria GRATUITA de redução de custos de mão de obra para sua EMPRESA ou CONDOMÍNIO. Gostou? Então solicite agora mesmo uma visita!*
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <div className="contato__form">
                        <form>
                            <label for="fname">Nome completo</label>
                            <input type="text" id="fname" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Seu nome.." />

                            <label for="lname">Email</label>
                            <input type="email" id="lname" name="emailFrom" value={emailFrom} onChange={e => setEmailFrom(e.target.value)} placeholder="Sobrenome.." />

                            <label for="subject">Assunto</label>
                            <textarea id="subject" name="subject" value={message} onChange={e => setMessage(e.target.value)} placeholder="" style={{ height: 200 }}></textarea>

                            <input type="submit" onClick={submit} value="Enviar" />
                        </form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Contato;