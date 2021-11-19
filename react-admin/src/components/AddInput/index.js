import React, { useRef } from "react"
import "./index.less"

function AddInput(props) {
    const { isInputShow, addItem } = props;
    const inputRef = useRef("")
    // console.log(props, "AddInput")

    const submitValue = () => {
        let inputValue = inputRef.current.value.trim()
        console.log(inputValue, "inputValue")

        if (inputValue.length === 0) {
            alert(1)
            return;
        }
        addItem(inputValue)
        inputRef.current.value = ""
    }

    return (
        <>
            {
                isInputShow ? (<div className="input-wrapper">
                    <input placeholder="请输入待办内容" type="text" className="input-add" ref={inputRef} />
                    <button className="btn btn-primary" onClick={submitValue}>添加</button>
                </div>) : null
            }
        </>
    )
}
export default AddInput