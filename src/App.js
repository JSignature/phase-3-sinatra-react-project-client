import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import ClientList from './components/Client/ClientList/ClientList'
import ClientAdd from './components/Client/ClientAdd/ClientAdd'
import ClientEdit from './components/Client/ClientEdit/ClientEdit'
import ClientView from './components/Client/ClientView/ClientView'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={'/'} />
        <Route path={'/clients/list'} element={<ClientList />} />
        <Route path={'/clients/add'} element={<ClientAdd />} />
        <Route path={'/clients/view/:client_id'} element={<ClientView />} />
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
