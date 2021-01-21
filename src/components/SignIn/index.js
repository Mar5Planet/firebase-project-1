import React, {useState} from 'react';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom' 
import { Form, Input, Button, Checkbox } from 'antd';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const onSubmit = event => {

}

const onChange = event => {

};

  const Signin = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
  
      const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      return (
          <div style={{margin: '20%'}}>

            <Form
            onSubmit={onSubmit}
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
        
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
        
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
        
            <Form.Item {...tailLayout}>
            <p>
                Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
            </p>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>


          </div>
      );  
  }
  
  export default Signin;