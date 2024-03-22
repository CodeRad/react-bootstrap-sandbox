import { Container, Row, Col, Card } from 'react-bootstrap';
import ResponsiveNavbar from './components/ResponsiveNavBar';
import Footer from './components/Footer';
import Item from './components/Item';

import './App.scss';

export default function App() {

  const numberOfItems = 4;

  return (
<div className="d-flex flex-column min-vh-100 bg-white">
  <ResponsiveNavbar />
  <Container className="mt-5">
    <Row>
      {Array.from(Array(numberOfItems).keys()).map(number => (
        <Col key={number}>
          <Item />
        </Col>
      ))}
    </Row>
    <Row>
      <Container className="p-5">
        <Card className="shadow mt-5">
          <Card.Body>
            <Card.Title>Lorem Ipsum</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec semper tellus.</Card.Text>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec semper tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Row>
  </Container>
  <Footer />
</div>
  )
};