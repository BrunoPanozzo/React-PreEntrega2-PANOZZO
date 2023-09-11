import './styles/app.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

export function App() {

   const texto = "Próximamente Nuevos Estrenos";

   return (

     <div>    
        <NavBar/>
        <ItemListContainer greeting= {texto}/>
        <ItemDetailContainer id={1} />
     </div>

   )
}

export default App;
