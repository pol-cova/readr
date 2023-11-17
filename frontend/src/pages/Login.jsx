// Login page
// Import custom components from reac-bootstrap
import { Button, Form, Card } from 'react-bootstrap';

const Login = () => {
    return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-dark text-light'>
    <Card className='shadow-lg' style={{ width: '400px' }}>
        <Card.Body>
            <Card.Title className="mb-4 text-center" style={{ fontSize: '36px' }}>Login</Card.Title>
            <Form>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label style={{ fontSize: '18px' }}>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter your username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label style={{ fontSize: '18px' }}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <Button variant="dark" type="submit" className="w-100" style={{ fontSize: '18px' }}>
                    Login
                </Button>
            </Form>
        </Card.Body>
        <Card.Footer className="text-center">
            <Card.Text className='text-muted'>Don't have an account? <a  href="/register">Register</a></Card.Text>
        </Card.Footer>
    </Card>
    </div>
    );
}

export default Login;