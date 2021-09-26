import NavBar from "./components/navbar/navbar.component";
import './App.scss';
import Servicos from "./components/servicos/servicos.component";
import Contato from "./components/contato/contato.component";
import Diferenciais from "./components/diferenciais/diferenciais.component";

const App = () => {
  return (
    <>
      <NavBar />
      <Servicos />
      <Diferenciais />
      <Contato />
    </>
  );
}

export default App;
