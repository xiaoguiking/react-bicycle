import React from 'react';
import "./index.less"
function TodoItem(props) {
    const { data } = props
    return (
        <li className="todo-item">
            <div className="checkbox">
                <input type="checkbox" className="checkbox-item" style={{ 'textDecoration': data.completed ? "line-through" : "none" }}></input>
                <span className="content">{data.content}</span>
            </div>
            <div className="btn-group">
                <button className="btn btn-primary">查看</button>
                <button className="btn btn-success">编辑</button>
                <button className="btn btn-info">删除</button>
            </div>
        </li>
    )
}
export default TodoItem;