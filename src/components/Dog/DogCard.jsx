import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import DogList from './DogList'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const DogCard = ({ dogs, handleDelete }) => {
  function handleDeleteClick(id) {
    handleDelete(id)
  }

  return (
    <Container>
      <Row>
        {dogs.map(dog => (
          <Card key={dog.id} className="m-3" style={{ width: '12rem' }}>
            <Card.Img
              variant="top"
              className="img-fluid  mt-1"
              src={dog.dog_image}
            />
            <Card.Body>
              <Card.Title>{dog.dog_name}</Card.Title>
              <Card.Text>{dog.dog_breed}</Card.Text>
              <Button variant="primary" href={`/dogs/edit/${dog.id}`}>
                View/Edit
              </Button>
              <Button
                onClick={() => handleDeleteClick(dog.id)}
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

export default DogCard
