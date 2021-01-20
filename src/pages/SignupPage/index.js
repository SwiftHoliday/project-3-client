import { useState } from 'react';
import { signup } from '../../services/userService';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function SignupPage(props) {
    const [formState, setFormState] = useState(getInitialFormState());
    function getInitialFormState() {
        return {
            firstName: "",
            lastName: "",
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
            await signup(formState);
            setFormState(getInitialFormState());

            props.handleSignupOrLogin();

            props.history.push('/dashboard');
            
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <div className="Page">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label> 
                    <Form.Control
                        value={formState.firstName} 
                        onChange={handleChange}
                        name="firstName"
                        type="text"
                        placeholder="First Name" />
                </Form.Group>

                <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        value={formState.lastName} 
                        onChange={handleChange}
                        name="lastName"
                        type="text"
                        placeholder="Last Name" />
                </Form.Group>


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
                        Sign Up
                </Button>
            </Form>
        </div>
    );
}
export default SignupPage;