import React from 'react';
import {
  Card,
  Button,
  Form,
  Input,
  InputNumber,
  message,
  //   Checkbox,
  Radio,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload,
  Modal,
  Checkbox,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
// const children = [];
// for (let i = 10; i < 36; i++) {
//   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
// }
/**
 * 表单注册
 */
export default class FormReg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: '',
      previewTitle: '',
      fileList: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-5',
          name: 'image.png',
          status: 'error',
        },
      ],
    };
  }
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      // 日期
      'bir-picker': fieldsValue['bir-picker'].format('YYYY-MM-DD'),
      // 时间
      'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
    };
    console.log(values);
    message.success(`${values.name}, 邮箱为${values.password}`);
  };

  handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  render() {
    const style = {
      width: 'calc(85vw)',
    };
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    // const layout = {
    //   labelCol: { span: 8 },
    //   wrapperCol: { span: 16 },
    // };

    // 响应式布局
    const layout = {
      labelCol: { xs: 24, sm: 4 },
      wrapperCol: { xs: 24, sm: 12 },
    };

    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4,
        },
      },
    };
    return (
      <div style={style}>
        <Card title="注册表单">
          <Form name="nest-messages" onFinish={this.onFinish} {...layout}>
            <FormItem
              name="name"
              label="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ]}
              hasFeedback
            >
              <Input placeholder="请输入用户名" />
            </FormItem>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="sex"
              label="性别"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Radio.Group>
                <Radio value="1">男</Radio>
                <Radio value="2">女</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="age"
              label="Age"
              rules={[
                {
                  type: 'number',
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item name="state" label="当前状态" rules={[{ required: true }]}>
              <Select
                placeholder="Select a option and change input text above"
                // onChange={this.onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="interest"
              label="爱好"
              rules={[
                { required: true, message: 'Please select your favourite colors!', type: 'array' },
              ]}
            >
              <Select mode="multiple" placeholder="Please select favourite colors">
                <Option value="red">Red</Option>
                <Option value="green">Green</Option>
                <Option value="blue">Blue</Option>
              </Select>
            </Form.Item>
            <Form.Item name="switch" label="是否已婚" valuePropName="checked">
              <Switch />
            </Form.Item>
            <FormItem name="bir-picker" label="生日">
              <DatePicker />
            </FormItem>
            <FormItem name="address" label="联系地址">
              <TextArea />
            </FormItem>
            <FormItem name="time-picker" label="早起时间">
              <TimePicker />
            </FormItem>
            <FormItem name="title" label="头像">
              <div className="clearfix">
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                >
                  {fileList.length >= 6 ? null : uploadButton}
                </Upload>
                <Modal
                  visible={previewVisible}
                  title={previewTitle}
                  footer={null}
                  onCancel={this.handleCancel}
                >
                  <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
              </div>
            </FormItem>
            <FormItem {...offsetLayout}>
              <Checkbox>
                <a href="#" alt="魔王">
                  我已经阅读过魔王协议
                </a>
              </Checkbox>
            </FormItem>
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
