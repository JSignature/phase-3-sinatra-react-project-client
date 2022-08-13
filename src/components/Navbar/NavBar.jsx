import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

let NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <i class="fa-solid fa-shield-dog"></i> Brindle App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="/clients/list">Clients</Nav.Link>
            <Nav.Link href="#link">Dogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar

// {/* <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">Brindle App</Navbar.Brand>
//         {/* <nav className="navbar navbar-light bg-light navbar-expand-sm">
//           <div className="container">
//             <Link to={'/'} className="navbar-brand">
//               <i class="fa-solid fa-shield-dog"></i>
//               Brindle App
//             </Link>
//           </div>
//         </nav> */}
//       </Container>
//     </Navbar> */}
