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
            alt="workday"
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
            alt="Note taking"
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
            src="../../assets/netflix.png"
            alt="Netflix"
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
            src="../../assets/progress.png"
            alt="Progress"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Progress Step</MDBCardTitle>
            <MDBCardText>
              This small project uses HTML, CSS, and Javascipt to make progress
              step with number. The buttons are used to control the progress
              going forward or going backward using javascript
            </MDBCardText>
            <MDBBtn
              href="https://tringuyen128.github.io/progress_step/"
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
