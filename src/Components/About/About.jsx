import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';  
import 'bootstrap-icons/font/bootstrap-icons.css';

<<<<<<< HEAD
=======
const services = [
  { icon: "bi-lightbulb", title: "Graphic Design", color: "custom-card-blue" },
  { icon: "bi-globe", title: "Web Design", color: "custom-card-red" },
  { icon: "bi-server", title: "Software", color: "custom-card-yellow" },
  { icon: "bi-phone", title: "Application", color: "custom-card-purple" }
];
>>>>>>> 178441b (Initial commit)

function AboutUs() {
  return (
    <div className="about-us">
<<<<<<< HEAD
     <Container className="about-us-container">
       <Row className="text-center mb-4">
        <Col>
          <h6 className="section-subtitle">ABOUT US</h6>
          <h2 className="section-title">WHO AM I?</h2>
        </Col>
      </Row>

       <Row className="justify-content-center text-center mb-5">
        <Col >
          <p className="about-text">
            <strong>Hi, I'm Jackson Ford</strong>. On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand times and everything that was left
            from its origin would be the word (and) and the Little Blind Text should turn around and return to
            its own, safe country.
          </p>
          <p className="about-text">
            Even the all-powerful Pointing has no control about the blind texts. It is an almost unorthographic
            life. One day, however, a small line of blind text by the name of Lorem Ipsum decided to leave for
            the far World of Grammar.
          </p>
        </Col>
      </Row>

       <Row className="text-center">
        <Col md={3} sm={6} className="mb-4">
          <Card className="custom-card custom-card-blue">
            <Card.Body>
              <i className="bi bi-lightbulb icon-blue"></i>
              <h5 className="card-title">Graphic Design</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <Card className="custom-card custom-card-red">
            <Card.Body>
              <i className="bi bi-globe icon-red"></i>
              <h5 className="card-title">Web Design</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <Card className="custom-card custom-card-yellow">
            <Card.Body>
              <i className="bi bi-server icon-yellow"></i>
              <h5 className="card-title">Software</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <Card className="custom-card custom-card-purple">
            <Card.Body>
              <i className="bi bi-phone icon-purple"></i>
              <h5 className="card-title">Application</h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
   
=======
      <Container className="text-center">
        <Row className="mb-4">
          <Col>
            <h6 className="section-subtitle">ABOUT US</h6>
            <h2 className="section-title">WHO AM I?</h2>
          </Col>
        </Row>

        <Row className="">
          <Col md={12}>
            <p className="about-text">
              <strong>Hi, I'm Jackson Ford</strong>. On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand times and everything that was left
              from its origin would be the word (and) and the Little Blind Text should turn around and return to
              its own, safe country.
            </p>
            <p className="about-text">
              Even the all-powerful Pointing has no control about the blind texts. It is an almost unorthographic
              life. One day, however, a small line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
            </p>
          </Col>
        </Row>

        <Row>
          {services.map((service, index) => (
            <Col md={3} sm={6} className="mb-4" key={index}>
              <Card className={`custom-card ${service.color}`}>
                <Card.Body>
                  <i className={`bi ${service.icon} icon`}></i>
                  <h5 className="card-title">{service.title}</h5>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
>>>>>>> 178441b (Initial commit)
  );
}

export default AboutUs;
