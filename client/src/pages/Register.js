import React from 'react'
import {Button, Form, Input} from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import toast from 'react-hot-toast'

const Register = () => {
  const navigate = useNavigate();
  const onFinish = async(values) => {
    try {
      const response = await axios.post('/api/user/register',values)
      if(response.data.success){
        toast.success(response.data.message)
        toast("Redirected to login page")
        navigate("/login")
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
        <h1 className='card-title'>Nice to Meet you</h1>
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item label="Name" name="name">
             <Input placeholder='Name'/>
          </Form.Item>
          <Form.Item label="Email" name="email">
             <Input placeholder='Email'/>
          </Form.Item>
          <Form.Item label="Password" name="password">
             <Input placeholder='Password' type='password'/>
          </Form.Item>

          <Button className='primary-button m2-2' htmlType='submit'>REGISTER</Button>

          <Link to="/login" className='anchor' >CLICK HERE TO LOGIN</Link>
        </Form>
      </div>
    </div>
  )
}

export default Register;