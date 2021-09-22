import NavBar from "./components/navbar.component";
import { Carousel } from "antd";
import './App.scss';

const App = () => {
  return (
    <>
      <NavBar />
      <Carousel autoplay>
        <div>
          <h3 className="carouselExample">1</h3>
        </div>
        <div>
          <h3 className="carouselExample">2</h3>
        </div>
        <div>
          <h3 className="carouselExample">3</h3>
        </div>
        <div>
          <h3 className="carouselExample">4</h3>
        </div>
      </Carousel>
    </>
  );
}

export default App;
