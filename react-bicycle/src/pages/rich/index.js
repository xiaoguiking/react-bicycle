import React from 'react';
import { Card, Button, Modal } from 'antd';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class Rich extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      isShowModal: false,
      contentState: {},
    };
  }
  // 清空文本内容
  handleClearText = () => {
    this.setState({
      editorState: '',
    });
  };
  // 获取转换html，Moadl显示
  handleGetText = () => {
    this.setState({
      isShowModal: true,
    });
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  onContentStateChange = (contentState) => {
    this.setState({
      contentState,
    });
  };

  render() {
    const style = {
      width: 'calc(85vw)',
      height: '70vh',
    };

    const { editorState, isShowModal, contentState } = this.state;
    return (
      <div style={style}>
        <Card>
          <Button type="primary" style={{ marginRight: '20px' }} onClick={this.handleClearText}>
            清空内容
          </Button>
          <Button type="primary" onClick={this.handleGetText}>
            获取HTML内容
          </Button>
        </Card>
        <Card title="富文本" style={{ marginTop: '20px' }}>
          <Editor
            initialContentState={contentState}
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
            onContentStateChange={this.onContentStateChange}
          />
        </Card>
        <Modal
          visible={isShowModal}
          onOk={() => this.setState({ isShowModal: false })}
          onCancel={() => this.setState({ isShowModal: false })}
        >
          {draftToHtml(contentState)}
        </Modal>
      </div>
    );
  }
}
