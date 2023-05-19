import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Registration()
{
    const name = useRef("");
    const email = useRef("");
    const password = useRef("");

    const navigate = useNavigate();

    function UserHandler()
    {
        var payload = 
        {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value
        }

        axios.post("http://localhost:8080/save",payload)
            .then((response)=>{
                navigate("/");
            })
    }
    
    return(
        <>
            <h1 className="text-center"> Hello </h1>

            <div>
                <Form className='ml-5'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control className='w-50'  type="text" placeholder="Enter your full name" ref={name} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control className='w-50' type="email" placeholder="Enter email" ref={email} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='w-50' type="password" placeholder="Password" ref={password} />
                    </Form.Group>
                    
                    <Button className='text-center' variant="primary" type="submit" onClick={UserHandler}>Submit</Button>
                </Form>
            </div>
        </>
    );

}

export default Registration;