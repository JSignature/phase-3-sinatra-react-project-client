import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import ClientList from './components/Client/ClientList'
import ClientAdd from './components/Client/ClientAdd'
import ClientEdit from './components/Client/ClientEdit'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/esm/Container'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={'/'} />
        <Route path={'/clients/list'} element={<ClientList />} />
        <Route path={'/clients/add'} element={<ClientAdd />} />
        <Route path={'/clients/edit/:client_id'} element={<ClientEdit />} />
      </Routes>

      <Container className="text-center">
        <h1 className="fw-light fs-1 text-info bg-dark">
          Welcome To Brindle App
        </h1>
      </Container>
      <Container>
        <Carousel fade className="shadow-lg p-3 mb-5 bg-body rounded">
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Made for Groomers</h3>
              <h3> by Groomers</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/6131006/pexels-photo-6131006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Spend More Time With </h3>
              <h3>Your Furry Friends</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/5256144/pexels-photo-5256144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3> Less Time Doing Deskwork</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
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
