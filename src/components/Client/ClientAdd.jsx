import { React, useState } from 'react'

let ClientAdd = () => {
  const [clientFirstName, setClientFirstName] = useState('Jimmy ')
  const [clientLastName, setClientLastName] = useState('Andreas ')
  const [clientAddressStreet, setClientAddressStreet] =
    useState('123 Main Street ')
  const [clientAddressCity, setClientAddressCity] = useState('Memphis')
  const [clientAddressState, setClientAddressState] = useState('TN')
  const [clientPhone, setClientPhone] = useState('123-456-7890')
  const [clientEmail, setClientEmail] = useState('J@example.com')
  const [clientImage, setClientImage] = useState('Photo')

  return (
    <>
      <h2>ClientAdd</h2>
    </>
  )
}

export default ClientAdd
