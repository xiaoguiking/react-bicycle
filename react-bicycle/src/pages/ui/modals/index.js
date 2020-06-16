import React from 'react';
import { Card, Button, Modal, Space } from 'antd';
/**
 * 弹框
 */
export default class Modals extends React.Component {
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
    showModal5: false,
    ModalText: 'Content of the modal',
    confirmLoading: false,
  };

  showModal = (type) => {
    console.log(type);
    this.setState({
      // 带【】会将type当做变量，动态设置属性
      [type]: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      showModal1: false,
    });
  };

  handleOk5 = (e) => {
    console.log(e);
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        showModal5: false,
        confirmLoading: false,
      });
    }, 2000);
  };
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      showModal1: false,
    });
  };

  handleCancel5 = (e) => {
    console.log(e);
    this.setState({
      showModal5: false,
    });
  };

  render() {
    const style = {
      width: 'calc(85vw)',
    };
    const styleButton = {
      marginRight: 20,
    };
    const {
      showModal1,
      showModal2,
      showModal3,
      showModal4,
      showModal5,
      confirmLoading,
      ModalText,
    } = this.state;
    // 传参需要写箭头函数包裹，不传参则不需要
    return (
      <div style={style}>
        <Card title="基础模态框">
          <Button
            type="primary"
            style={styleButton}
            onClick={() => {
              this.showModal('showModal1');
            }}
          >
            Open Modal
          </Button>
          <Button
            type="primary"
            style={styleButton}
            onClick={() => {
              this.showModal('showModal2');
            }}
          >
            自定义页脚
          </Button>
          <Button
            type="primary"
            style={styleButton}
            onClick={() => {
              this.showModal('showModal3');
            }}
          >
            顶部40px弹框
          </Button>
          <Button
            type="primary"
            style={styleButton}
            onClick={() => {
              this.showModal('showModal4');
            }}
          >
            水平垂直居中
          </Button>
          <Button
            type="primary"
            style={styleButton}
            onClick={() => {
              this.showModal('showModal5');
            }}
          >
            异步关闭按钮
          </Button>
          <Modal
            title="Basic Modal"
            visible={showModal1}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>欢迎你学习modal1</p>
          </Modal>
          <Modal
            title="Basic Modal"
            style={{ top: 40 }}
            okText="确认"
            cancelText="取消"
            visible={showModal2}
            onOk={() => {
              this.setState({
                showModal2: false,
              });
            }}
            onCancel={() => {
              this.setState({
                showModal2: false,
              });
            }}
          >
            <p>欢迎你学习modal2</p>
          </Modal>
          <Modal
            title="Basic Modal"
            visible={showModal3}
            onOk={() => {
              this.setState({
                showModal3: false,
              });
            }}
            onCancel={() => {
              this.setState({
                showModal3: false,
              });
            }}
          >
            <p>欢迎你学习modal3</p>
          </Modal>
          <Modal
            title="Basic Modal"
            centered
            visible={showModal4}
            onOk={() => {
              this.setState({
                showModal4: false,
              });
            }}
            onCancel={() => {
              this.setState({
                showModal4: false,
              });
            }}
          >
            <p>欢迎你学习modal4</p>
          </Modal>
          <Modal
            title="Title"
            visible={showModal5}
            onOk={this.handleOk5}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel5}
          >
            <p>{ModalText}</p>
          </Modal>
        </Card>
        <Card title="信息确认框">
          <InfoModal />
        </Card>
      </div>
    );
  }
}

const ReachableContext = React.createContext();
const UnreachableContext = React.createContext();

const config = {
  title: 'Use Hook!',
  content: (
    <div>
      <ReachableContext.Consumer>{(name) => `Reachable: ${name}!`}</ReachableContext.Consumer>
      <br />
      <UnreachableContext.Consumer>{(name) => `Unreachable: ${name}!`}</UnreachableContext.Consumer>
    </div>
  ),
};
const InfoModal = () => {
  const [modal, contextHolder] = Modal.useModal();

  return (
    <ReachableContext.Provider value="Light">
      <Space>
        <Button
          onClick={() => {
            modal.confirm(config);
          }}
        >
          Confirm
        </Button>
        <Button
          onClick={() => {
            modal.warning(config);
          }}
        >
          Warning
        </Button>
        <Button
          onClick={() => {
            modal.info(config);
          }}
        >
          Info
        </Button>
        <Button
          onClick={() => {
            modal.error(config);
          }}
        >
          Error
        </Button>
      </Space>
      {/* `contextHolder` should always under the context you want to access */}
      {contextHolder}

      {/* Can not access this context since `contextHolder` is not in it */}
      <UnreachableContext.Provider value="Bamboo" />
    </ReachableContext.Provider>
  );
};
