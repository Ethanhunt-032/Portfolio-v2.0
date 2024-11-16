import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Spasso from "../../Assets/Projects/Spasso_img.png";
import ImgCaption from "../../Assets/Projects/caption_img.png";
import StopWatch from "../../Assets/Projects/stopwatch_img.png";
// import AutoStreetLight from "../../Assets/Projects/Autostreetlight_img.png";
import toDo from "../../Assets/Projects/Todo.png";
import Scoliosis from "../../Assets/Projects/Scoliosis.png";

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
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="I built a responsive portfolio website using ReactJs and deployed through Vercel to showcase my skills and
                      projects. The site features a clean, modern design with smooth navigation and interactive elements,
                      providing an engaging user experience. 
It is optimized for both desktop and mobile devices, ensuring accessibility and performance across platforms."
              ghLink="https://github.com/Ethanhunt-032/Portfolio-v2.0"
              demoLink="https://Portfolio-teja-dayana.vercel.app/"
            />
          </Col>
     
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ImgCaption}
              isBlog={false}
              title="Deep Captioning"
              description="Using CNN for image captioning involves extracting visual features from images and generating descriptive text. 
              It combines deep learning techniques for image analysis and natural language processing. We used Tensorflow, Keras, VGG16 and Python libraries. This technology enhances accessibility for visually impaired users by describing visuals"
              ghLink="https://github.com/Ethanhunt-032/Image-Captioning-Using-DL"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toDo}
              isBlog={false}
              title="To-Do App"
              description="I built a to-do application using 'React' and 'Bootstrap', and supports HTML, CSS, JS designed for efficient task management. It allows users to add new tasks, edit existing ones, and delete them as needed. With a clean and simple interface, it ensures seamless organization and tracking of tasks."
              ghLink="https://github.com/Ethanhunt-032/ToDo-Application"
              demoLink="https://to-do-tejadayana.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spasso}
              isBlog={false}
              title="SPASSO"
              description="SPASSO is a full-stack web application. The project aimed to automate the sports events, tasks such as registration, dynamic rule on Registration, optimized scheduling Algo. Led the whole user Interface of the application using UIF with JSX/TSX, RestLet as server script for secure communication. 
              Reduced nearly 2/3rd of storage just by Initial registration avoiding duplication. Implemented Unit Testing having a code coverage of 98.26%"
              // ghLink="https://github.com/Ethanhunt-032/Scoliosis-Detection"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Scoliosis}
              isBlog={false}
              title="Scoliosis Detection"
              description="The Project focuses on identifying scoliosis in its early stages by processing X-ray images to improve diagnostic accuracy. The project utilizes advanced image preprocessing techniques such as Gaussian Blur, Median Filtering, Image Sharpening, and Histogram Equalization to enhance the quality of original X-ray images, removing noise and improving clarity. These processed images are then fed into a machine learning model for detection.
               The results show that preprocessing improves the model's efficiency and accuracy, demonstrating the importance of optimized image quality in early scoliosis detection."
              ghLink="https://github.com/Ethanhunt-032/Scoliosis-Detection"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AutoStreetLight}
              isBlog={false}
              title="Automatic Streetlight System"
              description="Designed an Automatic Streetlight System for optimize energy usage by controlling lights based on ambient light conditions. Built a light-detecting sensor using a NAND gate and a photoresistor. Integrated the sensor with an 8051 microcontroller and a BC547 transistor for efficient streetlight control. 
              Simulated and tested the circuit in Proteus software for accuracy and reliability. This system reduces unnecessary electricity consumption while ensuring adequate lighting during low-visibility conditions. Demonstrated practical application of microcontrollers and basic electronics in automation."
              // ghLink="https://github.com/Ethanhunt-032/Image-Captioning-Using-DL"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StopWatch}
              isBlog={false}
              title="Digital Stopwatch"
              description="Designed a digital stop-watch using mod-10 and mod-6 asynchronous counters built with J-K flip-flops. The stopwatch features seven-segment displays to represent digits in binary and accurately counts seconds from 00 to 59. It includes a start/stop control for user convenience and precise timekeeping functionality. 
              This project demonstrates the practical implementation of digital logic design principles, including counter circuits, flip-flop configurations, and display interfacing. Additionally, it highlights my proficiency in designing, simulating, and debugging digital circuits for real-world applications futhermore in future."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
