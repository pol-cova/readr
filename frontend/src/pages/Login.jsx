// Login page
// Import custom components from reac-bootstrap
import { Button, Form, Card } from 'react-bootstrap';
// Import useState hook
import { useState } from 'react';   

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });           
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/auth/jwt/create/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const { access, refresh } = await response.json();
                sessionStorage.setItem('access', access);
                sessionStorage.setItem('refresh', refresh);
                // Reset the form
                setFormData({
                    username: '',
                    password: '',
                });
                console.log('Data sent to the api');
            } else {
                console.log('Data not sent to the api');
                setError('Username or Password incorrect :(');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-dark text-light'>
    <Card className='shadow-lg' style={{ width: '400px' }}>
        <Card.Body>
            <Card.Title className="mb-4 text-center" style={{ fontSize: '36px' }}>Login</Card.Title>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label style={{ fontSize: '18px' }}>Username</Form.Label>
                    <Form.Control name="username" type="text" placeholder="Enter your username" value={formData.username} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label style={{ fontSize: '18px' }}>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
                </Form.Group>
                <Button variant="dark" type="submit" className="w-100" style={{ fontSize: '18px' }}>
                    Login
                </Button>
            </Form>
        </Card.Body>
        <Card.Footer className="text-center">
            <Card.Text className='text-muted'>Don't have an account? <a  href="/register">Register</a></Card.Text>
        </Card.Footer>
        <div className="w-100 text-center">
        {error && <div className="alert alert-danger">{error}</div>}
        </div>
    </Card>
    </div>
    );
}

export default Login;