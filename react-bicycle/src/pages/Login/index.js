import React from 'react';
import "./index.less"
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import { login } from "../../api/index"
// import axios from "axios"
import { useHistory } from "react-router-dom"
// let history = useHistory()



const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const widthSize = {
  width: "400px"
}

function Login(props) {
  console.log(props, "props")
  let history = useHistory()
  const onFinish = async (values) => {
    console.log('Success:', values);
    const { userName, email, password } = values
    // const data = await axios.get(`/api/user/login?userName=${userName}&email=${email}&password=${password}`)
    const data = await login({ userName, email, password })
    console.log(data, "data")
    message.success('登录成功', 3,)
    history.push("/")
  
  };

  return (
    <div className="login-container">
      <Card title="react-bicycle管理系统" style={widthSize}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="userName"
            size="middle"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="邮箱"
            name="email"
            size="middle"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            size="middle"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login;

