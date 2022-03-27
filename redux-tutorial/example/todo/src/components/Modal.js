import React from 'react'
import classes from './Modal.module.css'
import Portal from './Portal'

const Modal = (props) => {
  return (
    <Portal>
      <div className={classes.modal}>
        <div className={classes['modal-background']}></div>
        <div className={classes['modal-main']}>
          <div className={classes['modal-error']}>Error</div>
          <div className={classes['modal-content']}>
            입력한 내용이 이미 존재합니다.
          </div>
          <div className={classes.functions}>
            <button onClick={props.onModalClose}>닫기</button>
          </div>
        </div>
      </div>
    </Portal>
  )
}
export default Modal
