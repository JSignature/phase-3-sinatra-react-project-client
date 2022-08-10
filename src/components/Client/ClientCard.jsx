import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ClientList from './ClientList'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const ClientCard = ({ clients }) => {
  return (
    <Container>
      <Row>
        {clients.map(client => (
          <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={client.client_image} />
            <Card.Body>
              <Card.Title>{client.client_first_name}</Card.Title>
              <Card.Text>{client.client_email}</Card.Text>
              <Button variant="primary">Edit</Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  )
}

export default ClientCard
