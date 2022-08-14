import { React, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import ClientCard from './ClientCard'

let ClientList = () => {
  const [clients, setClients] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/clients/list')
      .then(resp => resp.json())
      .then(obj => setClients(obj))
  }, [])

  function handleDelete(id) {
    fetch(`http://127.0.0.1:9292/clients/delete/${id}`, {
      method: 'DELETE',
    })
      .then(r => r.json())
      .then(deletedClient => {
        const updatedClients = clients.filter(client => client.id !== id)
        setClients(updatedClients)
      })
  }

  return (
    <>
      <Container>
        <Row className="mt-2">
          <Col md={4}>
            <Button variant="outline-info" href="/clients/add">
              Add New Client
            </Button>
          </Col>

          {/* Add search bar as a stretch goal */}
          {/* <Col md={{ span: 4, offset: 4 }}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Col> */}
        </Row>

        {/* This will generate the client cards */}
        <Row>
          <ClientCard clients={clients} handleDelete={handleDelete} />
        </Row>
      </Container>
    </>
  )
}

export default ClientList
