import React from 'react'
import {Button, Form, Input} from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';



const Login = () => {
  const navigate = useNavigate();
  const onFinish = async(values) => {
    try {
      const response = await axios.post('/api/user/login',values)
      if(response.data.success){
        toast.success(response.data.message)
        toast("Redirected to home page")
        localStorage.setItem("token",response.data.data)
        navigate("/")
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error('something went wrong')
    }
  };
  return (
    <div className='authentication'>
      <div className="authentication-form card p-3 ">
        <h1 className='card-title'>Welcome back</h1>
        <Form layout='vertical' onFinish={onFinish}>
          
          <Form.Item label="Email" name="email">
             <Input placeholder='Email'/>
          </Form.Item>
          <Form.Item label="Password" name="password">
             <Input placeholder='Password' type='password'/>
          </Form.Item>

          <Button className='primary-button m2-2' htmlType='submit'>Login</Button>

          <Link to="/register" className='anchor' >CLICK HERE TO REGISTER</Link>
        </Form>
      </div>
    </div>
  )
}

export default Login;