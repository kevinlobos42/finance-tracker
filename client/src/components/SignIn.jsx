import { Button, Input, Typography, Form, Space } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import useStore from '../store'
import './signIn.css'

const { Title, Link, Text } = Typography

function SignIn() {
  const login = useStore(state => state.logIn)
  const attemptLogin = (fieldsValue) => {
    console.log(fieldsValue)
    // Attempt to log in given the fields
  }
  return (
    <div className='container'>
      <Space direction='vertical' size={30} className='inner-container'>
        <Title>Sign In</Title>
        <Form onFinish={attemptLogin}>
          <Form.Item rules={[{ required: true, message: 'Please input your email!' }]} name="email">
            <Input placeholder='Email' />
          </Form.Item>
          <Form.Item rules={[{ required: true, message: 'Please input your password!' }]} name="password">
            <Input.Password placeholder='Password' />
          </Form.Item>
          <Form.Item>
            <Button type="primary" className='btn' htmlType='submit'>Sign In</Button>
          </Form.Item>
          Don't have an account? <Link><NavLink to="/signup">Sign up</NavLink></Link>
        </Form>
        <Text>
        </Text>

      </Space>
    </div>
  )
}

export default SignIn