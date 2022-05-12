import React from 'react'
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from 'mdbreact'

const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: '485px' }}
            src="../../assets/budget.jpeg"
            alt="Budget App"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Budget tracker</MDBCardTitle>
            <MDBCardText>
              Giving users a fast and easy way to track their money is
              important, but allowing them to access that information at any
              time is even more important. Having offline functionality is
              paramount to the success of an application that handles users
              financial information
            </MDBCardText>
            <MDBBtn
              href="https://limitless-anchorage-09802.herokuapp.com/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="../../assets/news.jpeg"
            alt="Tech News"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Tech News</MDBCardTitle>
            <MDBCardText>
              The Tech Blog is a blog website where developers can publish their
              blog posts and comment on other developers posts as well. This
              application follows the MVC paradigm and it is using Handlebars.js
              as the templating language, Sequelize as the ORM, and the
              express-session npm package for authentication.
            </MDBCardText>
            <MDBBtn
              href="tech-blognews.herokuapp.com/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: '283px' }}
            className="img-fluid"
            src="../../assets/workdayschedule.png"
            alt="Fitness"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Workday Scheduler</MDBCardTitle>
            <MDBCardText>
              This project is a simple calendar application that allows a user
              able to save multiple plans for each hour of the workday. This app
              can run on the browser with dynamic functions of HTML, CSS, and
              Jquery.
            </MDBCardText>
            <MDBBtn
              href="https://tringuyen128.github.io/Work-Day-Scheduler/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>

      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="../../assets/notetaking.png"
            alt="Team Generator"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Note Taking App</MDBCardTitle>
            <MDBCardText>
              A simple to use note taking app that utilizes Node.js and
              Express.js to write and save notes. The application will use
              Express.js backend and will savbe and retriecve note data from a
              JSON file.
            </MDBCardText>
            <MDBBtn
              href="https://note-tak-er.herokuapp.com/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: '225px' }}
            className="img-fluid"
            src="../../assets/weather.png"
            alt="Weather"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Weather Dashboard</MDBCardTitle>
            <MDBCardText>
              This website pulls data from an API to show the user the daily and
              five day forecast for any city on earth
            </MDBCardText>
            <MDBBtn
              href="https://tringuyen128.github.io/Weather-Dashboard/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: '225px' }}
            className="img-fluid"
            src="https://user-images.githubusercontent.com/64516562/97785992-063dd480-1b6e-11eb-8040-7ca005d7830b.png"
            alt="Bartender"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Netflix Clone</MDBCardTitle>
            <MDBCardText>
              In this project, I will make Netflix clone landing page and add
              some functioning to it using Jquery. The page mostly using HTML
              and CSS.
            </MDBCardText>
            <MDBBtn
              href="https://tringuyen128.github.io/Netflix_Clone_Page/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>

      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: '205px' }}
            src="https://user-images.githubusercontent.com/64516562/97790062-321b8300-1b8b-11eb-8a0e-079e54b31341.png"
            alt="Planner"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Day Planner</MDBCardTitle>
            <MDBCardText>
              This is a work day plan app. It has hours sections on it so when
              the user enters a description for each hour and save it the
              description will stay until erased.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/Collin-Hodgson/dayplanner"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            src="https://user-images.githubusercontent.com/64516562/97790068-3a73be00-1b8b-11eb-94f9-459018a10c80.PNG"
            alt="Password"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Password Generator</MDBCardTitle>
            <MDBCardText>
              This app allows the user to generate a random password with
              criteria of their choosing. This app utilizes numbers, letters,
              and special characters.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/Collin-Hodgson/passwordgenerator"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: '205px' }}
            src="https://github.com/denismatijevic/summerlinlabs/raw/master/public/assets/Mission.png"
            alt="Summerlin Labs"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Summerlin Labs </MDBCardTitle>
            <MDBCardText>
              This is my final project for the program. A local business owner
              tasked my group with creating a website for their health and
              testing clinic.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/denismatijevic/summerlinlabs"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  )
}

export default Projects
