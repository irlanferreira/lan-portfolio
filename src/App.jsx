import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Projetos from './components/Projetos'
import Contato from './components/Contato'

function App() {

  return (
    <>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projetos/>
      <Contato/>
    </>
  )
}

export default App
