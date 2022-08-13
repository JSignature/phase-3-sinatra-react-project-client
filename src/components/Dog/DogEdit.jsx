import { React, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

let DogEdit = () => {
  const [dogName, setDogName] = useState('')
  const [dogBreed, setDogBreed] = useState('')
  const [dogSize, setDogSize] = useState('')
  const [dogWeight, setDogWeight] = useState('')
  const [dogGender, setDogGender] = useState('')
  const [dogCoatLength, setDogCoatLength] = useState('')
  const [dogImage, setDogImage] = useState('')
  const [clientId, setClientId] = useState('')

  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/dogs/view/${params.dog_id}`)
      .then(resp => resp.json())
      .then(obj => buildDog(obj))
  }, [])

  function buildDog(obj) {
    setDogName(obj.dog_name)
    setDogBreed(obj.dog_breed)
    setDogSize(obj.dog_size)
    setDogWeight(obj.dog_weight)
    setDogGender(obj.dog_gender)
    setDogCoatLength(obj.dog_coat_length)
    setClientId(obj.client_id)
    setDogImage(obj.dog_image)
  }

  function updateDog(e) {
    e.preventDefault()

    const updatedDog = {
      dog_name: dogName,
      dog_breed: dogBreed,
      dog_size: dogSize,
      dog_weight: dogWeight,
      dog_gender: dogGender,
      dog_coat_length: dogCoatLength,
      client_id: clientId,
      dog_image: dogImage,
    }

    fetch(`http://127.0.0.1:9292/dogs/edit/${params.dog_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedDog),
    })
      .then(resp => resp.json())
      .then(obj => alert('Dog was Updated'))
  }

  return (
    <Container>
      <Card.Img
        variant="top"
        src={dogImage}
        className="img-fluid rounded-circle mt-3 "
        style={{ width: '10rem' }}
      />

      <Form className="mt-5" onSubmit={updateDog}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridDogName">
            <Form.Label>Dog Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Dog Name"
              value={dogName}
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
              value={dogBreed}
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
              value={dogSize}
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
              value={dogWeight}
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
              value={dogGender}
              onChange={e => {
                setDogGender(e.target.value)
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDogCoatLength">
            <Form.Label>Coat Length</Form.Label>
            <Form.Control
              placeholder="Coat Length"
              value={dogCoatLength}
              onChange={e => {
                setDogCoatLength(e.target.value)
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridClientId">
            <Form.Label>Client Id</Form.Label>
            <Form.Control
              value={clientId}
              onChange={e => {
                setClientId(e.target.value)
              }}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="formGridDogImage">
            <Form.Label>Dog Image</Form.Label>
            <Form.Control
              value={dogImage}
              onChange={e => {
                setDogImage(e.target.value)
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

export default DogEdit
