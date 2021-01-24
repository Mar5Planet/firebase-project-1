import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import { Form, Input, Button } from 'antd';
import { compose } from 'recompose';

import * as ROUTES from '../../constants/routes';



const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };


const Signup = (props) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const [error, setError] = useState('');

    const onSubmit = event => {
        props.firebase.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
            props.setLoggedIn(true);
            setUsername('')
            setPasswordOne('')
            setEmail('')
            setPasswordTwo('')
            props.history.push(ROUTES.HOME)
        }).catch(err => setError(err))
    }

    const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';

    return (
        <div style={{margin: '20%'}}>
        <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        >
        <h1>Signup</h1>
        <Form.Item
            label="username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input onChange={(e) => setUsername(e.target.value)}/>
        </Form.Item>

        <Form.Item
            label="Email"
            name="Email"
            rules={[{ required: true, message: 'Please input your email!' }]}
        >
            <Input onChange={(e) => setEmail(e.target.value)}/>
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input.Password onChange={(e) => setPasswordOne(e.target.value)}/>
        </Form.Item>

        <Form.Item
            label="Re-enter Password"
            name="Re-enter password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input.Password onChange={(e) => setPasswordTwo(e.target.value)}/>
        </Form.Item>

        <Form.Item {...tailLayout}>
            <Button disabled={isInvalid} onClick={onSubmit} type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
        {error && <p>{error.message}</p>}
        </Form>
        </div>

    )
};

const SignupForm = compose(withRouter,withFirebase)(Signup);

const SignupPage = () => (
    <div>
        <SignupForm />
    </div>
  );
 
export default SignupPage;