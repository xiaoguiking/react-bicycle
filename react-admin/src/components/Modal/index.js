import React from 'react';

function Modal (props) {
    const {isShowModal, modalTitle, children} = props
    return (<>{
        isShowModal ? (
        <div className="modal">
            <div className="inner">
             <div className="content-wrapper">{modalTitle}</div>
             <div className="m-content">
                 {children}
             </div>
            </div>
        </div>)
        : ""
    }</>)
}

export default Modal