import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import studynotion from "../../Assets/Projects/studynotion.png";
import eye from "../../Assets/Projects/eye.png";
import facial1 from "../../Assets/Projects/facial1.jpeg";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studynotion}
              isBlog={false}
              title="Study-Notion"
              description="StudyNotion is a comprehensive e-learning platform designed to make education accessible and engaging. It offers a diverse range of courses, interactive learning tools, and expert-led tutorials tailored to meet the needs of students and professionals. With features like progress tracking and community support, StudyNotion fosters a collaborative and personalized learning experience."
              ghLink="https://github.com/gaurav1603/Study-Notion"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eye}
              isBlog={false}
              title="Third-Eye"
              description="Third Eye is an innovative forensic analysis tool designed for enhanced facial recognition and sketch-based identification. It leverages advanced AI algorithms to process and analyze forensic sketches, aiding law enforcement in identifying individuals quickly and accurately. Third Eye streamlines investigations by providing intuitive insights and improving the efficiency of criminal profiling."
              ghLink="https://github.com/gaurav1603/Third-Eye"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              // ghLink="https://github.com/gaurav1603/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facial1}
              isBlog={false}
              title="Facial Recognition Attendance System"
              description="The Facial Recognition Attendance System is a cutting-edge solution that automates attendance tracking using facial recognition technology. It captures and verifies facial data in real-time, ensuring accurate and efficient attendance management. This system eliminates the need for manual processes, enhances security, and provides seamless integration with organizational databases for easy reporting and analytics."
              // ghLink="https://github.com/gaurav1603/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
