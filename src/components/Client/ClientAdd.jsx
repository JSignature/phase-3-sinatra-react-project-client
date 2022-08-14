import { React, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

let ClientAdd = () => {
  const [clientFirstName, setClientFirstName] = useState('')
  const [clientLastName, setClientLastName] = useState('')
  const [clientAddressStreet, setClientAddressStreet] = useState('')
  const [clientAddressCity, setClientAddressCity] = useState('')
  const [clientAddressState, setClientAddressState] = useState('')
  const [clientAddressZip, setClientAddressZip] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [myKey, setMyKey] = useState(0)

  function handleNewClientSubmit(e) {
    e.preventDefault()

    const newClient = {
      client_first_name: clientFirstName,
      client_last_name: clientLastName,
      client_address_street: clientAddressStreet,
      client_address_city: clientAddressCity,
      client_address_state: clientAddressState,
      client_address_zip: clientAddressZip,
      client_phone: clientPhone,
      client_email: clientEmail,
    }

    setClientFirstName('')
    setClientLastName('')
    setClientAddressStreet('')
    setClientAddressCity('')
    setClientAddressState('')
    setClientAddressZip('')
    setClientPhone('')
    setClientEmail('')
    setMyKey(myKey + 1)

    fetch('http://127.0.0.1:9292/clients/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newClient),
    })
      .then(resp => resp.json())
      .then(obj => alert('Client was Added'))
  }

  return (
    <Container>
      <Form key={myKey} className="mt-5" onSubmit={handleNewClientSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder=" First Name"
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
            onChange={e => {
              setClientAddressStreet(e.target.value)
            }}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              onChange={e => {
                setClientAddressCity(e.target.value)
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              onChange={e => {
                setClientAddressState(e.target.value)
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              onChange={e => {
                setClientAddressZip(e.target.value)
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

export default ClientAdd
