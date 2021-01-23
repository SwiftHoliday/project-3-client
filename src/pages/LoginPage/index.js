import './LoginPage.css'
import { useState } from 'react'
import { login } from '../../services/userService';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import InputGroup from 'react-bootstrap/InputGroup'

function LoginPage(props) {
    const [formState, setFormState] = useState(getInitialFormState());

    function getInitialFormState() {
        return {
            email: "",
            password: "",
        }
    }
    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }
    async function handleSubmit(event) {
        try {
            event.preventDefault();

            await login(formState);
            
            setFormState(getInitialFormState());

            props.handleSignupOrLogin();

            props.history.push('/dashboard');
            
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <main>
        <div className="Page">
        <div className="globe2">
        </div>
        <div className="LoginText">
            <p>Login</p>
        </div>  
            
            <Form onSubmit={handleSubmit}>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        value={formState.email} 
                        onChange={handleChange} 
                        name="email"
                        type="email"
                        placeholder="Enter email" />   
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={formState.password} 
                        onChange={handleChange} 
                        name="password"
                        type="password"
                        placeholder="Password" />
                </Form.Group>

                <Button variant="primary"type="submit">
                        Login
                </Button>
            </Form>
            </div>   
        </main>
    );
}

export default LoginPage