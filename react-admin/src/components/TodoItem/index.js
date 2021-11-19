import React from 'react';
import "./index.less"
function TodoItem(props) {
    const { data, openCheckModal, editCheckModal,  } = props
    return (
        <li className="todo-item">
            <div className="checkbox">
                <input type="checkbox" className="checkbox-item" style={{ 'textDecoration': data.completed ? "line-through" : "none" }}></input>
                <span className="content">{data.content}</span>
            </div>
            <div className="btn-group">
                <button className="btn btn-primary" onClick={() => openCheckModal(data.id)}>查看</button>
                <button className="btn btn-success" onClick={() => editCheckModal(data.id)}>编辑</button>
                <button className="btn btn-info">删除</button>
            </div>
        </li>
    )
}
export default TodoItem;