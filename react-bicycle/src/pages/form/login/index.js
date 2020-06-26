import React from 'react';
import { Card, Button, Form, Input, InputNumber, message } from 'antd';

const FormItem = Form.Item;
/**
 * 表单 登录
 */
export default class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFinish = (values) => {
    console.log(values);
    message.success(`${values.user.name}, 邮箱为${values.user.email}`);
  };
  render() {
    const style = {
      width: 'calc(85vw)',
    };

    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    return (
      <div style={style}>
        <Card title="登录行内表单">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名" />
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="水平表单" style={{ marginTop: 10 }}>
          <Form style={{ width: 300 }} name="nest-messages" onFinish={this.onFinish} {...layout}>
            <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'age']}
              label="Age"
              rules={[{ type: 'number', min: 0, max: 99 }]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item name={['user', 'website']} label="Website">
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="Introduction">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}
