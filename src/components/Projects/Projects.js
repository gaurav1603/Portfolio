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
import facial from "../../Assets/Projects/facial.jpeg"
import StudyNotion1 from "../../Assets/Projects/Studynotion1.jpeg"
import college from "../../Assets/Projects/college.png"
import ThirdEye from "../../Assets/Projects/thirdEye.jpg"
// studynotion
// attendance system
// Third Eye
// Campus one
// online editor

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
              imgPath={StudyNotion1}
              isBlog={false}
              title="StudyNotion"
              description="StudyNotion is a dynamic platform where users can create, sell, and buy courses across diverse topics. It empowers educators to share knowledge and learners to access quality content, fostering a collaborative learning ecosystem."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facial}
              isBlog={false}
              title="Attendance using Facial Recognition"
              description="
An attendance system using facial recognition leverages AI to identify individuals and record their attendance automatically. It ensures accuracy, saves time, and eliminates manual processes in classrooms or workplaces."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ThirdEye}
              isBlog={false}
              title="Third Eye"
              description="ThirdEye is an advanced AI system designed to locate missing persons by matching forensic sketches with real-world images. It combines deep learning and facial recognition techniques to assist in efficient and accurate identifications."
              // className="w-[50px] h-[30px]"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={college}
              isBlog={false}
              title="Campus One"
              description="CampusOne is a comprehensive college management system that streamlines academic, administrative, and financial operations. It offers tools for student enrollment, attendance tracking, course management, and more, enhancing institutional efficiency."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Online Editor"
              description="
An online editor is a web-based tool that allows users to create, edit, and format content directly in their browser. It supports various applications like text editing, code development, and multimedia creation, enabling seamless collaboration and accessibility."
              ghLink="https://github.com/gaurav1603/Online-Code-Editor"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
