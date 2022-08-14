import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ClientList from './ClientList'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

const ClientCard = ({ clients, handleDelete }) => {
  function handleDeleteClick(id) {
    handleDelete(id)
  }

  return (
    <Container>
      <Row>
        {clients.map(client => (
          <Card key={client.id} className="m-3" style={{ width: '12rem' }}>
            <Card.Img
              variant="top"
              className="img-fluid rounded-circle mt-1 b-"
              src={client.client_image}
            />
            <Card.Body>
              <Card.Title>{client.client_first_name}</Card.Title>
              <Card.Text className="text-muted">
                {client.client_last_name}
              </Card.Text>
              <Row>
                <Button
                  className="text-muted"
                  variant="info"
                  href={`/clients/edit/${client.id}`}
                >
                  View/Edit
                </Button>
              </Row>

              <Row className="mt-2 ">
                <Button
                  onClick={() => handleDeleteClick(client.id)}
                  variant="info"
                  className="text-muted"
                >
                  Delete
                </Button>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  )
}

export default ClientCard
