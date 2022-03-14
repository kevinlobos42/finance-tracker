import { Button, Input, Typography, Form, Space } from 'antd'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useStore from '../store'
import './signIn.css'

const { Title, Link, Text } = Typography

function SignIn() {
  const [passwordErr, setPasswordErr] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const [nameErr, setNameErr] = useState('')

  let errorCount = 0;
  const login = useStore(state => state.logIn)

  const validate = (fieldsValue) => {
    errorCount = 0;
    checkName(fieldsValue.first_name, fieldsValue.last_name)
    checkEmail(fieldsValue.email)
    checkPasswords(fieldsValue.password, fieldsValue.confirm_password);
    console.log(errorCount, 'ERRORS')
    if (errorCount === 0) {
      // Create account
    }
  }
  const checkName = (first_name, last_name) => {
    let numbers = /[0-9]/g;
    if (first_name.match(numbers) || last_name.match(numbers)) {
      setNameErr('Name cannot contain numbers')
      errorCount++;
    } else {
      setNameErr('')
    }
  }
  const checkEmail = (email) => {
    const emailCheck = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email.match(emailCheck)) {
      setEmailErr('Email is not valid')
      errorCount++;
    } else {
      setEmailErr('')
    }

    console.log(email)
  }
  const checkPasswords = (password, confirm_password) => {
    let lowerCase = /[a-z]/g;
    let upperCase = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if (password.length < 8) {
      setPasswordErr('Password length is less than 8 characters')
      errorCount++;
    } else if (!password.match(lowerCase)) {
      setPasswordErr('Password must contain a lowercase letter')
      errorCount++;
    } else if (!password.match(upperCase)) {
      setPasswordErr('Password must contain an uppercase letter')
      errorCount++;
    } else if (!password.match(numbers)) {
      setPasswordErr('Password must contain a number')
      errorCount++;
    } else if (password !== confirm_password) {
      setPasswordErr('passwords do not match')
      errorCount++;
    } else {
      setPasswordErr('')
    }
  }

  return (
    <div className='container'>
      <Space direction='vertical' size={30} className='inner-container'>
        <Title>Sign Up</Title>
        <Form onFinish={validate}>
          <Input.Group className='input-group'>
            <Form.Item name='first_name' rules={[{ required: true, message: 'Please input your first name!' }]}>
              <Input placeholder='First Name' />
            </Form.Item>
            <Form.Item name='last_name' rules={[{ required: true, message: 'Please input your last name!' }]}>
              <Input placeholder='Last Name' />
            </Form.Item>
          </Input.Group>
          <Form.Item name='email' rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input placeholder='Email' />
          </Form.Item>
          <Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password placeholder='Password' />
          </Form.Item>
          <Form.Item name='confirm_password' rules={[{ required: true, message: 'Please confirm your password!' }]}>
            <Input.Password placeholder='Confirm password' />
          </Form.Item>
          {nameErr && (
            <Text className='error'>
              * {nameErr}
            </Text>
          )}
          {emailErr && (
            <Text className='error'>
              * {emailErr}
            </Text>
          )}
          {passwordErr && (
            <Text className='error'>
              * {passwordErr}
            </Text>
          )}
          <Form.Item>
            <Button type="primary" htmlType='submit' className='btn' /*onClick={login}*/>Sign Up</Button>
          </Form.Item>
          Have an account? <Link><NavLink to="/">Sign in</NavLink></Link>
        </Form>
      </Space>
    </div>
  )
}

export default SignIn