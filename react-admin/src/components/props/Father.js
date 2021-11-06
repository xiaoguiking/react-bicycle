import React, {useState } from 'react'
import {Son} from "./Son"

export const Father =  () => {

    const [title, setTitle] = useState("初始值title")
    
    const changeTitle = () => {
        setTitle("第一次修改title")
    }

    const handleTitle = (title) => {
        setTitle(title)
    }
    return (
        <div className="father-container">
        <div className="box1">
            <Son title={title} changeTitle={changeTitle} handleTitle={handleTitle}/>
        </div>
        </div>
    )
}