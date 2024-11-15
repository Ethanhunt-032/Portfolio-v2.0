import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Teja Dayana </span>
            from <span className="purple"> Andhra Pradesh, India</span>
            <br />
            I have completed B. Tech  in ECE and Minors in CSE from NIT Tiruchirappalli
            <br />
            <br />
            {/* I am currently employed as a software developer at British Telecom and */}
            I Completed Summer Intern at NetSuite, Oracle on Full-Stack web App
            <br />
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games & Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Personal Finance
            </li>
            <li className="about-activity">
              <ImPointRight /> Stock trading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Turning coffee into code, bugs into features"{" "}
          </p>
          <footer className="blockquote-footer">Teja Dayana</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
