import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../Style/Skills.css";
const skillsData = [
  { name: "Photoshop", label: "75%", value: 75, color: "#3498db" },
  { name: "HTML5", label: "85%", value: 85, color: "#f39c12" },
  { name: "WordPress", label: "70%", value: 70, color: "#16a085" },
  { name: "jQuery", label: "60%", value: 60, color: "#e74c3c" },
  { name: "CSS3", label: "90%", value: 90, color: "#9b59b6" },
  { name: "SEO", label: "80%", value: 80, color: "#2c3e50" }
];

function Skills() {
  return (
    <div className="skills">
      <Container className="skills-container">
        <Row className="text-center mb-4">
          <Col>
            <h6 className="section-subtitle">MY SPECIALTY</h6>
            <h2 className="section-title">MY SKILLS</h2>
          </Col>
        </Row>
        <Row className="justify-content-center text-center mb-5">
          <Col>
            <p className="skills-text">
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen. She packed her seven
              versalia, put her initial into the belt and made herself on the
              way.
            </p>
          </Col>
        </Row>

        <Row>
          {skillsData.map((skill, index) => (
            <Col key={index} md={6} className="mb-4">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span
                  className="skill-percentage"
                  style={{ color: skill.color }}
                >
                  {skill.label}
                </span>
              </div>

              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{ width: `${skill.value}%`, background: skill.color }}
                ></div>

                <div
                  className="progress-circle"
                  style={{
                    left: `calc(${skill.value}% - 10px)`,
                    background: skill.color
                  }}
                ></div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
