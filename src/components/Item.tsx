import {Card, Button} from 'react-bootstrap';


export default function Item() {
    return (
        <Card style={{ minWidth: '18rem', margin: '20px' }}>
            {/* <Card.Img variant="top" src="..." /> */}
            <Card.Body className="shadow">
                <Card.Title>Lorem Ipsum</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec semper tellus.</Card.Text>
                <Button variant="secondary">Example Button</Button>
            </Card.Body>
        </Card>
    );
}