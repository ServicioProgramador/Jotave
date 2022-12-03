import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./components/NotFound/NotFound";
import { Nosotros } from "./components/Nosotros/Nosotros"
import { Home } from "./components/Home/Home"
import { Footer } from "./components/Footer/Footer"
import { BrowserRouter , Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar /> 
       
       <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/todos"  element={<ItemListContainer />}/>
        <Route path="/categoria/:cat"  element={<ItemListContainer />}/>
        <Route path="/detail/:id"  element={<ItemDetailContainer />}/>
        <Route path="/nosotros"  element={<Nosotros />}/>
        <Route path="*"  element={<NotFound />}/>





       </Routes>
       
       
               <Footer />
       


       
        
      </BrowserRouter>
    </>
  );
}

export default App;
