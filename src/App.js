import ItemListContainer from "./components/Products/ItemListContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Nosotros } from "./components/Nosotros/Nosotros";
import { Home } from './components/Home/Home'
import NavBar from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";


function App() {
  return (
    <>
    <BrowserRouter>
         <NavBar />   
          
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/todos" element={<ItemListContainer/>}/>
          <Route path="/categoria/:cat" element={<ItemListContainer/>}/>
          <Route path="/detail/:id" element={<ItemListContainer/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
           
        </Routes>
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
