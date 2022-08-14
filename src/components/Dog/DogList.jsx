import { React, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import DogCard from './DogCard'

let DogList = () => {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/dogs/list')
      .then(resp => resp.json())
      .then(obj => setDogs(obj))
  }, [])

  function handleDelete(id) {
    fetch(`http://127.0.0.1:9292/dogs/delete/${id}`, {
      method: 'DELETE',
    })
      .then(r => r.json())
      .then(deletedDog => {
        const updatedDogs = dogs.filter(dog => dog.id !== id)
        setDogs(updatedDogs)
      })
  }

  return (
    <>
      <Container>
        <Row className="mt-2">
          <Col md={4}>
            <Button variant="outline-info" href="/dogs/add">
              Add New Dog
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

        {/* This will generate the dog cards */}
        <Row>
          <DogCard dogs={dogs} handleDelete={handleDelete} />
        </Row>
      </Container>
    </>
  )
}

export default DogList
