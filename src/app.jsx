import './styles/app.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

export function App() {

   const texto = "Próximamente Nuevos Estrenos";

   return (

     <div>    
        <NavBar/>
        <ItemListContainer greeting= {texto}/>
     </div>
   )
}

export default App;
