import { Col, Row } from 'antd';
import React from 'react';
import './contato.styles.scss';

const Contato = () => {
    return (
        <>
            <h2 className="nossos-servicos__title">
                <strong>FALE CONOSCO</strong>
            </h2>
            <Row className="contato">
                <Col lg={12} md={12} sm={24} xs={24}>
                    <div className="contato__text">
                        O Grupo LBR oferece uma consultoria GRATUITA de redução de custos de mão de obra para sua EMPRESA ou CONDOMÍNIO. Gostou? Então solicite agora mesmo uma visita!*
                    </div>
                </Col>
                <Col lg={12} md={12} sm={24} xs={24}>
                    <div className="contato__form">
                        <form>
                            <label for="fname">Nome</label>
                            <input type="text" id="fname" name="firstname" placeholder="Seu nome.." />

                            <label for="lname">Sobrenome</label>
                            <input type="text" id="lname" name="lastname" placeholder="Sobrenome.." />

                            <label for="subject">Assunto</label>
                            <textarea id="subject" name="subject" placeholder="" style={{ height: 200 }}></textarea>

                            <input type="submit" value="Enviar" />
                        </form>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Contato;