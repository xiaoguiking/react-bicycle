import React from 'react'

export const Son = (props) => {
    const {title, changeTitle, handleTitle} = props
    console.log(title, changeTitle)
    return (
        <div className="son-contaier">
            <p>{title}</p>
            <button onClick={changeTitle}>第一次修改</button>
            <button onClick={() => handleTitle('第二次修改')}>第二次修改</button>
        </div>
    )
}