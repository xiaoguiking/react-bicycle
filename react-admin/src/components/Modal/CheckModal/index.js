import React from "react";
import Modal from "../index.js";
import "./index.less"

// TODO: CheckModal

function CheckModal(props) {
  const { isShowCheckModal, data: {id, content, completed}, closeModal,  } = props;

  return (
    <>
      <Modal 
          isShowModal={isShowCheckModal} 
          modalTitle = "查看事件"
      >
          <p className="topic time">时间: {id}</p>
          <p className="topic content">内容:{content}</p>
          <p className="topic status">{completed? '已完成': '未完成'}</p>
          <button className="btn" onClick={closeModal} >确定</button>
      </Modal>
    </>
  );
}

export default CheckModal;
