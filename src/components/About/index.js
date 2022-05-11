import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />

          <p style={{ fontSize: '27px' }}>
            Hello, my name is Tri Nguyen. I am a Fullstack Web Developer
            currently graduated from UC Berkeley Extension. Coding has become a
            perfect union of my two favourite passions and I love seeing the
            results of my efforts helping user's experience. I'm enjoying to
            learn new technologiess and apply technical skills into my creative
            projects to make the page eye-catching, accessible, user-friendly,
            and useful applications.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default AboutMe
