import './App.scss';
import Servicos from "./components/servicos/servicos.component";
import Contato from "./components/contato/contato.component";
import Diferenciais from "./components/diferenciais/diferenciais.component";
import { Carousel } from "react-bootstrap";
import Menu from './components/navbar/navbar.component';

const App = () => {
  return (
    <>
      <Menu />
      <Carousel>
        <Carousel.Item>
          <h3 style={contentStyle}>1</h3>
        </Carousel.Item>
        <Carousel.Item>
          <h3 style={contentStyle}>2</h3>
        </Carousel.Item>
        <Carousel.Item>
          <h3 style={contentStyle}>3</h3>
        </Carousel.Item>
      </Carousel>
      <Servicos />
      <Diferenciais />
      <Contato />
    </>
  );
}

const contentStyle = {
  height: '460px',
  color: '#fff',
  lineHeight: '460px',
  textAlign: 'center',
  background: '#364d79',
};

export default App;
