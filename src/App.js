import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/Products/ItemListContainer";
import Carousel from "./components/Carousel/Carousel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import SliderDetailContainer from "./components/SliderDetailContainer/SliderDetailContainer";
import NotFound from "./components/NotFound/NotFound";
import ComponentGeneral from "./components/ComponentGeneral/ComponentGeneral";
import SliderViewedDetailContainer from "./components/SliderViewedDetailContainer/SliderViewedDetailContainer";
import Whatsap from "./components/Whatsap/Whatsap";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Carousel />
      <Routes>
        <Route path="/" element={<ComponentGeneral />} />
        <Route path="/SliderDetail/:id" element={<SliderDetailContainer />} />
        <Route
          path="/SliderViewedDetail/:id"
          element={<SliderViewedDetailContainer />}
        />
        <Route path="/todos" element={<ItemListContainer />} />
        <Route path="/categoria/:cat" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Whatsap />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
