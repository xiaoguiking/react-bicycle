import React, { useRef } from "react";
import Modal from "../index.js";
import "./index.less";

// TODO: EditModal

function EditModal(props) {
  const {
    isShowEditModal,
    data,
    submitEditData,
  } = props;
  console.log(data.id, "id")
  const inputRef = useRef(),
        checkRef = useRef()

  const formNewData = () => {
      const inputValue = inputRef.current.value.trim()
    //   console.log(inputValue, "inputValue")
    //   console.log(checkValue, "checkValue")
      if(inputValue.length === 0) {
        inputRef.current.value = data.content;
        // console.log(inputRef.current.value)
        return
      }

      const newData = {
          id: new Date().getTime(),
          content: inputValue,
          completed:  checkRef.current.checked
      }
      submitEditData(newData,data.id)
  }
  return (
    <Modal isShowModal={isShowEditModal} modalTitle="编辑事件">
      <p className="topic time">时间: {data.id}</p>
      <p className="topic content">
        内容:
        <textarea ref={inputRef} defaultValue={data.content} className="text-area" />
      </p>
      <p className="topic status">
        {data.completed ? "已完成" : "未完成"}
        <input type="checkbox" defaultChecked={data.completed ? "true" : "false"}  ref={checkRef}/>
      </p>
      <button className="btn" onClick={formNewData}>
        提交
      </button>
    </Modal>
  );
}

export default EditModal;
