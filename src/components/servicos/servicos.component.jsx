import React from 'react';
import './servicos.styles.scss';
import seguranca from '../../assets/seguranca.jpg';
import portaria from '../../assets/portaria.jpg';
import limpeza from '../../assets/limpeza.jpg';
import jardinagem from '../../assets/jardinagem.jpg';
import { Col, Row } from 'antd';


const Servicos = () => {
    return (
        <div className="nossos-servicos">
            <h2 className="nossos-servicos__title">
                <strong>NOSSOS SERVIÇOS</strong>
            </h2>
            <Row className="nossos-servicos__row">
                <Col lg={6} md={6} sm={12} xs={24}>
                    <div className="servicos-grid__card">
                        <img className="servicos-grid__card--img" alt="seguranca" src={seguranca} />
                        <span className="servicos-grid__card--title">Segurança</span>
                        <p className="servicos-grid__card--text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae expedita maiores unde ea soluta atque repudiandae, eligendi velit id autem fuga eveniet et, ipsum adipisci sunt culpa quisquam? At, modi.</p>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={24}>
                    <div className="servicos-grid__card">
                        <img className="servicos-grid__card--img" alt="portaria" src={portaria} />
                        <span className="servicos-grid__card--title">Portaria</span>
                        <p className="servicos-grid__card--text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae expedita maiores unde ea soluta atque repudiandae, eligendi velit id autem fuga eveniet et, ipsum adipisci sunt culpa quisquam? At, modi.</p>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={24}>
                    <div className="servicos-grid__card">
                        <img className="servicos-grid__card--img" alt="limpeza" src={limpeza} />
                        <span className="servicos-grid__card--title">Limpeza</span>
                        <p className="servicos-grid__card--text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae expedita maiores unde ea soluta atque repudiandae, eligendi velit id autem fuga eveniet et, ipsum adipisci sunt culpa quisquam? At, modi.</p>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={24}>
                    <div className="servicos-grid__card">
                        <img className="servicos-grid__card--img" alt="jardinagem" src={jardinagem} />
                        <span className="servicos-grid__card--title">Jardinagem</span>
                        <p className="servicos-grid__card--text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae expedita maiores unde ea soluta atque repudiandae, eligendi velit id autem fuga eveniet et, ipsum adipisci sunt culpa quisquam? At, modi.</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Servicos;