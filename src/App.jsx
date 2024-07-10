import './App.css'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Apresentacao from './components/Apresentacao'
import Skills from './components/Skills'
import Projetos from './components/Projetos'
import Contato from './components/Contato'

function App() {

  return (
    <>
      <NavBar/>
      <Banner/>
      <Apresentacao/>
      <Skills/>
      <Projetos/>
      <Contato/>
    </>
  )
}

export default App
