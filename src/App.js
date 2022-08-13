import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import ClientList from './components/Client/ClientList'
import ClientAdd from './components/Client/ClientAdd'
import ClientEdit from './components/Client/ClientEdit'
import HomePage from './components/HomePage'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/esm/Container'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/clients/list'} element={<ClientList />} />
        <Route path={'/clients/add'} element={<ClientAdd />} />
        <Route path={'/clients/edit/:client_id'} element={<ClientEdit />} />
      </Routes>
    </>
  )
}

export default App

{
  /* Commented this out, part of the original boiler plate */
}
{
  /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
}
