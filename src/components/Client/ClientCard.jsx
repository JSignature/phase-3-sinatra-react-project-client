import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ClientList from './ClientList'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const ClientCard = ({ clients, handleDelete }) => {
  function handleDeleteClick(id) {
    console.log(id)
    handleDelete(id)
  }

  return (
    <Container>
      <Row>
        {clients.map(client => (
          <Card key={client.id} className="m-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={client.client_image} />
            <Card.Body>
              <Card.Title>{client.client_first_name}</Card.Title>
              <Card.Text>{client.client_email}</Card.Text>
              <Button variant="primary">Edit</Button>
              <Button
                onClick={() => handleDeleteClick(client.id)}
                variant="primary"
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  )
}

export default ClientCard
