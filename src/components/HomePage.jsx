import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/esm/Container'

const HomePage = () => {
  return (
    <>
      <Container className="text-center">
        <h1 className="fw-light fs-1 text-info bg-dark">
          Welcome To Brindle App
        </h1>
      </Container>
      <Container>
        <Carousel fade className="shadow-lg p-3 mb-5 bg-body rounded">
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Made for Groomers</h3>
              <h3> by Groomers</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/6131006/pexels-photo-6131006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Spend More Time With </h3>
              <h3>Your Furry Friends</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/5256144/pexels-photo-5256144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3> Less Time Doing Deskwork</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  )
}

export default HomePage
