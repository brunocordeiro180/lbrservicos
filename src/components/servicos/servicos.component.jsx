import React from 'react';
import './servicos.styles.scss';
import seguranca from '../../assets/seguranca.jpg';
import portaria from '../../assets/portaria.jpg';
import limpeza from '../../assets/limpeza.jpg';
import jardinagem from '../../assets/jardinagem.jpg';
import { Row, Col } from 'react-bootstrap'


const Servicos = () => {
    return (
        <div id="servicos" className="nossos-servicos">
            <h4 className="nossos-servicos__title">
                <strong>NOSSOS SERVIÇOS</strong>
            </h4>
            <Row className="nossos-servicos__row">
                <Col lg={3} md={3} sm={6} xs={12}>
                    <div className="servicos-grid__card">
                        <img className="servicos-grid__card--img" alt="seguranca" src={seguranca} />
                        <span className="servicos-grid__card--title">Segurança</span>
                        <p className="servicos-grid__card--text"></p>
                    </div>
                </Col>
                <Col lg={3} md={3} sm={6} xs={12}>
                    <div className="servicos-grid__card">
                        <img className="servicos-grid__card--img" alt="portaria" src={portaria} />
                        <span className="servicos-grid__card--title">Portaria</span>
                        <p className="servicos-grid__card--text"></p>
                    </div>
                </Col>
                <Col lg={3} md={3} sm={6} xs={12}>
                    <div className="servicos-grid__card">
                        <img className="servicos-grid__card--img" alt="limpeza" src={limpeza} />
                        <span className="servicos-grid__card--title">Limpeza</span>
                        <p className="servicos-grid__card--text"></p>
                    </div>
                </Col>
                <Col lg={3} md={3} sm={6} xs={12}>
                    <div className="servicos-grid__card">
                        <img className="servicos-grid__card--img" alt="jardinagem" src={jardinagem} />
                        <span className="servicos-grid__card--title">Jardinagem</span>
                        <p className="servicos-grid__card--text"></p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Servicos;