import React from 'react';
import { BiLineChartDown, BiHourglass } from 'react-icons/bi';
import { HiLightningBolt } from 'react-icons/hi';
import { GiInjustice } from 'react-icons/gi'
import { Row, Col } from 'react-bootstrap'
import './diferenciais.styles.scss';

const Diferenciais = () => {
    return (
        <div id="diferenciais" className="diferenciais">
            <h4 className="diferenciais__title">
                <strong>NOSSOS DIFERENCIAS</strong>
            </h4>
            <Row className="diferenciais__row">
                <Col lg={2} md={3} sm={6} xs={12} className="diferenciais__column">
                    <BiLineChartDown size={120} />
                    <span>Menos Gasto</span>
                </Col>
                <Col lg={2} md={3} sm={6} xs={12} className="diferenciais__column">
                    <BiHourglass size={120} />
                    <span>Mais tempo livre</span>
                </Col>
                <Col lg={2} md={3} sm={6} xs={12} className="diferenciais__column">
                    <HiLightningBolt size={120} />
                    <span>Alta produtividade</span>
                </Col>
                <Col lg={2} md={3} sm={6} xs={12} className="diferenciais__column">
                    <GiInjustice size={120} />
                    <span>Redução de horas trabalhistas</span>
                </Col>
            </Row>
        </div>
    )
}

export default Diferenciais;