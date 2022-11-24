import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import ItemListContainer from "./components/Products/ItemListContainer";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <>
      <NavBar />
      <Carousel/>
      <ItemListContainer greeting="Bienvenidos a Jotave"/>
      <Footer/>    
    </>
  );
}

export default App;
