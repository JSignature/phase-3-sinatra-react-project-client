import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import ClientList from './components/Client/ClientList'
import ClientAdd from './components/Client/ClientAdd'
import ClientEdit from './components/Client/ClientEdit'
import HomePage from './components/HomePage'
import DogAdd from './components/Dog/DogAdd'
import DogEdit from './components/Dog/DogEdit'
import DogList from './components/Dog/DogList'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/clients/list'} element={<ClientList />} />
        <Route path={'/clients/add'} element={<ClientAdd />} />
        <Route path={'/clients/edit/:client_id'} element={<ClientEdit />} />
        <Route path={'/dogs/list'} element={<DogList />} />
        <Route path={'/dogs/add'} element={<DogAdd />} />
        <Route path={'/dogs/edit/:dog_id'} element={<DogEdit />} />
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
