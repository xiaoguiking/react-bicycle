import React from 'react'
import "./index.less"

function Header (props) {
    const {openInput} = props
    console.log(props, "Header")
    return (
        <div className="header-container">
            <div>事件待办</div>
            <span className="icon-add" onClick={openInput}>+</span>
        </div>
    )
}

export default Header