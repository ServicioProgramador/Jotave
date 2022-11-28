import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/Products/ItemListContainer";
import Carousel from "./components/Carousel/Carousel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Carousel />
      <Routes>
        <Route path="/todos" element={<ItemListContainer />} />
        <Route path="/categoria/:cat" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
