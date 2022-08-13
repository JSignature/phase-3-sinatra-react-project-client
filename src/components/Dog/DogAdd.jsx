import { React, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

let DogAdd = () => {
  const [dogName, setDogName] = useState('')
  const [dogBreed, setDogBreed] = useState('')
  const [dogSize, setDogSize] = useState('')
  const [dogWeight, setDogWeight] = useState('')
  const [dogGender, setDogGender] = useState('')
  const [dogCoatLength, setDogCoatLength] = useState('')
  const [dogImage, setDogImage] = useState('')
  const [clientId, setClientId] = useState('')

  function handleNewDogSubmit(e) {
    e.preventDefault()

    const newDog = {
      dog_name: dogName,
      dog_breed: dogBreed,
      dog_size: dogSize,
      dog_weight: dogWeight,
      dog_gender: dogGender,
      dog_coat_length: dogCoatLength,
      client_id: clientId,
    }

    setDogName('')
    setDogBreed('')
    setDogSize('')
    setDogWeight('')
    setDogGender('')
    setDogCoatLength('')
    setClientId('')

    fetch('http://127.0.0.1:9292/dogs/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDog),
    })
      .then(resp => resp.json())
      .then(obj => alert('Dog was Added'))
  }

  return (
    <Container>
      <Form className="mt-5" onSubmit={handleNewDogSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridDogName">
            <Form.Label>Dog Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Dog Name"
              onChange={e => {
                setDogName(e.target.value)
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDogBreed">
            <Form.Label>Dog Breed</Form.Label>
            <Form.Control
              type="text"
              placeholder="Dog Breed"
              onChange={e => {
                setDogBreed(e.target.value)
              }}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridDogSize">
            <Form.Label>Dog Size</Form.Label>
            <Form.Control
              type="text"
              placeholder="Dog Size"
              onChange={e => {
                setDogSize(e.target.value)
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDogWeight">
            <Form.Label>Dog Weight</Form.Label>
            <Form.Control
              type="text"
              placeholder="Dog Weight"
              onChange={e => {
                setDogWeight(e.target.value)
              }}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formGridDogGender">
            <Form.Label>Dog Gender</Form.Label>
            <Form.Control
              placeholder="Dog Gender"
              onChange={e => {
                setDogGender(e.target.value)
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDogCoatLength">
            <Form.Label>Coat Length</Form.Label>
            <Form.Control
              placeholder="Coat Length"
              onChange={e => {
                setDogCoatLength(e.target.value)
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridClientId">
            <Form.Label>Client Id</Form.Label>
            <Form.Control
              onChange={e => {
                setClientId(e.target.value)
              }}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default DogAdd
