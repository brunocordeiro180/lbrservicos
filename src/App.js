import './App.scss';
import Servicos from "./components/servicos/servicos.component";
import Contato from "./components/contato/contato.component";
import Diferenciais from "./components/diferenciais/diferenciais.component";
import Menu from './components/navbar/navbar.component';
import SobreNos from './components/sobre-nos/sobre-nos.components';
import Banner from './components/banner/banner.component';

const App = () => {
  return (
    <>
      <Menu />
      <Banner />
      <SobreNos />
      <Servicos />
      <Diferenciais />
      <Contato />
    </>
  );
}

export default App;
