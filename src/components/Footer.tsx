import {Container, Row, Col} from 'react-bootstrap';

export default function Footer() {
    

// export default function Footer() {


    return (
        <div className="bg-secondary mt-auto rounded">
  <Container className="p-3">
    <Row>
      <Col className="text-center">
        <a href="/">Instagram</a>
      </Col>
      <Col className="text-center">
        <a href="/">Facebook</a>
      </Col>
      <Col className="text-center text-secondary">
        <a href="/">Twitter</a>
      </Col>
    </Row>
  </Container>
</div>
    );
}