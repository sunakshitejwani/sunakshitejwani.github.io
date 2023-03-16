import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sunakshi Tejwani </span>
            from <span className="purple"> Jaipur, India.</span>
            <br />I am a passionate product manager, an ex-developer from JP Morgan and a business Student at Masters' Union
            <br />
            <br />
            Apart from creating product strategies and product designs, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Making art
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Business Posts
            </li>
            <li className="about-activity">
              <ImPointRight /> Meditation and Yoga
            </li>
          </ul>

          <p style={{ color: "rgb(230, 142, 41)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sunakshi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
