import './styles/app.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export function App() {

   const texto = "Próximamente Nuevos Estrenos";

   return (
      
     <div>    
         <BrowserRouter>
            <NavBar/>
            <Routes>
               <Route exact path="/" element={<ItemListContainer />} />
               <Route exact path="/category/:nombreCategoria" element={<ItemListContainer />} />
               <Route exact path="/item/:id" element={<ItemDetailContainer />} />
               <Route exact path="/cart" element={<div/>} />
            </Routes>
         </BrowserRouter>
     </div>

   )
}

export default App;
