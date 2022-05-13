import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact'

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2 style={{ fontFamily: 'monospace'}}>Contact Information</h2>
          <hr class="solid bg-dark" />

          <h4 style={{ fontFamily: 'monospace'}}>
            I recently gradated a Full Stack Web Development Bootcamp at the UC
            Berkeley Extension. I am actively looking for a Junior Web
            Development position, below I have linked my e-mail and cell phone
            number. Please feel free to contact me at any time and if I do not
            immediately respond I will respond within the next buisness day.
            Thank you!
          </h4>
          <hr className="hr-light w-25" />
          <h3 style={{ fontFamily: 'monospace'}}>Cell Phone</h3>
          <hr className="hr-dark w-25" />
          <a href="tel:801-792-5502">
            <MDBIcon icon="phone-alt" /> 408-627-5078
          </a>
          <hr className="hr-light w-25" />
          <h3 style={{ fontFamily: 'monospace'}}>E-mail</h3>
          <hr className="hr-dark w-25" />
          <a href="mailto:collinhodgs@gmail.com">
            <MDBIcon icon="envelope" /> mr.tringuyen1225@gmail.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default ContactInfo
