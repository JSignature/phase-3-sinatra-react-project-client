import { React, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

let ClientEdit = () => {
  const [clientFirstName, setClientFirstName] = useState('')
  const [clientLastName, setClientLastName] = useState(' ')
  const [clientAddressStreet, setClientAddressStreet] = useState('')
  const [clientAddressCity, setClientAddressCity] = useState('')
  const [clientAddressState, setClientAddressState] = useState('')
  const [clientAddressZip, setClientAddressZip] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientImage, setClientImage] = useState('')
  const [clientDog, setClientDog] = useState('')

  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/clients/view/${params.client_id}`)
      .then(resp => resp.json())
      .then(obj => buildClient(obj))
  }, [])

  function buildClient(obj) {
    setClientFirstName(obj.client_first_name)
    setClientLastName(obj.client_last_name)
    setClientAddressStreet(obj.client_address_street)
    setClientAddressCity(obj.client_address_city)
    setClientAddressState(obj.client_address_state)
    setClientAddressZip(obj.client_address_zip)
    setClientPhone(obj.client_phone)
    setClientEmail(obj.client_email)
    setClientImage(obj.client_image)
    setClientDog(obj.dogs)
  }

  function updateClient(e) {
    e.preventDefault()

    const updatedClient = {
      client_first_name: clientFirstName,
      client_last_name: clientLastName,
      client_address_street: clientAddressStreet,
      client_address_city: clientAddressCity,
      client_address_state: clientAddressState,
      client_address_zip: clientAddressZip,
      client_phone: clientPhone,
      client_email: clientEmail,
    }

    fetch(`http://127.0.0.1:9292/clients/edit/${params.client_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedClient),
    })
      .then(resp => resp.json())
      .then(obj => alert('Client was Updated'))
  }

  return (
    <Container>
      <Card className="m-3" style={{ width: '8rem' }}>
        <Card.Img variant="top" src={clientImage} />
      </Card>
      <Form className="mt-2" onSubmit={updateClient}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder=" First Name"
              value={clientFirstName}
              onChange={e => {
                setClientFirstName(e.target.value)
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              value={clientLastName}
              onChange={e => {
                setClientLastName(e.target.value)
              }}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone Number"
              value={clientPhone}
              onChange={e => {
                setClientPhone(e.target.value)
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={clientEmail}
              onChange={e => {
                setClientEmail(e.target.value)
              }}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            value={clientAddressStreet}
            onChange={e => {
              setClientAddressStreet(e.target.value)
            }}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={clientAddressCity}
              onChange={e => {
                setClientAddressCity(e.target.value)
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              value={clientAddressState}
              onChange={e => {
                setClientAddressState(e.target.value)
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              value={clientAddressZip}
              onChange={e => {
                setClientAddressZip(e.target.value)
              }}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  )
}

export default ClientEdit
